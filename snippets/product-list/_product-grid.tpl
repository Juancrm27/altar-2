{#
  Product Grid
  Loops through products and renders each via product-item.tpl.
#}
{% if products and pages.is_last %}
	{# Keep the end marker outside the product div sequence so editorial :nth-of-type patterns stay stable. #}
	<span class="last-page" style="display:none;"></span>
{% endif %}
{# This fragment is returned by Tiendanube during infinite scroll without the section object.
   In Altar the category/search grid is always editorial, so late-loaded cards must keep that variant. #}
{% set altar_editorial_grid = true %}
{% for product in products %}
	{% include 'snippets/product-list/product-item/item.tpl' with {
		altar_editorial_card: altar_editorial_grid,
	} %}
{% endfor %}
