{% set footer_settings = section.settings %}
<div class="altar-footer" data-section-id="{{ section.id }}" data-header-theme="light">
  <div class="altar-footer__top">
    <div class="altar-footer__newsletter">
      <p class="altar-footer__label">{{ footer_settings.newsletter_label | default('[ NEWSLETTER ]') }}</p>
      <p class="altar-footer__body">{{ footer_settings.newsletter_text | default('Colecciones, objetos, historias y encuentros. Sin ruido, cuando haya algo que contar.') }}</p>
      {# Tiendanube newsletter: posts to the contact endpoint with type=newsletter; "winnie-pooh" is the store's anti-spam trap. #}
      <form class="altar-footer__form" method="post" action="{{ store.contact_url }}" data-newsletter-form>
        <input type="hidden" name="name" value="{{ 'Sin nombre' | translate }}">
        <input type="hidden" name="message" value="{{ 'Pedido de inscripción a newsletter' | translate }}">
        <input type="hidden" name="type" value="newsletter">
        <div class="winnie-pooh" aria-hidden="true"><label>{{ 'No completar' | translate }}<input type="text" name="winnie-pooh" tabindex="-1" autocomplete="off"></label></div>
        <div class="altar-footer__field">
          <label class="visually-hidden" for="altar-newsletter-email">{{ 'Tu correo' | translate }}</label>
          <input id="altar-newsletter-email" type="email" name="email" placeholder="{{ 'Tu correo' | translate }}" autocomplete="email" required>
          <button type="submit">{{ 'Suscribirme' | translate }}<svg viewBox="0 0 12 12" width="12" height="12" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3.5 3.5h5v5M3.5 8.5l5-5"/></svg></button>
        </div>
        {% if contact and contact.type == 'newsletter' %}
          <p class="altar-footer__legal altar-footer__status" role="status">{% if contact.success %}{{ '¡Listo! Ya estás en la lista.' | translate }}{% else %}{{ 'No pudimos suscribirte. Revisá el correo e intentá de nuevo.' | translate }}{% endif %}</p>
        {% else %}
          <p class="altar-footer__legal">{{ footer_settings.newsletter_consent | default('Al suscribirte aceptás recibir novedades de altar.') }}</p>
        {% endif %}
      </form>
    </div>
    <nav class="altar-footer__group altar-footer__group--help" aria-label="{{ 'Ayuda' | translate }}">
      <p class="altar-footer__label">{{ 'Ayuda' | translate }}</p>
      <a href="{{ footer_settings.shipping_url | default('#') }}">{{ 'Envíos y devoluciones' | translate }}</a>
      <a href="{{ footer_settings.returns_url | default('#') }}">{{ 'Solicitud de devolución' | translate }}</a>
      <a class="altar-footer__keep-case" href="{{ footer_settings.faq_url | default('#') }}">FAQs</a>
    </nav>
    <nav class="altar-footer__group altar-footer__group--explore" aria-label="{{ 'Explorar' | translate }}">
      <p class="altar-footer__label">{{ 'Explorar' | translate }}</p>
      <a href="{{ store.products_url }}">Store</a>
      <a href="{{ store.url }}/#about">About</a>
      <a href="{{ footer_settings.makers_url | default('#') }}">Makers</a>
    </nav>
    <div class="altar-footer__group altar-footer__group--address">
      <p class="altar-footer__label">{{ 'Dirección' | translate }}</p>
      <a href="{{ footer_settings.address_url | default('https://maps.google.com/?q=Bulnes+1120,+Buenos+Aires') }}" target="_blank" rel="noopener">{{ footer_settings.address | default('1120 Bulnes') }}</a>
      <a href="{{ store.url }}/#coleccion">{{ footer_settings.campaign_label | default('Campaña SS27') }}</a>
    </div>
  </div>
  <p class="altar-footer__descriptor">{{ footer_settings.descriptor | default('CONCEPT STORE  /') }}</p>
  <div class="altar-footer__bottom">
    <p class="altar-footer__legal">©{{ 'now' | date('Y') }} {{ store.name | lower }}</p>
    <nav class="altar-footer__legal-links" aria-label="{{ 'Legales' | translate }}">
      <a href="{{ footer_settings.terms_url | default('#') }}">{{ 'Términos y condiciones' | translate }}</a>
      <a href="{{ footer_settings.privacy_url | default('#') }}">{{ 'Política de privacidad' | translate }}</a>
    </nav>
  </div>
</div>
{% schema %}
{
  "name": "Footer",
  "wrapper": "footer",
  "class": "site-footer",
  "static": true,
  "enabled_on": { "layout_templates": ["footer"] },
  "settings": [
    { "type": "header", "content": "Newsletter" },
    { "type": "setting", "setting_type": "text", "id": "newsletter_label", "label": "Etiqueta", "default": "[ NEWSLETTER ]" },
    { "type": "setting", "setting_type": "textarea", "id": "newsletter_text", "label": "Texto", "default": "Colecciones, objetos, historias y encuentros. Sin ruido, cuando haya algo que contar." },
    { "type": "setting", "setting_type": "text", "id": "newsletter_consent", "label": "Texto legal", "default": "Al suscribirte aceptás recibir novedades de altar." },
    { "type": "header", "content": "Links" },
    { "type": "setting", "setting_type": "text", "id": "shipping_url", "label": "Envíos y devoluciones (link)" },
    { "type": "setting", "setting_type": "text", "id": "returns_url", "label": "Solicitud de devolución (link)" },
    { "type": "setting", "setting_type": "text", "id": "faq_url", "label": "FAQs (link)" },
    { "type": "setting", "setting_type": "text", "id": "makers_url", "label": "Makers (link)" },
    { "type": "setting", "setting_type": "text", "id": "address", "label": "Dirección", "default": "1120 Bulnes" },
    { "type": "setting", "setting_type": "text", "id": "address_url", "label": "Dirección (link de mapa)" },
    { "type": "setting", "setting_type": "text", "id": "campaign_label", "label": "Campaña", "default": "Campaña SS27" },
    { "type": "setting", "setting_type": "text", "id": "descriptor", "label": "Descriptor central", "default": "CONCEPT STORE  /" },
    { "type": "setting", "setting_type": "text", "id": "terms_url", "label": "Términos y condiciones (link)" },
    { "type": "setting", "setting_type": "text", "id": "privacy_url", "label": "Política de privacidad (link)" }
  ]
}
{% endschema %}
