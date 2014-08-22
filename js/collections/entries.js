define(['underscore', 'backbone', 'backbone-localstorage', 'js/models/entry'], function(_, Backbone, BackoneLocalStorage, EntryModel) {
	return Backbone.Collection.extend({
		model: EntryModel,
		url: '/index.php/api/entries',
		LocalStorage: new Backbone.LocalStorage('Entries')
	});
});