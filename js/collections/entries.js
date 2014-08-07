define(['underscore', 'backbone', 'js/models/entry'], function(_, Backbone, EntryModel) {
	return Backbone.Collection.extend({
		model: EntryModel,
		url: '/index.php/api/entries'
	});
});