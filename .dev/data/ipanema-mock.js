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
// Data mirrors the filled-in cards of Figma 755:3784 (27-nov): every card complete (price, transfer, stock, colours),
// and the special cases last — many colours (Top Obsidiana), sale (Parachute Mercurio), long name + one colour
// (Saco Alba), sold out (Cargo Magma). Colours use the names of the theme's swatch map (item-colors.tpl).
// The «-2» photos are simulation-only stand-ins (a detail crop of the first photo) so the hover crossfade can be seen.
const each = (colors, n) => Object.fromEntries(colors.map((c) => [c, n]));
const C = {
  sombrero: ["Verde agua", "Arena", "Hueso"], saco: ["Óxido", "Negro"], bolso: ["Verde agua", "Salvia", "Negro"],
  anillo: ["Negro", "Hueso"], duna: ["Arena", "Óxido", "Hueso", "Negro"], corset: ["Verde agua", "Ciruela"],
  jade: ["Salvia", "Arena", "Azul niebla"], velo: ["Azul niebla", "Hueso"], kimono: ["Negro", "Ciruela"],
  top: ["Ciruela", "Negro", "Verde agua", "Arena", "Terracota", "Hueso"], parachute: ["Azul niebla", "Salvia", "Arena"],
};
const fichaColors = ["Negro", "Gris", "Bordó", "Beige", "Amarillo", "Verde agua"];
const fichaSizes = ["37", "36", "38", "39", "40", "41", "42", "43"];
export const products = [
  { slug: "sombrero-sol", name: "Sombrero Sol", category: "productos", price: 85000, images: [img("sombrero-sol"), img("sombrero-sol-2")], description, options: { Color: C.sombrero }, stock: each(C.sombrero, 3) },
  { slug: "saco-crisantelmo", name: "Saco Crisantelmo", category: "productos", price: 420000, images: [img("saco-crisantelmo"), img("saco-crisantelmo-2")], description, options: { Color: C.saco }, stock: each(C.saco, 2) },
  { slug: "bolso-cauce", name: "Bolso Cauce", category: "productos", price: 180000, images: [img("bolso-cauce"), img("bolso-cauce-2")], description, options: { Color: C.bolso }, stock: each(C.bolso, 1) },
  { slug: "anillo-onix", name: "Anillo Ónix", category: "productos", price: 60000, images: [img("anillo-onix"), img("anillo-onix-2")], description, options: { Color: C.anillo }, stock: each(C.anillo, 4) },
  { slug: "vestido-duna", name: "Vestido Duna X Madeo Knits", category: "productos", price: 200000, images: [img("vestido-duna"), img("vestido-duna-2")], description, options: { Color: C.duna }, stock: each(C.duna, 2) },
  { slug: "corset-saturno", name: "Corset Saturno", category: "productos", price: 100000, images: [img("corset-saturno"), img("corset-saturno-2")], description, options: { Color: C.corset }, stock: each(C.corset, 2) },
  { slug: "camisa-jade", name: "Camisa Jade", category: "productos", price: 300000, images: [img("camisa-jade"), img("camisa-jade-2")], description, options: { Color: C.jade }, stock: each(C.jade, 3) },
  { slug: "velo-neptuno", name: "Velo Neptuno", category: "productos", price: 15000, images: [img("velo-neptuno"), img("velo-neptuno-2")], description, options: { Color: C.velo }, stock: each(C.velo, 1) },
  { slug: "kimono-luna", name: "Kimono Luna", category: "productos", price: 250000, images: [img("kimono-luna"), img("kimono-luna-2")], description, options: { Color: C.kimono }, stock: each(C.kimono, 2) },
  { slug: "top-obsidiana", name: "Top Obsidiana", category: "productos", price: 50000, images: [img("top-obsidiana"), img("top-obsidiana-2")], description, options: { Color: C.top }, stock: each(C.top, 3) },
  { slug: "parachute-mercurio", name: "Parachute Mercurio", category: "productos", price: 240000, comparePrice: 300000, images: [img("parachute-mercurio"), img("parachute-mercurio-2")], description, options: { Color: C.parachute }, stock: each(C.parachute, 2) },
  { slug: "saco-alba", name: "Saco Alba de Lino Bordado a Mano", category: "productos", price: 400000, images: [img("saco-alba"), img("saco-alba-2")], description, options: {}, stock: { "": 1 } },
  { slug: "cargo-magma", name: "Cargo Magma", category: "productos", price: 70000, images: [img("cargo-magma"), img("cargo-magma-2")], description, options: {}, stock: { "": 0 } },
  // Ficha de producto (Figma 755:3775). Not part of the shop grid, reachable at #/producto/test-producto.
  // Amarillo is the sold-out colour (struck circle), as in Figma.
  { slug: "test-producto", name: "Test producto", category: "productos", price: 100000, comparePrice: 120000, hidden: true,
    images: [1, 2, 3, 4, 5].map((n) => img(`test-producto-${n}`)), description,
    options: { Color: fichaColors, Talle: fichaSizes },
    stock: Object.fromEntries(fichaColors.flatMap((c) => fichaSizes.map((t) => [`${c} / ${t}`, c === "Amarillo" ? 0 : 10]))),
    related: ["parachute-mercurio", "corset-saturno", "velo-neptuno", "sombrero-sol"] },
];

// Stock for a variant label ("" when the product has no variants). null stock = unlimited.
export function stockFor(product, label) {
  if (!product.stock) return Infinity;
  return product.stock[label] ?? 0;
}
