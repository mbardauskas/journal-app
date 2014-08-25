define([
	'jquery',
	'underscore',
	'backbone',
	'js/collections/entries',
	'js/models/entry'], function($, _, Backbone, EntriesCollection, EntryModel) {
	return Backbone.View.extend({
		template: _.template( $('#entryEditTemplate').html() ),

		events: {
			'click #saveEntry':'saveEntry'
		},

		saveEntry: function(e) {
			e.preventDefault();

			var self = this;
			var formData = {};

			$(this.el).find(':input').each(function(i, el) {
				if( $(el).val() != '' ) {
					var id = self.parseID(el.id, 'entry-');
					formData[id] = $(el).val();
				}
			});

			this.model.save(formData);
			Backbone.history.navigate('entries', {trigger: true});
		},

		parseID: function(id, removable) {
			return id.replace(removable, '');
		},

		initialize: function(options) {
			if(typeof options !== "undefined") {
				this.model = new EntryModel({id: options.id});
				this.listenTo(this.model, 'change', this.render);
				this.model.fetch();
			}
		},

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});
});