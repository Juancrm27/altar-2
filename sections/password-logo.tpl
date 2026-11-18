{#
  Password Logo Section
  Header logo displayed on the store password page.
#}

{# Altar v3 (Figma "Contraseña", 924:10108): no menu on this page — only the Altar mark and the language switch. #}
<header class="head-main head-main-password altar-password-head">
  <a class="altar-password-head__logo" href="{{ store.url }}" aria-label="{{ store.name }}"><img src="{{ 'images/altar-logo.svg' | static_url }}" alt="" width="40" height="39"></a>
  <button type="button" class="altar-nav__layout-switch" data-altar-layout-toggle role="switch" aria-checked="false" aria-label="English"><span aria-hidden="true"></span></button>
</header>


{% schema %}
{
  "name": "t:names.password_logo",
  "wrapper": "header",
  "class": "section-password-logo",
  "static": true,
  "limit": 1,
  "presets": [{"name": "t:names.password_logo"}],
  "blocks": [],
  "enabled_on": {
    "page_templates": ["password"]
  }
}
{% endschema %}
