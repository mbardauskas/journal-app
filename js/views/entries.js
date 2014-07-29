// js/views/entries.js

var app = app || {};

app.EntriesView = Backbone.View.extend({
	el: $('#entry-list').parent(),

	events: {
		'click #addEntry':'addEntry'
	},

	addEntry: function(e) {
		e.preventDefault();

		var formData = {};

		function parseID(id, removable) {
			var parsedID = id.replace(removable, '');
			return parsedID.charAt(0).toUpperCase() + parsedID.slice(1);
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
		var user = new app.User;
		var serialized = $.param(user.buildUserData());

		this.collection = new app.Entries();
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
		var entryView = new app.EntryView({
			model: item
		});
		this.$el.append(entryView.render().el)
	}
});