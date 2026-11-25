{# Cart modal - Ajax cart panel #}

{% if not store.is_catalog and settings.ajax_cart and template != 'cart' %}

	{% embed 'snippets/modals/modal.tpl' with {
		modal_id: 'modal-cart',
		data_component: 'cart',
		custom_data_attribute: 'cart-open-type',
		custom_data_attribute_value: settings.cart_open_type,
		form: true,
		form_action: store.cart_url,
		form_data_store: 'cart-form',
		position: {
			dock_desktop: true,
			appear_from: 'right',
		},
		layout: {
			width_desktop: 'small',
		},
		title: 'cart.title' | t,
		modal_classes: {
			modal: 'altar-cart',
			close_icon: 'icon-inline',
		}
	} %}
		{# Altar v3 (Figma "Carrito" 903:10660): "CARRITO (n)" on the left, "CERRAR" on the right, both follow the language switch. #}
		{% block modal_header %}
			<span class="modal-title altar-cart__title"><span class="altar-es">Carrito</span><span class="altar-en">Cart</span> (<span class="js-cart-widget-amount altar-cart__count">{{ cart.items_count }}</span>)</span>
			<button type="button" class="js-modal-close-private modal-close altar-cart__close" data-target="#modal-cart" data-modal-url="modal-cart"><span class="visually-hidden"><span class="altar-es">Cerrar</span><span class="altar-en">Close</span></span><svg class="altar-x" width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M10.0876 3.08756C10.3154 2.85975 10.6846 2.85975 10.9124 3.08756C11.1402 3.31537 11.1402 3.68464 10.9124 3.91243L7.82486 6.99999L10.9124 10.0876C11.1402 10.3154 11.1402 10.6846 10.9124 10.9124C10.6846 11.1402 10.3154 11.1402 10.0876 10.9124L6.99999 7.82486L3.91243 10.9124C3.68464 11.1402 3.31537 11.1402 3.08756 10.9124C2.85975 10.6846 2.85975 10.3154 3.08756 10.0876L6.17512 6.99999L3.08756 3.91243C2.85975 3.68462 2.85975 3.31536 3.08756 3.08756C3.31536 2.85975 3.68462 2.85975 3.91243 3.08756L6.99999 6.17512L10.0876 3.08756Z" fill="currentColor"/></svg></button>
		{% endblock %}
		{% block modal_body %}
			{% include 'snippets/cart/cart-panel.tpl' %}
		{% endblock %}
	{% endembed %}

	{% if settings.add_to_cart_recommendations %}

		{# Recommended products on add to cart #}

		{% embed 'snippets/modals/modal.tpl' with {
			modal_id: 'related-products-notification',
			position: {
				appear_from: 'bottom',
			},
			layout: {
				width_desktop: 'medium',
			},
			title: 'cart.added_to_cart' | t,
			modal_classes: {
				modal: 'h-auto altar-added',
				close_icon: 'icon-inline',
			}
		} %}
			{# Altar v3 (Figma "Carrito / Sugeridos"): "AGREGASTE AL CARRITO" + "CERRAR", the added product, "TAMBIÉN TE PUEDE
			   GUSTAR" with two suggestions, then "VER CARRITO" (filled) and "SEGUIR COMPRANDO". #}
			{% block modal_header %}
				<span class="modal-title altar-cart__title"><span class="altar-es">Agregaste al carrito</span><span class="altar-en">Added to cart</span></span>
				<button type="button" class="js-modal-close-private modal-close altar-cart__close" data-target="#related-products-notification" data-modal-url="related-products-notification"><span class="visually-hidden"><span class="altar-es">Cerrar</span><span class="altar-en">Close</span></span><svg class="altar-x" width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M10.0876 3.08756C10.3154 2.85975 10.6846 2.85975 10.9124 3.08756C11.1402 3.31537 11.1402 3.68464 10.9124 3.91243L7.82486 6.99999L10.9124 10.0876C11.1402 10.3154 11.1402 10.6846 10.9124 10.9124C10.6846 11.1402 10.3154 11.1402 10.0876 10.9124L6.99999 7.82486L3.91243 10.9124C3.68464 11.1402 3.31537 11.1402 3.08756 10.9124C2.85975 10.6846 2.85975 10.3154 3.08756 10.0876L6.17512 6.99999L3.08756 3.91243C2.85975 3.68462 2.85975 3.31536 3.08756 3.08756C3.31536 2.85975 3.68462 2.85975 3.91243 3.08756L6.99999 6.17512L10.0876 3.08756Z" fill="currentColor"/></svg></button>
			{% endblock %}
			{% block modal_body %}
				{% include 'snippets/notification.tpl' with {
						type: 'add_to_cart',
						related_products: true,
					} %}
				<p class="altar-added__heading"><span class="altar-es">También te puede gustar</span><span class="altar-en">You may also like</span></p>
				<div class="js-related-products-notification-container" style="display: none"></div>
				<div class="altar-added__actions">
					<button type="button" data-target="#related-products-notification" class="js-modal-close-private js-open-cart-modal altar-cart__checkout"><span class="altar-es">Ver carrito</span><span class="altar-en">View cart</span></button>
					<a href="#" data-target="#related-products-notification" class="js-modal-close-private altar-cart__link"><span class="altar-es">Seguir comprando</span><span class="altar-en">Continue shopping</span></a>
				</div>
			{% endblock %}
		{% endembed %}
	{% endif %}

	{# Cross selling promotion notification on add to cart #}

	{% embed 'snippets/modals/modal.tpl' with {
		modal_id: 'js-cross-selling-modal',
		position: {
			appear_from: 'bottom',
		},
		title: 'cart.exclusive_discount' | t,
		layout: {
			width_desktop: 'small'
		},
		modal_classes: {
			modal: 'modal-nav-main bottom modal-bottom-sheet h-auto overflow-none modal-body-scrollable-auto modal-max-98vh',
			header: 'p-quarter full-width',
			close_icon: 'icon-inline',
		}
	} %}
		{% block modal_body %}
			<div class="js-cross-selling-modal-body" style="display: none"></div>
		{% endblock %}
	{% endembed %}
{% endif %}
