// Local simulation of the Ipanema theme pieces (cart drawer, search, mobile menu, catalog, product, cart page,
// contact, account) under the Altar header. Tiendanube renders the real Twig; this only mirrors its markup and
// behaviour closely enough to design against. It reads the theme's own files so it follows them as they change:
// config/settings_data.json (style tokens), translations/es_AR.json (copy) and layouts/resources/icons-sprite.tpl.
import { store, products, stockFor } from "../data/ipanema-mock.js";

const ROOT = "..";
// Pages without their own view (the home preview) only get the header: links then point to the simulation page.
const BASE = document.body.dataset.simBase || "";
const HAS_VIEW = Boolean(document.querySelector("[data-sim-view]"));
const CART_KEY = "altar-ipanema-sim-cart";
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
const money = (value) => new Intl.NumberFormat(store.locale, { style: "currency", currency: store.currency, minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
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
// The Ficha reference product (Figma 548:6520) is reachable by URL but not listed.
const catalog = products.filter((p) => !p.hidden);
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

function modal({ id, title, from = "bottom", dockRight = false, widthDesktop = "medium", classes = "", headerClass = "", titleClass = "", closeClass = "", closeIconClass = "", bodyClass = "", overlayClass = "", body = "", foot = "", header = "", form = false }) {
  const md = dockRight ? "modal-md-docked modal-md-docked-right" : `modal-md-${from}`;
  return `<div id="${id}" class="js-modal-private modal modal-${from} ${md} modal-width-full modal-md-width-${widthDesktop} ${classes}" style="display:none;" data-url="${id}">${form ? `<form class="modal-form" action="#" method="post" data-sim-cart-form>` : ""}
      <div class="modal-header ${title ? "" : "no-title"} ${headerClass}">
        ${header || `${title ? `<span class="modal-title ${titleClass}">${esc(title)}</span>` : ""}
        <button type="button" class="js-modal-close-private modal-close ${closeClass}" data-target="#${id}" aria-label="Cerrar">${icon("times", `modal-close-icon icon-inline ${closeIconClass}`)}</button>`}
      </div>
      <div class="modal-body ${bodyClass}">${body}</div>
      ${foot ? `<div class="modal-footer">${foot}</div>` : ""}${form ? "</form>" : ""}
    </div>
    <div class="js-modal-close-private js-modal-overlay-private modal-overlay ${overlayClass}" data-target="#${id}" style="display:none;"></div>`;
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
  return q ? catalog.filter((p) => `${p.name} ${p.category} ${p.description}`.toLowerCase().includes(q)) : [];
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
      ? `<ul class="search-suggestions-list list-unstyled">${found.map((p) => `<li><a class="sim-suggestion" href="${BASE}#/producto/${p.slug}"><span class="sim-suggestion-thumb" style="background-image:url(${p.images[0]})"></span><span>${esc(p.name)}</span><strong>${money(p.price)}</strong></a></li>`).join("")}</ul>
         <a class="btn-link sim-suggestion-all" href="${BASE}#/buscar?q=${encodeURIComponent(query)}">${esc(t("search.view_all_results", "Ver todos los resultados"))}</a>`
      : `<p class="sim-suggestion-empty">${esc(t("search.no_results_for", "No encontramos nada para"))} “${esc(query)}”</p>`;
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    location.href = `${BASE}#/buscar?q=${encodeURIComponent(input.value.trim())}`;
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
  // Nav v3 (snippets/header/altar-header.tpl): the inline field submits ?q= — here it routes to #/buscar (also from the home).
  const inline = $("[data-altar-search-form]");
  if (inline) {
    inline.addEventListener("submit", (event) => {
      event.preventDefault();
      const q = $("input[name='q']", inline).value.trim();
      // From the home (preview.html) the results live on the shop page, like Tiendanube's /search/?q=.
      if (q) location.href = `${BASE}#/buscar?q=${encodeURIComponent(q)}`;
    });
  }
  // Local preview: the footer newsletter has no backend; it shows the sent state (Figma Newsletter=Enviado) right away.
  $$("[data-newsletter-form]").forEach((form) => form.addEventListener("submit", (event) => { event.preventDefault(); form.reset(); form.classList.add("is-sent"); }));
  const slot = $("[data-sim-search-slot]");
  if (!slot) return;
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
  // Same accesses as the Altar nav (snippets/header/altar-header.tpl): Colección, Collab, Hola (mail)
  const navLinks = [[`${BASE}#/tienda`, '<span class="altar-es">Colección</span><span class="altar-en">Collection</span>'], [`${BASE}#/the-star`, '<span class="altar-es">Collab</span><span class="altar-en">Collab</span>'], ["mailto:altarmundi@gmail.com", '<span class="altar-es">Hola</span><span class="altar-en">Hello</span>']];
  $("[data-sim-modals]").innerHTML =
    modal({ id: "modal-cart", title: t("cart.title", "Carrito de compras"), from: "right", dockRight: true, widthDesktop: "small", classes: "altar-cart", form: true, body: `<div data-sim-cart-panel></div>`,
      // as snippets/cart/cart-modal.tpl (block modal_header)
      header: `<span class="modal-title altar-cart__title"><span class="altar-es">Carrito</span><span class="altar-en">Cart</span> (<span class="js-cart-widget-amount altar-cart__count">${cartCount()}</span>)</span>
        <button type="button" class="js-modal-close-private modal-close altar-cart__close" data-target="#modal-cart"><span class="visually-hidden"><span class="altar-es">Cerrar</span><span class="altar-en">Close</span></span><svg class="altar-x" width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M10.0876 3.08756C10.3154 2.85975 10.6846 2.85975 10.9124 3.08756C11.1402 3.31537 11.1402 3.68464 10.9124 3.91243L7.82486 6.99999L10.9124 10.0876C11.1402 10.3154 11.1402 10.6846 10.9124 10.9124C10.6846 11.1402 10.3154 11.1402 10.0876 10.9124L6.99999 7.82486L3.91243 10.9124C3.68464 11.1402 3.31537 11.1402 3.08756 10.9124C2.85975 10.6846 2.85975 10.3154 3.08756 10.0876L6.17512 6.99999L3.08756 3.91243C2.85975 3.68462 2.85975 3.31536 3.08756 3.08756C3.31536 2.85975 3.68462 2.85975 3.91243 3.08756L6.99999 6.17512L10.0876 3.08756Z" fill="currentColor"/></svg></button>` }) +
    // as snippets/cart/cart-modal.tpl: "Agregaste al carrito" with suggestions (settings.add_to_cart_recommendations)
    modal({ id: "related-products-notification", from: "bottom", widthDesktop: "medium", classes: "h-auto altar-added", body: `<div data-sim-added></div>`,
      header: `<span class="modal-title altar-cart__title"><span class="altar-es">Agregaste al carrito</span><span class="altar-en">Added to cart</span></span>
        <button type="button" class="js-modal-close-private modal-close altar-cart__close" data-target="#related-products-notification"><span class="visually-hidden"><span class="altar-es">Cerrar</span><span class="altar-en">Close</span></span><svg class="altar-x" width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M10.0876 3.08756C10.3154 2.85975 10.6846 2.85975 10.9124 3.08756C11.1402 3.31537 11.1402 3.68464 10.9124 3.91243L7.82486 6.99999L10.9124 10.0876C11.1402 10.3154 11.1402 10.6846 10.9124 10.9124C10.6846 11.1402 10.3154 11.1402 10.0876 10.9124L6.99999 7.82486L3.91243 10.9124C3.68464 11.1402 3.31537 11.1402 3.08756 10.9124C2.85975 10.6846 2.85975 10.3154 3.08756 10.0876L6.17512 6.99999L3.08756 3.91243C2.85975 3.68462 2.85975 3.31536 3.08756 3.08756C3.31536 2.85975 3.68462 2.85975 3.91243 3.08756L6.99999 6.17512L10.0876 3.08756Z" fill="currentColor"/></svg></button>` }) +
    modal({ id: "nav-hamburger", from: "left", classes: "modal-nav-hamburger modal-nav-main",
      body: `<ul class="nav-list list-unstyled">${navLinks.map(([href, label]) => `<li><a class="nav-list-link" href="${href}">${label}</a></li>`).join("")}</ul>`,
      foot: `<div class="nav-secondary"><a class="secondary-menu-link" href="${BASE}#/cuenta/login">${icon("user", "utility-icon icon-inline")} ${esc(t("general.login", "Entrá"))}</a>
             <a class="secondary-menu-link" href="${BASE}#/cuenta/registro">${esc(t("general.create_account", "Crear cuenta"))}</a></div>` }) +
    modal({ id: "modal-search", title: t("search.placeholder", "Buscar"), from: "left", classes: "modal-nav-search", body: `<div class="modal-nav-search-body">${searchForm()}</div>` });
  wireSearchForm($("#modal-search"));
}

function cartLinesMarkup(page = false) {
  return cartLines().map(({ product, variant, qty }) => `
    <div class="js-cart-item cart-item ${page ? "cart-page-item" : ""}" data-slug="${product.slug}" data-variant="${esc(variant)}">
      <div class="cart-item-image-container"><a href="${BASE}#/producto/${product.slug}"><img class="img-fluid cart-item-image" src="${product.images[0]}" alt="${esc(product.name)}"></a></div>
      <div class="cart-item-info-container">
        <div class="cart-item-product-info">
          <div class="cart-item-name-container">
            <a class="cart-item-name" href="${BASE}#/producto/${product.slug}">${esc(product.name)}</a>
            ${variant ? `<span class="cart-item-variant">${esc(variant)}</span>` : ""}
          </div>
          <div class="cart-item-delete"><button type="button" class="btn btn-link cart-item-delete-button" data-sim-remove><span class="visually-hidden"><span class="altar-es">Eliminar</span><span class="altar-en">Remove</span></span><svg class="altar-x" width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M10.0876 3.08756C10.3154 2.85975 10.6846 2.85975 10.9124 3.08756C11.1402 3.31537 11.1402 3.68464 10.9124 3.91243L7.82486 6.99999L10.9124 10.0876C11.1402 10.3154 11.1402 10.6846 10.9124 10.9124C10.6846 11.1402 10.3154 11.1402 10.0876 10.9124L6.99999 7.82486L3.91243 10.9124C3.68464 11.1402 3.31537 11.1402 3.08756 10.9124C2.85975 10.6846 2.85975 10.3154 3.08756 10.0876L6.17512 6.99999L3.08756 3.91243C2.85975 3.68462 2.85975 3.31536 3.08756 3.08756C3.31536 2.85975 3.68462 2.85975 3.91243 3.08756L6.99999 6.17512L10.0876 3.08756Z" fill="currentColor"/></svg></button></div>
        </div>
        <div class="cart-item-totals-container">
          <div class="cart-item-quantity">
            <!-- same output as snippets/forms/form-input.tpl in _cart-item.tpl -->
            <div class="form-group js-quantity form-quantity small"><div class="grid grid-3-auto grid-no-gap align-items-center">
              <span class="js-cart-quantity-minus js-cart-quantity-btn btn cart-quantity-btn" data-sim-qty="-1" role="button" aria-label="Restar"><span aria-hidden="true">−</span></span>
              <div class="form-control-container"><input type="number" class="form-control js-cart-quantity-input cart-quantity-input p-0 form-control-inline" value="${qty}" readonly aria-label="Cantidad"></div>
              <span class="js-cart-input-spinner cart-item-spinner" style="display: none;"><span class="altar-cart__spinner"></span></span>
              <span class="js-cart-quantity-plus js-cart-quantity-btn btn cart-quantity-btn" data-sim-qty="1" role="button" aria-label="Sumar"><span aria-hidden="true">+</span></span>
            </div></div>
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
  // as snippets/shipping/shipping-free-rest.tpl + snippets/progress-bar.tpl
  return `<div class="js-fulfillment-info"><div class="progress-bar js-ship-free-rest cart-summary-free-shipping-bar shipping-progress-bar box${missing > 0 ? "" : " bar-progress-success"}">
      <div class="progress-bar-header"><div class="progress-bar-title js-ship-free-rest-message ship-free-rest-message ${missing > 0 ? "amount" : "success"}">
        <div class="ship-free-rest-text bar-progress-success">${esc(t("shipping.great_free_shipping", "¡Genial! Tenés envío gratis"))}</div>
        <div class="ship-free-rest-text bar-progress-amount">${esc(t("shipping.almost_free_shipping", "Te faltan {1} para tener {2}").replace("{1}", money(Math.max(0, missing))).replace("{2}", t("product.free_shipping", "Envío gratis").toLowerCase()))}</div>
      </div>${icon("truck", "progress-bar-icon")}</div>
      <div class="js-bar-progress bar-progress"><div class="js-bar-progress-active bar-progress-active" style="width:${pct}%"></div></div>
    </div></div>`;
}

function shippingCalculator() {
  // as snippets/shipping/shipping-calculator.tpl (form) + shipping-calculator-item.tpl (options)
  return `<div class="shipping-calculator" data-sim-shipping>
      <div class="js-shipping-calculator-head form-swap with-form" data-sim-shipping-head>
        <div class="js-shipping-calculator-with-zipcode form-swap-value transition-up" data-sim-shipping-zip>
          <div class="d-grid grid-1-auto align-items-center">
            <span class="form-swap-value-label"><span>${esc(t("shipping.deliveries_for_zipcode", "Envío a"))}</span> <strong class="js-shipping-calculator-current-zip"></strong></span>
            <span><a class="js-shipping-calculator-change-zipcode btn btn-link font-small" href="#" data-sim-shipping-change>${esc(t("shipping.change_zipcode", "Cambiar"))}</a></span>
          </div>
        </div>
        <div class="js-shipping-calculator-form form-swap-input transition-up transition-up-active" data-sim-shipping-form>
          <div class="form-label">${esc(t("shipping.shipping_methods", "Calcular envío"))}</div>
          <div class="input-append"><input type="tel" class="js-shipping-input form-control" placeholder="${esc(t("shipping.your_zipcode", "Tu código postal"))}" aria-label="${esc(t("shipping.your_zipcode", "Tu código postal"))}">
            <button class="js-calculate-shipping btn btn-inline btn-outline" type="button" data-sim-calc><span class="js-calculate-shipping-wording">${esc(t("shipping.calculate", "Calcular"))}</span></button></div>
          <div class="js-ship-calculator-error invalid-zipcode alert alert-danger" style="display: none;" data-sim-zip-error><span class="altar-es">Ingresá tu código postal.</span><span class="altar-en">Enter your postal code.</span></div>
          <a class="btn btn-link font-small" href="https://www.correoargentino.com.ar/formularios/cpa" target="_blank">${esc(t("shipping.dont_know_zipcode", "No sé mi código postal"))}</a>
        </div>
      </div>
      <div class="js-shipping-calculator-response shipping-calculator-response radio-buttons-group" data-sim-shipping-results style="display:none;"></div>
    </div>`;
}

function calculateShipping(box) {
  const input = $("input", box);
  const zip = input.value.trim();
  const zipError = $("[data-sim-zip-error]", box);
  if (zipError) zipError.style.display = zip ? "none" : "";
  if (!zip) { input.focus(); return; }
  $(".js-shipping-calculator-current-zip", box).textContent = zip;
  // as store.js: the head swaps from .with-form to .with-zip
  $("[data-sim-shipping-head]", box).classList.replace("with-form", "with-zip");
  $("[data-sim-shipping-zip]", box).classList.add("transition-up-active");
  $("[data-sim-shipping-form]", box).classList.remove("transition-up-active");
  const results = $("[data-sim-shipping-results]", box);
  results.innerHTML = shippingOptions();
  results.style.display = "";
}
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && event.target.matches("[data-sim-shipping] .js-shipping-input")) { event.preventDefault(); calculateShipping(event.target.closest("[data-sim-shipping]")); }
});

function shippingOptions() {
  const free = cartTotal() >= store.freeShippingFrom;
  const options = [["Correo Argentino · A domicilio", "3 a 6 días hábiles", free ? 0 : 6500], ["Moto · CABA", "En 24 h", 4200], ["Retiro en el showroom", "1120 Bulnes, CABA", 0]];
  return `<ul class="list-unstyled radio-button-container">${options.map(([name, time, cost], i) => `
      <li class="js-shipping-list-item radio-button-item"><label class="js-shipping-radio radio-button list-item box d-block">
        <input class="js-shipping-method shipping-method" type="radio" name="option" ${i === 0 ? "checked" : ""} style="display:none">
        <div class="radio-button-content"><div class="radio-button-icons-container"><span class="radio-button-icons"><span class="radio-button-icon unchecked"></span><span class="radio-button-icon checked"></span></span></div>
          <div class="radio-button-label"><div class="radio-button-text d-grid grid-auto-1"><div class="shipping-option-details"><div>${esc(name)}</div><div class="shipping-option-date">${esc(time)}</div></div>
            <div class="shipping-option-price${cost ? "" : " shipping-option-price-free"}">${cost ? money(cost) : esc(t("shipping.free", "Gratis"))}</div></div></div></div>
      </label></li>`).join("")}</ul>`;
}

function cartSummary(page = false) {
  const filled = cartCount() > 0;
  const belowMinimum = !page && store.cartMinimum && cartTotal() < store.cartMinimum;
  // as snippets/cart/cart-totals.tpl + cart-button.tpl (the drawer gets the bars and the calculator in its scroll area)
  return `<div class="js-visible-on-cart-filled" ${filled ? "" : 'style="display:none;"'}>
      ${page ? shippingCalculator() : ""}
      <div class="cart-subtotals-container">
        <div class="cart-totals-row cart-totals-subtotal"><span>${esc(t("general.subtotal", "Subtotal"))}</span><span>${money(cartTotal())}</span></div>
        <div class="js-fulfillment-info cart-totals-row cart-totals-shipping"><span>${esc(t("cart.shipping_label", "Envío"))}</span><span><span class="cart-totals-hint">${esc(t("cart.calculate_to_see", "Se calcula en checkout"))}</span></span></div>
      </div>
      <div class="js-cart-total-container"><div class="cart-totals-row cart-totals-total"><span>${esc(t("general.total", "Total"))}</span><span>${money(cartTotal())}</span></div>
        <div class="cart-totals-installments">${store.installments} cuotas sin interés de ${money(Math.round(cartTotal() / store.installments))}</div></div>
    </div>
    <div class="js-visible-on-cart-filled" ${filled ? "" : 'style="display:none;"'}>
      <div class="js-ajax-cart-submit" ${belowMinimum ? 'style="display:none"' : ""}>
        <button type="button" class="btn btn-primary btn-big btn-block altar-cart__checkout" data-sim-checkout>${page ? esc(t("cart.start_checkout", "Iniciar compra")) : '<span class="altar-es">Iniciar checkout</span><span class="altar-en">Start checkout</span>'}</button></div>
      <div class="js-ajax-cart-minimum alert alert-warning" ${belowMinimum ? "" : 'style="display:none"'}>${esc(t("cart.minimum_value_warning", "El monto mínimo de compra es de {1} sin incluir el costo de envío").replace("{1}", money(store.cartMinimum || 0)))}</div>
      <div class="cart-continue-shopping"><a class="${page ? "" : "js-modal-close-private"} btn btn-link" ${page ? `href="${BASE}#/tienda"` : `href="${BASE}#/tienda" data-target="#modal-cart"`}>${page ? esc(t("cart.view_more_products", "Ver más productos")) : '<span class="altar-es">Seguir comprando</span><span class="altar-en">Continue shopping</span>'}</a></div>
    </div>`;
}

function renderCart() {
  const count = cartCount();
  $$(".js-cart-widget-amount").forEach((el) => { el.textContent = count; });
  const panel = $("[data-sim-cart-panel]");
  if (panel) {
    // as snippets/cart/cart-panel.tpl: scroll area (free shipping, products, empty state) + fixed summary (calculator, totals)
    panel.innerHTML = `<div class="altar-cart__scroll">
        <div class="js-visible-on-cart-filled" ${count ? "" : 'style="display:none;"'}>${freeShippingBar()}</div>
        <div id="error-ajax-stock" style="display: none;"><div class="alert alert-warning altar-cart__notice">
          <p class="altar-cart__notice-title"><span class="altar-es">Sin stock suficiente</span><span class="altar-en">Not enough stock</span></p>
          <p class="altar-cart__notice-text">${esc(t("cart.out_of_stock_message", "No hay suficiente stock para agregar este producto al carrito."))}</p>
          <a href="${BASE}#/tienda" class="cart-stock-link altar-cart__link">${esc(t("cart.see_others", "Podés ver otros acá"))}</a></div></div>
        <div class="altar-cart__notice altar-cart__loading" role="status" aria-live="polite">
          <p class="altar-cart__notice-title"><span class="altar-cart__spinner" aria-hidden="true"></span><span class="altar-es">Actualizando carrito…</span><span class="altar-en">Updating cart…</span></p>
          <p class="altar-cart__notice-text"><span class="altar-es">Estamos confirmando precio, stock y cantidad.</span><span class="altar-en">We're confirming price, stock and quantity.</span></p></div>
        <div class="js-ajax-cart-list">${cartLinesMarkup()}</div>
        <div class="js-empty-ajax-cart altar-cart__empty" ${count ? 'style="display:none;"' : ""}>
          <p class="altar-cart__empty-title"><span class="altar-es">Tu carrito está vacío</span><span class="altar-en">Your cart is empty</span></p>
          <p class="altar-cart__empty-text"><span class="altar-es">Todavía no agregaste productos.</span><span class="altar-en">You haven't added any products yet.</span></p>
          <a class="altar-cart__link" href="${BASE}#/tienda"><span class="altar-es">Volver a la tienda</span><span class="altar-en">Back to the shop</span></a></div>
      </div>
      <div class="cart-row altar-cart__summary">
        <div class="js-fulfillment-info cart-fulfillment-info js-visible-on-cart-filled" ${count ? "" : 'style="display:none;"'}><div class="js-shipping-calculator-container">${shippingCalculator()}</div></div>
        ${cartSummary()}</div>`;
  }
  if (HAS_VIEW && currentRoute().name === "cart") renderRoute();
}

/* ---------- Add to cart notification (snippets/notification.tpl) ---------- */

let notificationTimer;
function showAddedNotification(product, variant, qty) {
  if (settings.cart_open_type === "show_cart") { openModal("#modal-cart"); return; } // schema value (config/settings_schema.json)
  if (settings.add_to_cart_recommendations) { showAddedWithSuggestions(product, variant, qty); return; }
  const box = $("[data-sim-notification]");
  // Same markup as snippets/notification.tpl (type add_to_cart, no related products) + Altar's «Ver carrito».
  box.innerHTML = `<div class="notification">
      <button class="js-cart-notification-close-private notification-close" aria-label="Cerrar">${icon("times", "notification-close-icon icon-inline")}</button>
      <div class="js-cart-notification-item-private notification-cart-item d-grid grid-auto-1">
        <div class="notification-cart-image-container mr-3"><img class="notification-cart-image" src="${product.images[0]}" alt=""></div>
        <div class="notification-info-container">
          <div class="notification-info-line"><span>${esc(product.name)}</span>${variant ? `<span><span class="notification-paren">(</span><span>${esc(variant)}</span><span class="notification-paren">)</span></span>` : ""}</div>
          <div class="notification-info-line"><span class="notification-quantity"><span>${qty}</span><span> x </span></span><span>${money(product.price)}</span></div>
          <div class="notification-cart-success">${esc(t("notification.add_to_cart_success", "¡Agregado al carrito!"))}</div>
        </div>
      </div>
      <button type="button" class="js-cart-notification-close-private altar-notif__cart" data-sim-open-cart><span class="altar-es">Ver carrito</span><span class="altar-en">View cart</span></button>
    </div>`;
  box.style.display = "block";
  requestAnimationFrame(() => box.classList.remove("notification-hidden"));
  clearTimeout(notificationTimer);
  notificationTimer = setTimeout(hideNotification, 6000);
}
function showAddedWithSuggestions(product, variant, qty) {
  const suggestions = products.filter((p) => p.slug !== product.slug && p.displayPrice !== false).slice(0, 4);
  $("[data-sim-added]").innerHTML = `
    <div class="js-alert-add-to-cart-private d-md-grid grid-1-auto"><div class="notification-cart-inline notification">
      <div class="notification-cart-item d-grid grid-auto-1">
        <div class="notification-cart-image-container mr-3"><img class="notification-cart-image" src="${product.images[0]}" alt=""></div>
        <div class="notification-info-container notification-info-compact">
          <div class="notification-info-line"><span>${esc(product.name)}</span>${variant ? ` <span><span class="notification-paren">(</span><span>${esc(variant)}</span><span class="notification-paren">)</span></span>` : ""}</div>
          <div class="notification-info-line"><span class="notification-quantity"><span>${qty}</span><span> x </span></span><span>${money(product.price)}</span></div>
        </div>
      </div></div>
      <div><div class="notification-cart-total"><span class="pr-3"><span>${esc(t("general.total", "Total"))}</span> (<span>${cartCount()}</span>)</span><span>${money(cartTotal())}</span></div></div>
    </div>
    <p class="altar-added__heading"><span class="altar-es">También te puede gustar</span><span class="altar-en">You may also like</span></p>
    <div class="js-related-products-notification-container">
      <section class="js-related-products-notification"><div class="related-cart-notification">
        <div class="text-center"><h3 class="related-cart-notification-title">${esc(t("product.add_to_purchase", "Sumá a tu compra"))}</h3></div>
        <div class="position-relative"><div class="js-related-products-notification-slider swiper-container"><div class="swiper-wrapper">
          ${suggestions.map((p) => `<div class="swiper-slide"><div class="js-product-item-private product-item product-item-reduced">
            <a class="product-item-link" href="${BASE}#/producto/${p.slug}">
              <div class="product-item-image-container"><img class="product-item-image" src="${p.images[0]}" alt=""></div>
              <div class="product-item-information"><div class="product-item-name">${esc(p.name)}</div>
                <div class="product-item-price-container"><span class="product-item-price">${money(p.price)}</span></div>
                <span class="altar-suggest-btn"><span class="altar-es">Ver producto</span><span class="altar-en">View product</span></span></div>
            </a></div></div>`).join("")}
        </div></div></div>
      </div></section>
    </div>
    <div class="altar-added__actions">
      <button type="button" data-target="#related-products-notification" class="js-modal-close-private js-open-cart-modal altar-cart__checkout" data-sim-open-cart><span class="altar-es">Ver carrito</span><span class="altar-en">View cart</span></button>
      <a href="#" data-target="#related-products-notification" class="js-modal-close-private altar-cart__link"><span class="altar-es">Seguir comprando</span><span class="altar-en">Continue shopping</span></a>
    </div>`;
  openModal("#related-products-notification");
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
  if (product.comparePrice) labels.push(`<span class="label product-item-promo-label label-primary">${Math.round((1 - product.price / product.comparePrice) * 100)}% OFF</span>`);
  if (product.freeShipping) labels.push(`<span class="label label-secondary shipping-label">${icon("truck", "label-icon icon-inline")} ${esc(t("product.free_shipping", "Envío gratis"))}</span>`);
  if (stockFor(product, defaultVariant(product)) === 0 && !Object.keys(product.options).length) labels.push(`<span class="label product-item-no-stock sim-label-nostock">${esc(t("product.out_of_stock", "Sin stock"))}</span>`);
  return labels.length ? `<div class="labels sim-labels">${labels.join("")}</div>` : "";
}

function editorialClasses(position) {
  if (!position) return "";
  const desktopCyclePosition = ((position - 1) % 14) + 1;
  return [
    desktopCyclePosition === 3 ? "is-altar-featured-desktop-right" : "",
    desktopCyclePosition === 10 ? "is-altar-featured-desktop-left" : "",
    position >= 3 && (position - 3) % 7 === 0 ? "is-altar-featured-compact" : "",
  ].filter(Boolean).join(" ");
}

// Mirrors snippets/product-list/payments/payment-discount-price.tpl (10% off with transfer in the mock store).
const transferPrice = (price) => Math.round(price * (1 - store.transferDiscount));
const paymentDiscount = (price, classes) => `<div class="js-payment-discount-price-product-container payment-discount-price-product-container ${classes}"><span class="js-payment-discount-price-product payment-discount-price-product">${money(transferPrice(price))}</span> <span>${esc(t("payment_discount.with", "con"))}</span> <span class="js-payment-discount-name-product">${esc(store.transferName)}</span></div>`;

// product.display_price: off hides price, transfer and stock lines (item.tpl).
const hasPrice = (product) => product.displayPrice !== false;

// Mirrors item.tpl's stock notices (settings.last_product_text / latest_products_available).
function stockNotice(product) {
  const stock = stockFor(product, defaultVariant(product));
  if (!Number.isFinite(stock) || stock === 0) return "";
  if (stock === 1) return `<div class="product-item-stock-notice">${esc(settings.last_product_text || "¡Último disponible!")}</div>`;
  if (stock <= (settings.latest_products_available || 0)) return `<div class="product-item-stock-notice">${esc(t("general.only_left", "¡Solo quedan"))} <span class="js-product-stock">${stock}</span> ${esc(t("general.in_stock", "en stock!"))}</div>`;
  return "";
}

// Same name → colour map as item-colors.tpl / product-variants.tpl (used when an option has no Tiendanube colour).
const SWATCHES = { negro: "#1F2224", black: "#1F2224", blanco: "#F4F1EA", white: "#F4F1EA", hueso: "#E8E1D3", crudo: "#EFE7D6",
  natural: "#E6DCC6", arena: "#C9B48F", beige: "#C9B48F", camel: "#B08A5E", "marrón": "#6E4B36", marron: "#6E4B36",
  chocolate: "#4E3326", "óxido": "#8E5A3C", oxido: "#8E5A3C", terracota: "#B07A5E", "bordó": "#5E2A33", bordo: "#5E2A33",
  vino: "#5A2430", ciruela: "#6B4251", rosa: "#CFA7A0", rojo: "#9E3B32", naranja: "#C9783F", amarillo: "#D9C27A",
  mostaza: "#C4A146", verde: "#6F8A6A", "verde agua": "#9DB8A8", salvia: "#A9B08A", oliva: "#707A4E", jade: "#4F7F6C",
  celeste: "#A9C1D1", azul: "#3E5770", "azul niebla": "#8FA3B0", niebla: "#8FA3B0", marino: "#1F2E44", gris: "#8E8E88",
  plata: "#C4C6C8", dorado: "#C2A35A", cobre: "#B0704A", lila: "#A89AB8", violeta: "#6E5A86" };
const swatchFor = (product, name) => (product.swatches && product.swatches[name]) || SWATCHES[name.trim().toLowerCase()] || null;

// Mirrors item-colors.tpl: up to three colour circles + «+N» (Sofi 27-nov), no names.
function itemColors(product) {
  const colors = product.options.Color;
  if (!settings.product_color_variants || !colors || colors.length < 2) return "";
  const known = colors.map((c) => [c, swatchFor(product, c)]).filter(([, hex]) => hex);
  const more = known.length - Math.min(3, known.length) + (colors.length - known.length);
  const inner = known.length
    ? known.slice(0, 3).map(([name, hex]) => `<span class="product-item-colors-bullet altar-swatch" style="background: ${hex}" title="${esc(name)}"></span>`).join("") + (more > 0 ? `<span class="product-item-colors-bullet-text altar-swatch-more">+${more}</span>` : "")
    : `<span class="product-item-colors-bullet-text">${colors.length} <span class="altar-es">colores</span><span class="altar-en">colors</span></span>`;
  return `<div class="product-item-colors-container order-first"><div class="product-item-colors-variation"><div class="product-item-colors altar-swatches" title="${colors.length} colores">${inner}</div></div></div>`;
}

// Mirrors item.tpl's «Agotado» line for sold-out products.
const soldOut = (product) => stockFor(product, defaultVariant(product)) === 0 ? `<div class="product-item-stock-notice altar-sold-out"><span class="altar-es">Agotado</span><span class="altar-en">Sold out</span></div>` : "";

// Mirrors snippets/product-list/product-item/item.tpl with altar_editorial_card.
function productItem(product, editorialPosition = 0) {
  const url = `${BASE}#/producto/${product.slug}`;
  return `<div class="js-product-item-private product-item is-altar-editorial-card ${editorialClasses(editorialPosition)}">
      <a class="product-item-link sim-product-image" href="${url}">
        <img src="${product.images[0]}" alt="${esc(product.name)}" loading="lazy">
        ${product.images[1] ? `<img class="sim-product-image-hover" src="${product.images[1]}" alt="" loading="lazy">` : ""}
        ${productLabels(product)}
      </a>
      <div class="product-item-information">
        <a class="product-item-link" href="${url}" title="${esc(product.name)}">
          <div class="js-item-name product-item-name">${esc(product.name)}</div>
          ${hasPrice(product) ? `<div class="product-item-price-container">
            <span class="js-price-display product-item-price">${money(product.price)}</span>
            ${product.comparePrice ? `<span class="js-compare-price-display product-item-price-compare">${money(product.comparePrice)}</span>` : ""}
          </div>
          <div class="product-item-installments">${store.installments} cuotas sin interés de ${money(Math.round(product.price / store.installments))}</div>
          ${settings.payment_discount_price ? paymentDiscount(product.price, "product-item-payment-discount") : ""}
          ${settings.last_product_category ? stockNotice(product) : ""}
          ${soldOut(product)}` : ""}
          ${itemColors(product)}
        </a>
      </div>
      <a class="altar-editorial-card-hitarea" href="${url}" tabindex="-1" aria-hidden="true"></a>
    </div>`;
}

function productGrid(list) {
  return `<div class="js-product-table grid grid-2 grid-md-4 sim-grid altar-shop-grid">${list.map((product, index) => productItem(product, index + 1)).join("")}</div>`;
}

// The Star (simulation only): the same products in another order, so the page doesn't read as the collection.
// A fixed shuffle, so it stays the same on every visit. In Tiendanube it is its own category with its own products.
function starOrder(list) {
  // Seed 4: no product keeps its collection position, and both featured slots show other pieces.
  const score = (product) => [...product.slug].reduce((hash, char) => (hash * 31 + char.charCodeAt(0)) % 997, 4);
  return [...list].sort((a, b) => score(a) - score(b));
}

function categoryPage({ slug, query, star = false }) {
  const category = store.categories.find((c) => c.slug === slug);
  let list = query !== undefined ? searchProducts(query) : category ? catalog.filter((p) => p.category === slug) : star ? starOrder(catalog) : catalog;
  const params = new URLSearchParams(location.hash.split("?")[1] || "");
  const sort = params.get("orden") || "relevancia";
  if (sort === "menor") list = [...list].sort((a, b) => a.price - b.price);
  if (sort === "mayor") list = [...list].sort((a, b) => b.price - a.price);
  if (sort === "az") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
  if (sort === "za") list = [...list].sort((a, b) => b.name.localeCompare(a.name));
  if (sort === "nuevos") list = [...list].reverse();

  // Búsqueda (main-products-grid.tpl, Figma "Colección · resultados de búsqueda"): the Colección layout, the query stays in the nav.
  let resultsLine = "";
  if (query !== undefined) {
    if (!list.length) {
      const picks = catalog.filter((p) => p.displayPrice !== false).slice(0, 4);
      return container(`<div class="py-4"><div class="altar-page-head altar-search-empty">
          <h1 class="page-header-title"><span class="altar-es">No encontramos nada para</span><span class="altar-en">We found nothing for</span> “${esc(query)}”</h1>
          <p class="altar-page-lead"><span class="altar-es">Escribilo de otra forma y volvé a intentar.</span><span class="altar-en">Try writing it another way.</span></p></div></div>
        <div class="altar-search-suggestions section-related-products"><h2 class="altar-search-suggestions__title"><span class="altar-es">O quizás te interesen estos productos</span><span class="altar-en">Or maybe you'd like these</span></h2>
          <div class="js-product-table grid grid-2 grid-md-4 altar-suggestions-grid">${picks.map((product, i) => productItem(product, i + 1)).join("")}</div></div>`);
    }
    resultsLine = `<p class="altar-shop-results"><span>${list.length} ${list.length === 1 ? '<span class="altar-es">resultado</span><span class="altar-en">result</span>' : '<span class="altar-es">resultados</span><span class="altar-en">results</span>'}</span>
      <span aria-hidden="true">·</span><a href="${BASE}#/tienda"><span class="altar-es">Ver toda la colección</span><span class="altar-en">View the whole collection</span></a></p>`;
  }

  const sortOptions = [["relevancia", "Más relevantes", "Most relevant"], ["menor", "Precio: menor a mayor", "Price: low to high"], ["mayor", "Precio: mayor a menor", "Price: high to low"], ["az", "A - Z", "A - Z"], ["za", "Z - A", "Z - A"], ["antiguos", "Más antiguos", "Oldest"], ["nuevos", "Más nuevos", "Newest"], ["vendidos", "Más vendidos", "Best sellers"]];
  const sortLabel = ([, es, en]) => `<span class="altar-es">${esc(es)}</span><span class="altar-en">${esc(en)}</span>`;
  const selectedSort = sortOptions.find(([value]) => value === sort) || sortOptions[0];
  const controls = `<div class="filters-controls-content sim-controls altar-shop-controls">
      ${resultsLine}
      <div class="sim-sort altar-shop-sort">
        <button type="button" class="altar-shop-sort-trigger js-modal-open-private" data-target="#modal-sort-by" aria-haspopup="dialog" aria-controls="modal-sort-by">
          <span>${sortLabel(selectedSort)}</span>${icon("chevron-down", "altar-shop-sort-chevron icon-inline")}
        </button>
      </div>
    </div>`;
  const sortModal = modal({ id: "modal-sort-by", title: "[ ORDENAR POR ]", from: "bottom", widthDesktop: "large",
    classes: "h-auto altar-sort-modal", headerClass: "altar-sort-modal__header", titleClass: "altar-sort-modal__title",
    closeClass: "altar-sort-modal__close", closeIconClass: "altar-sort-modal__close-icon", bodyClass: "altar-sort-modal__body", overlayClass: "altar-sort-modal__overlay",
    // as filters-modals.tpl (block modal_header): only the X to close
    header: `<button type="button" class="js-modal-close-private modal-close altar-sort-modal__close" data-target="#modal-sort-by" aria-label="Cerrar"><svg class="altar-sort-modal__x" width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M10.0876 3.08756C10.3154 2.85975 10.6846 2.85975 10.9124 3.08756C11.1402 3.31537 11.1402 3.68464 10.9124 3.91243L7.82486 6.99999L10.9124 10.0876C11.1402 10.3154 11.1402 10.6846 10.9124 10.9124C10.6846 11.1402 10.3154 11.1402 10.0876 10.9124L6.99999 7.82486L3.91243 10.9124C3.68464 11.1402 3.31537 11.1402 3.08756 10.9124C2.85975 10.6846 2.85975 10.3154 3.08756 10.0876L6.17512 6.99999L3.08756 3.91243C2.85975 3.68462 2.85975 3.31536 3.08756 3.08756C3.31536 2.85975 3.68462 2.85975 3.91243 3.08756L6.99999 6.17512L10.0876 3.08756Z" fill="currentColor"/></svg></button>`,
    body: `<ul class="radio-button-container sort-by-options list-unstyled">${sortOptions.map((option) => { const [value] = option; return `<li class="radio-button-item"><a href="#" class="radio-button ${value === sort ? "selected" : ""}" data-sim-sort-value="${value}"><span class="radio-button-content"><span class="radio-button-label">${sortLabel(option)}</span></span></a></li>`; }).join("")}</ul>` });
  const filters = modal({ id: "modal-filters", title: "Filtrar", from: "left", widthDesktop: "small",
    body: `<p class="form-label">${esc(t("filters.categories_title", "Categorías"))}</p>
      <ul class="list-unstyled sim-filter-list"><li><a href="${BASE}#/tienda">Todas</a></li>${store.categories.map((c) => `<li><a href="${BASE}#/categoria/${c.slug}" ${c.slug === slug ? 'class="sim-strong"' : ""}>${esc(c.name)}</a></li>`).join("")}</ul>
      <p class="form-label">${esc(t("filters.price.label", "Precio"))}</p>
      <div class="sim-inline-form"><input class="form-control" placeholder="${esc(t("filters.price.from", "Desde"))}"><input class="form-control" placeholder="${esc(t("filters.price.to", "Hasta"))}"><button type="button" class="btn btn-secondary">${esc(t("filters.price.apply", "Aplicar"))}</button></div>
      <p class="sim-note">Simulación: el filtro de precio no se aplica.</p>` });
  return container(controls + productGrid(list) +
    "") + sortModal + filters; // pagination.tpl hides the counter when there is a single page
}

const optionAxes = (product) => Object.entries(product.options);
const defaultVariant = (product) => optionAxes(product).map(([, values]) => values[0]).join(" / ");

function productPage({ slug }) {
  const product = productBySlug(slug);
  if (!product) return notFoundPage();
  const category = store.categories.find((c) => c.slug === product.category);
  const related = product.related ? product.related.map(productBySlug).filter(Boolean) : catalog.filter((p) => p.slug !== slug).slice(0, 4);
  const cuota = money(Math.round(product.price / store.installments));
  // Mirrors snippets/product/product-variants.tpl (label + strong value, js-variant-button chips).
  const variants = optionAxes(product).map(([axis, values], index) => `
    <div class="js-product-variants-group product-detail-variants-group${["Color", "Cor"].includes(axis) ? " js-color-variants-container" : ""}">
      <label class="form-label${["Color", "Cor"].includes(axis) ? " altar-color-label" : ""}">${esc(axis)}<span class="altar-variant-colon">:</span> <strong class="js-insta-variation-label" data-sim-axis-label="${index}">${esc(values[0])}</strong></label>
      ${values.map((value, i) => {
        const hex = ["Color", "Cor"].includes(axis) ? swatchFor(product, value) : null;
        // Sold out = no stock in any combination with this value (Tiendanube's btn-variant-no-stock).
        const noStock = product.stock && Object.entries(product.stock).filter(([k]) => k.split(" / ")[index] === value).every(([, n]) => n === 0);
        return hex
          ? `<a class="js-variant-button btn btn-variant btn-variant-color altar-swatch-btn ${i === 0 ? "selected" : ""}${noStock ? " btn-variant-no-stock" : ""}" title="${esc(value)}" aria-label="${esc(value)}" data-altar-tooltip="${esc(value)}" data-sim-axis="${index}" data-value="${esc(value)}"><span class="btn-variant-content" style="background: ${hex}" data-name="${esc(value)}"></span></a>`
          : `<a class="js-variant-button btn btn-variant ${i === 0 ? "selected" : ""}${noStock ? " btn-variant-no-stock" : ""}" data-sim-axis="${index}" data-value="${esc(value)}"><span class="btn-variant-content">${esc(value)}</span></a>`;
      }).join("")}
    </div>`).join("");
  const freeShipping = product.freeShipping
    ? `<span class="text-accent">${esc(t("product.free_shipping", "Envío gratis"))}</span>`
    : `<span class="text-accent">${esc(t("product.free_shipping", "Envío gratis"))}</span> <span>${esc(t("product.free_shipping_exceeding", "superando los"))} ${money(store.freeShippingFrom)}</span>`;
  // Mirrors sections/main-product.tpl + blocks/product-info.tpl + snippets/product/product-form.tpl (Figma 363:308).
  return `<section class="section section-main-product">
    <div class="container sim-section">
      <div class="js-product-detail js-product-container product-columns" data-sim-product="${product.slug}">
        <div class="js-product-images product-images">
          <div class="product-images-slider product-images-grid product-images-grid-columns-1" style="--product-images-grid-gap: 8px;"><div class="swiper-wrapper">
            ${product.images.map((src) => `<div class="js-product-slide swiper-slide"><a class="js-product-slide-link product-slide-link" href="${src}" style="padding-bottom: 136.36%;"><img class="product-slider-image img-absolute" src="${src}" alt="${esc(product.name)}" style="width:100%;height:100%;object-fit:cover;"></a></div>`).join("")}
          </div></div>
        </div>
        <div class="js-product-info product-info altar-product-info d-flex flex-column">
          <div class="product-content altar-product">
            <div class="altar-product-head">
              <div class="altar-product-head-price">
                ${hasPrice(product) ? `<div class="js-price-container product-price"><div class="product-price-main">
                  ${product.comparePrice ? `<div class="js-compare-price-display product-price-compare">${money(product.comparePrice)}</div>` : ""}
                  <div class="product-price-row"><span class="js-price-display product-price-display">${money(product.price)}</span>${product.comparePrice ? `<span class="product-offer-label">${Math.round((1 - product.price / product.comparePrice) * 100)}% OFF</span>` : ""}</div>
                </div>
                ${settings.payment_discount_price ? paymentDiscount(product.price, "product-payment-discount-price") : ""}</div>` : ""}
              </div>
              <span class="altar-product-category">${esc(category.name)}</span>
            </div>
            <h1 class="js-product-name product-name">${esc(product.name)}</h1>
            <form class="js-product-form product-form" data-sim-product-form>
              <div class="js-product-variants product-detail-variants">${variants}</div>
              <div class="product-stock-alert" data-sim-stock></div>
              <div class="product-actions">
                ${hasPrice(product) ? `<span class="altar-qty-label"><span class="altar-es">cantidad</span><span class="altar-en">quantity</span></span><div class="form-quantity-container"><div class="form-quantity">
                  <span class="js-quantity-down form-quantity-icon btn" data-sim-step="-1" aria-label="Restar">${icon("minus")}</span>
                  <input class="form-control js-quantity-input" type="number" min="1" value="1" data-sim-qty-input aria-label="Cantidad">
                  <span class="js-quantity-up form-quantity-icon btn" data-sim-step="1" aria-label="Sumar">${icon("plus")}</span>
                </div></div>` : ""}
                <div class="buy-button-container">${hasPrice(product)
                  ? `<button type="submit" class="js-addtocart js-prod-submit-form btn btn-primary btn-big btn-block cart" data-sim-add>${esc(t("product.add_to_cart", "Agregar al carrito"))}</button>`
                  : `<button type="submit" class="js-addtocart js-prod-submit-form btn btn-primary btn-big btn-block contact" data-sim-contact>${esc(t("product.contact_for_price", "Consultar precio"))}</button>`}</div>
              </div>
              <p class="alert alert-warning" data-sim-add-error style="display:none;"></p>
            </form>
            <div class="altar-stock-notify" data-altar-stock-notify data-preview>
              <button type="button" class="altar-stock-notify__toggle" aria-expanded="false" aria-controls="altar-stock-notify-sim"><span class="altar-es">avisarme cuando vuelva</span><span class="altar-en">email me when it's back</span></button>
              <form id="altar-stock-notify-sim" class="altar-stock-notify__form" action="#" method="post" hidden>
                <input type="hidden" name="message" value="" data-altar-stock-message>
                <label class="visually-hidden" for="altar-stock-email-sim">Email</label>
                <input type="email" id="altar-stock-email-sim" class="altar-stock-notify__email" name="email" required autocomplete="email" placeholder="tu mail">
                <button type="submit" class="altar-stock-notify__send"><span class="altar-es">avisarme</span><span class="altar-en">notify me</span></button>
              </form>
              <p class="altar-stock-notify__done" role="status" hidden><span class="altar-es">listo, te avisamos por mail cuando vuelva.</span><span class="altar-en">done, we'll email you when it's back.</span></p>
            </div>
            <div class="altar-product-specs">
              <div class="altar-spec-row">
                <div class="altar-spec"><span class="altar-spec-label">Maker:</span><span class="altar-spec-value">Altar</span></div>
                <div class="altar-spec"><span class="altar-spec-label">SKU:</span><span class="altar-spec-value altar-spec-sku"><span class="altar-barcode" aria-hidden="true"></span><span class="js-product-sku">ALT-${esc(product.slug.toUpperCase().slice(0, 3))}-0001</span></span></div>
              </div>
              <div class="js-product-payments-container product-payments-info altar-spec-row"${hasPrice(product) ? "" : ' style="display: none;"'}>
                <div class="altar-spec"><span class="altar-spec-label">Cuotas:</span><div class="product-installment">${store.installments} cuotas sin interés de ${cuota}</div></div>
                <div class="altar-spec"><span class="altar-spec-label">Medios de pago:</span><div class="product-payment-discount">${Math.round(store.transferDiscount * 100)}% de descuento pagando con ${esc(store.transferName)}</div><a class="product-payments-link btn-link" href="#" data-sim-open="#modal-payments"><span class="altar-es">medios de pago</span><span class="altar-en">payment methods</span></a></div>
              </div>
              <div class="altar-spec-row">
                <div class="altar-spec altar-spec-stock"><span class="altar-spec-label">Stock:</span><span class="altar-spec-value altar-stock-available">Disponible</span><span class="altar-spec-value altar-stock-none">${esc(t("product.out_of_stock", "Sin stock"))}</span></div>
                <div class="js-free-shipping-minimum-message free-shipping-message product-free-shipping altar-spec"><span class="altar-spec-label">Envío:</span><div class="product-free-shipping-inner"><span class="product-free-shipping-icon">${icon("truck", "free-shipping-icon icon-inline")}</span><div class="product-free-shipping-body">${freeShipping}</div></div></div>
              </div>
            </div>
            <div class="altar-product-section altar-product-shipping">
              <span class="altar-spec-label altar-section-label">Envío</span>
              <div class="altar-product-section-body">
                <p class="altar-section-note">Calculá el costo y el tiempo de entrega con tu código postal.</p>
                <div class="product-shipping-wrapper shipping-wrapper">${shippingCalculator()}</div>
              </div>
            </div>
          </div>
          <div class="product-info-description"><h3 class="product-description-heading">${esc(t("product.description", "Descripción"))}</h3><div class="js-product-description product-description-content user-content"><p>${esc(product.description)}</p></div></div>
          <div class="product-purchase-info">
            <div class="icon-text-item icon-text-item-horizontal"><div class="icon-text-item-content"><div class="icon-text-item-title">Cambios</div><div class="icon-text-item-description">Tenés 30 días para cambiar o devolver tu compra. Si llega dañada, escribinos y lo resolvemos.</div></div></div>
            <div class="icon-text-item icon-text-item-horizontal"><div class="icon-text-item-content"><div class="icon-text-item-title">Pago seguro</div><div class="icon-text-item-description">Pagá con tarjeta, transferencia o efectivo. Tus datos viajan protegidos.</div></div></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section-related-products"><div class="container sim-related">
    <div class="heading-block h2">También te puede gustar</div>
    <div class="products-list-slider altar-related-grid" style="--altar-related-columns: 4; --altar-related-columns-mobile: 2;">
      <section class="products-section"><div><div class="products-section-container">${related.map((product) => productItem(product)).join("")}</div></div></section>
    </div>
  </div></section>` +
    modal({ id: "modal-payments", title: t("product.see_payment_methods", "Medios de pago"), widthDesktop: "small",
      body: `<p>Tarjetas de crédito: hasta ${store.installments} cuotas sin interés.</p><p>Transferencia: 10% de descuento.</p><p class="sim-note">Simulación: en la tienda real lo arma Tiendanube.</p>` });
}

function cartPage() {
  const count = cartCount();
  return container(pageHeader(t("cart.title", "Carrito de compras")) + (count
    ? `<div class="cart-page-content sim-cart-page"><div class="cart-page-products"><div class="js-ajax-cart-list cart-page-items-list">${cartLinesMarkup(true)}</div></div>
       <div class="cart-page-summary">${freeShippingBar()}${cartSummary(true)}</div></div>`
    : `<div class="alert alert-info">${esc(t("cart.empty", "Tu carrito está vacío"))}</div><a class="btn btn-primary" href="${BASE}#/tienda">${esc(t("general.view_all_products", "Ver todos los productos"))}</a>`));
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

// Same markup as sections/page-header.tpl + sections/main-contact.tpl (Figma "Contacto", 931:12690).
// #/contacto?arrepentimiento (footer legal link) · #/contacto?producto=<slug> (consultar precio) · add &enviado for the sent state.
function contactPage() {
  const params = new URLSearchParams(location.hash.split("?")[1] || "");
  const cancel = params.has("arrepentimiento"), sent = params.has("enviado");
  const product = params.get("producto") && productBySlug(params.get("producto"));
  const title = cancel ? '<span class="altar-es">Botón de arrepentimiento</span><span class="altar-en">Order cancellation</span>' : '<span class="altar-es">Contacto</span><span class="altar-en">Contact</span>';
  const fieldHtml = (id, label, type = "text") => `<div class="form-group"><label class="form-label" for="${id}">${label}</label>${type === "textarea" ? `<textarea id="${id}" class="form-control" rows="7"></textarea>` : `<input id="${id}" type="${type}" class="form-control">`}</div>`;
  const body = sent
    ? `<div class="alert alert-success altar-contact-sent">${cancel
        ? '<strong class="altar-contact-sent__title"><span class="altar-es">¡Tu pedido de cancelación fue enviado!</span><span class="altar-en">Your cancellation request was sent!</span></strong><p class="contact-success-followup"><span class="altar-es">Vamos a ponernos en contacto con vos apenas veamos tu mensaje.</span><span class="altar-en">We\'ll get in touch as soon as we see your message.</span></p><span class="altar-contact-sent__code"><span class="altar-es">Tu código de trámite es</span><span class="altar-en">Your request code is</span> #1024</span>'
        : '<strong class="altar-contact-sent__title"><span class="altar-es">¡Gracias por escribirnos!</span><span class="altar-en">Thanks for writing to us!</span></strong><p class="contact-success-followup"><span class="altar-es">Vamos a responderte apenas veamos tu mensaje.</span><span class="altar-en">We\'ll reply as soon as we see your message.</span></p>'}</div>
       <a class="altar-page-link" href="${BASE}#/tienda"><span class="altar-es">Volver a la colección</span><span class="altar-en">Back to the collection</span></a>`
    : `${product ? `<div class="contact-product-card"><div><img class="img-fluid" src="${product.images[0]}" alt=""></div><div class="contact-product-info"><p><span class="contact-product-kicker"><span class="altar-es">Estás consultando por</span><span class="altar-en">You're asking about</span></span> <a href="${BASE}#/producto/${product.slug}">${esc(product.name)}</a></p></div></div>` : ""}
       <form id="contact-form" class="js-form form altar-contact-form" data-sim-form data-success="Simulación: Tiendanube envía el mensaje a la tienda.">
         ${fieldHtml("name", '<span class="altar-es">Nombre</span><span class="altar-en">Name</span>')}${fieldHtml("email", "Email", "email")}${fieldHtml("phone", '<span class="altar-es">Teléfono</span><span class="altar-en">Phone</span>', "tel")}${fieldHtml("message", '<span class="altar-es">Mensaje</span><span class="altar-en">Message</span>', "textarea")}
         <button class="btn btn-primary btn-big btn-block" type="submit"><span class="altar-es">Enviar</span><span class="altar-en">Send</span></button>
         <div class="alert alert-success" data-sim-form-success style="display:none;"></div>
       </form>`;
  return `<div class="page-header"><div class="container"><div class="page-header-title-row"><div class="page-header-title-inner"><h1 class="page-header-title">${title}</h1></div></div></div></div>
  <div class="contact-form-section"><div class="container"><div class="d-grid grid-md-2"><div class="contact-form-container">
    ${cancel && !sent ? '<p class="contact-disclaimer altar-page-lead"><span class="altar-es">Si te arrepentiste de una compra, podés pedir la cancelación enviando este formulario <strong>con tu número de orden.</strong> Tenés como máximo hasta 10 días corridos desde que recibiste el producto.</span><span class="altar-en">If you changed your mind about a purchase, you can request its cancellation by sending this form <strong>with your order number.</strong> You have up to 10 calendar days from the day you received the product.</span></p>' : ""}
    ${body}
  </div></div></div></div>`;
}

// Same markup as sections/page-header.tpl + snippets/forms/login.tpl (Figma "Ingresar", 755:3820).
const loginPage = () => `<div class="page-header"><div class="container"><div class="page-header-title-row"><div class="page-header-title-inner"><h1 class="page-header-title"><span class="altar-es">Iniciar sesión</span><span class="altar-en">Log in</span></h1></div></div></div></div>
  <div class="login-form-section"><div class="container"><div class="account-form-container">
    <form id="login-form" class="js-form form altar-login-form" data-sim-form data-success="Simulación: en la tienda real te lleva a Mi cuenta.">
      <div class="form-group"><label class="form-label" for="email">Email</label><input type="email" id="email" name="email" class="js-account-input form-control" autocomplete="email" required></div>
      <div class="form-group"><label class="form-label" for="password"><span class="altar-es">Contraseña</span><span class="altar-en">Password</span></label><input type="password" id="password" name="password" class="js-account-input js-password-input form-control" autocomplete="current-password" required></div>
      <button class="btn btn-primary btn-big btn-block" type="submit"><span class="altar-es">Entrá</span><span class="altar-en">Log in</span></button>
      <div class="alert alert-success" data-sim-form-success style="display:none;"></div>
      <hr class="altar-login-form__rule">
      <p class="altar-login-form__links"><a href="${BASE}#/cuenta/recuperar"><span class="altar-es">Recuperar contraseña</span><span class="altar-en">Reset password</span></a> <a href="${BASE}#/cuenta/registro"><span class="altar-es">Crear cuenta</span><span class="altar-en">Create account</span></a></p>
    </form>
  </div></div></div>`;

const registerPage = () => formPage(t("general.create_account", "Crear cuenta"),
  field("r-name", t("account.name", "Nombre")) + field("r-email", t("account.email", "Email"), "email") + field("r-phone", t("account.phone", "Teléfono"), "tel", "", false) + field("r-pass", "Contraseña", "password") + field("r-pass2", "Confirmar contraseña", "password"),
  t("general.create_account", "Crear cuenta"), "Simulación: la cuenta se crearía y llegaría un email de activación.",
  `<p class="sim-links"><a class="btn-link" href="${BASE}#/cuenta/login">¿Ya tenés cuenta? ${esc(t("general.login", "Entrá"))}</a></p>`);

const resetPage = () => formPage(t("general.recover_password", "Recuperar contraseña"), field("x-email", t("account.email", "Email"), "email"),
  t("general.send", "Enviar"), "Simulación: llegaría un email para cambiar la contraseña.");

const staticPages = {
  cambios: ["Cambios y devoluciones", ""],
  envios: ["Envíos y devoluciones", "Página de contenido (page.tpl). Se edita desde el administrador de Tiendanube → Páginas."],
  faqs: ["Preguntas frecuentes", "Página de contenido. Ipanema también tiene una sección FAQ con acordeón para usar en la home o en páginas."],
  makers: ["Makers", "Página de contenido libre."],
  terminos: ["Términos y condiciones", "Página legal de contenido."],
  privacidad: ["Política de privacidad", "Página legal de contenido."],
};
function contentPage({ slug }) {
  const page = staticPages[slug];
  if (!page) return notFoundPage();
  // Sample body (Figma "Páginas de contenido"): in Tiendanube it is the admin's HTML (page.content).
  const sample = `<p>Tenés 30 días desde que recibís tu compra para cambiarla o devolverla. Si llegó dañada, escribinos y lo resolvemos.</p>
    <h2>Cómo pedir un cambio</h2><p>Escribinos a <a href="mailto:altarmundi@gmail.com">altarmundi@gmail.com</a> con tu número de orden y el producto que querés cambiar. Te respondemos con los pasos a seguir.</p>
    <h2>Condiciones</h2><ul><li>La prenda tiene que estar sin uso y con sus etiquetas.</li><li>Cada pieza es única: si el talle no está, te ofrecemos otra pieza o un crédito.</li><li>Los gastos de envío del cambio se coordinan por mail.</li></ul>
    <h2>Botón de arrepentimiento</h2><p>Si te arrepentiste de una compra, podés cancelarla dentro de los 10 días corridos desde que la recibiste, desde el <a href="${BASE}#/contacto?arrepentimiento">Botón de arrepentimiento</a> al pie de la página.</p>`;
  return `<div class="page-header"><div class="container"><div class="page-header-title-row"><div class="page-header-title-inner"><h1 class="page-header-title">${esc(page[0])}</h1></div></div></div></div>
  <div class="page-content-section"><div class="container"><div class="page-content user-content">${sample}</div></div></div>`;
}

function notFoundPage() {
  const list = catalog.filter((p) => p.displayPrice !== false).slice(0, 4);
  return `<div id="page-error" class="error-page-container"><section class="error-page-header page-header altar-page-head">
      <h1 class="error-page-title page-header-title"><span class="altar-es">Página no encontrada</span><span class="altar-en">Page not found</span></h1>
      <p class="error-page-subtitle altar-page-lead"><span class="altar-es">La página que estás buscando no existe.</span><span class="altar-en">The page you're looking for doesn't exist.</span></p>
      <a class="altar-page-link" href="${BASE}#/tienda"><span class="altar-es">Volver a la colección</span><span class="altar-en">Back to the collection</span></a>
    </section></div>
  <section class="section-related-products"><div class="container sim-related">
    <div class="heading-block h2"><span class="altar-es">También te puede gustar</span><span class="altar-en">You may also like</span></div>
    <div class="products-list-slider altar-related-grid" style="--altar-related-columns: 4; --altar-related-columns-mobile: 2;">
      <section class="products-section"><div><div class="products-section-container">${list.map((product) => productItem(product)).join("")}</div></div></section>
    </div>
  </div></section>`;
}

/* Contraseña (sections/password-logo.tpl + main-password.tpl, Figma 924:10108). #/password · #/password?error */
function passwordPage() {
  const error = (location.hash.split("?")[1] || "").includes("error");
  return `<header class="head-main head-main-password altar-password-head">
      <a class="altar-password-head__logo" href="./preview.html" aria-label="Altar"><img src="../static/images/altar-logo.svg" alt="" width="40" height="39"></a>
      <button type="button" class="altar-nav__layout-switch" data-altar-layout-toggle role="switch" aria-checked="false" aria-label="English"><span aria-hidden="true"></span></button>
    </header>
    <div class="password-section-layout"><div class="container"><div class="password-form-wrapper"><div class="password-form-content altar-password">
      <div class="altar-page-head"><h2 class="password-page-title page-header-title">Volvemos pronto</h2>
        <p class="altar-page-lead"><span class="altar-es">Estamos preparando la próxima colección. Si tenés la contraseña, entrá.</span><span class="altar-en">We're preparing the next collection. If you have the password, come in.</span></p></div>
      <form id="password-form" class="js-form form w-100 altar-login-form" data-sim-form data-success="Simulación: con la contraseña correcta se abre la tienda.">
        <div class="form-group"><label class="form-label" for="password"><span class="altar-es">Contraseña de acceso</span><span class="altar-en">Access password</span></label><input type="password" id="password" name="password" class="form-control">
          ${error ? '<div class="account-form-alert alert alert-danger"><span class="altar-es">La contraseña es incorrecta.</span><span class="altar-en">The password is incorrect.</span></div>' : ""}</div>
        <button class="btn btn-primary btn-big btn-block" type="submit"><span class="altar-es">Entrar</span><span class="altar-en">Enter</span></button>
        <div class="alert alert-success" data-sim-form-success style="display:none;"></div>
      </form></div></div></div></div>`;
}

/* ---------- Router ---------- */

const routes = [
  ["shop", /^\/(?:tienda)?$/, () => categoryPage({}), "category"],
  // The Star: a page of its own with the same layout as the collection (in Tiendanube, a category set in the header's "V2 · Enlace The Star").
  ["star", /^\/the-star$/, () => categoryPage({ star: true }), "category"],
  ["category", /^\/categoria\/([\w-]+)$/, (m) => categoryPage({ slug: m[1] }), "category"],
  ["search", /^\/buscar$/, () => categoryPage({ query: new URLSearchParams(location.hash.split("?")[1] || "").get("q") || "" }), "search"],
  ["product", /^\/producto\/([\w-]+)$/, (m) => productPage({ slug: m[1] }), "product"],
  ["cart", /^\/carrito$/, cartPage, "cart"],
  ["contact", /^\/contacto$/, contactPage, "contact"],
  ["login", /^\/cuenta\/login$/, loginPage, "account-login"],
  ["register", /^\/cuenta\/registro$/, registerPage, "account-register"],
  ["reset", /^\/cuenta\/recuperar$/, resetPage, "account-reset"],
  ["page", /^\/pagina\/([\w-]+)$/, (m) => contentPage({ slug: m[1] }), "page"],
  ["password", /^\/password$/, passwordPage, "password"],
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
  const commerceTemplates = new Set(["category", "search", "product", "cart", "contact", "page", "account-login", "account-register", "account-reset", "404"]);
  document.body.className = `template-${route.template}${commerceTemplates.has(route.template) ? " is-altar-commerce" : ""}`;
  const headerPage = ["shop", "category", "search", "product"].includes(route.name) ? "shop" : route.name === "star" ? "star" : route.name === "contact" ? "contacto" : "none";
  const header = $(".altar-nav");
  if (header) header.dataset.altarPage = headerPage;
  $$('[data-altar-page-link]').forEach((link) => {
    const active = link.dataset.altarPageLink === headerPage;
    link.classList.toggle("is-active", active);
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  $("[data-sim-view]").innerHTML = route.render();
  document.dispatchEvent(new Event("section:load")); // like Tiendanube: site helpers re-init on new markup
  const searchForm = $(".altar-nav [data-altar-search-form]");
  if (searchForm) {
    const onSearch = route.name === "search";
    const q = new URLSearchParams(location.hash.split("?")[1] || "").get("q") || "";
    header?.classList.toggle("is-search-open", onSearch);
    searchForm.hidden = !onSearch;
    if (onSearch) { searchForm.dataset.altarSearchResults = `${BASE}#/tienda`; $("input[name='q']", searchForm).value = q; }
    else delete searchForm.dataset.altarSearchResults;
  }
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
  if (!add) return; // "Consultar precio" state has no stock or quantity
  add.disabled = stock === 0;
  add.classList.toggle("nostock", stock === 0);
  add.classList.toggle("cart", stock !== 0);
  add.textContent = stock === 0 ? t("product.out_of_stock", "Sin stock") : t("product.add_to_cart", "Agregar al carrito");
  const label = $("[data-sim-stock]", root);
  label.textContent = stock === 0 ? t("product.out_of_stock", "Sin stock") : stock !== Infinity && stock <= 3 ? `${t("product.only_left", "¡Solo quedan")} ${stock} ${t("product.in_stock", "en stock!")}` : "";
  $("[data-sim-add-error]", root).style.display = "none";
}

/* ---------- Simulation map (not part of the theme) ---------- */

function renderMap(active) {
  const pages = [["shop", "#/tienda", "Categoría / tienda"], ["product", "#/producto/test-producto", "Producto (Figma 548:6520)"], ["product", "#/producto/corset-saturno", "Producto con colores y poco stock"],
    ["product", "#/producto/sombrero-sol", "Producto sin precio"], ["search", "#/buscar?q=saco", "Resultados de búsqueda"], ["search", "#/buscar?q=zzz", "Búsqueda sin resultados"],
    ["cart", "#/carrito", "Página de carrito"], ["contact", "#/contacto?arrepentimiento", "Contacto · Botón de arrepentimiento"], ["contact", "#/contacto?producto=sombrero-sol", "Contacto · consulta por producto"], ["contact", "#/contacto?arrepentimiento&enviado", "Contacto · enviado"], ["login", "#/cuenta/login", "Login"], ["register", "#/cuenta/registro", "Registro"],
    ["page", "#/pagina/cambios", "Página de contenido"], ["404", "#/no-existe", "404"], ["password", "#/password", "Contraseña de tienda"], ["password", "#/password?error", "Contraseña incorrecta"]];
  const map = $("[data-sim-map]");
  if (!map) return;
  const open = map.dataset.open === "true";
  map.innerHTML = `<button type="button" class="sim-map__toggle" data-sim-map-toggle>${open ? "Cerrar" : "Mapa de la simulación"}</button>
    ${open ? `<div class="sim-map__body">
      <p class="sim-map__label">Páginas</p>${pages.map(([name, href, label]) => `<a href="${href}" class="${name === active && location.hash.startsWith(href.split("?")[0]) ? "is-active" : ""}">${label}</a>`).join("")}
      <p class="sim-map__label">Interacciones del header</p>
      <button type="button" data-sim-open="#modal-cart">Abrir carrito lateral</button>
      <button type="button" data-sim-search-open>Abrir buscador</button>
      <button type="button" data-sim-menu>Abrir menú (tablet / celular)</button>
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
    const sortOption = target.closest("[data-sim-sort-value]");
    if (sortOption) {
      event.preventDefault();
      location.hash = `${location.hash.split("?")[0]}?orden=${sortOption.dataset.simSortValue}`;
      closeModal("#modal-sort-by");
      return;
    }
    const opener = target.closest(".js-modal-open-private, [data-sim-open]");
    if (opener) { event.preventDefault(); openModal(opener.dataset.target || opener.dataset.simOpen); return; }
    const closer = target.closest(".js-modal-close-private");
    if (closer) { closeModal(closer.dataset.target); if (closer.matches("[data-sim-open-cart]")) openModal("#modal-cart"); if (closer.tagName !== "A" || closer.getAttribute("href") === "#") event.preventDefault(); return; }
    if (target.closest("a[href^='#/']")) $$(".modal.modal-visible").forEach((m) => closeModal(`#${m.id}`));
    const sameRoute = target.closest("a[href^='#/']");
    if (sameRoute && sameRoute.getAttribute("href") === location.hash) { event.preventDefault(); renderRoute(); scrollTo(0, 0); }

    const item = target.closest(".js-cart-item");
    if (item && target.closest("[data-sim-remove]")) setQty(item.dataset.slug, item.dataset.variant, 0);
    const step = target.closest("[data-sim-qty]");
    if (item && step) {
      const line = readCart().find((l) => l.slug === item.dataset.slug && l.variant === item.dataset.variant);
      setQty(item.dataset.slug, item.dataset.variant, line.qty + Number(step.dataset.simQty));
    }
    const calc = target.closest("[data-sim-calc]");
    if (calc) calculateShipping(calc.closest("[data-sim-shipping]"));
    const changeZip = target.closest("[data-sim-shipping-change]");
    if (changeZip) {
      event.preventDefault();
      const form = changeZip.closest("[data-sim-shipping]");
      $("[data-sim-shipping-head]", form).classList.replace("with-zip", "with-form");
      $("[data-sim-shipping-zip]", form).classList.remove("transition-up-active");
      $("[data-sim-shipping-form]", form).classList.add("transition-up-active");
      $("[data-sim-shipping-results]", form).style.display = "none";
      $("input", form).focus();
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
    if (target.closest("[data-sim-menu]")) { event.stopPropagation(); $("[data-altar-menu-toggle]").click(); }
    if (target.closest("[data-sim-fill]")) writeCart([{ slug: "corset-saturno", variant: "Arena", qty: 1 }, { slug: "velo-neptuno", variant: "", qty: 2 }]);
    if (target.closest("[data-sim-empty]")) writeCart([]);
  });

  document.addEventListener("submit", (event) => {
    const productForm = event.target.closest("[data-sim-product-form]");
    if (productForm) {
      event.preventDefault();
      const root = $("[data-sim-product]");
      const product = productBySlug(root.dataset.simProduct);
      // Tiendanube's "contact" state sends the customer to the contact form (data-contact-url).
      if ($("[data-sim-contact]", root)) { location.hash = "#/contacto"; return; }
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
    if (event.target.closest("[data-sim-cart-form]")) { event.preventDefault(); return; }
    const form = event.target.closest("[data-sim-form]");
    if (form) {
      event.preventDefault();
      const ok = $("[data-sim-form-success]", form);
      ok.textContent = form.dataset.success;
      ok.style.display = "block";
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    closeSearch();
    $$(".modal.modal-visible").forEach((m) => closeModal(`#${m.id}`));
  });
  if (HAS_VIEW) window.addEventListener("hashchange", () => { renderRoute(); scrollTo(0, 0); });
}

await loadThemeFiles();
// ?min=30000 simulates settings.cart_minimum_value (cart-button.tpl: minimum purchase notice)
store.cartMinimum = Number(new URLSearchParams(location.search).get("min")) || 0;
renderModals();
initSearch();
initEvents();
renderCart();
if (HAS_VIEW) renderRoute();

// ?open=cart | menu | search | filters opens that panel on load (handy for screenshots and sharing a state).
const openOnLoad = new URLSearchParams(location.search).get("open");
if (openOnLoad === "search") $(".js-search-trigger, [data-altar-search-open]")?.click();
else if (openOnLoad === "menu") $("[data-altar-menu-toggle]").click();
else if (openOnLoad) openModal({ cart: "#modal-cart", menu: "#nav-hamburger", filters: "#modal-filters" }[openOnLoad] || `#${openOnLoad}`);
