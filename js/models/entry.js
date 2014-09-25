define([
	'underscore',
	'backbone',
	'localstorage',
	'communicator'], function(_, Backbone, LocalStorage, Communicator) {
	return Backbone.Model.extend({
		defaults: {
			subject: "",
			datetime: "",
			text: "",
			owner_id: LocalStorage.getItem('User.id')
		},
		urlRoot: Communicator.appApiUrl + 'entries'
	});
});