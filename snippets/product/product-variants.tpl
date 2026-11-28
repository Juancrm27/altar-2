{# Altar (Figma 755:3775 «Producto / Color», feedback Sofi 27-nov): colour options are circles with the option's
   Tiendanube colour (custom_data) or, failing that, this name map (same map as item-colors.tpl — keep in sync).
   The label always reads «color: <chosen>» (store.js updates it on click/tap); desktop hover shows the name in a
   tooltip (CSS, from data-name). #}
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
{# Use passed parameters with fallback to settings #}
{% set use_bullet_variants = bullet_variants ?? (settings.variant_format == 'buttons') %}
{% set use_image_color_variants = image_color_variants ?? settings.image_color_variants %}
{% set use_text_color_variants = text_color_variants ?? false %}
{% set use_size_guide_url = size_guide_url ?? settings.size_guide_url %}

<div class="js-product-variants product-detail-variants {% if quickshop %}js-product-quickshop-variants{% endif %} {% if not (use_bullet_variants or use_image_color_variants) %}grid grid-2 align-items-center{% endif %}">
	{% set has_size_variations = false %}
	{% if use_bullet_variants %}
		{% set hidden_variant_select = ' d-none' %}
	{% else %}
		{% set hidden_variant_select = ' product-detail-variants-select-hidden' %}
	{% endif %}
	{% for variation in product.variations %}
		{% if variation.name in ['Talle', 'Talla', 'Tamanho', 'Size'] %}
			{% set has_size_variations = true %}
		{% endif %}

		{% set is_hidden_select = false %}
		{% if use_image_color_variants and not (use_bullet_variants)  %}
			{% if variation.name in ['Color', 'Cor'] %}
				{% set hidden_variant_select = ' d-none' %}
				{% set is_hidden_select = true %}
			{% else %}
				{% set hidden_variant_select = ' d-block' %}
			{% endif %}
		{% endif %}

		{% set is_button_variant = use_bullet_variants or (use_image_color_variants and variation.name in ['Color', 'Cor']) %}

		{% set variants_group_spacing = '' %}
		{% if use_bullet_variants %}
			{% if is_button_variant and show_size_guide and use_size_guide_url and has_size_variations and loop.last %}
				{% set variants_group_spacing = 'product-detail-variants-group-compact' %}
			{% else %}
				{% set variants_group_spacing = 'product-detail-variants-group-spaced' %}
			{% endif %}
		{% endif %}
		<div class="js-product-variants-group product-detail-variants-group {{ variants_group_spacing }} {% if variation.name in ['Color', 'Cor'] %}js-color-variants-container{% endif %}" data-variation-id="{{ variation.id }}">
			{% if quickshop %}
				{% embed "snippets/forms/form-select.tpl" with{select_label: true, select_label_name: '' ~ variation.name ~ '', select_for: 'variation_' ~ loop.index , select_id: 'variation_' ~ loop.index, select_name: 'variation' ~ '[' ~ variation.id ~ ']', select_group_custom_class: hidden_variant_select, select_custom_class: 'js-variation-option js-refresh-installment-data'} %}
					{% block select_options %}
						{% for option in variation.options %}
							<option value="{{ option.id }}" {% if product.default_options[variation.id] is same as(option.id) %}selected="selected"{% endif %}>{{ option.name }}</option>
						{% endfor %}
					{% endblock select_options%}
				{% endembed %}
			{% else %}
				{% embed "snippets/forms/form-select.tpl" with{select_label: true, select_label_name: '' ~ variation.name ~ '', select_for: 'variation_' ~ loop.index , select_id: 'variation_' ~ loop.index, select_name: 'variation' ~ '[' ~ variation.id ~ ']', select_custom_class: 'js-variation-option js-refresh-installment-data', select_group_custom_class: hidden_variant_select} %}
					{% block select_options %}
						{% for option in variation.options %}
							<option value="{{ option.id }}" {% if product.default_options[variation.id] is same as(option.id) %}selected="selected"{% endif %} data-option="{{ option.id }}">{{ option.name }}</option>
						{% endfor %}
					{% endblock select_options%}
				{% endembed %}
			{% endif %}
			{% if is_button_variant %}
				<label class="form-label{% if variation.name in ['Color', 'Cor'] %} altar-color-label{% endif %}">{{ variation.name }}<span class="altar-variant-colon">:</span> <strong class="js-insta-variation-label">{{ product.default_options[variation.id] }}</strong></label>
				{% for option in variation.options %}
					{# Altar: colour options are circles on the product page too. Ipanema's product-form passes
					   text_color_variants = true for every product page, so that flag is ignored here (27-nov). #}
					{% set altar_hex = (not use_image_color_variants and use_bullet_variants and variation.name in ['Color', 'Cor']) ? (option.custom_data ?: (altar_swatch_map[option.name | lower | trim] ?? null)) : null %}
					<a data-option="{{ option.id }}" class="js-variant-button btn btn-variant{% if product.default_options[variation.id] is same as(option.id) %} selected{% endif %}{% if variation.name in ['Color', 'Cor'] and (altar_hex or (not use_text_color_variants and use_image_color_variants)) %} btn-variant-color{% endif %}{% if altar_hex %} altar-swatch-btn{% endif %}" title="{{ option.name }}" {% if altar_hex %}aria-label="{{ option.name }}" data-altar-tooltip="{{ option.name }}"{% endif %} data-option="{{ option.id }}" data-variation-id="{{ variation.id }}">
						<span class="btn-variant-content {% if not use_text_color_variants and use_image_color_variants and variation.name in ['Color', 'Cor'] %} btn-variant-content-square{% endif %}"{% if altar_hex %} style="background: {{ altar_hex }}"{% endif %} data-name="{{ option.name }}">
							{% if not use_text_color_variants and use_image_color_variants and variation.name in ['Color', 'Cor'] %}
								{% if product.default_options[variation.id] is same as(option.id) %}
								{% include 'snippets/image.tpl' with {
									image_src: product.featured_variant_image,
									product_image: true,
									image_lazy_js: true,
									image_classes: 'img-absolute-centered-vertically fade-in',
									image_alt: image.alt,
									image_thumbs: ['thumb', 'small'],
								} %}
							{% else %}
								{% for variant in product.variants if (variant.option1 == option.id) or (variant.option2 == option.id) or (variant.option3 == option.id) %}
									{% if loop.first %}
										{% include 'snippets/image.tpl' with {
											image_src: variant.image,
											product_image: true,
											image_lazy_js: true,
											image_classes: 'img-absolute-centered-vertically fade-in',
											image_thumbs: ['thumb', 'small'],
										} %}
									{% endif %}
								{% endfor %}
							{% endif %}
							{% endif %}
							{% if not altar_hex and (use_text_color_variants or not(variation.name in ['Color', 'Cor']) or ((variation.name in ['Color', 'Cor']) and not use_image_color_variants)) %}
								{{ option.name }}
							{% endif %}
						</span>
					</a>
				{% endfor %}
			{% endif %}
		</div>
	{% endfor %}
	{% if show_size_guide and use_size_guide_url and has_size_variations %}
		{% set has_size_guide_page_finded = false %}
		{% set size_guide_url_handle = use_size_guide_url | trim('/') | split('/') | last %}

		{% for page in pages if page.handle == size_guide_url_handle and not has_size_guide_page_finded %}
			{% set has_size_guide_page_finded = true %}
			{% if has_size_guide_page_finded %}
				<a data-target="#size-guide-modal" data-modal-url="modal-fullscreen-size-guide" class="js-modal-open-private size-guide">
					<span class="size-guide-label btn-link">{{ 'product.size_guide' | t }}</span>
				</a>
				{% embed 'snippets/modals/modal.tpl' with {
					modal_id: 'size-guide-modal',
					position: {
						appear_from: 'bottom',
					},
					layout: {
						width_desktop: 'large',
					},
					title: 'product.size_guide' | t,
					modal_classes: {
						modal: 'h-auto',
						close_icon: 'icon-inline',
					}
				} %}
					{% block modal_body %}
						<div class="user-content">{{ page.content }}</div>
					{% endblock %}
				{% endembed %}
			{% endif %}
		{% endfor %}
	{% endif %}
</div>
