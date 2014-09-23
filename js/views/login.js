define([
	'jquery',
	'underscore',
	'backbone',
	'cryptojs',
	'js/models/user'], function($, _, Backbone, CryptoJS, User) {
	return Backbone.View.extend({
		events: {
			'submit #login-form': 'login'
		},

		template: _.template( $('#loginFormTemplate').html() ),

		login: function(e) {
			e.preventDefault();
			var $form = this.$el.find('#login-form');

			//encrypt password before login
			var password = CryptoJS.SHA256(this.$el.find('#LoginForm_password').val());
			this.$el.find('#LoginForm_password').val(password);

			var data = $form.serializeArray();
			User.login(data);

			// clearing password field since it gets encrypted
			this.$el.find('#LoginForm_password').val('');
		},

		initialize: function() {
			this.render();
		},

		render: function() {
			this.$el.html(this.template());
			return this;
		}
	});
});