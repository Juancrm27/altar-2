// Catalog for the Ipanema simulation (.dev/ipanema.html), taken from Figma:
// Tienda 438:670 (names, prices, stock, variants) and Producto 548:6520 (Test producto).
// Images were exported from those frames into data/figma/.
const img = (name) => `./data/figma/${name}.jpg`;
const description = "Descripcion del text test, descripcion del text test, descripcion del text test, descripcion del text test, descripcion del text test, descripcion del text test, descripcion del text test, descripcion del text test.";

export const store = {
  name: "Altar",
  currency: "ARS",
  locale: "es-AR",
  freeShippingFrom: 150000,
  installments: 6,
  transferDiscount: 0.1,
  transferName: "Efectivo/transferencia",
  categories: [
    { slug: "productos", name: "Productos" },
  ],
};

// Order matches the Figma grid, so positions 3 and 10 are the featured cards.
// displayPrice: false = Tiendanube's "Mostrar precio" off (Figma cards with name only).
export const products = [
  { slug: "sombrero-sol", name: "Sombrero Sol", category: "productos", price: 0, displayPrice: false, images: [img("sombrero-sol")], description, options: {}, stock: null },
  { slug: "saco-crisantelmo", name: "Saco Crisantelmo", category: "productos", price: 0, displayPrice: false, images: [img("saco-crisantelmo")], description, options: {}, stock: null },
  { slug: "bolso-cauce", name: "Bolso Cauce", category: "productos", price: 0, displayPrice: false, images: [img("bolso-cauce")], description, options: {}, stock: null },
  { slug: "anillo-onix", name: "Anillo Ónix", category: "productos", price: 0, displayPrice: false, images: [img("anillo-onix")], description, options: {}, stock: null },
  { slug: "vestido-duna", name: "Vestido Duna X Madeo Knits", category: "productos", price: 200000, images: [img("vestido-duna")], description, options: {}, stock: { "": 2 } },
  { slug: "corset-saturno", name: "Corset Saturno", category: "productos", price: 100000, images: [img("corset-saturno")], description,
    options: { Color: ["Arena", "Negro"] }, swatches: { Arena: "#c2b280" }, stock: { "Arena": 2, "Negro": 2 } },
  { slug: "camisa-jade", name: "Camisa Jade", category: "productos", price: 300000, images: [img("camisa-jade")], description,
    options: { Color: ["Arena", "Negro"] }, swatches: { Arena: "#c2b280" }, stock: { "Arena": 2, "Negro": 2 } },
  { slug: "velo-neptuno", name: "Velo Neptuno", category: "productos", price: 15000, images: [img("velo-neptuno")], description, options: {}, stock: null },
  { slug: "kimono-luna", name: "Kimono Luna", category: "productos", price: 250000, images: [img("kimono-luna")], description,
    options: { Color: ["Hueso", "Negro"] }, swatches: { Hueso: "#eae0c8" }, stock: { "Hueso": 2, "Negro": 2 } },
  { slug: "top-obsidiana", name: "Top Obsidiana", category: "productos", price: 50000, images: [img("top-obsidiana")], description, options: {}, stock: null },
  { slug: "parachute-mercurio", name: "Parachute Mercurio", category: "productos", price: 300000, images: [img("parachute-mercurio")], description,
    options: { Color: ["Verde", "Negro"] }, stock: null },
  { slug: "saco-alba", name: "Saco Alba", category: "productos", price: 400000, images: [img("saco-alba")], description,
    options: { Color: ["Blanco", "Negro"] }, stock: null },
  { slug: "cargo-magma", name: "Cargo Magma", category: "productos", price: 70000, images: [img("cargo-magma")], description, options: {}, stock: null },
  // Ficha de producto (Figma 548:6520). Not part of the shop grid, reachable at #/producto/test-producto.
  { slug: "test-producto", name: "Test producto", category: "productos", price: 100000, comparePrice: 120000, hidden: true,
    images: [1, 2, 3, 4, 5].map((n) => img(`test-producto-${n}`)), description,
    options: { Color: ["Celeste", "Gris", "Bordó", "Beige", "Amarillo", "Verde agua"], Talle: ["37", "36", "38", "39", "40", "41", "42", "43"] }, stock: null,
    related: ["parachute-mercurio", "corset-saturno", "velo-neptuno", "sombrero-sol"] },
];

// Stock for a variant label ("" when the product has no variants). null stock = unlimited.
export function stockFor(product, label) {
  if (!product.stock) return Infinity;
  return product.stock[label] ?? 0;
}
