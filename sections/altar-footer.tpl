{% set footer_settings = section.settings %}
{% set password_page = template == 'password' %}
{% set background_color = footer_settings.background_color | default('#fff3a9') %}
{% set text_color = footer_settings.text_color | default('#601e2a') %}
{% set has_social_network = store.facebook or store.twitter or store.pinterest or store.instagram or store.tiktok or store.youtube %}

{{ component('nubesdk-slot', { type: "before_footer" }) }}

<div
  class="altar-footer js-hide-footer-while-scrolling"
  data-store="footer"
  data-section-id="{{ section.id }}"
  data-header-theme="light"
  style="--footer-background: {{ background_color }}; --footer-foreground: {{ text_color }}; --footer-foreground-opacity-10: {{ text_color }}1A; --footer-foreground-opacity-20: {{ text_color }}33; --footer-foreground-opacity-40: {{ text_color }}66; --footer-foreground-opacity-60: {{ text_color }}99; background-color: {{ background_color }}; color: {{ text_color }};"
>
  {% if not password_page %}
    <div class="altar-footer__top">
      <div class="altar-footer__newsletter">
        <p class="altar-footer__label">{{ footer_settings.newsletter_label | default('[ NEWSLETTER ]') }}</p>
        <p class="altar-footer__body">{{ footer_settings.newsletter_text | default('Colecciones, objetos, historias y encuentros. Sin ruido, cuando haya algo que contar.') }}</p>

        <form class="altar-footer__form newsletter-form" method="post" action="/winnie-pooh" onsubmit="this.setAttribute('action', '');" data-store="newsletter-form">
          <div class="altar-footer__field newsletter-form-wrapper input-append">
            <label class="visually-hidden" for="altar-newsletter-email">{{ 'footer.email_placeholder' | t }}</label>
            <input id="altar-newsletter-email" type="email" name="email" class="altar-footer__input newsletter-form-input form-control" placeholder="{{ footer_settings.newsletter_placeholder | default('Tu correo') }}" autocomplete="email" required aria-label="{{ 'footer.email_placeholder' | t }}">
            <div class="winnie-pooh" style="display: none;">
              <label for="winnie-pooh-newsletter-altar">{{ 'contact.do_not_fill' | t }}</label>
              <input id="winnie-pooh-newsletter-altar" type="text" name="winnie-pooh">
            </div>
            <input type="hidden" name="name" value="{{ 'newsletter.anonymous_name' | t }}">
            <input type="hidden" name="message" value="{{ 'newsletter.subscription_request' | t }}">
            <input type="hidden" name="type" value="newsletter">
            <button type="submit" name="contact" class="altar-footer__submit newsletter-form-button">
              <span>{{ footer_settings.newsletter_submit_label | default('Suscribirme') }}</span>
              <svg viewBox="0 0 12 12" width="12" height="12" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3.5 3.5h5v5M3.5 8.5l5-5"/></svg>
            </button>
          </div>
          {% if contact and contact.type == 'newsletter' %}
            {% if contact.success %}
              <div class="altar-footer__status alert alert-success newsletter-form-alert" role="status">{{ 'footer.thanks_subscribe' | t }}</div>
            {% else %}
              <div class="altar-footer__status alert alert-danger newsletter-form-alert" role="alert">{{ 'newsletter.email_required' | t }}</div>
            {% endif %}
          {% endif %}
        </form>

        {% if footer_settings.show_social is not same as(false) and has_social_network %}
          <nav class="altar-footer__social" aria-label="Redes sociales">
            {% for social_network in ['instagram', 'facebook', 'youtube', 'tiktok', 'twitter', 'pinterest'] %}
              {% set social_url = attribute(store, social_network) %}
              {% if social_url %}
                <a href="{{ social_url }}" target="_blank" rel="noopener noreferrer" aria-label="{{ social_network }} {{ store.name }}">
                  {% if social_network == 'instagram' %}
                    <img src="{{ 'images/altar-instagram.svg' | static_url }}" alt="" width="24" height="24">
                  {% else %}
                    <svg class="icon-inline" aria-hidden="true"><use xlink:href="#{{ social_network }}"/></svg>
                  {% endif %}
                </a>
              {% endif %}
            {% endfor %}
          </nav>
        {% endif %}
      </div>

      <nav class="altar-footer__group altar-footer__group--help" aria-label="{{ footer_settings.help_label | default('Ayuda') }}">
        <p class="altar-footer__label">{{ footer_settings.help_label | default('Ayuda') }}</p>
        {% if footer_settings.shipping_label %}
          <a href="{{ footer_settings.shipping_url | default(store.contact_url) }}">{{ footer_settings.shipping_label }}</a>
        {% endif %}
        {% if footer_settings.returns_label %}
          <a href="{{ footer_settings.returns_url | default(store.contact_url ~ '?order_cancellation_without_id=true') }}">{{ footer_settings.returns_label }}</a>
        {% endif %}
        {% if footer_settings.faq_label %}
          <a class="altar-footer__keep-case" href="{{ footer_settings.faq_url | default(store.contact_url) }}">{{ footer_settings.faq_label }}</a>
        {% endif %}
      </nav>

      <div class="altar-footer__group altar-footer__group--address">
        <p class="altar-footer__label">{{ footer_settings.contact_label | default('Contacto') }}</p>
        {% if footer_settings.address or store.address %}
          {% if footer_settings.address_url %}
            <a href="{{ footer_settings.address_url }}" target="_blank" rel="noopener noreferrer">{{ footer_settings.address | default(store.address) }}</a>
          {% else %}
            <span>{{ footer_settings.address | default(store.address) }}</span>
          {% endif %}
        {% endif %}
        {% if store.whatsapp %}<a href="{{ store.whatsapp }}">{{ footer_settings.whatsapp_label | default('WhatsApp') }}</a>{% endif %}
        {% if store.email %}<a href="mailto:{{ store.email }}">{{ footer_settings.email_label | default('Correo') }}</a>{% endif %}
      </div>

      {% for block in section.blocks %}
        {% if block.type == 'footer-menu' %}
          {% set menu_id = block.settings.menu %}
          <nav class="altar-footer__group altar-footer__group--explore" aria-label="{{ block.settings.title | default('Explorar') | striptags }}" {{ block | block_attributes }}>
            <p class="altar-footer__label">{{ block.settings.title | default('Explorar') | raw }}</p>
            {% if menu_id and menus[menu_id] %}
              {% for item in menus[menu_id] %}
                <a href="{{ item.url }}" {% if item.url | is_external %}target="_blank" rel="noopener noreferrer"{% endif %}>{{ item.name }}</a>
              {% endfor %}
            {% else %}
              <a href="{{ footer_settings.explore_store_url | default(store.products_url) }}">{{ footer_settings.explore_store_label | default('Store') }}</a>
              <a href="{{ footer_settings.explore_about_url | default(store.url ~ '/#about') }}">{{ footer_settings.explore_about_label | default('About') }}</a>
              <a href="{{ footer_settings.explore_makers_url | default(store.url ~ '/#makers') }}">{{ footer_settings.explore_makers_label | default('Makers') }}</a>
            {% endif %}
          </nav>
        {% endif %}
      {% endfor %}
    </div>

    {% if footer_settings.descriptor %}<p class="altar-footer__descriptor">{{ footer_settings.descriptor }}</p>{% endif %}

    <div class="altar-footer__bottom">
      <div class="altar-footer__meta">
        <div class="altar-footer__meta-left">
          <p class="altar-footer__copyright">©{{ 'now' | date('Y') }} {{ footer_settings.copyright_name | default('altar') }}</p>
          {% if new_powered_by_link %}<span class="altar-footer__powered">{{ new_powered_by_link }}</span>{% endif %}
        </div>
        {% if footer_settings.terms_url or footer_settings.privacy_url %}
          <nav class="altar-footer__editorial-legal" aria-label="Legales">
            {% if footer_settings.terms_url %}<a href="{{ footer_settings.terms_url }}">{{ footer_settings.terms_label | default('Términos y condiciones') }}</a>{% endif %}
            {% if footer_settings.privacy_url %}<a href="{{ footer_settings.privacy_url }}">{{ footer_settings.privacy_label | default('Política de privacidad') }}</a>{% endif %}
          </nav>
        {% endif %}
      </div>
    </div>

    {% include 'snippets/footer/footer-country-selector.tpl' %}
  {% endif %}

  <div class="altar-footer__platform footer-secondary-info">
    {% include 'snippets/footer/footer-legal.tpl' with { password_page: password_page } %}
  </div>
