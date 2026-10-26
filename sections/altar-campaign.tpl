{% set campaign = section.settings %}

<section
  class="altar-page-section altar-solar__ground altar-collection"
  id="coleccion"
  aria-label="Colección {{ campaign.title | default('ELEMENTAL') }}"
  style="--campaign-bg: {{ campaign.background_color | default('#0f0f0f') }};"
>
  <svg class="altar-solar__grain altar-section-grain" width="100%" height="100%" preserveAspectRatio="none" aria-hidden="true">
    <filter id="altar-grain-collection-{{ section.id }}" x="0" y="0" width="100%" height="100%">
      <feTurbulence data-grain-turbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" seed="1" stitchTiles="stitch"></feTurbulence>
      <feColorMatrix type="saturate" values="0"></feColorMatrix>
    </filter>
    <rect width="100%" height="100%" filter="url(#altar-grain-collection-{{ section.id }})"></rect>
  </svg>
  <div class="altar-collection__heading">
    <div class="altar-collection__identity">
      <div class="altar-collection__meta"><span>{{ campaign.season | default('SS 27') }}</span><span>{{ campaign.line | default('101 couture') }}</span></div>
      <h2>{{ campaign.title | default('ELEMENTAL') }}</h2>
    </div>
    <div class="altar-collection__note">
      <span>{{ campaign.note_label | default('As bordado') }}</span>
      <p>{{ campaign.note | default('Hecho despacio, a mano y con intención. Para quien sabe mirar más allá.') }}</p>
    </div>
  </div>
  <div class="altar-collection__continuation" aria-hidden="true"></div>
  <div class="altar-collection__gallery">
    {% for block in section.blocks %}
      {% set fallback_image = loop.index == 1 ? ('images/altar-v2-editorial-1.png' | static_url) : (loop.index == 2 ? ('images/altar-v2-editorial-2.png' | static_url) : (loop.index == 3 ? ('images/altar-v2-editorial-3.png' | static_url) : ('images/altar-v2-editorial-4.png' | static_url))) %}
      {% include 'blocks/altar-campaign-image.tpl' with { block: block, fallback_image: fallback_image } %}
    {% endfor %}
  </div>
  <div class="altar-collection__materia">
    <span>{{ campaign.materia_label | default('La materia') }}</span>
    <p>{{ campaign.materia | default('Cada material guarda una forma posible. El cuerpo termina de revelarla.') }}</p>
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
    { "type": "header", "content": "Campaña" },
    { "type": "setting", "setting_type": "text", "id": "season", "label": "Temporada", "default": "SS 27" },
    { "type": "setting", "setting_type": "text", "id": "line", "label": "Línea", "default": "101 couture" },
    { "type": "setting", "setting_type": "text", "id": "title", "label": "Título", "default": "ELEMENTAL" },
    { "type": "setting", "setting_type": "text", "id": "note_label", "label": "Etiqueta lateral", "default": "As bordado" },
    { "type": "setting", "setting_type": "textarea", "id": "note", "label": "Texto lateral", "default": "Hecho despacio, a mano y con intención. Para quien sabe mirar más allá." },
    { "type": "setting", "setting_type": "text", "id": "materia_label", "label": "Etiqueta inferior", "default": "La materia" },
    { "type": "setting", "setting_type": "textarea", "id": "materia", "label": "Texto inferior", "default": "Cada material guarda una forma posible. El cuerpo termina de revelarla." },
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
