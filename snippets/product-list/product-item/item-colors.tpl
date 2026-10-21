{#
  Product Item Colors
  Card / Producto (Figma 438:637): one 16px swatch of the first color and
  "+N" for the rest. Without a swatch color it falls back to "N colores".
#}
{% if color_variants and product.variations %}
	<div class="product-item-colors-container order-first">
		{% for variation in product.variations %}
			<div class="product-item-colors-variation" data-value="variation_{{ loop.index }}" data-option="{{ loop.index0 }}" >
				{% if variation.name in ['Color', 'Cor'] %}
					{% if variation.options | length > 1 %}
						{% set first_color = variation.options | first %}
						<div class="product-item-colors" title="{{ 'product_item.more_colors' | t }}">
							{% if first_color.custom_data %}
								<span class="product-item-colors-bullet" title="{{ first_color.name }}" style="background: {{ first_color.custom_data }}"></span>
								<span class="product-item-colors-bullet-text">+{{ (variation.options | length) - 1 }}</span>
							{% else %}
								<span class="product-item-colors-bullet-text">{{ variation.options | length }} {{ 'product_item.colors' | t }}</span>
							{% endif %}
						</div>
					{% endif %}
				{% endif %}
			</div>
		{% endfor %}
	</div>
{% endif %}
