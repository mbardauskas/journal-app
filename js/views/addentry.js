define(['jquery', 'underscore', 'backbone', 'js/models/entry'], function($, _, Backbone, EntryModel) {
	return Backbone.View.extend({
		template: _.template( $('#entryAddTemplate').html() ),

		initialize: function() {
			this.render();
		},

		render: function() {
			this.model = new EntryModel();
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});
});