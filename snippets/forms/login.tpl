{#
  Login Form
  Customer login form with validation messages.
#}
{# Account Validation #}

{% if account_validation == 'success' %}
	{% include 'snippets/forms/alert.tpl' with {
		type: 'success',
		class: 'js-account-validation-success form-alert-spaced',
		message: ('forms.login.account_validation.success' | t)
	} %}
{% elseif account_validation == 'expired' %}
	{% include 'snippets/forms/alert.tpl' with {
		type: 'danger',
		class: 'js-account-validation-expired form-alert-compact',
		message: ('forms.login.account_validation.expired' | t)
	} %}
	<div class="form-validation-help">
		<button type="button" class="js-resend-validation-link form-validation-link btn-link" data-customer-email="{{ customer_email }}">{{ 'forms.account_validation.resend_validation' | t }}</button>
	</div>
{% elseif account_validation == 'pending' %}
	<div class="js-account-validation-pending alert alert-danger form-alert-compact">{{ 'forms.login.account_validation.pending' | t(customer_email) }}</div>

	<div class="form-validation-help">
		{{ 'forms.login.account_validation.pending_question' | t }}
		<button type="button" class="js-resend-validation-link form-validation-link btn-link" data-customer-email="{{ customer_email }}">{{ 'forms.account_validation.resend_validation' | t }}</button>
	</div>
{% endif %}

<div class="js-resend-validation-success form-alert-spaced" style="display: none;">
	{% include 'snippets/forms/alert.tpl' with {
		type: 'success',
		message: ('forms.account_validation.sent_success' | t)
	} %}
</div>
<div class="js-resend-validation-error form-alert-spaced" style="display: none;">
	{% include 'snippets/forms/alert.tpl' with {
		type: 'danger',
		message: ('forms.account_validation.sent_fail' | t)
	} %}
</div>

<div class="js-too-many-attempts alert alert-danger form-alert-spaced" style="display:none">
	{{ 'forms.account_validation.sent_timeout' | t }}
	<span class="js-too-many-attempts-countdown"></span>
</div>

{# Login form · Figma "Ingresar — ES (Layout A) · EN (Layout B)" (755:3820): Email, Contraseña, Entrá, then a rule
   and "Recuperar contraseña · Crear cuenta". Labels in both languages (.altar-es / .altar-en, the nav switch). #}

<form id="login-form" action="" method="post" class="js-form form altar-login-form" data-store="account-login">

	<div class="form-group">
		<label class="form-label" for="email">Email</label>
		<input type="email" id="email" name="email" value="{{ result.email }}" autocorrect="off" autocapitalize="off" autocomplete="email" class="js-account-input form-control" required>
	</div>

	<div class="form-group">
		<label class="form-label" for="password"><span class="altar-es">Contraseña</span><span class="altar-en">Password</span></label>
		<input type="password" id="password" name="password" autocorrect="off" autocapitalize="off" autocomplete="current-password" class="js-account-input js-password-input form-control" required>
	</div>

	<button class="btn btn-primary btn-big btn-block" type="submit" value="{{ 'forms.login.submit' | t }}" name="">
		<span class="altar-es">Entrá</span><span class="altar-en">Log in</span>
		<span class="js-form-spinner form-spinner" style="display:none;">
			{% include 'snippets/icon.tpl' with { name: 'spinner', size: 16, class: 'icon-loading' } %}
		</span>
	</button>

	{% if result.invalid %}
		{% include 'snippets/forms/alert.tpl' with {
			type: 'danger',
			class: 'js-login-general-error',
			message: ('forms.login.error_general' | t)
		} %}
	{% endif %}

	<hr class="altar-login-form__rule">
	{# Sofi: the two links reach both edges (justified), no middle dot #}
	<p class="altar-login-form__links">
		<a href="{{ store.customer_reset_password_url }}"><span class="altar-es">Recuperar contraseña</span><span class="altar-en">Reset password</span></a>
		{% if 'mandatory' not in store.customer_accounts %}
			<a href="{{ store.customer_register_url }}"><span class="altar-es">Crear cuenta</span><span class="altar-en">Create account</span></a>
		{% endif %}
	</p>
</form>
