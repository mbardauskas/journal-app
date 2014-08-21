define([
	'jquery',
	'underscore',
	'backbone'], function($, _, Backbone) {
	return Backbone.View.extend({
		el: $('#region-main'),
		template: _.template( $('#regionMainTemplate').html() ),

		initialize: function() {
			this.render();
		},

		render: function() {
			this.$el.html(this.template());
			return this;
		},

		renderRegion: function(region, viewPath) {
			var changedView = function(viewModel) {
				var view = new viewModel();
				var regionSelector = '#region-' + region;
				this.$el.find(regionSelector).html(view.el);
				return this;
			};
			require([viewPath], changedView.bind(this));
		}
	});
});
