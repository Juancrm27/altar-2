# Altar Web — estado del proyecto

> **Última actualización:** 19 de noviembre de 2026.
>
> Último commit en `main`: `910fb2c` (Newsletter: estado enviado en el footer y nav sin fondo).
>
> Este archivo sirve para saber dónde quedamos cuando retomemos. Está ordenado así: qué hay, dónde vive cada cosa, qué reglas seguimos, qué falta y qué decisiones siguen abiertas.

---

## 1. Resumen en una línea

**Hecho:**
- El diseño v3 está terminado en Figma: todas las páginas que Tiendanube necesita, en ES y EN, y en desktop, tablet y mobile.
- Ya se pasaron al tema: la home, Colección, Collab, Producto, el carrito lateral, Ingresar, contacto, búsqueda, 404, contraseña y las páginas de contenido.
- El tema está subido a GitHub y la vista de revisión se publica sola en Netlify.

**Falta:**
- Pasar al tema las páginas de cuenta, la página de carrito, el aviso de cookies y el descuento exclusivo.
- Subir el tema a la tienda real y probarlo ahí. **Nada se probó todavía en una tienda Tiendanube real.**

---

## 2. Dónde vive cada cosa

| Qué | Dónde |
|---|---|
| Tema de Tiendanube (código) | Esta carpeta: `/Users/juancrm/Downloads/Altar/Web-v2` |
| Repositorio | GitHub `Juancrm27/altar-2`, rama `main` |
| Vista de revisión online | Netlify. Despliega `main` automáticamente: build `node .dev/netlify-build.mjs`, publica `dist/`. Es solo una copia de la vista local, **no es la tienda** |
| Diseño | Figma «Altar - Web», página **v3**: https://www.figma.com/design/GkfpuOSqYfDn5nomIshXcu/Altar---Web?node-id=631-1002 |
| Feedback del cliente | FigJam «Altar - Sofi - Feedback», página «19 nov»: https://www.figma.com/board/sgfv543o6vHHrIBkgHtVxR/Altar---Sofi---Feedback?node-id=204-163 |
| Frases de la carta (oráculo) | Google Sheet «ORACULO». Solo salen las filas con `estado = activa`. La URL está en el ajuste `oracle_sheet_url` de la sección de la home |
| Playlist de PLAY | Ajuste `altar_spotify_url` del header (playlist de Sofi) |
| Mail de «Hola» | `mailto:altarmundi@gmail.com` |

### Vista local

```bash
cd .dev && npm run preview        # servidor en http://127.0.0.1:4173
```

- **Home:** `http://127.0.0.1:4173/.dev/preview.html`
- **Resto del sitio (simulación de Ipanema):** `http://127.0.0.1:4173/.dev/ipanema.html`. El botón «Mapa de la simulación» lista todas las páginas y estados. Rutas útiles:
  - `#/tienda`: Colección.
  - `#/the-star`: Collab.
  - `#/producto/...`: Producto.
  - `#/cuenta/login`: Ingresar.
  - `#/contacto?arrepentimiento[&enviado]`: botón de arrepentimiento.
  - `#/contacto?producto=slug`: consulta por un producto.
  - `#/buscar?q=…`: búsqueda.
  - `#/no-existe`: 404.
  - `#/password[?error]`: contraseña.
  - `#/pagina/cambios`: página de contenido.
  - `?open=cart|search|menu|filters`: abre ese panel al cargar.
- **Compilar JavaScript:** si se toca `.dev/src/solar-experience.js` o `.dev/src/altar-site.js`, compilar con `cd .dev && npm run build`. El JS compilado vive en `static/js/` y Netlify no compila.
- `.dev/src/ipanema-sim.js` se carga directo, sin compilar.

---

## 3. Qué está en el tema (web)

### Estructura general
- Base: **Ipanema** oficial de Tiendanube, más una capa Altar encima.
- Se borraron 25 secciones de Ipanema que no se usaban.
- Se mantienen las plantillas que Tiendanube exige aunque no tengan acceso desde el nav: contacto, búsqueda, blog, 404, contraseña, páginas de contenido y cuenta.

### Idioma y colores
- El interruptor del nav es el **idioma de toda la visita**. Apagado = ES (Layout A) y encendido = EN (Layout B). La elección se guarda en `sessionStorage("altar-lang")` y se aplica antes de pintar la página (`layouts/layout.tpl`).
- **ES:** fondo `#C6CA9F` (sage) y texto `#091E2B` (navy).
- **EN:** fondo `#091E2B` y texto `#C6CA9F`.
- Los textos bilingües usan `<span class="altar-es">` y `<span class="altar-en">`. En la home también existen las clases `.v3-a` y `.v3-b`.
- Variables de color: `--chrome-fg` y `--chrome-bg` (en `static/css/altar-chrome-v3.css`). Las variables `--altar-commerce-*` toman esos valores.

