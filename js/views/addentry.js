define([
	'jquery',
	'underscore',
	'backbone',
	'js/collections/entries',
	'js/models/entry'], function($, _, Backbone, EntriesCollection, EntryModel) {
	return Backbone.View.extend({
		template: _.template( $('#entryAddTemplate').html() ),

		events: {
			'click #addEntry':'addEntry'
		},

		addEntry: function(e) {
			e.preventDefault();

			var self = this;
			var formData = {};

			$(this.el).find(':input').each(function(i, el) {
				if( $(el).val() != '' ) {
					var id = self.parseID(el.id, 'entry-');
					formData[id] = $(el).val();
				}
			});

			this.collection.create(formData);
			Backbone.history.navigate('entries', {trigger: true});
		},

		parseID: function(id, removable) {
			return id.replace(removable, '');
		},

		initialize: function() {
			this.collection = new EntriesCollection();
			this.render();
		},

		render: function() {
			this.model = new EntryModel();
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});
});