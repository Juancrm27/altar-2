{% set manifesto = section.settings %}
{# Fallbacks = Figma copy. Enter = line break, blank line = new paragraph (snippets/altar-justified.tpl). #}
{% set manifesto_title_es = manifesto.manifesto_title_es | default('Archivo de amuletos para el universo interno — Manifiesto 2026') %}
{% set manifesto_title_en = manifesto.manifesto_title_en | default('Archive of amulets for the inner universe — Manifesto 2026') %}
{% set manifesto_es = manifesto.manifesto_es | default("El cielo y el infierno son estados de frecuencia que se sintonizan en lo cotidiano.\nMe interesa el borde donde lo humano se encuentra con lo animal.\nMe inspiran los altares populares: un santo local, una piedra del río\ny el arquetipo del momento. Mapas de lo que alguien lleva dentro.\nAmuletos hechos a mano.\n\nAltar nació en 2020 como un juego para salir del modo supervivencia.\nCada día, un gesto mínimo por elemento: un saludo al sol, una sopa caliente,\nuna hoja escrita y una meditación breve. Los tildaba en una nota del teléfono.\nEl juego tomó vida propia. El caos se ordenó en cuatro\nactos de una obra.\n\nJuego para invocar la inspiración efímera. Me fascina la señal entre el ruido.\nBusco sistemas en los que pueda ofrendar más de lo que tomo.") %}
{% set manifesto_en = manifesto.manifesto_en | default("Heaven and hell are frequency states tuned in the mundane. I’m rather fond of\nthat edge where the human meets the feral. I’m fascinated by folk altars:\na local saint, a river stone and the hour’s archetype. Little maps of what a person\ncarries inside. Amulets shaped by hand.\n\nAltar was born in 2020 as a game to get out of survival mode.\nOne small gesture per element, every day: a sun salutation, a hot soup,\na written page and a brief meditation. I ticked them off in a phone note.\nThe game took on a life of its own. The day settled into four\nacts of fun chaos.\n\nPlay to evoke the creative state. I’m thrilled by the ephemeral signal in between\nprocess and iteration. I search for systems in which I can offer more than I take.") %}

<section
  class="altar-page-section altar-closing altar-manifesto-v2"
  id="about"
  aria-label="Manifiesto de Altar"
  style="--manifesto-bg-b: {{ manifesto.alternate_background | default('#091e2b') }}; --manifesto-text-a: {{ manifesto.text_color | default('#091e2b') }}; --manifesto-text-b: {{ manifesto.alternate_text | default('#c6ca9f') }}; --manifesto-bg-a: {{ manifesto.background_color | default('#c6ca9f') }};"
>
  <svg class="altar-solar__grain altar-section-grain" width="100%" height="100%" preserveAspectRatio="none" aria-hidden="true">
    <filter id="altar-grain-closing-{{ section.id }}" x="0" y="0" width="100%" height="100%">
      <feTurbulence data-grain-turbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" seed="1" stitchTiles="stitch"></feTurbulence>
      <feColorMatrix type="saturate" values="0"></feColorMatrix>
    </filter>
    <rect width="100%" height="100%" filter="url(#altar-grain-closing-{{ section.id }})"></rect>
  </svg>
  <div class="altar-closing__content">
    <div class="altar-manifesto__oracle">{% include 'snippets/altar-fortune-card.tpl' with { fortune_settings: manifesto } %}</div>
    <div class="altar-closing__identity">
      <p class="altar-closing__wordmark"><span>altar</span></p>
      {# Manifesto (Figma 04): title spread edge to edge + justified copy, Spanish in layout A, English in layout B. #}
      <div class="altar-v3-manifesto">
        <h2 class="altar-v3-manifesto__title v3-a" lang="es" aria-label="{{ manifesto_title_es }}">{% include 'snippets/altar-spread-words.tpl' with { text: manifesto_title_es } %}</h2>
        <h2 class="altar-v3-manifesto__title v3-b" lang="en" aria-label="{{ manifesto_title_en }}">{% include 'snippets/altar-spread-words.tpl' with { text: manifesto_title_en } %}</h2>
        {% include 'snippets/altar-justified.tpl' with { text: manifesto_es, lang: 'es', variant: 'v3-a' } %}
        {% include 'snippets/altar-justified.tpl' with { text: manifesto_en, lang: 'en', variant: 'v3-b' } %}
      </div>
    </div>
  </div>
</section>

{% schema %}
{
  "name": "03 · Manifiesto y carta",
  "icon": "TextSizeIcon",
  "class": "section-altar-manifesto",
  "limit": 1,
  "enabled_on": { "page_templates": ["home"] },
  "settings": [
    { "type": "header", "content": "Carta y paletas" },
    { "type": "setting", "setting_type": "textarea", "id": "fortune_message", "label": "Frase de respaldo", "default": "Una nueva etapa comienza en silencio. Lo que hoy parece incierto encontrará su lugar." },
    { "type": "setting", "setting_type": "color", "id": "alternate_background", "label": "Fondo · Layout B", "default": "#091e2b" },
    { "type": "setting", "setting_type": "color", "id": "text_color", "label": "Texto · Layout A", "default": "#091e2b" },
    { "type": "setting", "setting_type": "color", "id": "alternate_text", "label": "Texto · Layout B", "default": "#c6ca9f" },
    { "type": "header", "content": "Manifiesto" },
    { "type": "setting", "setting_type": "text", "id": "manifesto_title_es", "label": "Título · Español (Layout A)", "info": "Cada palabra se distribuye a lo ancho de la columna.", "default": "Archivo de amuletos para el universo interno — Manifiesto 2026" },
    { "type": "setting", "setting_type": "textarea", "id": "manifesto_es", "label": "Texto · Español (Layout A)", "info": "Enter = salto de línea (corta igual que en el diseño en escritorio). Línea vacía = párrafo nuevo. Todas las líneas se justifican de borde a borde.", "default": "El cielo y el infierno son estados de frecuencia que se sintonizan en lo cotidiano.\nMe interesa el borde donde lo humano se encuentra con lo animal.\nMe inspiran los altares populares: un santo local, una piedra del río\ny el arquetipo del momento. Mapas de lo que alguien lleva dentro.\nAmuletos hechos a mano.\n\nAltar nació en 2020 como un juego para salir del modo supervivencia.\nCada día, un gesto mínimo por elemento: un saludo al sol, una sopa caliente,\nuna hoja escrita y una meditación breve. Los tildaba en una nota del teléfono.\nEl juego tomó vida propia. El caos se ordenó en cuatro\nactos de una obra.\n\nJuego para invocar la inspiración efímera. Me fascina la señal entre el ruido.\nBusco sistemas en los que pueda ofrendar más de lo que tomo." },
    { "type": "setting", "setting_type": "text", "id": "manifesto_title_en", "label": "Título · Inglés (Layout B)", "info": "Cada palabra se distribuye a lo ancho de la columna.", "default": "Archive of amulets for the inner universe — Manifesto 2026" },
    { "type": "setting", "setting_type": "textarea", "id": "manifesto_en", "label": "Texto · Inglés (Layout B)", "info": "Enter = salto de línea (corta igual que en el diseño en escritorio). Línea vacía = párrafo nuevo. Todas las líneas se justifican de borde a borde.", "default": "Heaven and hell are frequency states tuned in the mundane. I’m rather fond of\nthat edge where the human meets the feral. I’m fascinated by folk altars:\na local saint, a river stone and the hour’s archetype. Little maps of what a person\ncarries inside. Amulets shaped by hand.\n\nAltar was born in 2020 as a game to get out of survival mode.\nOne small gesture per element, every day: a sun salutation, a hot soup,\na written page and a brief meditation. I ticked them off in a phone note.\nThe game took on a life of its own. The day settled into four\nacts of fun chaos.\n\nPlay to evoke the creative state. I’m thrilled by the ephemeral signal in between\nprocess and iteration. I search for systems in which I can offer more than I take." },
    { "type": "setting", "setting_type": "color", "id": "background_color", "label": "Fondo · Layout A", "default": "#c6ca9f" }
  ],
  "presets": [
    { "name": "03 · Manifiesto y carta", "category": "Marca" }
  ]
}
{% endschema %}
