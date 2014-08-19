define([
	'jquery',
	'underscore',
	'backbone',
	'js/views/content'], function($, _, Backbone, ContentView) {
		return Backbone.Router.extend({
			routes: {
				'': 'index',
				'entries': 'entries',
				'entry/add': 'addEntry'
			},
			initialize: function() {
				this.content = new ContentView();
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
