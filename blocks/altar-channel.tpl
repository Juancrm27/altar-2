{# Editable image pair used by the four fixed 3D channel states. #}
<span
  class="visually-hidden"
  {{ block | block_attributes }}
  data-altar-channel-config="{{ block.id }}"
>
  {{ block.settings.internal_name | default('Canal de campaña') }}
</span>

{% schema %}
{
  "name": "Canal de campaña",
  "icon": "pictureIcon",
  "settings": [
    {
      "type": "setting",
      "setting_type": "text",
      "id": "internal_name",
      "label": "Nombre interno",
      "default": "CHANNEL"
    },
    {
      "type": "setting",
      "setting_type": "image_picker",
      "id": "floating_image",
      "label": "Imagen flotante"
    },
    {
      "type": "setting",
      "setting_type": "image_picker",
      "id": "ground_image",
      "label": "Imagen sobre la tierra"
    }
  ]
}
{% endschema %}
