{% set solar_settings = section.settings %}
<div
  class="altar-solar"
  data-altar-solar
  data-section-id="{{ section.id }}"
  data-model-url="{{ 'models/solar-system.glb' | static_url }}"
  data-stones-url="{{ 'models/planet-stones.glb' | static_url }}"
  style="--space-color: {{ solar_settings.space_color | default('#2d2838') }}; --horizon-color: {{ solar_settings.horizon_color | default('#ff9a70') }}; --sky-color: {{ solar_settings.sky_color | default('#aebfc0') }}; --ground-color: {{ solar_settings.ground_color | default('#f4f0e8') }};"
>
  <div class="altar-solar__marquee" data-solar-marquee>
    <div class="altar-solar__marquee-track">
      <p>{{ solar_settings.paragraph_text }}</p>
      <p aria-hidden="true">{{ solar_settings.paragraph_text }}</p>
    </div>
  </div>
  <div class="altar-solar__stage" data-solar-stage>
    <div class="altar-solar__sky" aria-hidden="true">
      <i class="altar-solar__glow altar-solar__glow--rose"></i>
      <i class="altar-solar__glow altar-solar__glow--cyan"></i>
      <i class="altar-solar__glow altar-solar__glow--teal"></i>
    </div>
    <canvas class="altar-solar__canvas" aria-label="{{ solar_settings.accessible_label | default('Sistema solar interactivo') }}"></canvas>
    <section class="altar-solar__manifesto" aria-label="Manifiesto">
      <div class="altar-solar__manifesto-headline">
        <div class="altar-solar__manifesto-ids">
          <span>{{ solar_settings.manifesto_code | default('ELM. 01#') }}</span>
          <span>{{ solar_settings.manifesto_collection | default('101 couture') }}</span>
        </div>
        <h2>{% if solar_settings.manifesto_title %}{{ solar_settings.manifesto_title | nl2br }}{% else %}Un altar se arma, pieza por pieza. Elegí las que hablan por vos.{% endif %}</h2>
      </div>
      <div class="altar-solar__manifesto-note">
        <span>{{ solar_settings.manifesto_note_label | default('As bordado') }}</span>
        <p>{{ solar_settings.manifesto_note | default('Hecho despacio, a mano y con intención. Para quien sabe mirar más allá.') }}</p>
      </div>
    </section>
    <div class="altar-solar__sticky-track altar-solar__sticky-track--content">
      <div class="altar-solar__fortune-cards is-open" id="altar-fortune-card" role="group" aria-label="Mensaje de Altar" aria-hidden="false">
        <span class="altar-solar__fortune-cta-frame" aria-hidden="true"></span>
        <p class="altar-solar__fortune-cta-text">
          <img class="altar-solar__fortune-cta-icon" src="{{ 'images/altar-arrow-up-right.svg' | static_url }}" alt="" width="12" height="12">
          <span>{% if solar_settings.card_cta %}{{ solar_settings.card_cta | nl2br }}{% else %}Toca la carta.<br>Hay algo esperándote{% endif %}</span>
        </p>
        <div class="altar-solar__fortune-flip" data-fortune-flip role="button" tabindex="-1" aria-pressed="false" aria-label="Dar vuelta la carta" data-cursor-label="{{ 'Revelar carta' | translate }}" data-cursor-label-pressed="{{ 'Cerrar carta' | translate }}">
          <div class="altar-solar__fortune-inner">
            <div
              class="altar-solar__fortune-card altar-solar__fortune-card--artwork altar-solar__fortune-face altar-solar__fortune-face--front"
              data-foil-card
              data-foil-art
              data-foil-base="{{ 'images/altar-card-front.png' | static_url }}"
              data-foil-map="{{ 'images/altar-card-front-foil.png' | static_url }}"
              data-channel-base-2="{{ 'images/altar-card-front-2.png' | static_url }}"
              data-channel-map-2="{{ 'images/altar-card-front-foil-2.png' | static_url }}"
              data-channel-base-3="{{ 'images/altar-card-front-3.png' | static_url }}"
              data-channel-map-3="{{ 'images/altar-card-front-foil-3.png' | static_url }}"
              data-channel-base-4="{{ 'images/altar-card-front-4.png' | static_url }}"
              data-channel-map-4="{{ 'images/altar-card-front-foil-4.png' | static_url }}"
              aria-hidden="true"
            >
              <canvas class="altar-solar__foil-canvas" width="236" height="358"></canvas>
              <img src="{{ 'images/altar-card-front.png' | static_url }}" alt="" width="236" height="358" draggable="false">
            </div>
            <article
              class="altar-solar__fortune-card altar-solar__fortune-card--message altar-solar__fortune-face altar-solar__fortune-face--back"
              aria-hidden="true"
              data-foil-card
              data-foil-base="{{ 'images/altar-card-base.png' | static_url }}"
              data-foil-map="{{ 'images/altar-card-message-map.png' | static_url }}"
              data-channel-map-2="{{ 'images/altar-card-message-map-2.png' | static_url }}"
              data-channel-map-3="{{ 'images/altar-card-message-map-3.png' | static_url }}"
              data-channel-map-4="{{ 'images/altar-card-message-map-4.png' | static_url }}"
              data-channel-message-4="El azar abrirá una puerta que no buscabas. Al cruzarla entenderás por qué estaba esperándote."
              data-channel-message-3="Alguien de tu pasado volverá a cruzar tu camino. Ahora decidirás si todavía pertenece ahí."
              data-channel-message-2="Alguien piensa en vos más de lo que imaginás. Muy pronto una señal te lo confirmará."
            >
              <canvas class="altar-solar__foil-canvas" width="236" height="358" aria-hidden="true"></canvas>
              <div class="altar-solar__fortune-message-fallback">
                <img
                  class="altar-solar__fortune-symbol"
                  src="{{ 'images/altar-fortune-symbol.svg' | static_url }}"
                  alt=""
                >
                <div class="altar-solar__fortune-copy">
                  <span aria-hidden="true">*</span>
                  <p>{{ solar_settings.fortune_message | default('Una nueva etapa comienza en silencio. Lo que hoy parece incierto encontrará su lugar.') }}</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
    <div class="altar-solar__sticky-track altar-solar__sticky-track--content">
      <aside class="altar-solar__campaign" aria-label="{{ solar_settings.campaign_label | default('ELEMENTAL / SS 27') }}" data-cursor-label="{{ 'Ver colección' | translate }}" data-scroll-to=".altar-collection">
        <div class="altar-solar__campaign-heading">
          <img src="{{ 'images/altar-status-dot.svg' | static_url }}" alt="">
          <span>{{ solar_settings.campaign_label | default('ELEMENTAL / SS 27') }}</span>
        </div>
        <div class="altar-solar__campaign-image">
          <div class="altar-solar__campaign-crop">
            <img src="{{ 'images/altar-elemental-fw27.png' | static_url }}" alt="" width="1952" height="1080" data-channel-image-2="{{ 'images/altar-channel-2.jpg' | static_url }}" data-channel-image-3="{{ 'images/altar-channel-3.jpg' | static_url }}" data-channel-image-4="{{ 'images/altar-channel-4.jpg' | static_url }}">
          </div>
        </div>
      </aside>
    </div>
    <div class="altar-solar__sticky-track altar-solar__sticky-track--controls">
      <div class="altar-solar__bottom-controls" aria-label="Controles del canal">
        <span class="altar-solar__scroll-prompt">{{ solar_settings.explore_label | default('scroll to explore') }}</span>
        <div class="altar-solar__channel-controls">
          <div class="altar-solar__pagination" role="img" aria-label="Canal 1 de 4">
            <span class="is-active"></span><span></span><span></span><span></span>
          </div>
          <div class="altar-solar__channel-switcher">
            <button class="altar-solar__channel-arrow altar-solar__channel-arrow--previous" type="button" aria-label="Canal anterior">
              <span><img src="{{ 'images/altar-channel-arrow.svg' | static_url }}" alt=""></span>
            </button>
            <span class="altar-solar__channel-label">{{ solar_settings.channel_label | default('CHANNEL 01') }}</span>
            <button class="altar-solar__channel-arrow" type="button" aria-label="Canal siguiente">
              <span><img src="{{ 'images/altar-channel-arrow.svg' | static_url }}" alt=""></span>
            </button>
          </div>
          <button class="altar-solar__reveal-card" type="button" aria-label="Ocultar carta" aria-expanded="true" aria-controls="altar-fortune-card">
            <img class="altar-solar__reveal-icon altar-solar__reveal-icon--idle" src="{{ 'images/altar-reveal-card.svg' | static_url }}" alt="" width="72" height="72">
            <img class="altar-solar__reveal-icon altar-solar__reveal-icon--pressed" src="{{ 'images/altar-reveal-card-pressed.svg' | static_url }}" alt="" width="72" height="72">
          </button>
        </div>
        <button
          class="altar-solar__open-player"
          type="button"
          aria-label="Abrir reproductor"
          aria-expanded="false"
          aria-controls="altar-player"
          data-spotify-url="{{ solar_settings.spotify_url | default('https://open.spotify.com/intl-es/track/3wXY1YNt7JbhgdYEqYS7bk?si=dbd7cd56ba424345') }}"
        >
          <span class="altar-solar__player-label">{{ solar_settings.player_label | default('[  ALBA / AIRE ]  6:00 AM') }}</span>
          <span class="altar-solar__player-icon">
            <img src="{{ 'images/altar-player-icon.svg' | static_url }}" alt="" width="15" height="15">
          </span>
        </button>
        <div class="altar-solar__player" id="altar-player" aria-hidden="true">
          <div class="altar-solar__player-handle" data-drag-handle title="Arrastrar"><span></span></div>
        </div>
      </div>
    </div>
    {% if solar_settings.scroll_label %}
      <div class="altar-solar__hint">
        <span>{{ solar_settings.scroll_label }}</span>
        <svg width="20" height="20" aria-hidden="true"><use href="#icon-arrow"></use></svg>
      </div>
    {% endif %}
    <span class="visually-hidden" role="status">{{ 'La experiencia tridimensional está cargando' | translate }}</span>
  </div>
  <aside class="altar-solar__ground-campaign" data-ground-campaign aria-label="{{ solar_settings.campaign_label | default('ELEMENTAL / SS 27') }}" data-cursor-label="{{ 'Ver colección' | translate }}" data-scroll-to=".altar-collection">
    <div class="altar-solar__ground-campaign-media">
      <img src="{{ 'images/altar-elemental-tierra.jpg' | static_url }}" alt="" width="221" height="263" loading="lazy" data-channel-image-2="{{ 'images/altar-elemental-tierra-2.jpg' | static_url }}" data-channel-image-3="{{ 'images/altar-elemental-tierra-3.jpg' | static_url }}" data-channel-image-4="{{ 'images/altar-elemental-tierra-4.jpg' | static_url }}">
    </div>
    <div class="altar-solar__ground-campaign-heading">
      <img src="{{ 'images/altar-status-dot.svg' | static_url }}" alt="" width="7" height="7">
      <span>{{ solar_settings.campaign_label | default('ELEMENTAL / SS 27') }}</span>
    </div>
  </aside>
  <div class="altar-solar__earth">
    <div class="altar-solar__gradient" aria-hidden="true" hidden></div>
    <div class="altar-solar__horizon" aria-hidden="true">
      <div class="altar-solar__floor">
        <div class="altar-solar__floor-plane">
          <svg class="altar-solar__floor-mix" width="100%" height="100%" preserveAspectRatio="none">
            <filter id="altar-floor-mix-{{ section.id }}" x="0" y="0" width="100%" height="100%">
              <feTurbulence data-mix-noise type="fractalNoise" baseFrequency="0.019" numOctaves="3" seed="21" result="patches"></feTurbulence>
              <feColorMatrix data-mix-alpha in="patches" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  1 0 0 0 0.048" result="mask"></feColorMatrix>
              <feFlood data-mix-flood flood-color="#8fcb9b" result="tint"></feFlood>
              <feComposite in="tint" in2="mask" operator="in"></feComposite>
            </filter>
            <rect width="100%" height="100%" filter="url(#altar-floor-mix-{{ section.id }})"></rect>
          </svg>
          <svg class="altar-solar__floor-texture" width="100%" height="100%" preserveAspectRatio="none">
            <filter id="altar-floor-{{ section.id }}" x="0" y="0" width="100%" height="100%">
              <feTurbulence data-floor-noise type="fractalNoise" baseFrequency="0.01" numOctaves="4" seed="7" result="noise"></feTurbulence>
              <feDiffuseLighting data-floor-relief in="noise" lighting-color="#ffffff" surfaceScale="6.9">
                <feDistantLight data-floor-light azimuth="360" elevation="35"></feDistantLight>
              </feDiffuseLighting>
            </filter>
            <rect width="100%" height="100%" filter="url(#altar-floor-{{ section.id }})"></rect>
          </svg>
        </div>
      </div>
    </div>
  </div>
  <section class="altar-solar__ground altar-collection" aria-label="Colección ELEMENTAL">
    <svg class="altar-solar__grain altar-section-grain" width="100%" height="100%" preserveAspectRatio="none" aria-hidden="true">
      <filter id="altar-grain-collection-{{ section.id }}" x="0" y="0" width="100%" height="100%">
        <feTurbulence data-grain-turbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" seed="1" stitchTiles="stitch"></feTurbulence>
        <feColorMatrix type="saturate" values="0"></feColorMatrix>
      </filter>
      <rect width="100%" height="100%" filter="url(#altar-grain-collection-{{ section.id }})"></rect>
    </svg>
    <div class="altar-collection__heading">
      <div class="altar-collection__identity">
        <div class="altar-collection__meta"><span>{{ solar_settings.collection_season | default('SS 27') }}</span><span>{{ solar_settings.collection_line | default('101 couture') }}</span></div>
        <h2>{{ solar_settings.collection_title | default('ELEMENTAL') }}</h2>
      </div>
      <div class="altar-collection__note">
        <span>{{ solar_settings.manifesto_note_label | default('As bordado') }}</span>
        <p>{{ solar_settings.manifesto_note | default('Hecho despacio, a mano y con intención. Para quien sabe mirar más allá.') }}</p>
      </div>
    </div>
    <div class="altar-collection__gallery">
      <a class="altar-collection__photo" href="{{ solar_settings.collection_link_1 | default(store.products_url) }}" data-cursor-label="{{ 'Ver producto' | translate }}"><img src="{{ 'images/altar-collection-1.jpg' | static_url }}" alt="Modelo con vestido satinado en un escenario floral" width="339" height="472" loading="lazy"></a>
      <a class="altar-collection__photo" href="{{ solar_settings.collection_link_2 | default(store.products_url) }}" data-cursor-label="{{ 'Ver producto' | translate }}"><img src="{{ 'images/altar-collection-2.jpg' | static_url }}" alt="Modelo con vestido negro transparente" width="339" height="472" loading="lazy"></a>
      <a class="altar-collection__photo" href="{{ solar_settings.collection_link_3 | default(store.products_url) }}" data-cursor-label="{{ 'Ver producto' | translate }}"><img src="{{ 'images/altar-collection-3.jpg' | static_url }}" alt="Modelo con vestido escultural blanco" width="339" height="472" loading="lazy"></a>
      <a class="altar-collection__photo" href="{{ solar_settings.collection_link_4 | default(store.products_url) }}" data-cursor-label="{{ 'Ver producto' | translate }}"><img src="{{ 'images/altar-collection-4.jpg' | static_url }}" alt="Modelo con guantes negros y vestido drapeado" width="339" height="472" loading="lazy"></a>
    </div>
    <div class="altar-collection__materia">
      <span>{{ solar_settings.collection_materia_label | default('La materia') }}</span>
      <p>{{ solar_settings.collection_materia | default('Cada material guarda una forma posible. El cuerpo termina de revelarla.') }}</p>
    </div>
  </section>
  <section class="altar-closing" id="about" aria-label="Manifiesto de Altar">
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
        <span>{{ solar_settings.closing_note_label | default('El tejido') }}</span>
        <p>{{ solar_settings.closing_note | default('Formas únicas que cuentan historias, entrelazadas con paciencia y cariño.') }}</p>
      </div>
      <div class="altar-closing__identity">
        <div class="altar-closing__head">
          <div class="altar-collection__meta"><span>{{ solar_settings.collection_season | default('SS 27') }}</span><span>{{ solar_settings.collection_line | default('101 couture') }}</span></div>
          <p class="altar-closing__wordmark"><span>altar</span><sup>©</sup></p>
        </div>
        <div class="altar-closing__manifesto">
          <p class="altar-closing__lead">{{ solar_settings.closing_lead | default('En 2026,  Manifiesto') }}<span class="altar-closing__tag">{{ solar_settings.closing_place | default('Argentina') }}<sup>01</sup></span></p>
          <p class="altar-closing__body">{{ solar_settings.closing_body | default('Me inspiran los altares paganos y populares: un santo local, una piedra del río y una diosa india. Los cuatro elementos representados. Un registro físico del universo interior y los arquetipos que resuenan. La libertad de armar un rincón y verlo crecer. Vincularse con lo divino sin culpa, miedo o manual heredado. Decido cómo juego las cartas que me tocan. El cielo y el infierno se sintonizan en lo cotidiano. Diseño sistemas para ofrendar más de lo que extraigo. Bailo entre el marco moral y lo salvaje. Practico rituales que ordenan el misterio de lo oculto. Una búsqueda humana, sensible, comercial e imperfecta. No pretende ser sagrada. Busca los puntos donde lo divino y lo mundano se encuentran. Escenas donde todos los que participan ganan. De esta curiosidad nace altar. Objetos que funcionan como amuletos para anclar quién soy, dónde habito y quién quiero ser. Piezas que se llevan en el cuerpo y evolucionan en cada colección.') }}</p>
          <p class="altar-closing__signature"><span class="altar-closing__tag">{{ solar_settings.closing_author | default('Sofía Guevara') }}<sup>02</sup></span></p>
          <p class="altar-closing__body">{{ solar_settings.closing_line | default('Un archivo de objetos para mundos interiores.') }}</p>
        </div>
      </div>
    </div>
  </section>
  <div class="altar-solar__effect" data-solar-effect aria-hidden="true">
    <svg class="altar-solar__grain" width="100%" height="100%" preserveAspectRatio="none">
      <filter id="altar-grain-{{ section.id }}" x="-20%" y="-20%" width="140%" height="140%">
        <feTurbulence data-grain-turbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" seed="1" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#altar-grain-{{ section.id }})" />
    </svg>
  </div>
