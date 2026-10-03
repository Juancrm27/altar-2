// Local simulation of the Ipanema theme pieces (cart drawer, search, mobile menu, catalog, product, cart page,
// contact, account) under the Altar header. Tiendanube renders the real Twig; this only mirrors its markup and
// behaviour closely enough to design against. It reads the theme's own files so it follows them as they change:
// config/settings_data.json (style tokens), translations/es_AR.json (copy) and layouts/resources/icons-sprite.tpl.
import { store, products, stockFor } from "../data/ipanema-mock.js";

const ROOT = "..";
const CART_KEY = "altar-ipanema-sim-cart";
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
const money = (value) => new Intl.NumberFormat(store.locale, { style: "currency", currency: store.currency, maximumFractionDigits: 0 }).format(value);
const icon = (name, cls = "icon-inline") => `<svg class="${cls}"><use xlink:href="#${name}"/></svg>`;

let settings = {};
let copy = {};
const t = (key, fallback = key) => key.split(".").reduce((node, part) => node?.[part], copy) ?? fallback;

/* ---------- Theme files ---------- */

async function loadThemeFiles() {
  const [settingsData, translations, sprite] = await Promise.all([
    fetch(`${ROOT}/config/settings_data.json`).then((r) => r.json()),
    fetch(`${ROOT}/translations/es_AR.json`).then((r) => r.json()),
    fetch(`${ROOT}/layouts/resources/icons-sprite.tpl`).then((r) => r.text()),
  ]);
  settings = settingsData.settings ?? {};
  copy = translations;
  $("[data-sim-icons]").innerHTML = sprite.replace(/\{#[\s\S]*?#\}/g, "");
  applyTokens();
}

// Mirrors layouts/resources/style-tokens.tpl for the values the pages use.
function applyTokens() {
  const s = settings;
  const fg = s.text_color || "#000000";
  const bg = s.background_color || "#FFFFFF";
  const button = (prefix, style, background, foreground, radius) => {
    const outline = style === "outline";
    const plain = style !== "filled" && !outline;
    return `--button-${prefix}-border-radius:${radius ?? 0}px;--button-${prefix}-background:${plain ? "transparent" : background || "transparent"};` +
      `--button-${prefix}-border:${outline ? `1px solid ${foreground}` : 0};--button-${prefix}-color:${foreground};--button-${prefix}-fill:${foreground};` +
      `--button-${prefix}-text-decoration:${plain ? "underline" : "none"};`;
  };
  const shades = [["03", "08"], ["05", "0D"], ["10", "1A"], ["20", "33"], ["30", "4D"], ["40", "66"], ["50", "80"], ["60", "99"]]
    .map(([n, hex]) => `--main-foreground-opacity-${n}:${fg}${hex};`).join("");
  const h = s.headings_size || 48;
  const rest = s.font_rest_size || 12;
  const css = `:root{--main-background:${bg};--main-foreground:${fg};--accent-color:${s.accent_color || fg};
    --button-primary-background-color:${s.button_primary_background_color};--button-primary-foreground-color:${s.button_primary_foreground_color};
    ${button("primary", s.button_primary_style === "outline" ? "outline" : "filled", s.button_primary_background_color, s.button_primary_foreground_color, s.button_primary_border_radius)}
    ${button("secondary", s.button_secondary_style, s.button_secondary_background_color, s.button_secondary_foreground_color, s.button_secondary_border_radius)}
    ${button("tertiary", s.button_tertiary_style, s.button_tertiary_background_color, s.button_tertiary_foreground_color, s.button_tertiary_border_radius)}
    --label-primary-background:${s.label_background_color};--label-primary-foreground:${s.label_foreground_color};--label-primary-border-radius:${s.label_border_radius ?? 4}px;--label-primary-border:0;
    --label-secondary-background:${s.label_shipping_background_color};--label-secondary-foreground:${s.label_shipping_foreground_color};--label-secondary-border-radius:${s.label_shipping_border_radius ?? 4}px;--label-secondary-border:0;
    ${shades}--main-background-opacity-30:${bg}4D;--main-background-opacity-50:${bg}80;--main-background-opacity-80:${bg}CC;
    --success:#4bb98c;--danger:#dd7774;--warning:#dc8f38;
    --heading-font:${s.font_headings};--body-font:${s.font_rest};--font-base:${s.font_base_size || 14}px;--font-base-default:16px;
    --font-huge:${rest + 10}px;--font-big:${rest + 4}px;--font-medium:${rest + 2}px;--font-small:${rest}px;--font-smallest:${rest - 2}px;--font-extra-smallest:${rest - 3}px;
    --h1:${h}px;--h2:${Math.round(h * 0.833)}px;--h3:${Math.round(h * 0.6875)}px;--h4:${Math.round(h * 0.583)}px;--h5:${Math.round(h * 0.479)}px;--h6:${Math.round(h * 0.396)}px;--h6-small:${Math.round(h * 0.3333)}px;
    --title-font-weight:${s.headings_bold ? 700 : 400};
    --spacing-base:16px;--spacing-half:8px;--spacing-quarter:4px;--spacing-1:4px;--spacing-2:8px;--spacing-3:16px;--spacing-4:24px;--spacing-5:48px;--spacing-section:64px;--spacing-section-small:32px;
    --section-content-lateral-padding:80px;--icon-size-md:.875em;--icon-size-lg:1.33em;--icon-size-2x:2em;
    --gutter:16px;--gutter-container:16px;--gutter-container-md:32px;--gutter-negative:-16px;--gutter-half:8px;--gutter-half-negative:-8px;--gutter-double:32px;
    --page-width:${s.page_width || 1300}px;--transition-fast:all .2s ease;--transition-normal:all .3s ease;--transition-slow:all 1s ease;
    --drop-shadow:0 0 8px 4px var(--main-foreground-opacity-05);--border-radius:8px;--border-radius-medium:6px;--border-radius-small:4px;--border-radius-smallest:2px;--border-radius-full:100%;--border-solid:1px solid;}`;
  const style = document.createElement("style");
  style.id = "sim-style-tokens";
  style.textContent = css;
  document.head.prepend(style);
}

/* ---------- Cart state ---------- */

const readCart = () => { try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch { return []; } };
const writeCart = (items) => { try { localStorage.setItem(CART_KEY, JSON.stringify(items)); } catch {} renderCart(); };
const productBySlug = (slug) => products.find((p) => p.slug === slug);
const cartLines = () => readCart().map((line) => ({ ...line, product: productBySlug(line.slug) })).filter((l) => l.product);
const cartCount = () => cartLines().reduce((sum, l) => sum + l.qty, 0);
const cartTotal = () => cartLines().reduce((sum, l) => sum + l.qty * l.product.price, 0);

function addToCart(slug, variant, qty) {
  const product = productBySlug(slug);
  const items = readCart();
  const existing = items.find((l) => l.slug === slug && l.variant === variant);
  const already = existing ? existing.qty : 0;
  if (already + qty > stockFor(product, variant)) return { ok: false, message: t("product.no_more_stock", "No hay más stock de este producto.") };
  if (existing) existing.qty += qty; else items.push({ slug, variant, qty });
  writeCart(items);
  return { ok: true };
}

function setQty(slug, variant, qty) {
  const product = productBySlug(slug);
  const items = readCart();
  const line = items.find((l) => l.slug === slug && l.variant === variant);
  if (!line) return;
  line.qty = Math.max(0, Math.min(qty, stockFor(product, variant)));
  writeCart(items.filter((l) => l.qty > 0));
}

/* ---------- Modals (snippets/modals/modal.tpl) ---------- */

function modal({ id, title, from = "bottom", dockRight = false, widthDesktop = "medium", classes = "", body = "", foot = "" }) {
  const md = dockRight ? "modal-md-docked modal-md-docked-right" : `modal-md-${from}`;
  return `<div id="${id}" class="js-modal-private modal modal-${from} ${md} modal-width-full modal-md-width-${widthDesktop} ${classes}" style="display:none;" data-url="${id}">
      <div class="modal-header ${title ? "" : "no-title"}">
        ${title ? `<span class="modal-title">${esc(title)}</span>` : ""}
        <button type="button" class="js-modal-close-private modal-close" data-target="#${id}" aria-label="Cerrar">${icon("times", "modal-close-icon icon-inline")}</button>
      </div>
      <div class="modal-body">${body}</div>
      ${foot ? `<div class="modal-footer">${foot}</div>` : ""}
    </div>
    <div class="js-modal-close-private js-modal-overlay-private modal-overlay" data-target="#${id}" style="display:none;"></div>`;
}

function openModal(selector) {
  const el = $(selector);
  if (!el) return;
  closeSearch();
  hideNotification();
  el.style.display = "block";
  $(`.js-modal-overlay-private[data-target="${selector}"]`).style.display = "block";
  document.body.classList.add("overflow-none");
  requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add("modal-visible")));
}

