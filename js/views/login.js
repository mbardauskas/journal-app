define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
	return Backbone.View.extend({
		el: $('#login-view').parent(),

		events: {
			'submit #login-form': 'login'
		},

		template: _.template( $('#loginFormTemplate').html() ),

		login: function(e) {
			e.preventDefault();
			var $form = this.$el.find('#login-form');
			var url = '/index.php/api/login';

			$.ajax({
				url: url,
				method: "POST",
				data: $form.serializeArray(),
				success: function(data, status) {
					Backbone.history.navigate('entries', {trigger: true});
				},
				error: function(xhr, status) {
					console.log(xhr, status);
				}
			});
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