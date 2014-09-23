define([
	'underscore',
	'backbone'], function(_, Backbone) {

	var appEvents = {};
	_.extend(appEvents, Backbone.Events);

	return appEvents;
});
