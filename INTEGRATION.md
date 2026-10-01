# Integración futura con Tiendanube

Este repositorio se divide en dos capas deliberadamente separadas.

## 1. Capa propia de Altar

Se puede diseñar y probar sin acceso a una tienda:

- `sections/altar-solar.tpl`
- `static/models/solar-system.glb`
- `static/js/solar-experience.js`
- los estilos `.altar-solar*`
- la identidad visual y las animaciones

La prueba comercial está en `.dev/storefront.html`. Usa datos locales y `localStorage`; no intenta reemplazar el backend de Tiendanube.

## 2. Capa que debe provenir del tema oficial

Al tener acceso al plan, se crea o descarga una copia de Ipanema y se conservan sus implementaciones completas para:

- layout, encabezado, pie y navegación
- listado, búsqueda, filtros y paginación
- detalle, variantes, stock, cuotas y cálculo de envío
- formulario nativo de agregar al carrito
- carrito, carrito lateral y checkout
- cuenta, contacto, páginas legales, blog, contraseña y 404
- slots del Nube SDK y atributos `data-store` / `data-component`

No se deben convertir las páginas provisionales actuales en una implementación paralela de comercio. La integración correcta consiste en trasladar la capa propia de Altar al tema oficial y conectar sus ajustes a datos reales.

## Contrato visual probado localmente

La vista de prueba cubre el recorrido:

1. catálogo → URL dinámica de producto;
2. producto → variante disponible y cantidad;
3. agregar → carrito persistente;
4. carrito → aumentar, disminuir o eliminar;
5. iniciar compra → punto de reemplazo por el checkout nativo.

Los objetos del adaptador local equivalen a los datos futuros:

| Prueba local | Producción Tiendanube |
| --- | --- |
| `mockStore.products` | colección/productos de la plataforma |
| `productUrl()` | `product.url` |
| `variants` | variantes reales del producto |
| `addToCart()` | formulario y eventos nativos |
| `localStorage` | carrito administrado por Tiendanube |
| botón de checkout simulado | `store.cart_url` / checkout nativo |

## Regla de migración

Antes de publicar, todo dato comercial simulado debe desaparecer. En producción no deben quedar precios, stock, URLs de producto o identificadores escritos manualmente.