### Nav (`snippets/header/altar-header.tpl`, `static/js/altar-header.js`)
- **Accesos:** interruptor · PLAY (abre Spotify) · — · Colección · Collab · Hola (mailto) · Buscar · Ingresar · carrito (n).
- El buscador se abre dentro del mismo nav, no es una pantalla aparte. En la página de resultados llega abierto con la búsqueda escrita, y al cerrarlo vuelve a la colección.
- Tablet y mobile usan MENU, que despliega una fila.
- **No tiene fondo en ninguna página.** Es transparente y deja ver el grano de la página.
- Tipografía: Inter Light 12,75 px.
- Collab se llama «Collab» también en EN, nunca «The Star».

### Home v3 (`sections/altar-solar.tpl`: una sola sección, «Home v3 · 01–05»)

Todo vive dentro de `.altar-solar`. Tiene que ser así porque el 3D es sticky dentro de ese bloque y el JS busca los elementos dentro de él.

| Bloque | Contenido |
|---|---|
| 01 | Film (video `static/videos/altar-film.mp4` + poster). Encima va el cielo 3D: día en A, noche con estrellas fugaces en B |
| 02 | Statement en Minion, el mismo texto en español para los dos idiomas, justificado (`snippets/altar-justified.tpl`) |
| 03 | Galería de 4 fotos, cada una con versión de día (`gallery_a_N`) y de noche (`gallery_b_N`) |
| 04 | Manifiesto (título Inter + cuerpo Minion; `snippets/altar-v3-manifesto-body.tpl`) con la carta del oráculo |
| 05 | Foto de campaña a todo el ancho, una de día y una de noche |
| 06 | Piedras 3D. Están en el footer (`.altar-v3-closing`, `sections/altar-footer.tpl`) |

- **Qué se edita desde el admin:** film, statement, fotos y links de la galería, títulos y textos del manifiesto (ES y EN) y foto 05. Si un campo queda vacío, se usan las imágenes y los textos de Figma.
- **Formato de los textos:** Enter corta la línea (solo en escritorio), una línea vacía arranca un párrafo nuevo y un párrafo que empieza con «+» queda pegado al anterior en escritorio.
- **Estilos:** `static/css/altar-home-v3.css`, cargado en `layout.tpl` solo en la home.

### Colección y Collab (`sections/main-products-grid.tpl`)

**Grilla de Figma en escritorio (≥1200):**
- 4 columnas.
- Ciclo de 14 productos: el 3 va grande (2×2) a la derecha y el 10 grande a la izquierda.
- Cada card usa *subgrid* (foto + info), así la foto grande termina justo donde terminan las fotos de la segunda fila.
- La info de cada card mide 120 px como mínimo.

**Tablet y mobile:** 2 columnas, con una card a todo el ancho cada 7 productos (`7n+3`).

**Dónde está:**
- CSS: `static/css/altar.css` (bloque Shop) y `static/css/altar-pages-v3.css` (bloque «Colección / Collab · desktop grid»).
- Selector «Ordenar por»: panel sin borde exterior, encabezado bilingüe «[ Ordenar por ] / Cerrar».

### Producto (`sections/main-product.tpl`, «Ficha»)
- Galería + ficha en columnas.
- Opacidades secundarias al 72 %.
- Mensaje de «agregado» bilingüe.
- Tablet y mobile en filas apiladas.

### Carrito lateral (`snippets/cart/*`)
- Drawer «Carrito (n)» / Cerrar, sin borde.
- Incluye: barras de regalo y envío gratis, avisos de stock, estado de carga, lista, carrito vacío, envío y cupón.
- El resumen queda fijo abajo.
- Al agregar un producto aparece «Agregaste al carrito», con «También te puede gustar», «Ver carrito» y «Seguir comprando».

### Otras páginas (estilos en el bloque «Pages v3» de `static/css/altar-pages-v3.css`)
- **404:** mensaje, «Volver a la colección» y productos relacionados.
- **Contacto:** formulario de botón de arrepentimiento, consulta por producto y estado enviado.
- **Contraseña:** logo + interruptor, con grano.
- **Búsqueda:** línea «N resultados · Ver toda la colección», estado vacío y sugerencias.
- **Páginas de contenido:** columna de lectura.

