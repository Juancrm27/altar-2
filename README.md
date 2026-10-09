# Altar — tema experimental para Tiendanube

Prototipo de portada inmersiva construido como **tema seccionable** de Tiendanube. La sección `altar-solar` usa Three.js para renderizar el sistema solar exportado desde Blender y GSAP para sus rotaciones suaves. El recorrido contiene dos pantallas exactas: una sección de cielo con los planetas fijos y una segunda sección con el degradado terrestre.

## Estructura

El tema parte del **Ipanema oficial** de Tiendanube (copia de referencia en `../Ipanema-Original`). Altar se suma como una variante visual sobre sus secciones, bloques, hooks y formularios nativos. Las páginas comerciales conservan la lógica de Ipanema, aunque algunos archivos source fueron adaptados para la grilla editorial y la ficha de producto.

**Capa Altar (lo nuestro):**

- `sections/altar-solar.tpl`: portada 3D editable desde el administrador.
- `snippets/header/altar-header.tpl` / `sections/altar-footer.tpl`: variantes editables del header y footer, usadas por `templates/layout/header.json` y `footer.json`.
- `static/css/altar.css`: portada, variante comercial, catálogo editorial y ficha Altar.
- `static/js/altar-site.js`: comportamiento liviano compartido por todas las páginas.
- `static/js/solar-experience.js`: bundle 3D cargado únicamente en la home (fuente en `.dev/src/`).
- `static/models/`, `static/images/altar-*`, `static/fonts/`: modelos de Blender, imágenes y tipografía.
- `layouts/layout.tpl`: es el de Ipanema con un bloque marcado "Altar" (tokens, `altar.css`, intro y script) y sin footer en la portada.
- Ajustes globales: grupo "Identidad de Altar" en `config/settings_schema.json` (ids con prefijo `altar_`).

**Núcleo Ipanema:** carrito, cuenta, filtros, variantes, stock, cuotas, envíos, checkout, formularios, slots Nube SDK y atributos `data-store`. Al personalizarlo se deben conservar esos puntos de integración y preferir variantes seleccionables, settings y reglas acotadas en `altar.css`.

`.dev/` contiene la fuente JavaScript y herramientas locales; Tiendanube CLI ignora carpetas ocultas.

## Desarrollo en VS Code

```bash
cd .dev
npm install
npm run build:watch
```

Para una previsualización rápida sin Twig, abrir un servidor local desde la raíz y visitar `/.dev/preview.html`.

```bash
cd .dev
npm run preview
```

- Experiencia 3D: `http://127.0.0.1:4173/.dev/preview.html`
- Flujo comercial simulado: `http://127.0.0.1:4173/.dev/storefront.html`
- **Simulación Ipanema:** `http://127.0.0.1:4173/.dev/ipanema.html`. Tiene el header de Altar y las piezas mínimas de Ipanema: carrito lateral, buscador con sugerencias, menú móvil, categoría con filtros y orden, producto con variantes y stock, carrito, contacto, login/registro, páginas de contenido y 404. El botón "Mapa de la simulación" lista todas las páginas y los estados. Usa el CSS real de Ipanema y lee `config/settings_data.json` (colores, tipografías, botones) y `translations/es_AR.json`, así que refleja los cambios en esos archivos. `?open=cart|search|menu|filters` abre ese panel al cargar. Es una maqueta: el HTML real lo renderiza Tiendanube.

El flujo comercial permite probar catálogo, ficha de producto, variantes y carrito sin una cuenta activa. Está aislado en `.dev/` y nunca debe publicarse como backend real. Ver `INTEGRATION.md` para el mapa de migración.

La vista 3D incluye un controlador de iluminación local que comienza minimizado. Los valores quedan guardados en el navegador y se pueden devolver al estado inicial de la composición con **Restablecer**. El panel solo se crea cuando el contenedor tiene `data-lighting-controls`, atributo que no está presente en la sección publicada del tema.

La composición del hero separa el canvas 3D, el postefecto `grainy blur` y la interfaz. El blur y el grano afectan únicamente al canvas; textos, logos, ayudas y controles deben conservar un `z-index` superior a la clase `.altar-solar__effect`.

## Conectar con Tiendanube

La vía oficial actual para temas seccionables usa la Tiendanube CLI y un tema Ipanema creado o descargado desde la tienda. Antes de publicar, sincronizá este trabajo con una instalación real de Ipanema para conservar todos los templates comerciales de producto, categoría, carrito, cuenta y checkout.

```bash
nuvemshop theme authorize
nuvemshop theme create --base-theme "ipanema" --title "Altar"
nuvemshop theme pull --theme-id "<ID>"
nuvemshop theme diff --detailed
nuvemshop theme push
```

No subas `.nuvem` al repositorio: contiene la configuración de acceso a la tienda.

## Estado actual

- La portada 3D es una sección reutilizable.
- El catálogo local usa datos ficticios para validar la experiencia.
- Catálogo y ficha de producto usan la lógica real de Ipanema con una variante visual Altar.
- La simulación local usa datos ficticios y no reemplaza la validación del borrador real de Tiendanube.
- Antes de publicar, probar filtros, carga infinita, variantes, stock, cuotas, envío, carrito y aplicaciones instaladas en el borrador.

## Preview online (Netlify)

Netlify solo publica una copia del preview local para revisar el diseño; la tienda final es el tema de Tiendanube.

- `netlify.toml` define el build (`node .dev/netlify-build.mjs`) y publica `dist/` (generado, no se commitea).
- El build copia `.dev/preview.html` y el storefront de prueba a `dist/preview/` y los assets a `dist/static/`, así las rutas `../static/...` siguen funcionando.
- No instala dependencias: antes de pushear cambios en `.dev/src/solar-experience.js`, compilar con `cd .dev && npm run build` (el JS compilado vive en `static/js/`).
- El sitio responde con `X-Robots-Tag: noindex` para que no lo indexen.
- Probar local: `node .dev/netlify-build.mjs && cd dist && python3 -m http.server`.
