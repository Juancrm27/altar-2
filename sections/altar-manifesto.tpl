{% set manifesto = section.settings %}

<section
  class="altar-page-section altar-closing"
  id="about"
  aria-label="Manifiesto de Altar"
  style="--closing-bg: {{ manifesto.background_color | default('#601e2a') }};"
>
  <svg class="altar-solar__grain altar-section-grain" width="100%" height="100%" preserveAspectRatio="none" aria-hidden="true">
    <filter id="altar-grain-closing-{{ section.id }}" x="0" y="0" width="100%" height="100%">
      <feTurbulence data-grain-turbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" seed="1" stitchTiles="stitch"></feTurbulence>
      <feColorMatrix type="saturate" values="0"></feColorMatrix>
    </filter>
    <rect width="100%" height="100%" filter="url(#altar-grain-closing-{{ section.id }})"></rect>
  </svg>
  <img class="altar-closing__symbol" src="{{ 'images/altar-symbol-large.svg' | static_url }}" alt="" width="698" height="673" loading="lazy">
  <div class="altar-closing__content">
    <div class="altar-closing__note">
      <span>{{ manifesto.note_label | default('El tejido') }}</span>
      <p>{{ manifesto.note | default('Formas únicas que cuentan historias, entrelazadas con paciencia y cariño.') }}</p>
    </div>
    <div class="altar-closing__identity">
      <div class="altar-closing__head">
        <div class="altar-collection__meta"><span>{{ manifesto.season | default('SS 27') }}</span><span>{{ manifesto.line | default('101 couture') }}</span></div>
        <p class="altar-closing__wordmark"><span>altar</span><sup>©</sup></p>
      </div>
      <div class="altar-closing__manifesto">
        <p class="altar-closing__lead">{{ manifesto.lead | default('En 2026,  Manifiesto') }}<span class="altar-closing__tag">{{ manifesto.place | default('Argentina') }}<sup>01</sup></span></p>
        <p class="altar-closing__body">{{ manifesto.body | default('Me inspiran los altares paganos y populares: un santo local, una piedra del río y una diosa india. Los cuatro elementos representados. Un registro físico del universo interior y los arquetipos que resuenan. La libertad de armar un rincón y verlo crecer. Vincularse con lo divino sin culpa, miedo o manual heredado. Decido cómo juego las cartas que me tocan. El cielo y el infierno se sintonizan en lo cotidiano. Diseño sistemas para ofrendar más de lo que extraigo. Bailo entre el marco moral y lo salvaje. Practico rituales que ordenan el misterio de lo oculto. Una búsqueda humana, sensible, comercial e imperfecta. No pretende ser sagrada. Busca los puntos donde lo divino y lo mundano se encuentran. Escenas donde todos los que participan ganan. De esta curiosidad nace altar. Objetos que funcionan como amuletos para anclar quién soy, dónde habito y quién quiero ser. Piezas que se llevan en el cuerpo y evolucionan en cada colección.') }}</p>
        <p class="altar-closing__signature"><span class="altar-closing__tag">{{ manifesto.author | default('Sofía Guevara') }}<sup>02</sup></span></p>
        <p class="altar-closing__body">{{ manifesto.final_line | default('Un archivo de objetos para mundos interiores.') }}</p>
      </div>
    </div>
  </div>
</section>

{% schema %}
{
  "name": "Manifiesto Altar",
  "icon": "TextSizeIcon",
  "class": "section-altar-manifesto",
  "limit": 1,
  "enabled_on": { "page_templates": ["home"] },
  "settings": [
    { "type": "header", "content": "Manifiesto" },
    { "type": "setting", "setting_type": "text", "id": "season", "label": "Temporada", "default": "SS 27" },
    { "type": "setting", "setting_type": "text", "id": "line", "label": "Línea", "default": "101 couture" },
    { "type": "setting", "setting_type": "text", "id": "note_label", "label": "Etiqueta lateral", "default": "El tejido" },
    { "type": "setting", "setting_type": "textarea", "id": "note", "label": "Texto lateral", "default": "Formas únicas que cuentan historias, entrelazadas con paciencia y cariño." },
    { "type": "setting", "setting_type": "text", "id": "lead", "label": "Encabezado", "default": "En 2026,  Manifiesto" },
    { "type": "setting", "setting_type": "text", "id": "place", "label": "Lugar", "default": "Argentina" },
    { "type": "setting", "setting_type": "textarea", "id": "body", "label": "Texto del manifiesto", "default": "Me inspiran los altares paganos y populares: un santo local, una piedra del río y una diosa india. Los cuatro elementos representados. Un registro físico del universo interior y los arquetipos que resuenan. La libertad de armar un rincón y verlo crecer. Vincularse con lo divino sin culpa, miedo o manual heredado. Decido cómo juego las cartas que me tocan. El cielo y el infierno se sintonizan en lo cotidiano. Diseño sistemas para ofrendar más de lo que extraigo. Bailo entre el marco moral y lo salvaje. Practico rituales que ordenan el misterio de lo oculto. Una búsqueda humana, sensible, comercial e imperfecta. No pretende ser sagrada. Busca los puntos donde lo divino y lo mundano se encuentran. Escenas donde todos los que participan ganan. De esta curiosidad nace altar. Objetos que funcionan como amuletos para anclar quién soy, dónde habito y quién quiero ser. Piezas que se llevan en el cuerpo y evolucionan en cada colección." },
    { "type": "setting", "setting_type": "text", "id": "author", "label": "Firma", "default": "Sofía Guevara" },
    { "type": "setting", "setting_type": "text", "id": "final_line", "label": "Línea final", "default": "Un archivo de objetos para mundos interiores." },
    { "type": "setting", "setting_type": "color", "id": "background_color", "label": "Color de fondo", "default": "#601e2a" }
  ],
  "presets": [
    { "name": "Manifiesto Altar", "category": "Marca" }
  ]
}
{% endschema %}
