{% set solar_settings = section.settings %}
<div
  class="altar-solar"
  data-altar-solar
  data-section-id="{{ section.id }}"
  data-model-url="{{ 'models/solar-system.glb' | static_url }}"
  data-stones-url="{{ 'models/planet-stones.glb' | static_url }}"
  style="--space-color: {{ solar_settings.space_color | default('#080808') }}; --horizon-color: {{ solar_settings.horizon_color | default('#ff9a70') }}; --sky-color: {{ solar_settings.sky_color | default('#aebfc0') }}; --ground-color: {{ solar_settings.ground_color | default('#f4f0e8') }};"
>
  <div class="altar-solar__marquee" data-solar-marquee>
    <div class="altar-solar__marquee-track">
      <p>{{ solar_settings.paragraph_text }}</p>
      <p aria-hidden="true">{{ solar_settings.paragraph_text }}</p>
    </div>
  </div>
  <div class="visually-hidden" aria-hidden="true">
    {% for block in section.blocks %}
      {% include 'blocks/altar-channel.tpl' with { block: block } %}
    {% endfor %}
  </div>
  <div class="altar-solar__stage" data-solar-stage>
    <a class="altar-hero-v2__campaign" id="altar-hero-campaign" href="{{ solar_settings.hero_link | default(store.products_url) }}" aria-label="{{ solar_settings.campaign_label | default('Campaña Altar') }} · Ver colección" data-cursor-label="{{ 'Ver colección' | translate }}">
      {% if solar_settings.hero_media_compact %}
        {% include 'snippets/image.tpl' with { image_src: solar_settings.hero_media_compact, image_alt: solar_settings.hero_media_alt | default('Campaña Altar'), image_classes: 'altar-hero-v2__media altar-hero-v2__media--compact', image_priority_high: true } %}
      {% else %}
        <img class="altar-hero-v2__media altar-hero-v2__media--compact" src="{{ 'images/altar-v2-hero-compact.png' | static_url }}" alt="{{ solar_settings.hero_media_alt | default('Campaña Altar') }}" width="1526" height="1008" fetchpriority="high">
      {% endif %}
      {% if solar_settings.hero_media_expanded %}
        {% include 'snippets/image.tpl' with { image_src: solar_settings.hero_media_expanded, image_alt: '', image_classes: 'altar-hero-v2__media altar-hero-v2__media--expanded' } %}
      {% else %}
        <img class="altar-hero-v2__media altar-hero-v2__media--expanded" src="{{ 'images/altar-v2-hero-expanded.png' | static_url }}" alt="" width="1536" height="1006">
      {% endif %}
    </a>
    <div class="altar-solar__sky" aria-hidden="true">
      <i class="altar-solar__glow altar-solar__glow--rose"></i>
      <i class="altar-solar__glow altar-solar__glow--cyan"></i>
      <i class="altar-solar__glow altar-solar__glow--teal"></i>
    </div>
    {# Film grain over the sky, under the 3D scene, the hero photo and the gallery. #}
    {% include 'snippets/altar-grain.tpl' with { grain_id: 'stage-' ~ section.id, grain_class: 'altar-solar__stage-grain' } %}
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

    </div>
    <div class="altar-solar__sticky-track altar-solar__sticky-track--content">
      <aside class="altar-solar__campaign" aria-label="{{ solar_settings.campaign_label | default('ELEMENTAL / SS 27') }}">
        <div class="altar-solar__campaign-heading" data-cursor-label="{{ 'Ver colección' | translate }}" data-scroll-to=".altar-collection">
          <img src="{{ 'images/altar-status-dot.svg' | static_url }}" alt="">
          <span>{{ solar_settings.campaign_label | default('ELEMENTAL / SS 27') }}</span>
        </div>
        <div class="altar-solar__campaign-image" data-cursor-label="{{ 'Arrastrar' | translate }}" data-cursor-icon="move">
          <div class="altar-solar__campaign-crop">
            <img
              {% if section.blocks | length %}
                {% for block in section.blocks %}
                  {% set floating_fallback = loop.index == 1 ? ('images/altar-elemental-fw27.webp' | static_url) : (loop.index == 2 ? ('images/altar-channel-2.jpg' | static_url) : (loop.index == 3 ? ('images/altar-channel-3.jpg' | static_url) : ('images/altar-channel-4.jpg' | static_url))) %}
                  {% set floating_media = block.settings.floating_image and block.settings.floating_image starts with '@media-lib:' ? (block.settings.floating_image | resolve_media) : null %}
                  {% set floating_url = floating_media ? floating_media.sourceUrl : floating_fallback %}
                  {% if loop.first %}src="{{ floating_url }}"{% else %}data-channel-image-{{ loop.index }}="{{ floating_url }}"{% endif %}
                {% endfor %}
              {% else %}
                src="{{ 'images/altar-elemental-fw27.webp' | static_url }}"
                data-channel-image-2="{{ 'images/altar-channel-2.jpg' | static_url }}"
                data-channel-image-3="{{ 'images/altar-channel-3.jpg' | static_url }}"
                data-channel-image-4="{{ 'images/altar-channel-4.jpg' | static_url }}"
              {% endif %}
              alt=""
              width="1952"
              height="1080"
            >
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
  <aside class="altar-solar__ground-campaign" data-ground-campaign aria-label="{{ solar_settings.campaign_label | default('ELEMENTAL / SS 27') }}">
    <div class="altar-solar__ground-campaign-media" data-cursor-label="{{ 'Arrastrar' | translate }}" data-cursor-icon="move">
      <img
        {% if section.blocks | length %}
          {% for block in section.blocks %}
            {% set ground_fallback = loop.index == 1 ? ('images/altar-elemental-tierra.jpg' | static_url) : (loop.index == 2 ? ('images/altar-elemental-tierra-2.jpg' | static_url) : (loop.index == 3 ? ('images/altar-elemental-tierra-3.jpg' | static_url) : ('images/altar-elemental-tierra-4.jpg' | static_url))) %}
            {% set ground_media = block.settings.ground_image and block.settings.ground_image starts with '@media-lib:' ? (block.settings.ground_image | resolve_media) : null %}
            {% set ground_url = ground_media ? ground_media.sourceUrl : ground_fallback %}
            {% if loop.first %}src="{{ ground_url }}"{% else %}data-channel-image-{{ loop.index }}="{{ ground_url }}"{% endif %}
          {% endfor %}
        {% else %}
          src="{{ 'images/altar-elemental-tierra.jpg' | static_url }}"
          data-channel-image-2="{{ 'images/altar-elemental-tierra-2.jpg' | static_url }}"
          data-channel-image-3="{{ 'images/altar-elemental-tierra-3.jpg' | static_url }}"
          data-channel-image-4="{{ 'images/altar-elemental-tierra-4.jpg' | static_url }}"
        {% endif %}
        alt=""
        width="221"
        height="263"
        loading="lazy"
      >
    </div>
    <div class="altar-solar__ground-campaign-heading" data-cursor-label="{{ 'Ver colección' | translate }}" data-scroll-to=".altar-collection">
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
  <div class="altar-solar__effect" data-solar-effect aria-hidden="true">
    <svg class="altar-solar__grain" width="100%" height="100%" preserveAspectRatio="none">
      <filter id="altar-grain-{{ section.id }}" x="-20%" y="-20%" width="140%" height="140%">
        <feTurbulence data-grain-turbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" seed="1" stitchTiles="stitch" />
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
  "locked_blocks": true,
  "blocks": [
    { "type": "altar-channel", "limit": 4 }
  ],
  "settings": [
    { "type": "header", "content": "Hero V2 · Campaña" },
    { "type": "setting", "setting_type": "image_picker", "id": "hero_media_compact", "label": "Imagen compacta · Layout A" },
    { "type": "setting", "setting_type": "image_picker", "id": "hero_media_expanded", "label": "Imagen ampliada · Layout B" },
    { "type": "setting", "setting_type": "text", "id": "hero_media_alt", "label": "Descripción de la imagen", "default": "Campaña Altar" },
    { "type": "setting", "setting_type": "url", "id": "hero_link", "label": "Enlace de la imagen (vacío: lleva a la colección)" },
    { "type": "header", "content": "Contenido" },
    { "type": "setting", "setting_type": "text", "id": "scroll_label", "label": "Texto de desplazamiento", "default": "" },
    { "type": "setting", "setting_type": "text", "id": "accessible_label", "label": "Descripción accesible", "default": "Sistema solar interactivo" },
    { "type": "setting", "setting_type": "text", "id": "campaign_label", "label": "Nombre de campaña", "default": "ELEMENTAL / SS 27" },
    { "type": "setting", "setting_type": "text", "id": "explore_label", "label": "Texto inferior izquierdo", "default": "scroll to explore" },
    { "type": "setting", "setting_type": "text", "id": "channel_label", "label": "Nombre del canal", "default": "CHANNEL 01" },
    { "type": "setting", "setting_type": "text", "id": "player_label", "label": "Texto del reproductor", "default": "[  ALBA / AIRE ]  6:00 AM" },
    { "type": "setting", "setting_type": "text", "id": "spotify_url", "label": "Link de Spotify (tema, playlist o álbum)", "default": "https://open.spotify.com/intl-es/track/3wXY1YNt7JbhgdYEqYS7bk?si=dbd7cd56ba424345" },
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
    { "type": "setting", "setting_type": "color", "id": "space_color", "label": "Espacio", "default": "#080808" },
    { "type": "setting", "setting_type": "color", "id": "horizon_color", "label": "Degradado inferior", "default": "#ff9c71" },
    { "type": "setting", "setting_type": "color", "id": "sky_color", "label": "Reserva de color", "default": "#aebfc0" },
    { "type": "setting", "setting_type": "color", "id": "ground_color", "label": "Tierra 3D · Off white", "default": "#f4f0e8" }
  ],
  "presets": [
    {
      "name": "Experiencia solar 3D",
      "category": "Marca",
      "blocks": [
        { "type": "altar-channel", "settings": { "internal_name": "CHANNEL 01" } },
        { "type": "altar-channel", "settings": { "internal_name": "CHANNEL 02" } },
        { "type": "altar-channel", "settings": { "internal_name": "CHANNEL 03" } },
        { "type": "altar-channel", "settings": { "internal_name": "CHANNEL 04" } }
      ]
    }
  ]
}
{% endschema %}
