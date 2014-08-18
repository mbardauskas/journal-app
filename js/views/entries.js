define([
	'jquery',
	'underscore',
	'backbone',
	'js/collections/entries',
	'js/views/entry'
	], function($, _, Backbone, EntriesCollection, EntryView) {
	return Backbone.View.extend({
		events: {
			'click #addEntry':'addEntry'
		},

		addEntry: function(e) {
			e.preventDefault();

			var formData = {};

			function parseID(id, removable) {
				return id.replace(removable, '');
			}

			$('#entry-form').find(':input').each(function(i, el) {
				if( $(el).val() != '' ) {
					var id = parseID(el.id, 'entry-');
					formData[id] = $(el).val();
				}
			});

			this.collection.create(formData);
		},

		initialize: function() {
			// @TODO: make User as a singleton
			/*var user = new app.User;
			var serialized = $.param(user.buildUserData());*/
			var serialized = "";

			this.collection = new EntriesCollection();
			this.collection.fetch({data: serialized, type: 'get', reset: true});
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
