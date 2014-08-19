define([
	'jquery',
	'underscore',
	'backbone',
	'js/views/region-content'], function($, _, Backbone, RegionContentView) {
		return Backbone.Router.extend({
			routes: {
				'': 'index',
				'entries': 'entries',
				'entry/add': 'addEntry'
			},
			initialize: function() {
				this.content = new RegionContentView();
			},
			index: function() {
				this.changeContent('js/views/login');
			},
			entries: function() {
				this.changeContent('js/views/entries');
			},
			addEntry: function() {
				this.changeContent('js/views/addentry');
			},
			changeContent: function(viewPath) {
				var changedView = function(viewModel) {
					this.content.replaceView(new viewModel());
				};
				require([viewPath], changedView.bind(this));
			}
		});
});
