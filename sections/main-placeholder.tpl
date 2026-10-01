<section class="page-shell" data-section-id="{{ section.id }}">
  {% if template == '404' %}
    <p class="eyebrow">404</p><h1>Página no encontrada</h1><a class="button" href="{{ store.url }}">Volver al inicio</a>
  {% elseif template == 'password' %}
    <h1>{{ store.name }}</h1><p>Estamos preparando una nueva experiencia.</p>
  {% elseif page %}
    <h1>{{ page.name }}</h1><div class="rte">{{ page.content }}</div>
  {% else %}
    <h1>{{ page_title }}</h1><p>Esta plantilla queda preparada para integrarse con el contenido comercial de la tienda.</p>
  {% endif %}
</section>
{% schema %}
{
  "name": "Contenido principal",
  "class": "section-main-placeholder",
  "static": true,
  "enabled_on": { "page_templates": "all" },
  "settings": []
}
{% endschema %}

