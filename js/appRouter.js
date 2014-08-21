define([
	'jquery',
	'underscore',
	'backbone',
	'js/views/view-controller'], function($, _, Backbone, ViewController) {
		return Backbone.Router.extend({
			routes: {
				'': 'index',
				'login': 'login',
				'entries': 'entries',
				'entry/add': 'addEntry'
			},
			initialize: function() {
				this.viewController = new ViewController();
			},
			index: function() {
				/** @TODO: create User model; create application states model/object
				 * to track if user is logged in; show different content depending
				 * on application state;
				 */
				this.login();
			},
			login: function() {
				this.viewController.renderRegion('content', 'js/views/login');
			},
			entries: function() {
				this.viewController.renderRegion('content', 'js/views/entries');
			},
			addEntry: function() {
				this.viewController.renderRegion('content', 'js/views/addentry');
			}
		});
});
