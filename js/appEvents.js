define([
	'jquery',
	'underscore',
	'backbone',
	'js/views/view-controller'], function($, _, Backbone, ViewController) {

	var appEvents = {};
	_.extend(appEvents, Backbone.Events);
	var viewController = new ViewController();

	appEvents.on("userLoggedIn", function(data) {
		viewController.renderRegion('header', 'js/views/region-header');
		Backbone.history.navigate('entries', {trigger: true});
	});

	return appEvents;
});
