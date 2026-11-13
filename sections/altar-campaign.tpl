{% set campaign = section.settings %}
{# Fallbacks = Figma copy. Enter = line break, blank line = new paragraph (snippets/altar-justified.tpl). #}
{% set statement_label = campaign.statement_label | default('Drop N.º I — ELEMENTAL') %}
{% set statement_es = campaign.statement_es | default("Actualización del sistema operativo a modo avión. Fuego, tierra, aire & agua.\nUn amuleto por elemento en fibras naturales. Ropa creada para acompañar la evolución personal\ny honrar los ciclos.\n\nUna invitación a entrar en órbita y leer entre líneas. Diseñada y hecha a mano en Buenos Aires.") %}
{% set statement_en = campaign.statement_en | default("Operating system updated to flight mode. Fire, earth, air & water.\nOne amulet per element, in natural fibres. Clothes that witness your personal evolution\nand honour the cycles.\n\nAn invitation to sync into orbit and read between the lines. Designed and handcrafted in Buenos Aires.") %}

<section
  class="altar-page-section altar-solar__ground altar-collection"
  id="coleccion"
  aria-label="Drop {{ campaign.title | default('ELEMENTAL') }}"
  style="--campaign-bg: {{ campaign.background_color | default('#0f0f0f') }};"
>
  <svg class="altar-solar__grain altar-section-grain" width="100%" height="100%" preserveAspectRatio="none" aria-hidden="true">
    <filter id="altar-grain-collection-{{ section.id }}" x="0" y="0" width="100%" height="100%">
      <feTurbulence data-grain-turbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" seed="1" stitchTiles="stitch"></feTurbulence>
      <feColorMatrix type="saturate" values="0"></feColorMatrix>
    </filter>
    <rect width="100%" height="100%" filter="url(#altar-grain-collection-{{ section.id }})"></rect>
  </svg>
  {# Statement (Figma 02): label spread edge to edge + justified copy, Spanish in layout A, English in layout B. #}
  <div class="altar-v3-statement" aria-label="{{ statement_label }}">
    <div class="altar-v3-statement__body">
      <p class="altar-v3-statement__label" aria-label="{{ statement_label }}">{% include 'snippets/altar-spread-words.tpl' with { text: statement_label } %}</p>
      {% include 'snippets/altar-justified.tpl' with { text: statement_es, lang: 'es', variant: 'v3-a' } %}
      {% include 'snippets/altar-justified.tpl' with { text: statement_en, lang: 'en', variant: 'v3-b' } %}
    </div>
  </div>
  <a class="altar-collection__continuation" href="{{ store.products_url }}" tabindex="-1" aria-hidden="true" data-cursor-label="{{ 'Ver colección' | translate }}"></a>
  <div class="altar-collection__gallery">
    {% for block in section.blocks %}
      {% set fallback_image = loop.index == 1 ? ('images/altar-v2-editorial-1.png' | static_url) : (loop.index == 2 ? ('images/altar-v2-editorial-2.png' | static_url) : (loop.index == 3 ? ('images/altar-v2-editorial-3.png' | static_url) : ('images/altar-v2-editorial-4.png' | static_url))) %}
      {% include 'blocks/altar-campaign-image.tpl' with { block: block, fallback_image: fallback_image } %}
    {% endfor %}
  </div>
</section>

{% schema %}
{
  "name": "02 · Galería editorial",
  "icon": "pictureIcon",
  "class": "section-altar-campaign",
  "limit": 1,
  "enabled_on": { "page_templates": ["home"] },
  "locked_blocks": { "reorderable": true },
  "blocks": [
    { "type": "altar-campaign-image", "limit": 4 }
  ],
  "settings": [
    { "type": "header", "content": "Texto de la colección" },
    { "type": "setting", "setting_type": "text", "id": "title", "label": "Nombre de la colección", "default": "ELEMENTAL" },
    { "type": "setting", "setting_type": "text", "id": "statement_label", "label": "Título (se reparte a lo ancho)", "info": "Cada palabra se distribuye de borde a borde, como DROP  N.º  I  —  ELEMENTAL.", "default": "Drop N.º I — ELEMENTAL" },
    { "type": "setting", "setting_type": "textarea", "id": "statement_es", "label": "Texto · Español (Layout A)", "info": "Enter = salto de línea (corta igual que en el diseño en escritorio). Línea vacía = párrafo nuevo. Todas las líneas se justifican de borde a borde.", "default": "Actualización del sistema operativo a modo avión. Fuego, tierra, aire & agua.\nUn amuleto por elemento en fibras naturales. Ropa creada para acompañar la evolución personal\ny honrar los ciclos.\n\nUna invitación a entrar en órbita y leer entre líneas. Diseñada y hecha a mano en Buenos Aires." },
    { "type": "setting", "setting_type": "textarea", "id": "statement_en", "label": "Texto · Inglés (Layout B)", "info": "Enter = salto de línea (corta igual que en el diseño en escritorio). Línea vacía = párrafo nuevo. Todas las líneas se justifican de borde a borde.", "default": "Operating system updated to flight mode. Fire, earth, air & water.\nOne amulet per element, in natural fibres. Clothes that witness your personal evolution\nand honour the cycles.\n\nAn invitation to sync into orbit and read between the lines. Designed and handcrafted in Buenos Aires." },
    { "type": "setting", "setting_type": "color", "id": "background_color", "label": "Color de fondo", "default": "#0f0f0f" }
  ],
  "presets": [
    {
      "name": "02 · Galería editorial",
      "category": "Marca",
      "blocks": [
        { "type": "altar-campaign-image", "settings": { "alt_text": "Retrato con vestido negro y detalle floral" } },
        { "type": "altar-campaign-image", "settings": { "alt_text": "Composición de flores de la campaña Altar" } },
        { "type": "altar-campaign-image", "settings": { "alt_text": "Vestido azul y verde de la colección Altar" } },
        { "type": "altar-campaign-image", "settings": { "alt_text": "Retrato con flores y tejido verde" } }
      ]
    }
  ]
}
{% endschema %}
