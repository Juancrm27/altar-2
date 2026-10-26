{# Shared interactive oracle, mounted in the manifesto in V2. #}
<div class="altar-solar__fortune-cards is-open" id="altar-fortune-card" role="group" aria-label="Mensaje de Altar" aria-hidden="false">
        <span class="altar-solar__fortune-cta-frame" aria-hidden="true"></span>
        <p class="altar-solar__fortune-cta-text">
          <img class="altar-solar__fortune-cta-icon" src="{{ 'images/altar-arrow-up-right.svg' | static_url }}" alt="" width="12" height="12">
          <span>{% if fortune_settings.card_cta %}{{ fortune_settings.card_cta | nl2br }}{% else %}Toca la carta.<br>Hay algo esperándote{% endif %}</span>
        </p>
        <button type="button" class="altar-solar__fortune-flip" data-fortune-flip tabindex="-1" aria-pressed="false" aria-label="Dar vuelta la carta" data-cursor-label="{{ 'Revelar carta' | translate }}" data-cursor-label-pressed="{{ 'Cerrar carta' | translate }}">
          <div class="altar-solar__fortune-inner">
            <div
              class="altar-solar__fortune-card altar-solar__fortune-card--artwork altar-solar__fortune-face altar-solar__fortune-face--front"
              data-foil-card
              data-foil-base="{{ 'images/altar-card-base.png' | static_url }}"
              data-foil-map="{{ 'images/altar-card-front-map.png' | static_url }}"
              aria-hidden="true"
            >
              <canvas class="altar-solar__foil-canvas" width="236" height="358"></canvas>
              <img src="{{ 'images/altar-card-front-map.png' | static_url }}" alt="" width="236" height="358" draggable="false">
            </div>
            <article
              class="altar-solar__fortune-card altar-solar__fortune-card--message altar-solar__fortune-face altar-solar__fortune-face--back"
              aria-hidden="true"
              data-foil-card
              data-foil-base="{{ 'images/altar-card-base.png' | static_url }}"
              data-foil-frame="{{ 'images/altar-card-message-frame.png' | static_url }}"
              data-fortune-font="{{ 'fonts/gestura-text-regular.otf' | static_url }}"
              data-channel-frame-2="{{ 'images/altar-card-message-frame-2.png' | static_url }}"
              data-channel-frame-3="{{ 'images/altar-card-message-frame-3.png' | static_url }}"
              data-channel-frame-4="{{ 'images/altar-card-message-frame-4.png' | static_url }}"
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
                  <p>{{ fortune_settings.fortune_message | default('Una nueva etapa comienza en silencio. Lo que hoy parece incierto encontrará su lugar.') }}</p>
                </div>
              </div>
            </article>
          </div>
        </button>
        <aside class="altar-solar__fortune-share" data-fortune-share data-share-handle="@altarmundi" aria-hidden="true">
          <img class="altar-solar__fortune-share-dot" src="{{ 'images/altar-status-dot.svg' | static_url }}" alt="" width="7" height="7">
          <p>Consulta<br>tu suerte cada vez que lo necesites</p>
          <button type="button" data-fortune-share-button tabindex="-1"><img src="{{ 'images/altar-share.svg' | static_url }}" alt="" width="12" height="12">Compartir</button>
        </aside>
        <button type="button" class="altar-solar__fortune-close" data-fortune-close tabindex="-1" aria-label="{{ 'Cerrar carta' | translate }}"><img src="{{ 'images/altar-close.svg' | static_url }}" alt="" width="14" height="14"></button>
      </div>
