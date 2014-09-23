define([
	'underscore',
	'backbone',
	'backbone-localstorage',
	'communicator',
	'js/models/entry'], function(_, Backbone, BackoneLocalStorage, Communicator, EntryModel) {
	return Backbone.Collection.extend({
		model: EntryModel,
		url: Communicator.appApiUrl + 'entries',
		LocalStorage: new Backbone.LocalStorage('Entries')
	});
});