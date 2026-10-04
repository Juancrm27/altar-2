{#
  Altar visual variant for the native Ipanema header section.
  The section and its three native blocks remain the source of editor settings,
  while Ipanema keeps ownership of sticky behavior, menus, search, account and cart.
#}

{% set altar_logo = section.settings.altar_logo %}
{% set altar_concept_label = section.settings.altar_concept_label | default('[  CONCEPT_STORE  ]') %}
{% set altar_wordmark = section.settings.altar_wordmark | default('altar') %}
{% set altar_date = section.settings.altar_metadata_date %}
{% set altar_location = section.settings.altar_metadata_location | default('C.A.B.A. (ARG)') %}
{% set altar_search_label = section.settings.altar_search_label | default('Search') %}
{% set altar_login_label = section.settings.altar_login_label | default('Login') %}
{% set altar_account_label = section.settings.altar_account_label | default('Account') %}
{% set altar_cart_label = section.settings.altar_cart_label | default('Cart') %}
{% set altar_menu_label = section.settings.altar_menu_label | default('Menu') %}
{% set altar_show_search = section.settings.altar_show_search is not same as(false) %}
{% set altar_show_account = section.settings.altar_show_account is not same as(false) %}
{% set altar_show_cart = section.settings.altar_show_cart is not same as(false) %}
{% set use_ajax_cart = settings.ajax_cart and template != 'cart' %}

<div
	class="js-head-main head-main head-main--altar altar-nav {{ header_with_categories_classes }}"
	data-store="head"
	data-section-id="{{ section.id }}"
	data-section-type="header"
	data-sticky-header="{{ is_sticky ? 'true' : 'false' }}"
	{% if header_styles | trim %}style="{{ header_styles | trim }}"{% endif %}
>
	<div class="altar-nav__rule altar-nav__rule--top" aria-hidden="true"></div>
	<div class="altar-nav__content">
		<div class="altar-nav__brand">
			<a
				class="altar-nav__logo"
				href="{{ store.url }}"
				aria-label="{{ store.name }}"
				{% if logo_block %}{{ logo_block | block_attributes }}{% endif %}
			>
				{% if altar_logo %}
					{% set altar_logo_alt = altar_logo | media_alt | default(store.name) %}
					{% include 'snippets/image.tpl' with {
						image_src: altar_logo,
						image_alt: altar_logo_alt,
						image_classes: 'altar-nav__logo-image',
						image_priority_high: true,
					} %}
				{% else %}
					<img class="altar-nav__logo-image" src="{{ 'images/altar-logo.svg' | static_url }}" alt="" width="40" height="39">
				{% endif %}
			</a>
			<span class="altar-nav__divider altar-nav__divider--brand" aria-hidden="true"></span>
			<div class="altar-nav__wordmark-block">
				<span class="altar-nav__eyebrow">{{ altar_concept_label }}</span>
				{# Keep the inline children together: the intro character splitter must not animate template indentation. #}
				<a class="altar-nav__wordmark" href="{{ store.url }}"><span>{{ altar_wordmark }}</span><sup>©</sup></a>
			</div>
			<span class="altar-nav__divider altar-nav__divider--metadata" aria-hidden="true"></span>
			<div class="altar-nav__metadata">
				{% if altar_date %}
					<span>{{ altar_date }}</span>
				{% else %}
					<time data-live-date datetime="{{ 'now' | date('Y-m-d') }}">{{ 'now' | date('M/d/y') | upper }}</time>
				{% endif %}
				<span>{{ altar_location }}</span>
			</div>
			<span class="altar-nav__divider altar-nav__divider--navigation" aria-hidden="true"></span>
		</div>

		<nav
			class="altar-nav__menu"
			aria-label="{{ 'Navegación principal' | translate }}"
			{% if navigation_block %}{{ navigation_block | block_attributes }}{% endif %}
		>
			{% for item in navigation %}
				<a href="{{ item.url }}" {% if item.url | is_external %}target="_blank" rel="noopener noreferrer"{% endif %}>{{ item.name }}</a>
			{% endfor %}
		</nav>

		<div class="altar-nav__actions" {% if utilities_block %}{{ utilities_block | block_attributes }}{% endif %}>
			{% set altar_action_icon %}<img class="altar-nav__action-icon" src="{{ 'images/altar-arrow-up-right.svg' | static_url }}" alt="" width="12" height="12">{% endset %}

			{% if altar_show_search %}
				<div class="js-search-container altar-nav__action altar-nav__search-container">
					<button type="button" class="js-search-trigger altar-nav__search" aria-label="{{ 'search.placeholder' | t }}" aria-expanded="false">
						{{ altar_action_icon }}<span>{{ altar_search_label }}</span>
					</button>
					<div class="js-search-expand-form search-floating-container altar-nav__search-panel" aria-hidden="true">
						{% include 'snippets/header/search-form.tpl' %}
					</div>
				</div>
			{% endif %}

			<span class="altar-nav__divider altar-nav__divider--actions" aria-hidden="true"></span>
			<div class="altar-nav__action-stack">
				{% if altar_show_account %}
					<span class="js-header-dropdown nav-dropdown">
						<a class="altar-nav__account" href="{{ customer ? store.customer_home_url : store.customer_login_url }}" aria-label="{{ 'general.my_account' | t }}">
							{{ altar_action_icon }}<span>{{ customer ? altar_account_label : altar_login_label }}</span>
						</a>
						{% set account_short_name = customer ? (customer.name | split(' ') | first) %}
						<div class="js-header-dropdown-content nav-dropdown-content desktop-dropdown desktop-dropdown-small">
							{% if customer %}
								<a href="{{ store.customer_home_url }}" class="header-dropdown-link header-dropdown-link-featured">{{ 'general.greeting' | t | replace('{1}', account_short_name) }}</a>
								<a href="{{ store.customer_logout_url }}" class="header-dropdown-link">{{ 'general.logout' | t }}</a>
							{% else %}
								{% set register_href = store_has_passwordless_login ? store.customer_login_url : store.customer_register_url %}
								<a href="{{ store.customer_login_url }}" class="header-dropdown-link header-dropdown-link-featured">{{ 'general.login' | t }}</a>
								<a href="{{ register_href }}" class="header-dropdown-link">{{ 'general.register' | t }}</a>
							{% endif %}
						</div>
					</span>
				{% endif %}

				{% if altar_show_cart %}
					<span id="ajax-cart" class="js-cart-container altar-nav__action" data-component="cart-button">
						{% if use_ajax_cart %}
							<button type="button" class="js-modal-open-private altar-nav__cart" data-target="#modal-cart" data-store="cart-link" aria-label="{{ 'general.shopping_cart' | t }}">
						{% else %}
							<a class="altar-nav__cart" href="{{ store.cart_url }}" data-store="cart-link" aria-label="{{ 'general.shopping_cart' | t }}">
						{% endif %}
							{{ altar_action_icon }}<span>{{ altar_cart_label }}</span><span class="js-cart-widget-amount altar-nav__count">{{ cart.items_count | default(0) }}</span>
						{% if use_ajax_cart %}</button>{% else %}</a>{% endif %}
					</span>
				{% endif %}
			</div>

			<button type="button" class="js-modal-open-private altar-nav__menu-toggle" data-target="#nav-hamburger" data-modal-url="#nav-hamburger" aria-label="{{ 'accessibility.open_menu' | t }}">
				<span>{{ altar_menu_label }}</span>
			</button>
		</div>
	</div>
	<div class="altar-nav__rule altar-nav__rule--bottom" aria-hidden="true"></div>
</div>
