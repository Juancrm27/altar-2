{#
  Product Item Colors
  Card / Producto (Figma 438:657, feedback Sofi 27-nov): up to three small colour circles, no colour names,
  and «+N» when the product has more colours. One colour → nothing. The circle uses the colour set for the option
  in Tiendanube (option.custom_data); options without one fall back to the name map below (same map as
  snippets/product/product-variants.tpl — keep both in sync), and options still unknown only add to «+N»
  (if no option has a colour, the count shows as text).
#}
{% if color_variants and product.variations %}
	{% set altar_swatch_map = {
		'negro': '#1F2224', 'black': '#1F2224', 'blanco': '#F4F1EA', 'white': '#F4F1EA', 'hueso': '#E8E1D3', 'crudo': '#EFE7D6',
		'natural': '#E6DCC6', 'arena': '#C9B48F', 'beige': '#C9B48F', 'camel': '#B08A5E', 'marrón': '#6E4B36', 'marron': '#6E4B36',
		'chocolate': '#4E3326', 'óxido': '#8E5A3C', 'oxido': '#8E5A3C', 'terracota': '#B07A5E', 'bordó': '#5E2A33', 'bordo': '#5E2A33',
		'vino': '#5A2430', 'ciruela': '#6B4251', 'rosa': '#CFA7A0', 'rojo': '#9E3B32', 'naranja': '#C9783F', 'amarillo': '#D9C27A',
		'mostaza': '#C4A146', 'verde': '#6F8A6A', 'verde agua': '#9DB8A8', 'salvia': '#A9B08A', 'oliva': '#707A4E', 'jade': '#4F7F6C',
		'celeste': '#A9C1D1', 'azul': '#3E5770', 'azul niebla': '#8FA3B0', 'niebla': '#8FA3B0', 'marino': '#1F2E44', 'gris': '#8E8E88',
		'plata': '#C4C6C8', 'dorado': '#C2A35A', 'cobre': '#B0704A', 'lila': '#A89AB8', 'violeta': '#6E5A86',
		'azul marino': '#1F2E44', 'yeso': '#E9E4DA', 'perla': '#E6E0D4', 'pez': '#8C9AA3', 'magma': '#5A2228',
		'tornasol bordeaux & verde': 'linear-gradient(135deg, #5E2A33 50%, #4F7F6C 50%)',
		'tornasol azul & verde': 'linear-gradient(135deg, #3E5770 50%, #4F7F6C 50%)'
	} %}
	<div class="product-item-colors-container order-first">
		{% for variation in product.variations %}
			<div class="product-item-colors-variation" data-value="variation_{{ loop.index }}" data-option="{{ loop.index0 }}" >
				{% if variation.name in ['Color', 'Cor'] and variation.options | length > 1 %}
					{% set altar_swatches = [] %}
					{% set altar_unknown = 0 %}
					{% for option in variation.options %}
						{% set altar_hex = option.custom_data ?: (altar_swatch_map[option.name | lower | trim] ?? null) %}
						{% if altar_hex %}
							{% set altar_swatches = altar_swatches | merge([{ name: option.name, hex: altar_hex }]) %}
						{% else %}
							{% set altar_unknown = altar_unknown + 1 %}
						{% endif %}
					{% endfor %}
					{% set altar_shown = altar_swatches | length > 3 ? 3 : altar_swatches | length %}
					{% set altar_more = (altar_swatches | length - altar_shown) + altar_unknown %}
					<div class="product-item-colors altar-swatches" title="{{ variation.options | length }} {{ 'product_item.colors' | t }}">
						{% if altar_swatches | length %}
							{% for swatch in altar_swatches %}
								{% if loop.index <= 3 %}
									<span class="product-item-colors-bullet altar-swatch" style="background: {{ swatch.hex }}" title="{{ swatch.name }}"></span>
								{% endif %}
							{% endfor %}
							{% if altar_more > 0 %}
								<span class="product-item-colors-bullet-text altar-swatch-more">+{{ altar_more }}</span>
							{% endif %}
						{% else %}
							<span class="product-item-colors-bullet-text">{{ variation.options | length }} <span class="altar-es">colores</span><span class="altar-en">colors</span></span>
						{% endif %}
					</div>
				{% endif %}
			</div>
		{% endfor %}
	</div>
{% endif %}
