{#
  Altar v3 · justified copy that the store owner edits from a textarea.
  - Enter        → line break (<br>), the same cuts as Figma on desktop (CSS hides them below 1240px).
  - Blank line   → new paragraph.
  The look (every line justified, last one included) lives in .altar-v3-justified in altar-home-v3.css.
  Line endings are normalised and the copy is split on raw newlines (not nl2br, which would escape "&" twice).
  Each line is printed plainly, so it is escaped exactly like every other setting of the theme.
  Usage: {% include 'snippets/altar-justified.tpl' with { text: settings.x, lang: 'es', variant: 'v3-a' } %}
#}
{# Tiendanube does not support replace({…}) with a mapping: the whole section silently disappears (27-nov). Split by
   line and trim each line instead (trim also drops a stray \r). #}
{% set altar_lines = text | default('') | trim | split("\n") %}
<div class="altar-v3-justified{% if variant %} {{ variant }}{% endif %}" lang="{{ lang }}">
  {%- for altar_line in altar_lines -%}
    {%- set altar_text = altar_line | trim -%}
    {%- if altar_text -%}
      {%- set altar_prev = loop.first ? '' : altar_lines[loop.index0 - 1] | trim -%}
      {%- set altar_next = loop.last ? '' : altar_lines[loop.index0 + 1] | trim -%}
      {%- if not altar_prev %}<p>{% endif -%}
      {{- altar_text -}}
      {%- if altar_next %}<br> {% else %}</p>{% endif -%}
    {%- endif -%}
  {%- endfor -%}
</div>
