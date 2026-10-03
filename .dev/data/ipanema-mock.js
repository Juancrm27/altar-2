// Fake catalog for the Ipanema simulation (.dev/ipanema.html). Images are Ipanema's own placeholders.
const img = (n) => `../static/images/placeholders/products/product-${n}.webp`;

export const store = {
  name: "Altar",
  currency: "ARS",
  locale: "es-AR",
  freeShippingFrom: 150000,
  installments: 6,
  categories: [
    { slug: "objetos", name: "Objetos" },
    { slug: "amuletos", name: "Amuletos" },
    { slug: "ediciones", name: "Ediciones" },
  ],
};

export const products = [
  { slug: "orbita", name: "Órbita", category: "objetos", price: 68000, images: [img(1), img(2)],
    description: "Pieza tallada a mano. Cada unidad es distinta.", options: { Color: ["Natural", "Negro"] }, stock: { "Natural": 4, "Negro": 2 } },
  { slug: "eclipse", name: "Eclipse", category: "objetos", price: 82000, comparePrice: 96000, images: [img(3), img(4)],
    description: "Con variante agotada para ver el estado sin stock.", options: { Metal: ["Cobre", "Plata"] }, stock: { "Cobre": 3, "Plata": 0 } },
  { slug: "tierra", name: "Tierra", category: "ediciones", price: 54000, images: [img(5)],
    description: "Producto sin variantes.", options: {}, stock: { "": 6 } },
  { slug: "piedra-luna", name: "Piedra luna", category: "amuletos", price: 39000, images: [img(6), img(7)],
    description: "Dos ejes de variantes: talle y color.", options: { Talle: ["S", "M", "L"], Color: ["Rosa", "Gris"] }, stock: null },
  { slug: "fuego", name: "Fuego", category: "amuletos", price: 45000, freeShipping: true, images: [img(7)],
    description: "Con etiqueta de envío gratis.", options: {}, stock: { "": 3 } },
  { slug: "agua", name: "Agua", category: "amuletos", price: 45000, images: [img(8)],
    description: "Producto agotado: no se puede agregar al carrito.", options: {}, stock: { "": 0 } },
  { slug: "aire", name: "Aire", category: "objetos", price: 120000, comparePrice: 150000, images: [img(2), img(1)],
    description: "Con precio promocional.", options: {}, stock: { "": 5 } },
  { slug: "altar-mini", name: "Altar mini", category: "ediciones", price: 28000, images: [img(4)],
    description: "Pieza chica para completar el carrito.", options: {}, stock: { "": 10 } },
];

// Stock for a variant label ("" when the product has no variants). null stock = unlimited.
export function stockFor(product, label) {
  if (!product.stock) return Infinity;
  return product.stock[label] ?? 0;
}