### Footer (`sections/altar-footer.tpl`, «Footer / Illustrator»)
- Contiene: newsletter siempre abierto, una fila de links (Cartas/Newsletter, Instagram, TikTok, YouTube, WhatsApp; en mobile IG · TT · YT) y la fila legal obligatoria de Tiendanube.
- **Newsletter enviado:** la misma línea pasa a decir «GRACIAS, YA ESTÁS EN LA LISTA · ENVIADO» (EN: «THANK YOU, YOU'RE ON THE LIST · SENT»). La página baja sola hasta el footer.
- **Error del newsletter:** línea bilingüe «Revisá el email e intentá de nuevo.» / «Please check the email and try again.»
- Tipografía Inter Light. Márgenes laterales iguales a los del nav: 32 en desktop y 20 en tablet y mobile.

---

## 4. Figma (página v3): cómo está organizada

Tres filas, de arriba hacia abajo:

**00 · Guía**
- Arquitectura del sitio `869:3240`.
- Nota «Interruptor del nav» `763:3775`.
- **Nota «Grano en toda la página»** `984:19644`.

**01 · Componentes**
- «Componentes base» `968:18057`.
- Navegación `773:3775`.
- Footer `813:5256`: el set «Footer / Illustrator» `819:4095` tiene las propiedades Device × Idioma × **Newsletter (Abierto | Enviado)**.
- Carta `828:5533`.

**02 · Páginas** (en el orden del sitio)

| Página | Nodo |
|---|---|
| Home | `964:17981` (día ES + noche EN × 3 tamaños, con las notas adentro) |
| Colección | `755:3784` (incluye el panel «Ordenar por» `930:10836` y los estados abiertos) |
| Collab | `755:3793` |
| Búsqueda | `935:13192` |
| Producto | `755:3775` (páginas + estados de la ficha + componentes) |
| Carrito lateral | `903:10660` |
| Cuenta, carrito y avisos | `941:14280` (crear cuenta, recuperar y nueva contraseña, mi cuenta, detalle de pedido, direcciones, página de carrito, cookies, descuento exclusivo) |
| Editar mis datos | `975:18060` |
| Dirección | `975:18507` |
| Dirección de suscripción | `975:19086` |
| Ingresar | `755:3820` |
| Contraseña | `924:10108` |
| Contacto | `931:12690` |
| Páginas de contenido | `938:14046` |
| Blog / Nota de blog | `976:19176` / `976:19647` (con una nota que aclara que **no se va a usar**) |
| 404 | `926:10284` |

---

## 5. FigJam de feedback (para Sofi / cliente)

Página «19 nov». Las secciones están en fila, en el orden del sitio:

1. **Home**: la pegó Juan como capas editables.
2. **Colección**: 3 tamaños × ES/EN, más el panel «Ordenar por» abierto en desktop y mobile.
3. **Collab**: 3 tamaños × ES/EN.
4. **Producto**: 3 tamaños × ES/EN, más los estados de la ficha en desktop (Color alternativo, Agotado, Agregado).
5. **Ingresar**: 3 tamaños × ES/EN.
6. **Carrito**:
   - Carrito lateral en desktop y mobile.
   - Envío gratis en progreso, envío gratis logrado y sugeridos al agregar.
   - Página de carrito en 3 tamaños.
   - Todo en ES y EN.

Las secciones 2 a 6 son **imágenes** exportadas de Figma, porque desde código no se puede copiar entre archivos. El cliente puede comentar encima, pero no editarlas.

Quedaron afuera a propósito: los errores técnicos del carrito (sin stock, error, cargando), el estado de error de la ficha y las páginas de cuenta.

**Al retomar:** leer el feedback del FigJam y pasar los cambios primero a Figma y después a la web.

---

## 6. Reglas de trabajo (respetar siempre)

1. **Orden de trabajo:** primero Figma, después la web.
   - Verificar con capturas en 1440, 834 y 390, en ES y en EN.
   - En la vista local, comparar con Figma.
   - En el tema, renderizar con Twig (ver §8).
2. **Colores según el idioma:** nunca negro, gris o crema fijos.
   - Líneas: color del texto al 20 %.
   - Texto secundario: ≥ 72 % (62 % no llega al contraste 4.5:1).
   - Deshabilitado: 40 %.
   - Chip seleccionado: tinte al 8 % + línea completa.
   - El crema `#FBF7E7` **no se usa**.
3. **Grano (grainy blur) en toda la página y en todas las secciones.**
   - Orden de capas: color de fondo → grano (siempre **arriba del color**) → fotos y textos.
   - Intensidad: ES 21 % en multiplicar, EN 9 % en trama. Se define en `--altar-grain` (`altar-chrome-v3.css`).
   - Cualquier fondo nuevo lleva grano. Está anotado en Figma (nota `984:19644`).
4. **El nav nunca lleva fondo ni grano propio.**
5. **Notas en Figma:** marcos con auto-layout y fondo visibles. Nunca usar las anotaciones de Figma.
6. **Secciones de Figma:** siempre con fondo `#444444`.
7. **Componentes en Figma:**
   - Nombres claros y auto-layout.
   - Las variantes llevan `Idioma = ES | EN` cuando cambian el color.
   - Los componentes que usan las páginas viven en la misma página v3.
8. **Tipografías:**
   - Inter: nav y footer en Light.
   - Minion Plus S («Altar Minion», `static/fonts/minion-plus-s-*.woff2`): statement, manifiesto y carta.

---

## 7. Pendientes

### Web (diseñado en Figma, falta pasarlo al tema)
- [ ] Páginas de cuenta: crear cuenta, recuperar contraseña, nueva contraseña, mi cuenta / pedidos, detalle de pedido, mis direcciones, editar mis datos, dirección y dirección de suscripción.
- [ ] Página de carrito (`/cart`).
- [ ] Aviso de cookies.
- [ ] Descuento exclusivo (cross-selling).

### Tienda real
- [ ] Subir el tema a la tienda (Tiendanube CLI, ver README) y probar todo ahí:
  - Home, Colección, Collab, Producto, carrito, checkout, newsletter y contacto.
  - En los dos idiomas.
  - Filtros, variantes, stock, cuotas y envío.
- [ ] Colores base de la tienda en `config/settings_data.json`: todavía son blanco/negro y son los que usa el **checkout** (que aloja Tiendanube).
- [ ] Multi-idioma en el admin de Tiendanube (hoy el idioma lo maneja el interruptor del sitio).
- [ ] Configurar la categoría de Collab: ajuste «Enlace Collab (categoría o página)» del header.
- [ ] Textos legales reales: términos, privacidad, cambios y devoluciones.

### Para decidir con Juan / Sofi
- [ ] **Nav al bajar** en Colección, Collab y Producto: hoy queda fijo y transparente, así que las fotos pasan por debajo de las palabras. ¿Que suba con la página, como en Figma?
- [ ] Copy del botón del carrito.
- [ ] «Agregar» vs «Ver producto» en los productos sugeridos.
- [ ] Nombres de las opciones de «Ordenar por». En EN siguen saliendo en español («MÁS RELEVANTES») porque los pone Tiendanube.
- [ ] Borde punteado del panel «Ordenar por».
- [ ] Textos legales del footer en EN.
- [ ] Fila «Disponibilidad» en la ficha de producto de la web.
- [ ] Estado de error del newsletter: no tiene diseño en Figma (en la web es una línea chica bilingüe).

### Detalles conocidos
- Cuando el precio tiene seis cifras, el precio con transferencia se corta en dos líneas en la card. Es por el espacio que pone la tienda después del «$»; en Figma pasa lo mismo con «Saco Alba».
- **Licencia de Minion Plus S:** los `.woff2` están en el repo y se sirven desde la web. Si el repo es público, confirmar que la licencia de Adobe lo permite.

---

## 8. Cómo verificar (herramientas)

- **Capturas automáticas:** Chrome headless por CDP. Los scripts están en la carpeta temporal de la sesión: `steps.mjs`, `fullpage.mjs`, `evalpage.mjs`. Si se perdieron, se rehacen fácil (abren la URL, ejecutan pasos y guardan PNG).
- **Probar las plantillas Twig sin la tienda:** `twig.js` con mocks de `static_url`, `translate`, `resolve_media` y `component`.
  - Así se verificó que `altar-solar.tpl` produce el mismo markup que `preview.html`.
  - Y que el footer muestra bien los estados del newsletter.
- **Build de Netlify en local:** `node .dev/netlify-build.mjs` (genera `dist/`, que no se commitea).

---

## 9. Historial reciente (commits)

| Commit | Qué |
|---|---|
| `910fb2c` | Newsletter: estado «enviado» en el footer (Figma + web) |
| `8b87d96` | Home v3 en el tema (una sección), páginas v3, carrito, grilla de Colección/Collab según Figma, nav sin fondo, limpieza de secciones |
| `c8e2996` | Textos editables del home v3, cielo de día sin estrellas |
| `62feda8` | Home v3 tablet/mobile según Figma, footer nuevo |
| `daad5b0` | Fotos del hero y la galería llevan a Colección |
| `9f25a13` | Navbar y footer v2 en todo el sitio, PLAY a Spotify |