function closeModal(selector) {
  const el = $(selector);
  if (!el || el.style.display === "none") return;
  el.classList.remove("modal-visible");
  $(`.js-modal-overlay-private[data-target="${selector}"]`).style.display = "none";
  document.body.classList.remove("overflow-none");
  setTimeout(() => { if (!el.classList.contains("modal-visible")) el.style.display = "none"; }, 300);
}

/* ---------- Search (store.js initSearchTrigger) ---------- */

const searchForm = () => `<div class="search-form-wrap">
    <form class="js-search-form search-form" data-sim-search-form>
      <div class="search-form-field form-group">
        <input class="js-search-input form-control search-input" autocomplete="off" type="search" name="q" placeholder="${esc(t("search.placeholder", "Buscar"))}" aria-label="${esc(t("search.placeholder", "Buscar"))}">
        <button type="submit" class="search-btn search-submit-btn" aria-label="${esc(t("search.value", "Buscar"))}">${icon("search")}</button>
      </div>
    </form>
    <div class="js-search-form-suggestions search-suggestions sim-search-suggestions" style="display:none;"></div>
  </div>`;

function searchProducts(query) {
  const q = query.trim().toLowerCase();
  return q ? products.filter((p) => `${p.name} ${p.category} ${p.description}`.toLowerCase().includes(q)) : [];
}

function wireSearchForm(root) {
  const form = $("[data-sim-search-form]", root);
  const input = $(".js-search-input", form);
  const box = $(".js-search-form-suggestions", root);
  input.addEventListener("input", () => {
    const query = input.value;
    const found = searchProducts(query).slice(0, 4);
    if (query.trim().length < 2) { box.style.display = "none"; return; }
    box.style.display = "block";
    box.innerHTML = found.length
      ? `<ul class="search-suggestions-list list-unstyled">${found.map((p) => `<li><a class="sim-suggestion" href="#/producto/${p.slug}"><span class="sim-suggestion-thumb" style="background-image:url(${p.images[0]})"></span><span>${esc(p.name)}</span><strong>${money(p.price)}</strong></a></li>`).join("")}</ul>
         <a class="btn-link sim-suggestion-all" href="#/buscar?q=${encodeURIComponent(query)}">${esc(t("search.view_all_results", "Ver todos los resultados"))}</a>`
      : `<p class="sim-suggestion-empty">${esc(t("search.no_results_for", "No encontramos nada para"))} “${esc(query)}”</p>`;
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    location.hash = `#/buscar?q=${encodeURIComponent(input.value.trim())}`;
  });
}

