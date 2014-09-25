define([
	'jquery',
	'underscore',
	'backbone',
	'date',
	'communicator',
	'js/collections/entries',
	'js/models/entry'], function($, _, Backbone, Date, Communicator, EntriesCollection, EntryModel) {
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

			this.collection = new EntriesCollection();

			this.collection.create(formData, {beforeSend: Communicator.sendAuthentication});
			Backbone.history.navigate('entries', {trigger: true});
		},

		parseID: function(id, removable) {
			return id.replace(removable, '');
		},

		initialize: function() {
			this.render();
		},

		render: function() {
			var date = new Date();
			var datetime = date.toString('yyyy-MM-dd HH:mm');
			this.model = new EntryModel({subject: datetime, datetime: datetime});
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});
});