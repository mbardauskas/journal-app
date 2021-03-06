define([
	'jquery',
	'underscore',
	'backbone'], function($, _, Backbone) {
	return Backbone.View.extend({
		template: _.template( $('#regionHeaderTemplate').html() ),

		initialize: function() {
			this.render();
		},

		render: function() {
			this.$el.html(this.template());
			return this;
		}
	});
});