function closeSearch() {
  $$(".js-search-expand-form.visible").forEach((form) => {
    form.classList.remove("visible");
    form.setAttribute("aria-hidden", "true");
    const trigger = $(".js-search-trigger", form.closest(".js-search-container"));
    trigger?.classList.remove("visible");
    trigger?.setAttribute("aria-expanded", "false");
  });
}

function initSearch() {
  const slot = $("[data-sim-search-slot]");
  slot.innerHTML = searchForm();
  wireSearchForm(slot);
  $(".js-search-trigger").addEventListener("click", () => {
    hideNotification();
    if (matchMedia("(min-width: 768px)").matches) {
      const trigger = $(".js-search-trigger");
      trigger.classList.add("visible");
      trigger.setAttribute("aria-expanded", "true");
      slot.classList.add("visible");
      slot.setAttribute("aria-hidden", "false");
      setTimeout(() => $(".js-search-input", slot).focus(), 200);
    } else {
      openModal("#modal-search");
      setTimeout(() => $("#modal-search .js-search-input")?.focus(), 200);
    }
  });
  document.addEventListener("click", (event) => { if (!event.target.closest(".js-search-container")) closeSearch(); });
}

/* ---------- Header modals: cart, mobile menu, mobile search ---------- */

function renderModals() {
  const navLinks = [["#/tienda", "Shop"], ...store.categories.map((c) => [`#/categoria/${c.slug}`, c.name]), ["./preview.html", "About"], ["#/contacto", "Contact"]];
  $("[data-sim-modals]").innerHTML =
    modal({ id: "modal-cart", title: t("cart.title", "Carrito de compras"), from: "right", dockRight: true, widthDesktop: "small", body: `<div data-sim-cart-panel></div>` }) +
    modal({ id: "nav-hamburger", from: "left", classes: "modal-nav-hamburger modal-nav-main",
      body: `<ul class="nav-list list-unstyled">${navLinks.map(([href, label]) => `<li><a class="nav-list-link" href="${href}">${esc(label)}</a></li>`).join("")}</ul>`,
      foot: `<div class="nav-secondary"><a class="secondary-menu-link" href="#/cuenta/login">${icon("user", "utility-icon icon-inline")} ${esc(t("general.login", "Entrá"))}</a>
             <a class="secondary-menu-link" href="#/cuenta/registro">${esc(t("general.create_account", "Crear cuenta"))}</a></div>` }) +
    modal({ id: "modal-search", title: t("search.placeholder", "Buscar"), from: "left", classes: "modal-nav-search", body: `<div class="modal-nav-search-body">${searchForm()}</div>` });
  wireSearchForm($("#modal-search"));
}

function cartLinesMarkup(page = false) {
  return cartLines().map(({ product, variant, qty }) => `
    <div class="js-cart-item cart-item ${page ? "cart-page-item" : ""}" data-slug="${product.slug}" data-variant="${esc(variant)}">
      <div class="cart-item-image-container"><a href="#/producto/${product.slug}"><img class="img-fluid cart-item-image" src="${product.images[0]}" alt="${esc(product.name)}"></a></div>
      <div class="cart-item-info-container">
        <div class="cart-item-product-info">
          <div class="cart-item-name-container">
            <a class="cart-item-name" href="#/producto/${product.slug}">${esc(product.name)}</a>
            ${variant ? `<span class="cart-item-variant">(${esc(variant)})</span>` : ""}
          </div>
          <div class="cart-item-delete"><button type="button" class="btn btn-link cart-item-delete-button" data-sim-remove>${esc(t("general.remove", "Borrar"))}</button></div>
        </div>
        <div class="cart-item-totals-container">
          <div class="cart-item-quantity">
            <div class="js-quantity form-quantity small grid grid-3-auto grid-no-gap align-items-center">
              <button type="button" class="btn cart-quantity-btn" data-sim-qty="-1" aria-label="Restar">${icon("minus")}</button>
              <span class="cart-quantity-input sim-qty">${qty}</span>
              <button type="button" class="btn cart-quantity-btn" data-sim-qty="1" aria-label="Sumar">${icon("plus")}</button>
            </div>
          </div>
          <div class="cart-item-subtotal">${money(product.price * qty)}</div>
        </div>
      </div>
    </div>`).join("");
}

function freeShippingBar() {
  const total = cartTotal();
  const missing = store.freeShippingFrom - total;
  const pct = Math.min(100, Math.round((total / store.freeShippingFrom) * 100));
  return `<div class="shipping-progress-bar box sim-free-shipping">
      <div class="sim-free-shipping-text">${icon("truck")} ${missing > 0
        ? esc(t("shipping.almost_free_shipping", "¡Estás a {1} de tener {2}!").replace("{1}", money(missing)).replace("{2}", t("product.free_shipping", "Envío gratis").toLowerCase()))
        : esc(t("shipping.great_free_shipping", "¡Genial! Tenés envío gratis"))}</div>
      <div class="sim-progress"><span style="width:${pct}%"></span></div>
    </div>`;
}

function shippingCalculator() {
  return `<form class="sim-shipping" data-sim-shipping>
      <label class="form-label" for="sim-zip">${esc(t("shipping.calculate_shipping", "Calcular envío"))}</label>
      <div class="sim-inline-form"><input id="sim-zip" class="form-control" inputmode="numeric" placeholder="${esc(t("shipping.your_zipcode", "Tu código postal"))}" required>
      <button class="btn btn-secondary" type="submit">${esc(t("shipping.calculate", "Calcular"))}</button></div>
      <div class="sim-shipping-results" data-sim-shipping-results></div>
    </form>`;
}

