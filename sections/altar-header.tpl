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
      <a class="altar-nav__account" href="{{ customer ? store.customer_home_url : store.customer_login_url }}">
        <img class="altar-nav__action-icon" src="{{ 'images/altar-arrow-up-right.svg' | static_url }}" alt="" width="12" height="12"><span>{{ customer ? 'Account' : 'Login' }}</span>
      </a>
      <span class="altar-nav__divider altar-nav__divider--actions" aria-hidden="true"></span>
      {# Altar look, Ipanema behaviour: the js-* hooks are the ones store.js wires (cart modal, badge, search, menu). #}
      {% set altar_action_icon %}<img class="altar-nav__action-icon" src="{{ 'images/altar-arrow-up-right.svg' | static_url }}" alt="" width="12" height="12">{% endset %}
      <div class="altar-nav__action-stack">
        <span id="ajax-cart" class="js-cart-container altar-nav__action" data-component="cart-button">
          {% if settings.ajax_cart and template != 'cart' %}
            <button type="button" class="js-modal-open-private altar-nav__cart" data-target="#modal-cart" data-store="cart-link" aria-label="{{ 'general.shopping_cart' | t }}">
          {% else %}
            <a class="altar-nav__cart" href="{{ store.cart_url }}" data-store="cart-link" aria-label="{{ 'general.shopping_cart' | t }}">
          {% endif %}
              {{ altar_action_icon }}<span>Cart</span><span class="js-cart-widget-amount altar-nav__count">{{ cart.items_count | default(0) }}</span>
          {% if settings.ajax_cart and template != 'cart' %}</button>{% else %}</a>{% endif %}
        </span>
        <div class="js-search-container altar-nav__action altar-nav__search-container">
          <button type="button" class="js-search-trigger altar-nav__search" aria-label="{{ 'search.placeholder' | t }}" aria-expanded="false">
            {{ altar_action_icon }}<span>Search</span>
          </button>
          <div class="js-search-expand-form search-floating-container altar-nav__search-panel" aria-hidden="true">
            {% include 'snippets/header/search-form.tpl' %}
          </div>
        </div>
      </div>
      <button type="button" class="js-modal-open-private altar-nav__menu-toggle" data-target="#nav-hamburger" data-modal-url="#nav-hamburger" aria-label="{{ 'accessibility.open_menu' | t }}">
        <span>Menu</span>
      </button>
    </div>
  </div>
  <div class="altar-nav__rule altar-nav__rule--bottom" aria-hidden="true"></div>
</div>

{# Ipanema pieces the header relies on: mobile menu and search modals, cookies notice. #}
{% set navigation_block = null %}
{% include 'snippets/header/header-nav-mobile.tpl' %}
{% include 'snippets/notification.tpl' with { type: 'cookies' } %}
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
