import { StorefrontAdapter } from "./storefront-adapter.js";

const adapter = new StorefrontAdapter();
const money = new Intl.NumberFormat(adapter.getStore().locale, {
  style: "currency",
  currency: adapter.getStore().currency,
  maximumFractionDigits: 0,
});

const escapeHtml = (value = "") => String(value).replace(/[&<>'"]/g, (character) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "'": "&#039;",
  '"': "&quot;",
})[character]);

function productCard(product) {
  return `
    <article class="product-card" data-store="product-item-${escapeHtml(product.id)}">
      <a class="product-card__media" href="${adapter.productUrl(product)}" aria-label="Ver ${escapeHtml(product.name)}">
        <span class="product-orbit" style="--product-color:${product.color}"></span>
      </a>
      <div class="product-card__body">
        <p>${escapeHtml(product.category)}</p>
        <h2><a href="${adapter.productUrl(product)}">${escapeHtml(product.name)}</a></h2>
        <strong>${money.format(product.price)}</strong>
      </div>
    </article>`;
}

function catalogView() {
  return `
    <section class="catalog-hero">
      <p class="eyebrow">Modo de prueba</p>
      <h1>Catálogo conectado</h1>
      <p>Los datos son simulados, pero los enlaces, variantes y el carrito ya respetan el recorrido que luego conectaremos a Tiendanube.</p>
    </section>
    <section class="product-grid" data-store="products-grid">
      ${adapter.getProducts().map(productCard).join("")}
    </section>`;
}

function productView(product) {
  if (!product) return `<section class="empty-state"><p class="eyebrow">404</p><h1>Producto no encontrado</h1><a href="./storefront.html">Volver a la tienda</a></section>`;
  const availableVariant = product.variants.find((variant) => variant.stock > 0);
  return `
    <section class="product-detail" data-store="product-detail">
      <div class="product-detail__media" style="--product-color:${product.color}">
        <span class="product-orbit product-orbit--large"></span>
      </div>
      <div class="product-detail__content">
        <a class="back-link" href="./storefront.html">← Volver a la tienda</a>
        <p class="eyebrow">${escapeHtml(product.category)}</p>
        <h1>${escapeHtml(product.name)}</h1>
        <p class="product-price" data-store="product-price">${money.format(product.price)}</p>
        <p>${escapeHtml(product.description)}</p>
        <form data-product-form data-product-id="${escapeHtml(product.id)}">
          <label for="variant">Terminación</label>
          <select id="variant" name="variant">
            ${product.variants.map((variant) => `<option value="${escapeHtml(variant.id)}" ${variant.stock === 0 ? "disabled" : ""}>${escapeHtml(variant.label)}${variant.stock === 0 ? " — Agotado" : ""}</option>`).join("")}
          </select>
          <label for="quantity">Cantidad</label>
          <input id="quantity" name="quantity" type="number" min="1" max="9" value="1">
          <button class="primary-button" type="submit" data-store="product-buy-button" data-component="product.add-to-cart" ${availableVariant ? "" : "disabled"}>Agregar al carrito</button>
          <p class="form-status" data-form-status aria-live="polite"></p>
        </form>
      </div>
    </section>`;
}

function cartRows() {
  const items = adapter.hydrateCart();
  if (!items.length) return `<div class="cart-empty"><p>Tu carrito está vacío.</p><a href="./storefront.html">Ver productos</a></div>`;
  return items.map(({ product, variant, quantity }) => `
    <article class="cart-item" data-product-id="${escapeHtml(product.id)}" data-variant-id="${escapeHtml(variant.id)}">
      <span class="cart-item__dot" style="--product-color:${product.color}"></span>
      <div><strong>${escapeHtml(product.name)}</strong><small>${escapeHtml(variant.label)}</small><span>${money.format(product.price)}</span></div>
      <div class="quantity-control" aria-label="Cantidad de ${escapeHtml(product.name)}">
        <button type="button" data-quantity="${quantity - 1}" aria-label="Restar">−</button>
        <span>${quantity}</span>
        <button type="button" data-quantity="${quantity + 1}" aria-label="Sumar">+</button>
      </div>
    </article>`).join("");
}

function renderCart() {
  const items = adapter.hydrateCart();
  const count = items.reduce((total, item) => total + item.quantity, 0);
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  document.querySelector("[data-cart-count]").textContent = count;
  document.querySelector("[data-cart-items]").innerHTML = cartRows();
  document.querySelector("[data-cart-total]").textContent = money.format(total);
  document.querySelector("[data-checkout]").disabled = !items.length;
}

function openCart() {
  document.body.classList.add("cart-is-open");
  document.querySelector("[data-cart-drawer]").setAttribute("aria-hidden", "false");
}

function closeCart() {
  document.body.classList.remove("cart-is-open");
  document.querySelector("[data-cart-drawer]").setAttribute("aria-hidden", "true");
}

const params = new URLSearchParams(window.location.search);
const product = params.get("product") ? adapter.getProduct(params.get("product")) : null;
document.querySelector("[data-page-content]").innerHTML = params.has("product") ? productView(product) : catalogView();
renderCart();

document.addEventListener("submit", (event) => {
  const form = event.target.closest("[data-product-form]");
  if (!form) return;
  event.preventDefault();
  const data = new FormData(form);
  adapter.addToCart(form.dataset.productId, data.get("variant"), Number(data.get("quantity")) || 1);
  form.querySelector("[data-form-status]").textContent = "Producto agregado.";
  renderCart();
  openCart();
});

document.addEventListener("click", (event) => {
  if (event.target.closest("[data-cart-open]")) openCart();
  if (event.target.closest("[data-cart-close]")) closeCart();
  const quantityButton = event.target.closest("[data-quantity]");
  if (quantityButton) {
    const item = quantityButton.closest("[data-product-id]");
    adapter.updateQuantity(item.dataset.productId, item.dataset.variantId, Number(quantityButton.dataset.quantity));
    renderCart();
  }
  if (event.target.closest("[data-checkout]")) {
    document.querySelector("[data-cart-note]").textContent = "En Tiendanube, este botón abrirá el checkout nativo.";
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeCart();
});