</div>

{{ component('nubesdk-slot', { type: "after_footer" }) }}

{% schema %}
{
  "name": "Footer Altar + Tiendanube",
  "icon": "FooterIcon",
  "wrapper": "footer",
  "class": "site-footer",
  "static": true,
  "limit": 1,
  "blocks": [
    {
      "type": "footer-menu",
      "limit": 1
    }
  ],
  "settings": [
    {
      "type": "header",
      "content": "Colores"
    },
    {
      "type": "setting",
      "setting_type": "color",
      "id": "background_color",
      "label": "Fondo",
      "default": "#fff3a9"
    },
    {
      "type": "setting",
      "setting_type": "color",
      "id": "text_color",
      "label": "Texto",
      "default": "#601e2a"
    },
    {
      "type": "header",
      "content": "Newsletter y redes"
    },
    {
      "type": "setting",
      "setting_type": "text",
      "id": "newsletter_label",
      "label": "Etiqueta",
      "default": "[ NEWSLETTER ]"
    },
    {
      "type": "setting",
      "setting_type": "textarea",
      "id": "newsletter_text",
      "label": "Texto",
      "default": "Colecciones, objetos, historias y encuentros. Sin ruido, cuando haya algo que contar."
    },
    {
      "type": "setting",
      "setting_type": "text",
      "id": "newsletter_placeholder",
      "label": "Texto del campo de correo",
      "default": "Tu correo"
    },
    {
      "type": "setting",
      "setting_type": "text",
      "id": "newsletter_submit_label",
      "label": "Texto del botón",
      "default": "Suscribirme"
    },
    {
      "type": "setting",
      "setting_type": "toggle",
      "id": "show_social",
      "label": "Mostrar redes configuradas en la tienda",
      "default": true
    },
    {
      "type": "header",
      "content": "Ayuda"
    },
    {
      "type": "setting",
      "setting_type": "text",
      "id": "help_label",
      "label": "Título",
      "default": "Ayuda"
    },
    {
      "type": "setting",
      "setting_type": "text",
      "id": "shipping_label",
      "label": "Texto de envíos y devoluciones",
      "default": "Envíos y devoluciones"
    },
    {
      "type": "setting",
      "setting_type": "url",
      "id": "shipping_url",
      "label": "Link de envíos y devoluciones"
    },
    {
      "type": "setting",
      "setting_type": "text",
      "id": "returns_label",
      "label": "Texto de solicitud de devolución",
      "default": "Solicitud de devolución"
    },
    {
      "type": "setting",
      "setting_type": "url",
      "id": "returns_url",
      "label": "Link de solicitud de devolución"
    },
    {
      "type": "setting",
      "setting_type": "text",
      "id": "faq_label",
      "label": "Texto de FAQs",
      "default": "FAQs"
    },
    {
      "type": "setting",
      "setting_type": "url",
      "id": "faq_url",
      "label": "Link de FAQs"
    },
    {
      "type": "header",
      "content": "Contacto y contenido"
    },
    {
      "type": "setting",
      "setting_type": "text",
      "id": "contact_label",
      "label": "Título de contacto",
      "default": "Contacto"
    },
    {
      "type": "setting",
      "setting_type": "text",
      "id": "address",
      "label": "Dirección visible"
    },
    {
      "type": "setting",
      "setting_type": "url",
      "id": "address_url",
      "label": "Link del mapa"
    },
    {
      "type": "setting",
      "setting_type": "text",
      "id": "whatsapp_label",
      "label": "Texto de WhatsApp",
      "default": "WhatsApp"
    },
    {
      "type": "setting",
      "setting_type": "text",
      "id": "email_label",
      "label": "Texto del correo",
      "default": "Correo"
    },
    {
      "type": "header",
      "content": "Explorar"
    },
    {
      "type": "setting",
      "setting_type": "text",
      "id": "explore_store_label",
      "label": "Texto de la tienda",
      "default": "Store"
    },
    {
      "type": "setting",
      "setting_type": "url",
      "id": "explore_store_url",
      "label": "Link de la tienda"
    },
    {
      "type": "setting",
      "setting_type": "text",
      "id": "explore_about_label",
      "label": "Texto de About",
      "default": "About"
    },
    {
      "type": "setting",
      "setting_type": "url",
      "id": "explore_about_url",
      "label": "Link de About"
    },
    {
      "type": "setting",
      "setting_type": "text",
      "id": "explore_makers_label",
      "label": "Texto de Makers",
      "default": "Makers"
    },
    {
      "type": "setting",
      "setting_type": "url",
      "id": "explore_makers_url",
      "label": "Link de Makers"
    },
    {
      "type": "setting",
      "setting_type": "text",
      "id": "descriptor",
      "label": "Descriptor central",
      "default": "CONCEPT STORE  /"
    },
    {
      "type": "setting",
      "setting_type": "url",
      "id": "terms_url",
      "label": "Términos y condiciones"
    },
    {
      "type": "setting",
      "setting_type": "url",
      "id": "privacy_url",
      "label": "Política de privacidad"
    },
    {
      "type": "setting",
      "setting_type": "text",
      "id": "terms_label",
      "label": "Texto de términos",
      "default": "Términos y condiciones"
    },
    {
      "type": "setting",
      "setting_type": "text",
      "id": "privacy_label",
      "label": "Texto de privacidad",
      "default": "Política de privacidad"
    },
    {
      "type": "setting",
      "setting_type": "text",
      "id": "copyright_name",
      "label": "Nombre en el copyright",
      "default": "altar"
    },
    {
      "type": "header",
      "content": "Medios de pago y envío"
    },
    {
      "type": "setting",
      "setting_type": "toggle",
      "id": "footer_payments_show",
      "label": "Mostrar medios de pago",
      "default": true
    },
    {
      "type": "setting",
      "setting_type": "toggle",
      "id": "footer_shipping_show",
      "label": "Mostrar medios de envío",
      "default": true
    },
    {
      "type": "header",
      "content": "Sellos personalizados"
    },
    {
      "type": "setting",
      "setting_type": "image_picker",
      "id": "footer_seal_img",
      "label": "Imagen del sello"
    },
    {
      "type": "setting",
      "setting_type": "url",
      "id": "footer_seal_url",
      "label": "Link del sello",
      "visible_if": "{{ section.settings.footer_seal_img }}"
    },
    {
      "type": "setting",
      "setting_type": "custom_code",
      "id": "footer_custom_seal_code",
      "label": "Código de sello personalizado"
    }
  ],
  "default": {
    "blocks": [
      {
        "type": "footer-menu",
        "settings": {
          "title": "Explorar"
        }
      }
    ]
  },
  "enabled_on": {
    "layout_templates": ["footer"]
  }
}
{% endschema %}
