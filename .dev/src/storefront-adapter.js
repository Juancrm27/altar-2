import { mockStore } from "../data/mock-store.js";

const STORAGE_KEY = "altar-preview-cart-v1";

/**
 * Contrato de datos del prototipo.
 * En producción Tiendanube reemplaza este adaptador con objetos Twig,
 * formularios nativos y eventos del Nube SDK; la interfaz visual no cambia.
 */
export class StorefrontAdapter {
  constructor(store = mockStore) {
    this.store = store;
  }

  getStore() {
    return this.store;
  }

  getProducts() {
    return this.store.products;
  }

  getProduct(slug) {
    return this.store.products.find((product) => product.slug === slug) || null;
  }

  productUrl(product) {
    return `./storefront.html?product=${encodeURIComponent(product.slug)}`;
  }

  readCart() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
      return [];
    }
  }

  writeCart(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    window.dispatchEvent(new CustomEvent("altar:cart-change", { detail: items }));
  }

  addToCart(productId, variantId, quantity = 1) {
    const items = this.readCart();
    const existing = items.find((item) => item.productId === productId && item.variantId === variantId);
    if (existing) existing.quantity += quantity;
    else items.push({ productId, variantId, quantity });
    this.writeCart(items);
  }

  updateQuantity(productId, variantId, quantity) {
    const items = this.readCart();
    const item = items.find((entry) => entry.productId === productId && entry.variantId === variantId);
    if (!item) return;
    item.quantity = Math.max(0, quantity);
    this.writeCart(items.filter((entry) => entry.quantity > 0));
  }

  hydrateCart() {
    return this.readCart().flatMap((item) => {
      const product = this.store.products.find((entry) => entry.id === item.productId);
      const variant = product?.variants.find((entry) => entry.id === item.variantId);
      return product && variant ? [{ ...item, product, variant }] : [];
    });
  }
}
