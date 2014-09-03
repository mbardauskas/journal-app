define(['jquery', 'underscore', 'backbone', 'js/models/user'], function($, _, Backbone, User) {
	return Backbone.View.extend({
		events: {
			'submit #login-form': 'login'
		},

		template: _.template( $('#loginFormTemplate').html() ),

		login: function(e) {
			e.preventDefault();
			var $form = this.$el.find('#login-form');
			var username = this.$el.find('#LoginForm_username').val();
			var password = this.$el.find('#LoginForm_password').val();

			var data = $form.serializeArray();
			User.login(data, username, password);
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