</div>

{% schema %}
{
  "name": "Experiencia solar 3D",
  "icon": "VideoIcon",
  "class": "section-altar-solar",
  "limit": 1,
  "enabled_on": { "page_templates": ["home"] },
  "settings": [
    { "type": "header", "content": "Contenido" },
    { "type": "setting", "setting_type": "text", "id": "scroll_label", "label": "Texto de desplazamiento", "default": "" },
    { "type": "setting", "setting_type": "text", "id": "accessible_label", "label": "Descripción accesible", "default": "Sistema solar interactivo" },
    { "type": "setting", "setting_type": "text", "id": "campaign_label", "label": "Nombre de campaña", "default": "ELEMENTAL / SS 27" },
    { "type": "setting", "setting_type": "text", "id": "explore_label", "label": "Texto inferior izquierdo", "default": "scroll to explore" },
    { "type": "setting", "setting_type": "text", "id": "channel_label", "label": "Nombre del canal", "default": "CHANNEL 01" },
    { "type": "setting", "setting_type": "text", "id": "player_label", "label": "Texto del reproductor", "default": "[  ALBA / AIRE ]  6:00 AM" },
    { "type": "setting", "setting_type": "text", "id": "spotify_url", "label": "Link de Spotify (tema, playlist o álbum)", "default": "https://open.spotify.com/intl-es/track/3wXY1YNt7JbhgdYEqYS7bk?si=dbd7cd56ba424345" },
    { "type": "header", "content": "Colección (sección 3)" },
    { "type": "setting", "setting_type": "text", "id": "collection_season", "label": "Temporada", "default": "SS 27" },
    { "type": "setting", "setting_type": "text", "id": "collection_line", "label": "Línea", "default": "101 couture" },
    { "type": "setting", "setting_type": "text", "id": "collection_title", "label": "Título", "default": "ELEMENTAL" },
    { "type": "setting", "setting_type": "text", "id": "collection_link_1", "label": "Link foto 1" },
    { "type": "setting", "setting_type": "text", "id": "collection_link_2", "label": "Link foto 2" },
    { "type": "setting", "setting_type": "text", "id": "collection_link_3", "label": "Link foto 3" },
    { "type": "setting", "setting_type": "text", "id": "collection_link_4", "label": "Link foto 4" },
    { "type": "setting", "setting_type": "text", "id": "collection_materia_label", "label": "Etiqueta bajo la galería", "default": "La materia" },
    { "type": "setting", "setting_type": "textarea", "id": "collection_materia", "label": "Texto bajo la galería", "default": "Cada material guarda una forma posible. El cuerpo termina de revelarla." },
    { "type": "header", "content": "Cierre (sección 4)" },
    { "type": "setting", "setting_type": "text", "id": "closing_note_label", "label": "Etiqueta", "default": "El tejido" },
    { "type": "setting", "setting_type": "textarea", "id": "closing_note", "label": "Nota", "default": "Formas únicas que cuentan historias, entrelazadas con paciencia y cariño." },
    { "type": "setting", "setting_type": "text", "id": "closing_lead", "label": "Encabezado del manifiesto", "default": "En 2026,  Manifiesto" },
    { "type": "setting", "setting_type": "text", "id": "closing_place", "label": "Lugar", "default": "Argentina" },
    { "type": "setting", "setting_type": "textarea", "id": "closing_body", "label": "Manifiesto", "default": "Me inspiran los altares paganos y populares: un santo local, una piedra del río y una diosa india. Los cuatro elementos representados. Un registro físico del universo interior y los arquetipos que resuenan. La libertad de armar un rincón y verlo crecer. Vincularse con lo divino sin culpa, miedo o manual heredado. Decido cómo juego las cartas que me tocan. El cielo y el infierno se sintonizan en lo cotidiano. Diseño sistemas para ofrendar más de lo que extraigo. Bailo entre el marco moral y lo salvaje. Practico rituales que ordenan el misterio de lo oculto. Una búsqueda humana, sensible, comercial e imperfecta. No pretende ser sagrada. Busca los puntos donde lo divino y lo mundano se encuentran. Escenas donde todos los que participan ganan. De esta curiosidad nace altar. Objetos que funcionan como amuletos para anclar quién soy, dónde habito y quién quiero ser. Piezas que se llevan en el cuerpo y evolucionan en cada colección." },
    { "type": "setting", "setting_type": "text", "id": "closing_author", "label": "Firma", "default": "Sofía Guevara" },
    { "type": "setting", "setting_type": "text", "id": "closing_line", "label": "Línea final", "default": "Un archivo de objetos para mundos interiores." },
    { "type": "header", "content": "Manifiesto" },
    { "type": "setting", "setting_type": "text", "id": "manifesto_code", "label": "Código", "default": "ELM. 01#" },
    { "type": "setting", "setting_type": "text", "id": "manifesto_collection", "label": "Colección", "default": "101 couture" },
    { "type": "setting", "setting_type": "textarea", "id": "manifesto_title", "label": "Frase principal (una línea por renglón)", "default": "" },
    { "type": "setting", "setting_type": "text", "id": "manifesto_note_label", "label": "Etiqueta de la nota", "default": "As bordado" },
    { "type": "setting", "setting_type": "textarea", "id": "manifesto_note", "label": "Nota", "default": "Hecho despacio, a mano y con intención. Para quien sabe mirar más allá." },
    { "type": "setting", "setting_type": "textarea", "id": "card_cta", "label": "Invitación junto a la carta (una línea por renglón)", "default": "" },
    { "type": "setting", "setting_type": "textarea", "id": "fortune_message", "label": "Mensaje de la carta", "default": "Una nueva etapa comienza en silencio. Lo que hoy parece incierto encontrará su lugar." },
    { "type": "setting", "setting_type": "textarea", "id": "paragraph_text", "label": "Texto de marquesina", "default": "Objetos con alma hechos por manos. Un canal en sintonía con el ambiente, un cable a tierra. Un ritmo más consciente de consumo. Fuego, tierra, agua, aire. 10% de las ganancias aportan a @unarbol_ong. Magia, sutileza, fantasía, analógico & digital. Amuletos. Ambient aware. Solar punk. Slow fashion. Buenos Aires, 23 Junio 2025, 17 grados. 20:58. Contact 1157991078. fire, earth, air & water. Altar 2025." },
    { "type": "header", "content": "Colores" },
    { "type": "setting", "setting_type": "color", "id": "space_color", "label": "Espacio", "default": "#2d2838" },
    { "type": "setting", "setting_type": "color", "id": "horizon_color", "label": "Degradado inferior", "default": "#ff9c71" },
    { "type": "setting", "setting_type": "color", "id": "sky_color", "label": "Reserva de color", "default": "#aebfc0" },
    { "type": "setting", "setting_type": "color", "id": "ground_color", "label": "Sección 3 · Off white", "default": "#f4f0e8" }
  ],
  "presets": [
    { "name": "Experiencia solar 3D", "category": "Marca" }
  ]
}
{% endschema %}
