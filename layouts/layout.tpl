<!doctype html>
<html lang="{{ lang }}">
  <head>
    {{ component('head-tags') }}
    <title>{{ page_title }}</title>
    {% if page_description %}<meta name="description" content="{{ page_description }}">{% endif %}
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap">
    {{ 'css/style-critical.css' | static_inline }}
    {{ 'css/style-utilities.css' | static_inline }}
    <link rel="preload" href="{{ 'css/style-async.css' | static_url }}" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="{{ 'css/style-async.css' | static_url }}"></noscript>
    {% include 'layouts/resources/style-tokens.tpl' %}
    {% platform_head_content %}
  </head>
  <body class="template-{{ template | replace('.', '-') }}">
    {{ component('nubesdk-slot', { type: 'before_main_content' }) }}
    {% include 'layouts/resources/icons-sprite.tpl' %}

    {% if template != 'password' %}
      <header class="site-header">
        {% layout_template 'header' %}
      </header>
      {{ component('nubesdk-slot', { type: 'after_header' }) }}
    {% endif %}

    <main id="MainContent" class="main-content" role="main">
      {{ page_template_content }}
    </main>

    {% if template != 'home' and template != 'password' %}
      {% layout_template 'footer' %}
    {% endif %}

    <script src="{{ 'js/solar-experience.js' | static_url }}" defer></script>
    {% platform_body_content %}
  </body>
</html>
