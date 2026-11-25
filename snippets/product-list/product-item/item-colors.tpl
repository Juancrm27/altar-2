{#
  Product Item Colors
  Card / Producto (Figma 438:637, Paloma Wool style): the number of colours as
  plain text, «2 colores» / «2 colors» — no swatch.
#}
{% if color_variants and product.variations %}
	<div class="product-item-colors-container order-first">
		{% for variation in product.variations %}
			<div class="product-item-colors-variation" data-value="variation_{{ loop.index }}" data-option="{{ loop.index0 }}" >
				{% if variation.name in ['Color', 'Cor'] %}
					{% if variation.options | length > 1 %}
						<div class="product-item-colors" title="{{ 'product_item.more_colors' | t }}">
							<span class="product-item-colors-bullet-text">{{ variation.options | length }} <span class="altar-es">colores</span><span class="altar-en">colors</span></span>
						</div>
					{% endif %}
				{% endif %}
			</div>
		{% endfor %}
	</div>
{% endif %}