function cartSummary(page = false) {
  const filled = cartCount() > 0;
  return `<div class="js-visible-on-cart-filled" ${filled ? "" : 'style="display:none;"'}>
      ${page ? "" : freeShippingBar()}
      <div class="cart-subtotals-container">
        <div class="cart-totals-row cart-totals-subtotal"><span>${esc(t("general.subtotal", "Subtotal"))}:</span><span>${money(cartTotal())}</span></div>
      </div>
      ${shippingCalculator()}
      <div class="cart-totals-row cart-totals-total"><span>${esc(t("general.total", "Total"))}:</span><span>${money(cartTotal())}</span></div>
      <p class="cart-totals-installments sim-muted">${store.installments} cuotas sin interés de ${money(Math.round(cartTotal() / store.installments))}</p>
      <button type="button" class="btn btn-primary btn-big btn-block" data-sim-checkout>${esc(t("cart.start_checkout", "Iniciar compra"))}</button>
      <div class="cart-continue-shopping"><a class="${page ? "" : "js-modal-close-private"} btn btn-link" ${page ? 'href="#/tienda"' : 'href="#/tienda" data-target="#modal-cart"'}>${esc(t("cart.view_more_products", "Ver más productos"))}</a></div>
    </div>`;
}

function renderCart() {
  const count = cartCount();
  $$(".js-cart-widget-amount").forEach((el) => { el.textContent = count; });
  const panel = $("[data-sim-cart-panel]");
  if (panel) {
    panel.innerHTML = `<div class="js-ajax-cart-list">${cartLinesMarkup()}</div>
      <div class="js-empty-ajax-cart" ${count ? 'style="display:none;"' : ""}><div class="alert alert-info">${esc(t("cart.empty", "Tu carrito está vacío"))}</div>
        <a class="btn btn-secondary btn-block js-modal-close-private" data-target="#modal-cart" href="#/tienda">${esc(t("general.view_all_products", "Ver todos los productos"))}</a></div>
      <div class="cart-row">${cartSummary()}</div>`;
  }
  if (currentRoute().name === "cart") renderRoute();
}

/* ---------- Add to cart notification (snippets/notification.tpl) ---------- */

let notificationTimer;
function showAddedNotification(product, variant, qty) {
  if (settings.cart_open_type === "open_cart") { openModal("#modal-cart"); return; }
  const box = $("[data-sim-notification]");
  box.innerHTML = `<div class="notification">
      <button type="button" class="js-cart-notification-close-private notification-close" aria-label="Cerrar">${icon("times", "notification-close-icon icon-inline")}</button>
      <div class="notification-cart-item d-grid grid-auto-1">
        <div class="notification-cart-image-container mr-3"><img src="${product.images[0]}" alt="" width="60"></div>
        <div><p class="sim-strong">${esc(product.name)}${variant ? ` <span class="sim-muted">(${esc(variant)})</span>` : ""}</p>
          <p class="sim-muted">${qty} × ${money(product.price)}</p>
          <p class="notification-cart-success">${icon("check")} ${esc(t("cart.added_to_cart", "¡Agregado al carrito!"))}</p></div>
      </div>
      <div class="notification-cart-total sim-row"><span>${esc(t("general.total", "Total"))} (${cartCount()}): <strong>${money(cartTotal())}</strong></span>
        <button type="button" class="btn btn-primary btn-small" data-sim-open-cart>${esc(t("product.view_cart", "Ver carrito"))}</button></div>
    </div>`;
  box.style.display = "block";
  requestAnimationFrame(() => box.classList.remove("notification-hidden"));
  clearTimeout(notificationTimer);
  notificationTimer = setTimeout(hideNotification, 6000);
}
function hideNotification() {
  const box = $("[data-sim-notification]");
  if (box.style.display === "none") return;
  box.classList.add("notification-hidden");
  setTimeout(() => { box.style.display = "none"; }, 300);
}

/* ---------- Pages ---------- */

const pageHeader = (title, extra = "") => `<div class="page-header sim-page-header"><div class="page-header-title-row"><h1 class="page-header-title-inner">${esc(title)}</h1></div>${extra}</div>`;
const container = (inner, cls = "") => `<section class="container sim-section ${cls}">${inner}</section>`;

function productLabels(product) {
  const labels = [];
  if (product.comparePrice) labels.push(`<span class="label label-default">${Math.round((1 - product.price / product.comparePrice) * 100)}% OFF</span>`);
  if (product.freeShipping) labels.push(`<span class="label label-secondary">${icon("truck", "label-icon icon-inline")} ${esc(t("product.free_shipping", "Envío gratis"))}</span>`);
  if (stockFor(product, defaultVariant(product)) === 0 && !Object.keys(product.options).length) labels.push(`<span class="label sim-label-nostock">${esc(t("product.out_of_stock", "Sin stock"))}</span>`);
  return labels.length ? `<div class="labels sim-labels">${labels.join("")}</div>` : "";
}

function productItem(product) {
  return `<div class="js-product-item-private product-item">
      <a class="product-item-link sim-product-image" href="#/producto/${product.slug}">
        <img src="${product.images[0]}" alt="${esc(product.name)}" loading="lazy">
        ${product.images[1] ? `<img class="sim-product-image-hover" src="${product.images[1]}" alt="" loading="lazy">` : ""}
        ${productLabels(product)}
      </a>
      <div class="product-item-information">
        <a class="product-item-link" href="#/producto/${product.slug}"><div class="js-item-name product-item-name">${esc(product.name)}</div></a>
        <div class="product-item-price-container">
          ${product.comparePrice ? `<span class="product-item-price-compare">${money(product.comparePrice)}</span>` : ""}
          <span class="js-price-display product-item-price">${money(product.price)}</span>
        </div>
        <div class="sim-muted sim-small">${store.installments} cuotas sin interés de ${money(Math.round(product.price / store.installments))}</div>
      </div>
    </div>`;
}

function productGrid(list) {
  return `<div class="js-product-table grid grid-2 grid-md-4 sim-grid">${list.map(productItem).join("")}</div>`;
}

