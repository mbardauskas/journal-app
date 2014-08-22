define([
	'jquery',
	'underscore',
	'backbone',
	'js/models/user'], function($, _, Backbone, User) {
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

		initPage: function() {
			if(User.isLoggedIn()) {
				this.renderRegion('header', 'js/views/region-header');
			} else {
				this.renderRegion('header', '');
			}
		},

		renderRegion: function(region, viewPath) {
			var regionSelector = '#region-' + region;
			var $region = this.$el.find(regionSelector);

			var changedView = function(viewModel) {
				var view = new viewModel();
				$region.html(view.el);
				return this;
			};

			if(viewPath !== "") {
				require([viewPath], changedView.bind(this));
			} else {
				$region.html("");
			}
		}
	});
});
