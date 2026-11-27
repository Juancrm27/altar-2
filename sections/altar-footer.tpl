{% set footer_settings = section.settings %}
{% set password_page = template == 'password' %}
{% set background_color = footer_settings.background_color | default('#fff3a9') %}
{% set text_color = footer_settings.text_color | default('#601e2a') %}
{% set is_altar_commerce = template != 'home' and template != 'password' %}
{% if is_altar_commerce %}
  {% set background_color = footer_settings.commerce_background_color | default('#FBF7E7') %}
  {% set text_color = footer_settings.commerce_text_color | default('#000000') %}
{% endif %}
{% set has_social_network = store.facebook or store.twitter or store.pinterest or store.instagram or store.tiktok or store.youtube %}
{% set show_newsletter = footer_settings.show_newsletter is not same as(false) %}
{% set show_contact = footer_settings.show_contact is not same as(false) %}
{% set show_social = footer_settings.show_social is not same as(false) and has_social_network %}
{% set footer_theme_class = is_altar_commerce ? 'altar-footer--light' : 'altar-footer--color' %}

{{ component('nubesdk-slot', { type: "before_footer" }) }}
{% if template == 'home' %}
<div class="altar-closing-v2 altar-v3-closing" id="closing" style="--closing-bg-a: {{ footer_settings.background_color | default('#c6ca9f') }}; --closing-fg-a: {{ footer_settings.text_color | default('#091e2b') }}; --closing-bg-b: {{ footer_settings.alternate_background | default('#091e2b') }}; --closing-fg-b: {{ footer_settings.alternate_text | default('#c6ca9f') }};"><div class="altar-closing-v2__scene" data-altar-closing-stage role="img" aria-label="Piedras tridimensionales de Altar"></div>{% include 'snippets/altar-grain.tpl' with { grain_id: 'closing-footer', grain_class: '' } %}{% endif %}

