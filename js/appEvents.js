define([
	'jquery',
	'underscore',
	'backbone',
	'js/views/menu'], function($, _, Backbone, MenuView) {

	var appEvents = {};
	_.extend(appEvents, Backbone.Events);

	appEvents.on("userLoggedIn", function(data) {
		new MenuView();
		Backbone.history.navigate('entries', {trigger: true});
	});

	return appEvents;
});
