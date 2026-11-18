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
    {# 01 · Hero film (Figma 964:17981). The poster shows while the video loads. #}
    {% set film_url = solar_settings.hero_video_url | default('videos/altar-film.mp4' | static_url) %}
    {% set poster_media = solar_settings.hero_poster and solar_settings.hero_poster starts with '@media-lib:' ? (solar_settings.hero_poster | resolve_media) : null %}
    <a class="altar-hero-v2__campaign altar-hero-v3__film" id="altar-hero-campaign" href="{{ solar_settings.hero_link | default(store.products_url) }}" aria-label="{{ solar_settings.hero_media_alt | default('Film de campaña Altar') }} · Ver colección" data-cursor-label="{{ 'Arrastrar' | translate }}" data-cursor-icon="move">
      <video class="altar-hero-v2__media" src="{{ film_url }}" poster="{{ poster_media ? poster_media.sourceUrl : ('images/altar-film-poster.jpg' | static_url) }}" width="1344" height="1008" autoplay muted loop playsinline preload="auto" aria-hidden="true"></video>
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
  {# 02 statement + 03 gallery (Figma 964:17981). Same Spanish statement in A and B; the photos swap with the layout. #}
  <section class="altar-solar__ground altar-collection" id="coleccion" aria-label="Drop {{ solar_settings.collection_name | default('ELEMENTAL') }}">
    {% include 'snippets/altar-grain.tpl' with { grain_id: 'collection-' ~ section.id, grain_class: '' } %}
    {% set statement_label = solar_settings.statement_label | default('Drop N.º I — ELEMENTAL') %}
    <div class="altar-v3-statement" aria-label="{{ statement_label }}">
      <div class="altar-v3-statement__body">
        <p class="altar-v3-statement__label" aria-label="{{ statement_label }}">{% include 'snippets/altar-spread-words.tpl' with { text: statement_label } %}</p>
        {% include 'snippets/altar-justified.tpl' with { text: solar_settings.statement_text | default("Actualización del sistema operativo a modo avión. Fuego, tierra, aire & agua.\nUn amuleto por elemento en fibras naturales. Ropa creada para acompañar la evolución personal\ny honrar los ciclos.\nUna invitación a entrar en tu órbita y leer entre líneas. Hecho a mano en Buenos Aires, Argentina."), lang: 'es', variant: '' } %}
      </div>
    </div>
    <a class="altar-collection__continuation" href="{{ store.products_url }}" tabindex="-1" aria-hidden="true" data-cursor-label="{{ 'Ver colección' | translate }}"></a>
    <div class="altar-collection__gallery">
      {% set gallery_alts_a = ['Látex bordó', 'Vestido crema', 'Corset turquesa', 'Flores'] %}
      {% set gallery_alts_b = ['Organza negra de espalda', 'Tejido cobre con volado verde', 'Blusa azul marino', 'Retrato con flores'] %}
      {% for photo in 1..4 %}
        {% set pick_a = attribute(solar_settings, 'gallery_a_' ~ photo) %}
        {% set pick_b = attribute(solar_settings, 'gallery_b_' ~ photo) %}
        {% set media_a = pick_a and pick_a starts with '@media-lib:' ? (pick_a | resolve_media) : null %}
        {% set media_b = pick_b and pick_b starts with '@media-lib:' ? (pick_b | resolve_media) : null %}
        <a class="altar-collection__photo" href="{{ attribute(solar_settings, 'gallery_link_' ~ photo) | default(store.products_url) }}" data-cursor-label="{{ 'Ver colección' | translate }}"><img class="v3-a" src="{{ media_a ? media_a.sourceUrl : (('images/altar-v3-gallery-a-' ~ photo ~ '.jpg') | static_url) }}" alt="{{ gallery_alts_a[loop.index0] }}" width="1000" height="1500" loading="lazy"><img class="v3-b" src="{{ media_b ? media_b.sourceUrl : (('images/altar-v3-gallery-b-' ~ photo ~ '.jpg') | static_url) }}" alt="{{ gallery_alts_b[loop.index0] }}" width="1000" height="1500" loading="lazy"></a>
      {% endfor %}
    </div>
  </section>
  {# 04 manifesto + oracle card. Inter title, Minion body set left; desktop keeps Sofi's line breaks. #}
  <section class="altar-closing altar-manifesto-v2" id="about" aria-label="Manifiesto de Altar">
    {% include 'snippets/altar-grain.tpl' with { grain_id: 'closing-' ~ section.id, grain_class: '' } %}
    <div class="altar-closing__content">
      <div class="altar-manifesto__oracle">{% include 'snippets/altar-fortune-card.tpl' with { fortune_settings: solar_settings } %}</div>
      <div class="altar-closing__identity">
        <p class="altar-closing__wordmark"><span>altar</span></p>
        <div class="altar-v3-manifesto">
          <h2 class="altar-v3-manifesto__title v3-a" lang="es">{{ solar_settings.manifesto_title_es | default('Atlas latino de textiles, amuletos & rituales') }}</h2>
          <h2 class="altar-v3-manifesto__title v3-b" lang="en">{{ solar_settings.manifesto_title_en | default('Atlas of Latin textiles, amulets & rituals') }}</h2>
          {% include 'snippets/altar-v3-manifesto-body.tpl' with { lang: 'es', variant: 'v3-a', text: solar_settings.manifesto_body_es | default("El cielo y el infierno son estados de frecuencia que se sintonizan en lo cotidiano.\nMe interesa el límite donde lo humano se encuentra con lo animal. Me inspiran\nlos altares populares: un santo local, una piedra del río y el arquetipo actual.\nMapas de lo que alguien lleva dentro. Amuletos hechos a mano.\n\nAltar nació en 2020 como un juego para salir del miedo.\nCada día, un gesto mínimo por elemento: un saludo al sol, una sopa picante,\nuna hoja escrita y una meditación breve. Los tildaba en una nota del teléfono.\nLa práctica tomó vida propia y el caos se ordenó en cuatro actos.\n\n+Diseño para invocar la inspiración efímera. Creo en el proceso\nque mejora la versión existente y busca la señal entre el ruido.") } %}
          {% include 'snippets/altar-v3-manifesto-body.tpl' with { lang: 'en', variant: 'v3-b', text: solar_settings.manifesto_body_en | default("Heaven and hell are frequency states tuned in the ordinary.\nI’m rather fond of that edge where the human meets the feral.\nI’m fascinated by folk altars: a local saint, a river stone and the hour’s archetype.\nLittle maps of what a person carries inside. Amulets shaped by hand.\n\nAltar was born in 2020 as a game to step out of fear.\nOne small gesture per element, every day: a sun salutation,\na hot soup, a written page and a brief meditation. I ticked them off\nin a phone note. The practice took on a life of its own. The day settled\ninto four acts of fun chaos. A play to evoke the creative state.\nI’m thrilled by the ephemeral signal between process and iteration.\nI build systems where my contribution compounds.") } %}
        </div>
      </div>
    </div>
  </section>
  {# 05 · Campaign image, full bleed (Figma 785:3396 A · 804:4069 B): one photo per layout. #}
  {% set campaign_a = solar_settings.campaign_image_a and solar_settings.campaign_image_a starts with '@media-lib:' ? (solar_settings.campaign_image_a | resolve_media) : null %}
  {% set campaign_b = solar_settings.campaign_image_b and solar_settings.campaign_image_b starts with '@media-lib:' ? (solar_settings.campaign_image_b | resolve_media) : null %}
  <section class="altar-v3-campaign" aria-label="Campaña Altar">
    <a href="{{ solar_settings.campaign_link | default(store.products_url) }}" data-cursor-label="{{ 'Ver colección' | translate }}">
      <img class="v3-a" src="{{ campaign_a ? campaign_a.sourceUrl : ('images/altar-v3-campaign-a.jpg' | static_url) }}" alt="Campaña Altar" width="2400" height="1599" loading="lazy">
      <img class="v3-b" src="{{ campaign_b ? campaign_b.sourceUrl : ('images/altar-v3-campaign-b.jpg' | static_url) }}" alt="Altar campaign" width="2400" height="1599" loading="lazy">
    </a>
  </section>
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
  "name": "Home v3 · 01–05",
  "icon": "VideoIcon",
  "class": "section-altar-solar",
  "limit": 1,
  "enabled_on": { "page_templates": ["home"] },
  "locked_blocks": true,
  "blocks": [
    { "type": "altar-channel", "limit": 4 }
  ],
  "settings": [
    { "type": "header", "content": "01 · Film" },
    { "type": "setting", "setting_type": "text", "id": "hero_video_url", "label": "Video (link .mp4; vacío: el film de Altar)" },
    { "type": "setting", "setting_type": "image_picker", "id": "hero_poster", "label": "Imagen mientras carga el video" },
    { "type": "setting", "setting_type": "text", "id": "hero_media_alt", "label": "Descripción del film", "default": "Film de campaña Altar" },
    { "type": "setting", "setting_type": "url", "id": "hero_link", "label": "Enlace del film (vacío: lleva a la colección)" },
    { "type": "header", "content": "Contenido" },
    { "type": "setting", "setting_type": "text", "id": "scroll_label", "label": "Texto de desplazamiento", "default": "" },
    { "type": "setting", "setting_type": "text", "id": "accessible_label", "label": "Descripción accesible", "default": "Sistema solar interactivo" },
    { "type": "setting", "setting_type": "text", "id": "campaign_label", "label": "Nombre de campaña", "default": "ELEMENTAL / SS 27" },
    { "type": "setting", "setting_type": "text", "id": "explore_label", "label": "Texto inferior izquierdo", "default": "scroll to explore" },
    { "type": "setting", "setting_type": "text", "id": "channel_label", "label": "Nombre del canal", "default": "CHANNEL 01" },
    { "type": "setting", "setting_type": "text", "id": "player_label", "label": "Texto del reproductor", "default": "[  ALBA / AIRE ]  6:00 AM" },
    { "type": "setting", "setting_type": "text", "id": "spotify_url", "label": "Link de Spotify (tema, playlist o álbum)", "default": "https://open.spotify.com/intl-es/track/3wXY1YNt7JbhgdYEqYS7bk?si=dbd7cd56ba424345" },
    { "type": "header", "content": "Texto sobre el 3D" },
    { "type": "setting", "setting_type": "text", "id": "manifesto_code", "label": "Código", "default": "ELM. 01#" },
    { "type": "setting", "setting_type": "text", "id": "manifesto_collection", "label": "Colección", "default": "101 couture" },
    { "type": "setting", "setting_type": "textarea", "id": "manifesto_title", "label": "Frase principal (una línea por renglón)", "default": "" },
    { "type": "setting", "setting_type": "text", "id": "manifesto_note_label", "label": "Etiqueta de la nota", "default": "As bordado" },
    { "type": "setting", "setting_type": "textarea", "id": "manifesto_note", "label": "Nota", "default": "Hecho despacio, a mano y con intención. Para quien sabe mirar más allá." },
    { "type": "header", "content": "02 · Statement" },
    { "type": "setting", "setting_type": "text", "id": "collection_name", "label": "Nombre de la colección", "default": "ELEMENTAL" },
    { "type": "setting", "setting_type": "text", "id": "statement_label", "label": "Título (se reparte a lo ancho)", "default": "Drop N.º I — ELEMENTAL" },
    { "type": "setting", "setting_type": "textarea", "id": "statement_text", "label": "Texto (el mismo en español e inglés)", "info": "Enter = salto de línea (corta igual que en el diseño en escritorio). Línea vacía = párrafo nuevo. Todas las líneas se justifican de borde a borde.", "default": "Actualización del sistema operativo a modo avión. Fuego, tierra, aire & agua.\nUn amuleto por elemento en fibras naturales. Ropa creada para acompañar la evolución personal\ny honrar los ciclos.\nUna invitación a entrar en tu órbita y leer entre líneas. Hecho a mano en Buenos Aires, Argentina." },
    { "type": "header", "content": "03 · Galería (de izquierda a derecha)" },
    { "type": "setting", "setting_type": "image_picker", "id": "gallery_a_1", "label": "Foto 1 · Día (Español)" },
    { "type": "setting", "setting_type": "image_picker", "id": "gallery_b_1", "label": "Foto 1 · Noche (Inglés)" },
    { "type": "setting", "setting_type": "url", "id": "gallery_link_1", "label": "Foto 1 · Enlace (vacío: la colección)" },
    { "type": "setting", "setting_type": "image_picker", "id": "gallery_a_2", "label": "Foto 2 · Día (Español)" },
    { "type": "setting", "setting_type": "image_picker", "id": "gallery_b_2", "label": "Foto 2 · Noche (Inglés)" },
    { "type": "setting", "setting_type": "url", "id": "gallery_link_2", "label": "Foto 2 · Enlace (vacío: la colección)" },
    { "type": "setting", "setting_type": "image_picker", "id": "gallery_a_3", "label": "Foto 3 · Día (Español)" },
    { "type": "setting", "setting_type": "image_picker", "id": "gallery_b_3", "label": "Foto 3 · Noche (Inglés)" },
    { "type": "setting", "setting_type": "url", "id": "gallery_link_3", "label": "Foto 3 · Enlace (vacío: la colección)" },
    { "type": "setting", "setting_type": "image_picker", "id": "gallery_a_4", "label": "Foto 4 · Día (Español)" },
    { "type": "setting", "setting_type": "image_picker", "id": "gallery_b_4", "label": "Foto 4 · Noche (Inglés)" },
    { "type": "setting", "setting_type": "url", "id": "gallery_link_4", "label": "Foto 4 · Enlace (vacío: la colección)" },
    { "type": "header", "content": "04 · Manifiesto y carta" },
    { "type": "setting", "setting_type": "text", "id": "oracle_sheet_url", "label": "Frases de la carta · planilla (CSV)", "info": "Planilla ORACULO publicada como CSV. Salen solo las filas con estado = activa; se actualiza sola en cada visita.", "default": "https://docs.google.com/spreadsheets/d/1kv9DKruOYKfMOiVNaXE_DlolOcp2AfFKWiSRmkIFf48/gviz/tq?tqx=out:csv&gid=334686543" },
    { "type": "setting", "setting_type": "text", "id": "manifesto_title_es", "label": "Título · Español", "default": "Atlas latino de textiles, amuletos & rituales" },
    { "type": "setting", "setting_type": "textarea", "id": "manifesto_body_es", "label": "Texto · Español", "info": "Enter = salto de línea solo en escritorio. Línea vacía = párrafo nuevo. Un párrafo que empieza con + sigue pegado al anterior en escritorio.", "default": "" },
    { "type": "setting", "setting_type": "text", "id": "manifesto_title_en", "label": "Título · Inglés", "default": "Atlas of Latin textiles, amulets & rituals" },
    { "type": "setting", "setting_type": "textarea", "id": "manifesto_body_en", "label": "Texto · Inglés", "info": "Enter = salto de línea solo en escritorio. Línea vacía = párrafo nuevo.", "default": "" },
    { "type": "header", "content": "05 · Foto de campaña" },
    { "type": "setting", "setting_type": "image_picker", "id": "campaign_image_a", "label": "Foto · Día (Español)" },
    { "type": "setting", "setting_type": "image_picker", "id": "campaign_image_b", "label": "Foto · Noche (Inglés)" },
    { "type": "setting", "setting_type": "url", "id": "campaign_link", "label": "Enlace (vacío: la colección)" },
    { "type": "header", "content": "Carta (respaldo)" },
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
