export const mockStore = {
  name: "Altar",
  currency: "ARS",
  locale: "es-AR",
  navigation: [
    { label: "Inicio", href: "./preview.html" },
    { label: "Tienda", href: "./storefront.html" },
  ],
  products: [
    {
      id: "altar-01",
      slug: "altar-orbita",
      name: "Órbita",
      category: "Objetos",
      price: 68000,
      description: "Pieza de prueba para validar la futura ficha de producto de Tiendanube.",
      color: "#d68a62",
      variants: [
        { id: "altar-01-natural", label: "Natural", stock: 4 },
        { id: "altar-01-negro", label: "Negro", stock: 2 },
      ],
    },
    {
      id: "altar-02",
      slug: "altar-eclipse",
      name: "Eclipse",
      category: "Objetos",
      price: 82000,
      description: "Producto simulado con variantes, stock y flujo completo de carrito.",
      color: "#71809c",
      variants: [
        { id: "altar-02-cobre", label: "Cobre", stock: 3 },
        { id: "altar-02-plata", label: "Plata", stock: 0 },
      ],
    },
    {
      id: "altar-03",
      slug: "altar-tierra",
      name: "Tierra",
      category: "Ediciones",
      price: 54000,
      description: "Edición de prueba para revisar estados disponibles y agotados.",
      color: "#9fb3a9",
      variants: [
        { id: "altar-03-unica", label: "Única", stock: 6 },
      ],
    },
  ],
};
