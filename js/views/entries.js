define([
	'jquery',
	'underscore',
	'backbone',
	'communicator',
	'js/collections/entries',
	'js/views/entry'
	], function($, _, Backbone, Communicator, EntriesCollection, EntryView) {
	return Backbone.View.extend({
		tagName: 'div',
		className: 'entry-items',
		initialize: function() {
			this.collection = new EntriesCollection();
			this.collection.fetch(Communicator.get);
			this.render();

			this.listenTo(this.collection, 'add', this.renderEntry);
			this.listenTo(this.collection, 'reset', this.render);
		},

		render: function() {
			this.collection.each(function(item) {
				this.renderEntry(item);
			}, this)
		},

		renderEntry: function(item) {
			var entryView = new EntryView({
				model: item
			});
			this.$el.append(entryView.render().el)
		}
	});
});
