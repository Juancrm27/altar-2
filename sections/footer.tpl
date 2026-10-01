<div class="footer-shell" data-section-id="{{ section.id }}">
  <span>{{ store.name }}</span>
  <span>© {{ 'now' | date('Y') }}</span>
</div>
{% schema %}
{
  "name": "Footer",
  "wrapper": "footer",
  "class": "site-footer",
  "static": true,
  "enabled_on": { "layout_templates": ["footer"] },
  "settings": []
}
{% endschema %}

