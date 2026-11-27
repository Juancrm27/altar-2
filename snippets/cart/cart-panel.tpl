{#
  Cart Panel
  Cart items list and empty state for the AJAX cart modal.
  Altar v3 (Figma "Carrito" 903:10660): everything that can grow (free shipping bar, products, shipping calculator,
  coupon) scrolls in .altar-cart__scroll; the summary (subtotal, shipping, total, checkout) stays fixed at the bottom.
#}

<div class="altar-cart__scroll">

	{# Gift and free shipping progress bars, above the products #}
	{% include "snippets/promotions/gift-promotion-progress.tpl" with {container_class: 'cart-summary-gift-promotion-bar'} %}
	<div class="js-visible-on-cart-filled" {% if cart.items_count == 0 %}style="display:none;"{% endif %}>
		{% include "snippets/shipping/shipping-free-rest.tpl" with {bar_classes: 'cart-summary-free-shipping-bar'} %}
	</div>

	{# Figma "Carrito / Feedback": an outlined notice with a semibold title, the store's message and an underlined action #}
	<div id="error-ajax-stock" style="display: none;">
		<div class="alert alert-warning altar-cart__notice">
			<p class="altar-cart__notice-title"><span class="altar-es">Sin stock suficiente</span><span class="altar-en">Not enough stock</span></p>
			<p class="altar-cart__notice-text">{{ 'cart.out_of_stock_message' | t }}</p>
			<a href="{{ store.products_url }}" class="cart-stock-link altar-cart__link">{{ 'cart.see_others' | t }}</a>
		</div>
	</div>
	{# Shown (CSS) while Tiendanube updates a quantity: the spinner in the quantity box is visible #}
	<div class="altar-cart__notice altar-cart__loading" role="status" aria-live="polite">
		<p class="altar-cart__notice-title"><span class="altar-cart__spinner" aria-hidden="true"></span><span class="altar-es">Actualizando carrito…</span><span class="altar-en">Updating cart…</span></p>
		<p class="altar-cart__notice-text"><span class="altar-es">Estamos confirmando precio, stock y cantidad.</span><span class="altar-en">We're confirming price, stock and quantity.</span></p>
	</div>

	{{ component('nubesdk-slot', { type: "before_line_items" }) }}

	<div class="js-ajax-cart-list">
		{# Cart panel items #}
		{% if cart.items %}
			{% for item in cart.items %}
				{% include "snippets/cart/_cart-item.tpl" %}
			{% endfor %}
		{% endif %}
	</div>

	{{ component('nubesdk-slot', { type: "after_line_items" }) }}

	<div class="js-empty-ajax-cart altar-cart__empty" {% if cart.items_count > 0 %}style="display:none;"{% endif %} data-component="cart.empty-message">
		{# Cart panel empty #}
		<p class="altar-cart__empty-title"><span class="altar-es">Tu carrito está vacío</span><span class="altar-en">Your cart is empty</span></p>
		<p class="altar-cart__empty-text"><span class="altar-es">Todavía no agregaste productos.</span><span class="altar-en">You haven't added any products yet.</span></p>
		<a href="{{ store.products_url }}" class="altar-cart__link"><span class="altar-es">Volver a la tienda</span><span class="altar-en">Back to the shop</span></a>
	</div>

	{# Coupon input #}
	{% if settings.cart_coupon %}
		<div class="js-visible-on-cart-filled" {% if cart.items_count == 0 %}style="display:none;"{% endif %}>
			{% include "snippets/promotions/coupon-input.tpl" %}
		</div>
	{% endif %}
</div>

<div class="cart-row altar-cart__summary">
	{# Altar (27-nov): shipping lives in the fixed summary, right above the subtotal, so the postal code never scrolls
	   away under a long list of products. #}
	{{ component('nubesdk-slot', { type: "before_cart_shipping_options" }) }}
	{% include "snippets/cart/cart-fulfillment.tpl" %}
	{{ component('nubesdk-slot', { type: "after_cart_shipping_options" }) }}
	{% include "snippets/cart/cart-summary.tpl" with {cart_panel_split: true} %}
</div>
