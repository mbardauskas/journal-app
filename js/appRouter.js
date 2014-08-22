define([
	'jquery',
	'underscore',
	'backbone',
	'js/models/user',
	'js/views/view-controller'], function($, _, Backbone, User, ViewController) {
		return Backbone.Router.extend({
			routes: {
				'': 'index',
				'loggedout': 'index',
				'login': 'login',
				'logout': 'logout',
				'entries': 'entries',
				'entry/add': 'addEntry'
			},
			initialize: function() {
				this.viewController = new ViewController();
				this.viewController.initPage();
			},
			index: function() {
				this.viewController.initPage();
				if(User.isLoggedIn()) {
					this.entries();
				} else {
					this.login();
				}
			},
			login: function() {
				this.viewController.renderRegion('content', 'js/views/login');
			},
			logout: function() {
				User.logout();
			},
			entries: function() {
				this.viewController.renderRegion('content', 'js/views/entries');
			},
			addEntry: function() {
				this.viewController.renderRegion('content', 'js/views/addentry');
			}
		});
});