function categoryPage({ slug, query }) {
  const category = store.categories.find((c) => c.slug === slug);
  let list = query !== undefined ? searchProducts(query) : category ? products.filter((p) => p.category === slug) : products;
  const params = new URLSearchParams(location.hash.split("?")[1] || "");
  const sort = params.get("orden") || "relevancia";
  if (sort === "menor") list = [...list].sort((a, b) => a.price - b.price);
  if (sort === "mayor") list = [...list].sort((a, b) => b.price - a.price);
  if (sort === "az") list = [...list].sort((a, b) => a.name.localeCompare(b.name));

  if (query !== undefined) {
    const heading = list.length
      ? `<div class="products-grid-header"><h2 class="products-grid-search-heading">${esc(t("search.showing", "Mostrando"))} <strong>${list.length}</strong> ${esc(list.length === 1 ? t("search.result_for_query", "resultado para") : t("search.results_for_query", "resultados para"))} “${esc(query)}”</h2></div>`
      : `<div class="products-grid-empty-message"><h2>${esc(t("search.no_results_for", "No encontramos nada para"))} “${esc(query)}”</h2><p>${esc(t("search.try_different_search", ""))}</p><p>${esc(t("search.maybe_interested", ""))}</p></div>`;
    return container(pageHeader(t("search.search_results", "Resultados de búsqueda")) + heading + productGrid(list.length ? list : products.slice(0, 4)));
  }

  const breadcrumbs = `<nav class="breadcrumbs sim-breadcrumbs"><a href="#/tienda">Inicio</a> / ${category ? `<a href="#/tienda">Tienda</a> / <span>${esc(category.name)}</span>` : "<span>Tienda</span>"}</nav>`;
  const controls = `<div class="filters-controls-content sim-controls">
      <button type="button" class="btn btn-secondary btn-small" data-sim-open="#modal-filters">${icon("filter")} Filtrar</button>
      <span class="sim-muted">${list.length} ${esc(t("general.products_label", "productos"))}</span>
      <label class="product-list-sort-by sim-sort">${icon("sort-by")} <select class="form-select" data-sim-sort>
        ${[["relevancia", "Más relevantes"], ["menor", "Precio: menor a mayor"], ["mayor", "Precio: mayor a menor"], ["az", "A - Z"]].map(([v, l]) => `<option value="${v}" ${v === sort ? "selected" : ""}>${l}</option>`).join("")}
      </select></label>
    </div>`;
  const filters = modal({ id: "modal-filters", title: "Filtrar", from: "left", widthDesktop: "small",
    body: `<p class="form-label">${esc(t("filters.categories_title", "Categorías"))}</p>
      <ul class="list-unstyled sim-filter-list"><li><a href="#/tienda">Todas</a></li>${store.categories.map((c) => `<li><a href="#/categoria/${c.slug}" ${c.slug === slug ? 'class="sim-strong"' : ""}>${esc(c.name)}</a></li>`).join("")}</ul>
      <p class="form-label">${esc(t("filters.price.label", "Precio"))}</p>
      <div class="sim-inline-form"><input class="form-control" placeholder="${esc(t("filters.price.from", "Desde"))}"><input class="form-control" placeholder="${esc(t("filters.price.to", "Hasta"))}"><button type="button" class="btn btn-secondary">${esc(t("filters.price.apply", "Aplicar"))}</button></div>
      <p class="sim-note">Simulación: el filtro de precio no se aplica.</p>` });
  return container(breadcrumbs + pageHeader(category ? category.name : "Tienda", `<p class="page-header-description sim-muted">Encabezado de categoría (category-hero / page-header).</p>`) + controls + productGrid(list) +
    `<nav class="pagination-nav sim-pagination"><span class="pagination-counter">1 / 1</span></nav>`) + filters;
}

const optionAxes = (product) => Object.entries(product.options);
const defaultVariant = (product) => optionAxes(product).map(([, values]) => values[0]).join(" / ");

