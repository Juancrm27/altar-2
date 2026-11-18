{#
  Password Section
  Password entry form to unlock a password-protected store.
#}
{# Layout settings #}
{% set page_width = section.settings.section_width | default('page') == 'page' %}
{% set vertical_padding = section.settings.vertical_padding | default(0) %}
{% set horizontal_padding = page_width ? 0 : section.settings.horizontal_padding %}


<div
  class="password-section-layout"
  style="padding: {{ vertical_padding }}px {{ horizontal_padding }}px;"
>
  {% if page_width %}
    <div class="container">
  {% endif %}
    <div class="password-form-wrapper">
      <div class="password-form-content altar-password">
        {# Title = the message set in the Tiendanube admin; the line under it and the form follow the language. #}
        <div class="altar-page-head">
          <h2 class="password-page-title page-header-title">{{ message }}</h2>
          <p class="altar-page-lead"><span class="altar-es">Estamos preparando la próxima colección. Si tenés la contraseña, entrá.</span><span class="altar-en">We're preparing the next collection. If you have the password, come in.</span></p>
        </div>
        {% set altar_enter %}<span class="altar-es">Entrar</span><span class="altar-en">Enter</span>{% endset %}
        {% set altar_pass_label %}<span class="altar-es">Contraseña de acceso</span><span class="altar-en">Access password</span>{% endset %}
        {% embed "snippets/forms/form.tpl" with{form_id: 'password-form', submit_text: 'general.unlock' | t, submit_html: altar_enter, submit_custom_class: 'btn-block btn-big', form_custom_class: 'w-100 altar-login-form' } %}
          {% block form_body %}
            {% embed "snippets/forms/form-input.tpl" with{input_for: 'password', type_password: true, input_name: 'password', input_label_text: altar_pass_label, input_placeholder: '' } %}
              {% block input_form_alert %}
                {% if invalid_password == true %}
                  <div class="account-form-alert alert alert-danger"><span class="altar-es">La contraseña es incorrecta.</span><span class="altar-en">The password is incorrect.</span></div>
                {% endif %}
              {% endblock input_form_alert %}
            {% endembed %}
          {% endblock %}
        {% endembed %}
      </div>
    </div>
  {% if page_width %}
    </div>
  {% endif %}
</div>


{% schema %}
{
  "name": "t:names.password_content",
  "class": "section section-main-password",
  "static": true,
  "limit": 1,
  "presets": [{"name": "t:names.password_content"}],
  "settings": [
    {
      "type": "header",
      "content": "t:names.design"
    },
    {
      "type": "setting",
      "setting_type": "radio",
      "id": "section_width",
      "label": "t:settings.section_width",
      "options": [
        { "value": "page", "label": "t:options.page" },
        { "value": "full", "label": "t:options.full" }
      ],
      "default": "page"
    },
    {
      "type": "setting",
      "setting_type": "range",
      "id": "vertical_padding",
      "label": "t:settings.vertical_padding",
      "min": 0,
      "max": 120,
      "step": 4,
      "unit": "px",
      "default": 0,
      "icon": "vertical_padding"
    },
    {
      "type": "setting",
      "setting_type": "range",
      "id": "horizontal_padding",
      "label": "t:settings.horizontal_padding",
      "min": 0,
      "max": 120,
      "step": 4,
      "unit": "px",
      "default": 32,
      "icon": "horizontal_padding",
      "disabled_if": "{{ section.settings.section_width == 'page' }}"
    }
  ],
  "blocks": [],
  "enabled_on": {
    "page_templates": ["password"]
  }
}
{% endschema %}