{#
  Footer v3 · Figma "Footer / Illustrator" (819:4095), from Sofi's Illustrator. Same on every page, in the
  page language: ES on #C6CA9F, EN on #091E2B (html[data-altar-home-layout="b"]). Newsletter always open on top
  (EMAIL ____ ENVIAR) — Cartas / Newsletter just takes you to that field —, one row of links (mobile shortens IG · TT · YT), then Tiendanube's required legal row.
  No Contacto and no Info (Sofi). Social URLs come from the store admin, with Altar's accounts as fallback.
#}
{% set altar_instagram = store.instagram | default('https://www.instagram.com/altarmundi/') %}
{% set altar_tiktok = store.tiktok | default('https://www.tiktok.com/@altarmundi') %}
{% set altar_youtube = store.youtube | default('https://www.youtube.com/@sofiaguevara') %}
{% set altar_whatsapp = store.whatsapp | default('https://wa.me/541157991078') %}
<div
  class="altar-footer altar-footer--v3 js-hide-footer-while-scrolling"
  data-store="footer"
  data-section-id="{{ section.id }}"
>
  {% include 'snippets/altar-grain.tpl' with { grain_id: 'footer', grain_class: 'altar-footer__grain' } %}
  {% if not password_page %}
    {% if show_newsletter %}
      {% set newsletter_sent = contact and contact.type == 'newsletter' and contact.success %}
      <form class="altar-footer__newsletter newsletter-form{% if newsletter_sent %} is-sent{% endif %}" method="post" action="/winnie-pooh" onsubmit="this.setAttribute('action', '');" data-store="newsletter-form">
        <div class="altar-footer__field">
          <label class="visually-hidden" for="altar-newsletter-email">Email</label>
          <input id="altar-newsletter-email" type="email" name="email" class="altar-footer__input newsletter-form-input" placeholder="EMAIL" autocomplete="email" required>
          <div class="winnie-pooh" style="display: none;">
            <label for="winnie-pooh-newsletter-altar">{{ 'contact.do_not_fill' | t }}</label>
            <input id="winnie-pooh-newsletter-altar" type="text" name="winnie-pooh">
          </div>
          <input type="hidden" name="name" value="{{ 'newsletter.anonymous_name' | t }}">
          <input type="hidden" name="message" value="{{ 'newsletter.subscription_request' | t }}">
          <input type="hidden" name="type" value="newsletter">
          <button type="submit" name="contact" class="altar-footer__submit newsletter-form-button"><span class="altar-es">Enviar</span><span class="altar-en">Send</span></button>
          {# Footer / Illustrator · Newsletter=Enviado (Figma 819:4095): the same line thanks the visitor. #}
          <p class="altar-footer__sent" role="status"><span><span class="altar-es">Gracias, ya estás en la lista</span><span class="altar-en">Thank you, you’re on the list</span></span><span><span class="altar-es">Enviado</span><span class="altar-en">Sent</span></span></p>
        </div>
        {% if contact and contact.type == 'newsletter' and not contact.success %}
          <p class="altar-footer__status" role="alert"><span class="altar-es">Revisá el email e intentá de nuevo.</span><span class="altar-en">Please check the email and try again.</span></p>
        {% endif %}
      </form>
    {% endif %}

    <nav class="altar-footer__links" aria-label="Altar">
      <a href="#altar-newsletter-email" data-altar-newsletter-focus aria-controls="altar-newsletter-email" aria-expanded="false"><span class="altar-es">Cartas</span><span class="altar-en">Newsletter</span></a>
      <a href="{{ altar_instagram }}" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><span class="altar-footer__long">Instagram</span><span class="altar-footer__short" aria-hidden="true">IG</span></a>
      <a href="{{ altar_tiktok }}" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><span class="altar-footer__long">TikTok</span><span class="altar-footer__short" aria-hidden="true">TT</span></a>
      <a href="{{ altar_youtube }}" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><span class="altar-footer__long">YouTube</span><span class="altar-footer__short" aria-hidden="true">YT</span></a>
      <a href="{{ altar_whatsapp }}" target="_blank" rel="noopener noreferrer">WhatsApp</a>
    </nav>

    <div class="altar-footer__legal-row">
      <div class="altar-footer__brand">
        <p>©{{ 'now' | date('Y') }} {{ footer_settings.copyright_name | default('altar') }}</p>
        {% if new_powered_by_link %}<span class="altar-footer__powered">{{ new_powered_by_link }}</span>{% endif %}
      </div>
      {% if store.country == 'AR' %}
        {% set order_cancellation_url = status_page_url_regret ? '?order_cancellation=true' : '?order_cancellation_without_id=true' %}
        <div class="altar-footer__consumer">
          <a href="https://www.argentina.gob.ar/produccion/defensadelconsumidor/formulario" target="_blank" rel="noopener noreferrer" data-component="consumer-defense">Defensa de las y los consumidores. Para reclamos ingresá acá.</a>
          <span class="altar-footer__separator" aria-hidden="true">/</span>
          <a href="{{ store.contact_url }}{{ order_cancellation_url }}" data-component="order-cancellation">Botón de arrepentimiento</a>
        </div>
      {% endif %}
    </div>

    {% include 'snippets/footer/footer-country-selector.tpl' %}
  {% endif %}
</div>

{% if template == 'home' %}</div>{% endif %}
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
    { "type": "setting", "setting_type": "color", "id": "alternate_background", "label": "Home B · Fondo", "default": "#091e2b" },
    { "type": "setting", "setting_type": "color", "id": "alternate_text", "label": "Home B · Texto", "default": "#c6ca9f" },
    {
      "type": "header",
      "content": "Tema color (inicio)"
    },
    {
      "type": "setting",
      "setting_type": "color",
      "id": "background_color",
      "label": "Fondo",
      "default": "#c6ca9f"
    },
    {
      "type": "setting",
      "setting_type": "color",
      "id": "text_color",
      "label": "Texto",
      "default": "#091e2b"
    },
    {
      "type": "header",
      "content": "Tema claro (tienda y páginas internas)"
    },
    {
      "type": "setting",
      "setting_type": "color",
      "id": "commerce_background_color",
      "label": "Fondo",
      "default": "#FBF7E7"
    },
    {
      "type": "setting",
      "setting_type": "color",
      "id": "commerce_text_color",
      "label": "Texto",
      "default": "#000000"
    },
    {
      "type": "header",
      "content": "Newsletter y redes"
    },
    {
      "type": "setting",
      "setting_type": "toggle",
      "id": "show_newsletter",
      "label": "Mostrar newsletter",
      "default": true
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
      "setting_type": "toggle",
      "id": "show_contact",
      "label": "Mostrar contacto",
      "default": true
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
