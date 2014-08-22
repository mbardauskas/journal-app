define([
	'jquery',
	'underscore',
	'backbone',
	'js/collections/entries',
	'js/views/entry'
	], function($, _, Backbone, EntriesCollection, EntryView) {
	return Backbone.View.extend({
		tagName: 'div',
		className: 'entry-items',
		initialize: function() {
			// @TODO: make User as a singleton
			/*var user = new app.User;
			var serialized = $.param(user.buildUserData());*/
			var serialized = "";

			this.collection = new EntriesCollection();
			/**
			 * @TODO: Make default communications object for error,
			 * success and other handling. Consider promises
			 */
			this.collection.fetch({
				data: serialized,
				type: 'get',
				reset: true
			});
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
