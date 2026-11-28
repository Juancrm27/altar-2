{#
  Altar v3 · one <span> per word so the CSS can spread a heading edge to edge (justify-content: space-between),
  as in "DROP  N.º  I  —  ELEMENTAL". The store owner types a plain line of text.
  Usage: {% include 'snippets/altar-spread-words.tpl' with { text: settings.x } %}
#}
{#- Tiendanube does not support replace({…}) with a mapping (the section disappears): one replace per character. -#}
{%- for altar_word in text | default('') | replace("\r", " ") | replace("\n", " ") | replace("\t", " ") | split(' ') -%}
  {%- if altar_word | trim -%}<span>{{ altar_word | trim }}</span>{%- endif -%}
{%- endfor -%}
