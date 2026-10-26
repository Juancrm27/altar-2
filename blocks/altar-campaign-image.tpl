{% set campaign_image = block.settings %}
{% set image_url = fallback_image %}

{% if campaign_image.image %}
  {% if campaign_image.image starts with '@media-lib:' %}
    {% set image_media = campaign_image.image | resolve_media %}
    {% if image_media %}
      {% set image_url = image_media.sourceUrl %}
    {% endif %}
  {% else %}
    {% set image_url = campaign_image.image %}
  {% endif %}
{% endif %}

{# Every photo opens the collection; a block link (editor) sends that photo somewhere else instead. #}
<a
  class="altar-collection__photo"
  href="{{ campaign_image.link | default(store.products_url) }}"
  data-cursor-label="{{ campaign_image.link ? ('Ver producto' | translate) : ('Ver colección' | translate) }}"
  {{ block | block_attributes }}
>
  <img
    src="{{ image_url }}"
    alt="{{ campaign_image.alt_text | default('Imagen de la campaña') }}"
    width="360"
    height="543"
    loading="lazy"
  >
</a>

{% schema %}
{
  "name": "Foto de campaña",
  "icon": "pictureIcon",
  "settings": [
    {
      "type": "setting",
      "setting_type": "image_picker",
      "id": "image",
      "label": "Imagen"
    },
    {
      "type": "setting",
      "setting_type": "url",
      "id": "link",
      "label": "Enlace (vacío: lleva a la colección)"
    },
    {
      "type": "setting",
      "setting_type": "text",
      "id": "alt_text",
      "label": "Descripción de la imagen",
      "default": "Imagen de la campaña"
    }
  ]
}
{% endschema %}
