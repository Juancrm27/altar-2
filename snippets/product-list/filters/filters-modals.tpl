{#
  Filters Modals
  Mobile filter and sort modals for category page.
#}
{% set sort_text = {
	'score-descending': 'sort_by.options.relevance' | t,
	'user': 'sort_by.options.custom' | t,
	'price-ascending': 'sort_by.options.price_ascending' | t,
	'price-descending': 'sort_by.options.price_descending' | t,
	'alpha-ascending': 'sort_by.options.alpha_ascending' | t,
	'alpha-descending': 'sort_by.options.alpha_descending' | t,
	'created-ascending': 'sort_by.options.created_ascending' | t,
	'created-descending': 'sort_by.options.created_descending' | t,
	'best-selling': 'sort_by.options.best_selling' | t,
} %}

{% if products %}
	{% if not altar_toolbar %}
	<div class="js-category-controls category-controls{% if products and has_filters_available %} grid-no-gap grid-2{% endif %}">
		{% if has_filters_available %}
			<button class="js-modal-open-private category-filter-button" data-target="#modal-filters" data-component="filter-button">
				<svg class="category-controls-icon icon-inline"><use xlink:href="#filter"/></svg>
				<span class="category-controls-label">{{ 'general.filter' | t }}</span>
			</button>
		{% endif %}
		<button class="js-modal-open-private category-sort-button" data-target="#modal-sort-by">
			<svg class="category-controls-icon icon-inline"><use xlink:href="#sort-by"/></svg>
			<div class="category-sort-button-text">
				<span class="category-controls-label">{{ 'general.sort_by' | t }}:</span>
				{% for sort_method in sort_methods %}
					{% if sort_by == sort_method %}
						<div class="category-sort-selected">
							{{ sort_text[sort_method] }}
						</div>
					{% endif %}
				{% endfor %}
			</div>
		</button>
	</div>
	<div class="js-category-controls-prev category-controls-sticky-detector"></div>
	{% endif %}
		{% if has_filters_available %}
			{% embed 'snippets/modals/modal.tpl' with {
				modal_id: 'modal-filters',
				data_component: 'modal-filters',
				position: {
					appear_from: 'left',
				},
				layout: {
					width_desktop: 'large',
				},
				title: 'general.filter_by' | t,
				modal_classes: {
					body: 'p-0',
					close_icon: 'icon-inline',
				}
			} %}
				{% block modal_body %}
					{% include 'snippets/product-list/filters/filters.tpl' with {
						accordion: true,
						parent_category_link: false,
						applied_filters_badge: true,
					} %}
				{% endblock %}
			{% endembed %}
		{% endif %}

		{% set sort_modal_title = altar_toolbar ? '[ ORDENAR POR ]' : ('general.sort_by' | t) %}
		{% embed 'snippets/modals/modal.tpl' with {
			modal_id: 'modal-sort-by',
			data_component: 'modal-sort-by',
			position: {
				appear_from: 'bottom',
			},
			layout: {
				width_desktop: 'large',
			},
			title: sort_modal_title,
			modal_classes: {
				modal: altar_toolbar ? 'h-auto altar-sort-modal' : 'h-auto',
				header: altar_toolbar ? 'altar-sort-modal__header' : '',
				title: altar_toolbar ? 'altar-sort-modal__title' : '',
				close_button: altar_toolbar ? 'altar-sort-modal__close' : '',
				close_icon: altar_toolbar ? 'icon-inline altar-sort-modal__close-icon' : 'icon-inline',
				body: altar_toolbar ? 'altar-sort-modal__body' : '',
				overlay: altar_toolbar ? 'altar-sort-modal__overlay' : '',
			}
		} %}
			{% block modal_body %}
				{% include 'snippets/product-list/filters/sort-by.tpl' with {
					list: true,
				} %}
			{% endblock %}
		{% endembed %}
{% endif %}
