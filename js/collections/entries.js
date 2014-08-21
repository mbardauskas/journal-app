define(['underscore', 'backbone', 'localstorage', 'js/models/entry'], function(_, Backbone, localStorage, EntryModel) {
	return Backbone.Collection.extend({
		model: EntryModel,
		url: '/index.php/api/entries',
		LocalStorage: new Backbone.LocalStorage('Entries')
	});
});