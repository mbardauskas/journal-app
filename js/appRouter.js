define([
	'jquery',
	'underscore',
	'backbone',
	'js/views/entries',
	'js/views/login'
	], function($, _, Backbone, EntriesView, LoginView) {
		return Backbone.Router.extend({
			routes: {
				'': 'index',
				'entries': 'entries'
			},
			index: function(){
				new LoginView();
			},
			entries: function(){
				new EntriesView();
			}
		});
});
