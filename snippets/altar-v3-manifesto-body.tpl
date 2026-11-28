{#
  Altar v3 · manifesto body (Figma 04), Minion set left.
  - Enter        → <br class="altar-v3-desk">: Sofi's line cuts on desktop; tablet and mobile reflow.
  - Blank line   → new paragraph.
  - A paragraph starting with "+" follows the previous one with no gap on desktop (altar-v3-manifesto__join).
  Usage: {% include 'snippets/altar-v3-manifesto-body.tpl' with { text: settings.x, lang: 'es', variant: 'v3-a' } %}
#}
{# Tiendanube does not support replace({…}) with a mapping: the whole section silently disappears (27-nov). Split by
   line and trim each line instead (trim also drops a stray \r). #}
{% set altar_lines = text | default('') | trim | split("\n") %}
<div class="altar-v3-manifesto__body {{ variant }}" lang="{{ lang }}">
  {%- for altar_line in altar_lines -%}
    {%- set altar_text = altar_line | trim -%}
    {%- if altar_text -%}
      {%- set altar_prev = loop.first ? '' : altar_lines[loop.index0 - 1] | trim -%}
      {%- set altar_next = loop.last ? '' : altar_lines[loop.index0 + 1] | trim -%}
      {%- if not altar_prev -%}
        {%- if altar_text starts with '+' -%}<p class="altar-v3-manifesto__join">{%- set altar_text = altar_text | slice(1) | trim -%}{%- else -%}<p>{%- endif -%}
      {%- endif -%}
      {{- altar_text -}}
      {%- if altar_next %}<br class="altar-v3-desk"> {% else %}</p>{% endif -%}
    {%- endif -%}
  {%- endfor -%}
</div>