function productPage({ slug }) {
  const product = productBySlug(slug);
  if (!product) return notFoundPage();
  const category = store.categories.find((c) => c.slug === product.category);
  const related = products.filter((p) => p.slug !== slug).slice(0, 4);
  const variants = optionAxes(product).map(([axis, values], index) => `
    <div class="js-product-variants-group product-detail-variants-group">
      <label class="form-label">${esc(axis)}: <strong data-sim-axis-label="${index}">${esc(values[0])}</strong></label>
      <div class="sim-variant-buttons">${values.map((value, i) => `<button type="button" class="js-variant-button btn btn-variant ${i === 0 ? "selected" : ""}" data-sim-axis="${index}" data-value="${esc(value)}"><span class="btn-variant-content">${esc(value)}</span></button>`).join("")}</div>
    </div>`).join("");
  return container(`
    <nav class="breadcrumbs sim-breadcrumbs"><a href="#/tienda">Inicio</a> / <a href="#/categoria/${category.slug}">${esc(category.name)}</a> / <span>${esc(product.name)}</span></nav>
    <div class="js-product-detail js-product-container sim-product" data-sim-product="${product.slug}">
      <div class="js-product-images sim-gallery">${product.images.map((src) => `<img src="${src}" alt="${esc(product.name)}">`).join("")}</div>
      <div class="js-product-info sim-product-info">
        ${productLabels(product)}
        <h1 class="js-product-name product-name">${esc(product.name)}</h1>
        <div class="js-price-container product-price">
          ${product.comparePrice ? `<span class="js-compare-price-display product-price-compare">${money(product.comparePrice)}</span>` : ""}
          <span class="js-price-display product-price-display">${money(product.price)}</span>
        </div>
        ${product.comparePrice ? `<p class="sim-muted">${esc(t("product.compare_price_saving_message", "Ahorrás:"))} ${money(product.comparePrice - product.price)}</p>` : ""}
        <p class="product-payment-discount sim-muted">${store.installments} cuotas sin interés de ${money(Math.round(product.price / store.installments))} · <a class="product-payments-link btn-link" href="#" data-sim-open="#modal-payments">${esc(t("product.see_payment_methods", "Ver medios de pago"))}</a></p>
        <form class="js-product-form product-form" data-sim-product-form>
          <div class="js-product-variants product-detail-variants">${variants}</div>
          <p class="js-product-stock product-stock-label sim-stock" data-sim-stock></p>
          <div class="sim-actions">
            <div class="form-quantity-container"><div class="form-quantity sim-quantity">
              <button type="button" class="js-quantity-down form-quantity-icon btn" data-sim-step="-1" aria-label="Restar">${icon("minus")}</button>
              <input class="form-control sim-qty-input" type="number" min="1" value="1" data-sim-qty-input aria-label="Cantidad">
              <button type="button" class="js-quantity-up form-quantity-icon btn" data-sim-step="1" aria-label="Sumar">${icon("plus")}</button>
            </div></div>
            <button type="submit" class="js-addtocart js-prod-submit-form btn btn-primary btn-big btn-block" data-sim-add>${esc(t("product.add_to_cart", "Agregar al carrito"))}</button>
          </div>
          <p class="alert alert-warning" data-sim-add-error style="display:none;"></p>
        </form>
        ${product.freeShipping ? `<p class="product-free-shipping">${icon("truck")} ${esc(t("product.free_shipping", "Envío gratis"))}</p>` : `<p class="free-shipping-message sim-muted">${icon("truck")} ${esc(t("product.free_shipping", "Envío gratis"))} ${esc(t("product.free_shipping_exceeding", "superando los"))} ${money(store.freeShippingFrom)}</p>`}
        <div class="product-shipping-wrapper shipping-wrapper">${shippingCalculator()}</div>
        <div class="user-content"><h2 class="sim-h3">${esc(t("product.description", "Descripción"))}</h2><p>${esc(product.description)}</p></div>
      </div>
    </div>
    <h2 class="products-section-title sim-h3">Productos relacionados</h2>
    ${productGrid(related)}`) +
    modal({ id: "modal-payments", title: t("product.see_payment_methods", "Medios de pago"), widthDesktop: "small",
      body: `<p>Tarjetas de crédito: hasta ${store.installments} cuotas sin interés.</p><p>Transferencia: 10% de descuento.</p><p class="sim-note">Simulación: en la tienda real lo arma Tiendanube.</p>` });
}

function cartPage() {
  const count = cartCount();
  return container(pageHeader(t("cart.title", "Carrito de compras")) + (count
    ? `<div class="cart-page-content sim-cart-page"><div class="cart-page-products"><div class="js-ajax-cart-list cart-page-items-list">${cartLinesMarkup(true)}</div></div>
       <div class="cart-page-summary">${freeShippingBar()}${cartSummary(true)}</div></div>`
    : `<div class="alert alert-info">${esc(t("cart.empty", "Tu carrito está vacío"))}</div><a class="btn btn-primary" href="#/tienda">${esc(t("general.view_all_products", "Ver todos los productos"))}</a>`));
}

const field = (id, label, type = "text", placeholder = "", required = true) => `<div class="form-group"><label class="form-label" for="${id}">${esc(label)}</label>${type === "textarea"
  ? `<textarea id="${id}" class="form-control form-control-area" placeholder="${esc(placeholder)}" ${required ? "required" : ""}></textarea>`
  : `<input id="${id}" class="form-control" type="${type}" placeholder="${esc(placeholder)}" ${required ? "required" : ""}>`}</div>`;

function formPage(title, fields, submit, success, extra = "") {
  return container(pageHeader(title) + `<div class="sim-form-wrap"><form class="sim-form" data-sim-form data-success="${esc(success)}">
      ${fields}<div class="winnie-pooh hidden"></div>
      <button class="btn btn-primary btn-block" type="submit">${esc(submit)}</button>
      <div class="alert alert-success" data-sim-form-success style="display:none;"></div></form>${extra}</div>`);
}

const contactPage = () => formPage(t("general.contact", "Contacto"),
  field("c-name", t("contact.name", "Nombre"), "text", t("contact.name_placeholder", "")) + field("c-email", t("contact.email", "Email"), "email", t("contact.email_placeholder", "")) +
  field("c-phone", t("contact.phone", "Teléfono"), "tel", t("contact.phone_placeholder", ""), false) + field("c-message", t("contact.message", "Mensaje"), "textarea", t("contact.message_placeholder", "")),
  t("general.send", "Enviar"), t("contact.thanks", "¡Gracias por contactarnos!"),
  `<div class="contact-info-container sim-muted"><p>WhatsApp, teléfono, email y dirección de la tienda (vienen de la configuración de Tiendanube).</p></div>`);

const loginPage = () => formPage(t("general.login_page", "Iniciar sesión"),
  field("l-email", t("account.email", "Email"), "email") + field("l-pass", "Contraseña", "password"),
  t("general.login", "Entrá"), "Simulación: en la tienda real te lleva a Mi cuenta.",
  `<p class="sim-links"><a class="btn-link" href="#/cuenta/recuperar">${esc(t("general.recover_password", "Recuperar contraseña"))}</a> · <a class="btn-link" href="#/cuenta/registro">${esc(t("general.create_account", "Crear cuenta"))}</a></p>`);

const registerPage = () => formPage(t("general.create_account", "Crear cuenta"),
  field("r-name", t("account.name", "Nombre")) + field("r-email", t("account.email", "Email"), "email") + field("r-phone", t("account.phone", "Teléfono"), "tel", "", false) + field("r-pass", "Contraseña", "password") + field("r-pass2", "Confirmar contraseña", "password"),
  t("general.create_account", "Crear cuenta"), "Simulación: la cuenta se crearía y llegaría un email de activación.",
  `<p class="sim-links"><a class="btn-link" href="#/cuenta/login">¿Ya tenés cuenta? ${esc(t("general.login", "Entrá"))}</a></p>`);

