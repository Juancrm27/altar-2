{#
  Altar navigation v3 · Figma "Navigation / Site / Desktop" (768:1698) and "Navigation / Site / Mobile" (773:3948).
  One bar on every page. Labels come in both languages (.altar-es / .altar-en): the switch picks ES (off, #C6CA9F)
  or EN (on, #091E2B) and the choice holds for the whole visit (static/js/altar-header.js). On the home the same
  switch also changes layout A / B. PLAY opens the Spotify playlist. Hola / Hello opens an email.
  Desktop: switch · PLAY | Colección · Collab · Hola | Buscar · Ingresar · (0). Search opens inline as an underline field.
  Tablet / mobile: switch · PLAY · MENU · (0); MENU unfolds one row (links, Ingresar, magnifier) under a rule.
#}

{% set altar_logo = section.settings.altar_logo %}
{% set use_ajax_cart = settings.ajax_cart and template != 'cart' %}
{% set altar_page = 'none' %}
{% if template == 'home' %}
	{% set altar_page = 'home' %}
{% elseif template in ['category', 'search', 'product'] %}
	{% set altar_page = 'shop' %}
{% elseif template == 'contact' %}
	{% set altar_page = 'contacto' %}
{% endif %}
{% set altar_collection_url = section.settings.altar_collection_url | default(store.products_url) %}
{% set altar_star_url = section.settings.altar_star_url %}
{% set altar_spotify_url = section.settings.altar_spotify_url | default('https://open.spotify.com/playlist/4u5jTDz4fqFHfjSqXiAtNN?si=ca78c9d4614a4abe') %}
{# Hola / Hello opens an email (Sofi). The contact page template stays available. #}
{% set altar_contact_email = section.settings.altar_contact_email | default('altarmundi@gmail.com') %}
{% set altar_star_active = altar_star_url and template == 'category' and category is defined and category.url
	and (category.url == altar_star_url or category.url in altar_star_url or altar_star_url in category.url) %}
{% set altar_account_url = customer ? store.customer_home_url : store.customer_login_url %}

{% set altar_links %}<a href="{{ altar_collection_url }}"{% if altar_page == 'shop' and not altar_star_active %} class="is-active" aria-current="page"{% endif %}><span class="altar-es">Colección</span><span class="altar-en">Collection</span></a>
{% if altar_star_url %}<a href="{{ altar_star_url }}"{% if altar_star_active %} class="is-active" aria-current="page"{% endif %}><span class="altar-es">Collab</span><span class="altar-en">Collab</span></a>{% else %}<span class="altar-nav__pending" aria-disabled="true" title="Página Collab pendiente de configurar"><span class="altar-es">Collab</span><span class="altar-en">Collab</span></span>{% endif %}
<a href="mailto:{{ altar_contact_email }}"><span class="altar-es">Hola</span><span class="altar-en">Hello</span></a>{% endset %}
{% set altar_account_label %}{% if customer %}<span class="altar-es">Cuenta</span><span class="altar-en">Account</span>{% else %}<span class="altar-es">Ingresar</span><span class="altar-en">Log in</span>{% endif %}{% endset %}
{% set altar_search_icon %}<svg class="altar-nav__search-icon" viewBox="0 0 12 12" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1" aria-hidden="true"><circle cx="5" cy="5" r="3.9"/><path d="M7.9 7.9 11 11"/></svg>{% endset %}

<div
	class="js-head-main head-main head-main--altar altar-nav altar-nav--v2 altar-nav--v3 {{ header_with_categories_classes }}{% if template == 'search' %} is-search-open{% endif %}"
	data-store="head"
	data-section-id="{{ section.id }}"
	data-section-type="header"
	data-sticky-header="{{ is_sticky ? 'true' : 'false' }}"
	data-altar-page="{{ altar_page }}"
	{% if header_styles | trim %}style="{{ header_styles | trim }}"{% endif %}
>
	<div class="altar-nav__bar">
		<a class="altar-nav__logo" href="{{ store.url }}" aria-label="{{ store.name }}" {% if logo_block %}{{ logo_block | block_attributes }}{% endif %}>
			{% if altar_logo %}
				{% include 'snippets/image.tpl' with {
					image_src: altar_logo,
					image_alt: altar_logo | media_alt | default(store.name),
					image_classes: 'altar-nav__logo-image',
					image_priority_high: true,
				} %}
			{% else %}
				<img class="altar-nav__logo-image altar-nav__logo-image--default" src="{{ 'images/altar-logo.svg' | static_url }}" alt="" width="40" height="39">
			{% endif %}
		</a>

		<div class="altar-nav__controls">
			<div class="altar-nav__experience">
				<button type="button" class="altar-nav__layout-switch" data-altar-layout-toggle{% if template == 'home' %} aria-controls="altar-hero-campaign"{% endif %} role="switch" aria-checked="false" aria-label="English"><span aria-hidden="true"></span></button>
				<button type="button" class="altar-nav__spotify" data-altar-spotify-toggle data-spotify-url="{{ altar_spotify_url }}" aria-label="Spotify (abre una pestaña nueva)">PLAY</button>
			</div>
			<span class="altar-nav__experience-divider" aria-hidden="true"></span>

			<nav class="altar-nav__menu" aria-label="Navegación principal" {% if navigation_block %}{{ navigation_block | block_attributes }}{% endif %}>
				{{ altar_links }}
			</nav>

			<button type="button" class="altar-nav__menu-toggle" data-altar-menu-toggle aria-expanded="false" aria-controls="altar-nav-panel-{{ section.id }}">
				<span class="altar-nav__menu-open">Menu</span><span class="altar-nav__menu-close"><span class="altar-es">Cerrar</span><span class="altar-en">Close</span></span>
			</button>

			<div class="altar-nav__commerce" {% if utilities_block %}{{ utilities_block | block_attributes }}{% endif %}>
				<div class="altar-nav__search-slot">
					{# Search lives in the nav (Figma "Colección · resultados de búsqueda"): on the results page the nav arrives
					   with the search open and the query typed; closing it goes back to the whole collection. #}
					{% set altar_on_search = template == 'search' %}
					<button type="button" class="altar-nav__search" data-altar-search-open aria-expanded="{{ altar_on_search ? 'true' : 'false' }}" aria-controls="altar-search-{{ section.id }}"><span class="altar-es">Buscar</span><span class="altar-en">Search</span></button>
					<form class="altar-nav__search-form" id="altar-search-{{ section.id }}" action="{{ store.search_url }}" method="get" role="search" data-altar-search-form{% if altar_on_search %} data-altar-search-results="{{ store.products_url }}"{% else %} hidden{% endif %}>
						<input class="altar-nav__search-input" type="search" name="q" autocomplete="off" placeholder="Buscar" data-placeholder-es="Buscar" data-placeholder-en="Search" aria-label="Buscar"{% if altar_on_search %} value="{{ query }}"{% endif %}>
						<button type="submit" class="altar-nav__search-submit" aria-label="Buscar">{{ altar_search_icon }}</button>
					</form>
				</div>
				<a class="altar-nav__account" href="{{ altar_account_url }}">{{ altar_account_label }}</a>
				<span id="ajax-cart" class="js-cart-container altar-nav__cart-wrap" data-component="cart-button">
					{% if use_ajax_cart %}
						<button type="button" class="js-modal-open-private altar-nav__cart" data-target="#modal-cart" data-store="cart-link" aria-label="{{ 'general.shopping_cart' | t }}">
					{% else %}
						<a class="altar-nav__cart" href="{{ store.cart_url }}" data-store="cart-link" aria-label="{{ 'general.shopping_cart' | t }}">
					{% endif %}
						<span class="js-cart-widget-amount altar-nav__count">{{ cart.items_count | default(0) }}</span>
					{% if use_ajax_cart %}</button>{% else %}</a>{% endif %}
				</span>
			</div>
		</div>
	</div>

	{# Tablet / mobile: "Menú abierto" — a rule, then one row with the links, Ingresar and the magnifier. #}
	<div class="altar-nav__panel" id="altar-nav-panel-{{ section.id }}" data-altar-menu-panel hidden>
		<nav class="altar-nav__panel-row" aria-label="Navegación principal">
			{{ altar_links }}
			<a href="{{ altar_account_url }}">{{ altar_account_label }}</a>
			<button type="button" class="altar-nav__panel-search" data-altar-search-open aria-controls="altar-search-{{ section.id }}" aria-label="Buscar">{{ altar_search_icon }}</button>
		</nav>
	</div>
</div>
