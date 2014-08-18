define([
	'jquery',
	'underscore',
	'backbone',
	'js/views/menu',
	'js/views/content'
	], function($, _, Backbone, MenuView, ContentView) {
		return Backbone.Router.extend({
			routes: {
				'': 'index',
				'entries': 'entries',
				'entry/add': 'addEntry'
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
			initialize: function() {
				this.menu = new MenuView();
				this.content = new ContentView();
			},
			changeContent: function(viewPath) {
				var changedView = function(viewModel) {
					this.content.replaceView(new viewModel());
				};
				require([viewPath], changedView.bind(this));
			}
		});
});
