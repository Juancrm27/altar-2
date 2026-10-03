{% set header_settings = section.settings %}
<div class="altar-nav" data-section-id="{{ section.id }}">
  <div class="altar-nav__rule altar-nav__rule--top" aria-hidden="true"></div>
  <div class="altar-nav__content">
    <div class="altar-nav__brand">
      <a class="altar-nav__logo" href="{{ store.url }}" aria-label="{{ store.name }}">
        <img src="{{ 'images/altar-logo.svg' | static_url }}" alt="" width="40" height="39">
      </a>
      <span class="altar-nav__divider altar-nav__divider--brand" aria-hidden="true"></span>
      <div class="altar-nav__wordmark-block">
        <span class="altar-nav__eyebrow">{{ header_settings.concept_label | default('[  CONCEPT_STORE  ]') }}</span>
        <a class="altar-nav__wordmark" href="{{ store.url }}">
          <span>{{ header_settings.wordmark | default('altar') }}</span><sup>©</sup>
        </a>
      </div>
      <span class="altar-nav__divider altar-nav__divider--metadata" aria-hidden="true"></span>
      <div class="altar-nav__metadata">
        {% if header_settings.metadata_date %}
          <span>{{ header_settings.metadata_date }}</span>
        {% else %}
          <time data-live-date datetime="{{ 'now' | date('Y-m-d') }}">{{ 'now' | date('M/d/y') | upper }}</time>
        {% endif %}
        <span>{{ header_settings.metadata_location | default('C.A.B.A. (ARG)') }}</span>
      </div>
      <span class="altar-nav__divider altar-nav__divider--navigation" aria-hidden="true"></span>
    </div>
    <nav class="altar-nav__menu" aria-label="Navegación principal">
      {% for item in navigation %}<a href="{{ item.url }}">{{ item.name }}</a>{% endfor %}
    </nav>
    <div class="altar-nav__actions">
      <span class="altar-nav__divider altar-nav__divider--actions" aria-hidden="true"></span>
      <div class="altar-nav__action-stack">
        <a class="altar-nav__cart" href="{{ store.cart_url }}" data-store="cart-link">
          <img class="altar-nav__action-icon" src="{{ 'images/altar-arrow-up-right.svg' | static_url }}" alt="" width="12" height="12"><span>Cart</span><span>({{ cart.items_count | default(0) }})</span>
        </a>
        <a class="altar-nav__search" href="{{ store.url }}/search/">
          <img class="altar-nav__action-icon" src="{{ 'images/altar-arrow-up-right.svg' | static_url }}" alt="" width="12" height="12"><span>Search</span>
        </a>
      </div>
    </div>
  </div>
  <div class="altar-nav__rule altar-nav__rule--bottom" aria-hidden="true"></div>
</div>
{% schema %}
{
  "name": "Header Altar",
  "wrapper": "div",
  "class": "header-section",
  "static": true,
  "enabled_on": { "layout_templates": ["header"] },
  "settings": [
    { "type": "setting", "setting_type": "text", "id": "concept_label", "label": "Etiqueta de marca", "default": "[  CONCEPT_STORE  ]" },
    { "type": "setting", "setting_type": "text", "id": "wordmark", "label": "Nombre de marca", "default": "altar" },
    { "type": "setting", "setting_type": "text", "id": "metadata_date", "label": "Fecha fija (dejar vacío para mostrar la fecha del día)", "default": "" },
    { "type": "setting", "setting_type": "text", "id": "metadata_location", "label": "Ubicación", "default": "C.A.B.A. (ARG)" }
  ]
}
{% endschema %}
