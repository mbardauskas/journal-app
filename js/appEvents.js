define([
	'jquery',
	'underscore',
	'backbone'], function($, _, Backbone) {

	var appEvents = {};
	_.extend(appEvents, Backbone.Events);

	appEvents.on("userLoggedIn", function() {
		Backbone.history.navigate('', {trigger: true});
	});
	appEvents.on("userLoggedOut", function() {
		Backbone.history.navigate('loggedout', {trigger: true});
	});

	return appEvents;
});