const resetPage = () => formPage(t("general.recover_password", "Recuperar contraseña"), field("x-email", t("account.email", "Email"), "email"),
  t("general.send", "Enviar"), "Simulación: llegaría un email para cambiar la contraseña.");

const staticPages = {
  envios: ["Envíos y devoluciones", "Página de contenido (page.tpl). Se edita desde el administrador de Tiendanube → Páginas."],
  faqs: ["Preguntas frecuentes", "Página de contenido. Ipanema también tiene una sección FAQ con acordeón para usar en la home o en páginas."],
  makers: ["Makers", "Página de contenido libre."],
  terminos: ["Términos y condiciones", "Página legal de contenido."],
  privacidad: ["Política de privacidad", "Página legal de contenido."],
};
function contentPage({ slug }) {
  const page = staticPages[slug];
  if (!page) return notFoundPage();
  return container(pageHeader(page[0]) + `<div class="user-content sim-content"><p>${esc(page[1])}</p><p class="sim-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus.</p></div>`);
}

function notFoundPage() {
  return container(`<div class="error-page-container sim-404"><p class="error-page-subtitle">404</p><h1 class="error-page-title">${esc(t("general.page_not_found", "La página que estás buscando no existe."))}</h1>
    <a class="btn btn-primary" href="#/tienda">${esc(t("general.view_all_products", "Ver todos los productos"))}</a></div>
    <h2 class="products-section-title sim-h3">Productos destacados</h2>${productGrid(products.slice(0, 4))}`);
}

/* ---------- Router ---------- */

const routes = [
  ["shop", /^\/(?:tienda)?$/, () => categoryPage({}), "category"],
  ["category", /^\/categoria\/([\w-]+)$/, (m) => categoryPage({ slug: m[1] }), "category"],
  ["search", /^\/buscar$/, () => categoryPage({ query: new URLSearchParams(location.hash.split("?")[1] || "").get("q") || "" }), "search"],
  ["product", /^\/producto\/([\w-]+)$/, (m) => productPage({ slug: m[1] }), "product"],
  ["cart", /^\/carrito$/, cartPage, "cart"],
  ["contact", /^\/contacto$/, contactPage, "contact"],
  ["login", /^\/cuenta\/login$/, loginPage, "account-login"],
  ["register", /^\/cuenta\/registro$/, registerPage, "account-register"],
  ["reset", /^\/cuenta\/recuperar$/, resetPage, "account-reset"],
  ["page", /^\/pagina\/([\w-]+)$/, (m) => contentPage({ slug: m[1] }), "page"],
];

function currentRoute() {
  const path = (location.hash.slice(1) || "/tienda").split("?")[0];
  for (const [name, pattern, render, template] of routes) {
    const match = path.match(pattern);
    if (match) return { name, render: () => render(match), template };
  }
  return { name: "404", render: notFoundPage, template: "404" };
}

function renderRoute() {
  const route = currentRoute();
  document.body.className = `template-${route.template}`;
  $("[data-sim-view]").innerHTML = route.render();
  if (route.name === "product") updateProductState();
  renderMap(route.name);
}

/* ---------- Product form ---------- */

function selectedVariant(root) {
  return $$(".js-product-variants-group", root).map((group) => $(".btn-variant.selected", group).dataset.value).join(" / ");
}

function updateProductState() {
  const root = $("[data-sim-product]");
  const product = productBySlug(root.dataset.simProduct);
  const stock = stockFor(product, selectedVariant(root));
  const add = $("[data-sim-add]", root);
  add.disabled = stock === 0;
  add.textContent = stock === 0 ? t("product.out_of_stock", "Sin stock") : t("product.add_to_cart", "Agregar al carrito");
  const label = $("[data-sim-stock]", root);
  label.textContent = stock === 0 ? t("product.out_of_stock", "Sin stock") : stock !== Infinity && stock <= 3 ? `${t("product.only_left", "¡Solo quedan")} ${stock} ${t("product.in_stock", "en stock!")}` : "";
  $("[data-sim-add-error]", root).style.display = "none";
}

/* ---------- Simulation map (not part of the theme) ---------- */

function renderMap(active) {
  const pages = [["shop", "#/tienda", "Categoría / tienda"], ["product", "#/producto/orbita", "Producto (con variantes)"], ["product", "#/producto/eclipse", "Producto con variante sin stock"],
    ["product", "#/producto/agua", "Producto agotado"], ["search", "#/buscar?q=fuego", "Resultados de búsqueda"], ["search", "#/buscar?q=zzz", "Búsqueda sin resultados"],
    ["cart", "#/carrito", "Página de carrito"], ["contact", "#/contacto", "Contacto"], ["login", "#/cuenta/login", "Login"], ["register", "#/cuenta/registro", "Registro"],
    ["page", "#/pagina/terminos", "Página de contenido"], ["404", "#/no-existe", "404"]];
  const map = $("[data-sim-map]");
  const open = map.dataset.open === "true";
  map.innerHTML = `<button type="button" class="sim-map__toggle" data-sim-map-toggle>${open ? "Cerrar" : "Mapa de la simulación"}</button>
    ${open ? `<div class="sim-map__body">
      <p class="sim-map__label">Páginas</p>${pages.map(([name, href, label]) => `<a href="${href}" class="${name === active && location.hash.startsWith(href.split("?")[0]) ? "is-active" : ""}">${label}</a>`).join("")}
      <p class="sim-map__label">Interacciones del header</p>
      <button type="button" data-sim-open="#modal-cart">Abrir carrito lateral</button>
      <button type="button" data-sim-search-open>Abrir buscador</button>
      <button type="button" data-sim-open="#nav-hamburger">Abrir menú móvil</button>
      <p class="sim-map__label">Estado</p>
      <button type="button" data-sim-fill>Llenar carrito</button>
      <button type="button" data-sim-empty>Vaciar carrito</button>
      <p class="sim-map__note">El checkout, los pagos y los emails los resuelve Tiendanube: acá solo se simulan.</p>
    </div>` : ""}`;
}

