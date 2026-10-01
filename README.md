# Altar — tema experimental para Tiendanube

Prototipo de portada inmersiva construido como **tema seccionable** de Tiendanube. La sección `altar-solar` usa Three.js para renderizar el sistema solar exportado desde Blender y GSAP para sus rotaciones suaves. El recorrido contiene dos pantallas exactas: una sección de cielo con los planetas fijos y una segunda sección con el degradado terrestre.

## Estructura

- `layouts/`: shell HTML/Twig de Tiendanube.
- `sections/altar-solar.tpl`: sección 3D editable desde el administrador.
- `templates/pages/home.json`: composición de la portada.
- `static/models/solar-system.glb`: modelo exportado desde Blender.
- `static/models/planet-stones.glb`: nueve piedras exportadas desde Blender, una por planeta, para la composición terrestre espejada.
- `static/css/`: estilos del storefront.
- `static/js/solar-experience.js`: bundle listo para publicar.
- `.dev/`: fuente JavaScript y herramientas locales; Tiendanube CLI ignora carpetas ocultas.

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
- Las plantillas comerciales del tema siguen siendo marcadores de posición hasta importar el tema oficial.
- No publicar este scaffold directamente sobre una tienda activa.
