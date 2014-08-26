define([
	'jquery',
	'underscore',
	'backbone',
	'js/appEvents',
	'js/models/user',
	'js/views/view-controller'], function($, _, Backbone, appEvents, User, ViewController) {
		return Backbone.Router.extend({
			routes: {
				// user is not navigated if the fragment is the same,
				// thus there are 3 routes to index.
				'': 'index',
				'index': 'index',
				'loggedout': 'index',
				// login/logout
				'login': 'login',
				'logout': 'logout',
				// other
				'entries': 'entries',
				'entries/add': 'addEntry',
				'entries/:id/edit': 'editEntry'
			},
			initialize: function() {
				appEvents.on("userLoggedIn", function() {
					if(Backbone.history.fragment === '') {
						Backbone.history.navigate('index', {trigger: true});
					} else {
						Backbone.history.navigate('', {trigger: true});
					}
				});
				appEvents.on("userLoggedOut", function() {
					Backbone.history.navigate('loggedout', {trigger: true});
				});

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
				this.viewController.renderRegion('content', 'js/views/entries-add');
			},
			editEntry: function(id) {
				this.viewController.renderRegion('content', 'js/views/entries-edit', {id: id});
			}
		});
});