/* ---------- Events ---------- */

function initEvents() {
  document.addEventListener("click", (event) => {
    const target = event.target;
    const opener = target.closest(".js-modal-open-private, [data-sim-open]");
    if (opener) { event.preventDefault(); openModal(opener.dataset.target || opener.dataset.simOpen); return; }
    const closer = target.closest(".js-modal-close-private");
    if (closer) { closeModal(closer.dataset.target); if (closer.tagName !== "A") event.preventDefault(); return; }
    if (target.closest("a[href^='#/']")) $$(".modal.modal-visible").forEach((m) => closeModal(`#${m.id}`));

    const item = target.closest(".js-cart-item");
    if (item && target.closest("[data-sim-remove]")) setQty(item.dataset.slug, item.dataset.variant, 0);
    const step = target.closest("[data-sim-qty]");
    if (item && step) {
      const line = readCart().find((l) => l.slug === item.dataset.slug && l.variant === item.dataset.variant);
      setQty(item.dataset.slug, item.dataset.variant, line.qty + Number(step.dataset.simQty));
    }
    if (target.closest("[data-sim-checkout]")) alert("Simulación: acá Tiendanube abre su checkout (datos, envío y pago). No se personaliza desde el tema, salvo colores y logo.");
    if (target.closest("[data-sim-open-cart]")) { hideNotification(); openModal("#modal-cart"); }
    if (target.closest(".js-cart-notification-close-private")) hideNotification();

    const variant = target.closest("[data-sim-axis]");
    if (variant) {
      $$(`[data-sim-axis="${variant.dataset.simAxis}"]`).forEach((b) => b.classList.toggle("selected", b === variant));
      $(`[data-sim-axis-label="${variant.dataset.simAxis}"]`).textContent = variant.dataset.value;
      updateProductState();
    }
    const qtyStep = target.closest("[data-sim-step]");
    if (qtyStep) { const input = $("[data-sim-qty-input]"); input.value = Math.max(1, Number(input.value) + Number(qtyStep.dataset.simStep)); }

    if (target.closest("[data-sim-map-toggle]")) { const map = $("[data-sim-map]"); map.dataset.open = map.dataset.open === "true" ? "false" : "true"; renderMap(currentRoute().name); }
    if (target.closest("[data-sim-search-open]")) { event.stopPropagation(); hideNotification(); $(".js-search-trigger").click(); }
    if (target.closest("[data-sim-fill]")) writeCart([{ slug: "orbita", variant: "Natural", qty: 1 }, { slug: "fuego", variant: "", qty: 2 }]);
    if (target.closest("[data-sim-empty]")) writeCart([]);
  });

  document.addEventListener("submit", (event) => {
    const productForm = event.target.closest("[data-sim-product-form]");
    if (productForm) {
      event.preventDefault();
      const root = $("[data-sim-product]");
      const product = productBySlug(root.dataset.simProduct);
      const variant = selectedVariant(root);
      const qty = Math.max(1, Number($("[data-sim-qty-input]").value) || 1);
      const add = $("[data-sim-add]");
      add.textContent = t("product.adding", "Agregando...");
      setTimeout(() => {
        const result = addToCart(product.slug, variant, qty);
        updateProductState();
        if (result.ok) showAddedNotification(product, variant, qty);
        else { const error = $("[data-sim-add-error]"); error.textContent = result.message; error.style.display = "block"; }
      }, 400);
      return;
    }
    const shipping = event.target.closest("[data-sim-shipping]");
    if (shipping) {
      event.preventDefault();
      const zip = $("input", shipping).value.trim();
      const free = cartTotal() >= store.freeShippingFrom;
      $("[data-sim-shipping-results]", shipping).innerHTML = `<p class="sim-muted">${esc(t("shipping.deliveries_for_zipcode", "Entregas para el CP:"))} <strong>${esc(zip)}</strong></p>
        <ul class="list-unstyled sim-shipping-list"><li><span>Correo Argentino · 3 a 6 días</span><strong>${free ? esc(t("shipping.free", "Gratis")) : money(6500)}</strong></li>
        <li><span>Moto · CABA en 24 h</span><strong>${money(4200)}</strong></li><li><span>Retiro en 1120 Bulnes</span><strong>${esc(t("shipping.free", "Gratis"))}</strong></li></ul>`;
      return;
    }
    const form = event.target.closest("[data-sim-form]");
    if (form) {
      event.preventDefault();
      const ok = $("[data-sim-form-success]", form);
      ok.textContent = form.dataset.success;
      ok.style.display = "block";
    }
  });

  document.addEventListener("change", (event) => {
    if (event.target.matches("[data-sim-sort]")) location.hash = `${location.hash.split("?")[0]}?orden=${event.target.value}`;
  });
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    closeSearch();
    $$(".modal.modal-visible").forEach((m) => closeModal(`#${m.id}`));
  });
  window.addEventListener("hashchange", () => { renderRoute(); scrollTo(0, 0); });
}

await loadThemeFiles();
renderModals();
initSearch();
initEvents();
renderCart();
renderRoute();

// ?open=cart | menu | search | filters opens that panel on load (handy for screenshots and sharing a state).
const openOnLoad = new URLSearchParams(location.search).get("open");
if (openOnLoad === "search") $(".js-search-trigger").click();
else if (openOnLoad) openModal({ cart: "#modal-cart", menu: "#nav-hamburger", filters: "#modal-filters" }[openOnLoad] || `#${openOnLoad}`);
