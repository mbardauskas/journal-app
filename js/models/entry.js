define([
	'underscore',
	'backbone',
	'communicator'], function(_, Backbone, Communicator) {
	return Backbone.Model.extend({
		defaults: {
			subject: "",
			datetime: "",
			text: ""
		},
		urlRoot: Communicator.appApiUrl + 'entries'
	});
});