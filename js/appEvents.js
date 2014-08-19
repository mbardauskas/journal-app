define([
	'jquery',
	'underscore',
	'backbone',
	'js/views/region-menu'], function($, _, Backbone, RegionMenuView) {

	var appEvents = {};
	_.extend(appEvents, Backbone.Events);

	appEvents.on("userLoggedIn", function(data) {
		new RegionMenuView();
		Backbone.history.navigate('entries', {trigger: true});
	});

	return appEvents;
});
