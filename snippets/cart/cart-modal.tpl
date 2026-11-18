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
			<button type="button" class="js-modal-close-private modal-close altar-cart__close" data-target="#modal-cart" data-modal-url="modal-cart"><span class="altar-es">Cerrar</span><span class="altar-en">Close</span></button>
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
				<button type="button" class="js-modal-close-private modal-close altar-cart__close" data-target="#related-products-notification" data-modal-url="related-products-notification"><span class="altar-es">Cerrar</span><span class="altar-en">Close</span></button>
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
