define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
	return Backbone.View.extend({
		tagName: 'div',
		className: 'entry-item',
		template: _.template( $('#entryTemplate').html() ),
		editTemplate: _.template($('#entryEditTemplate').html()),

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},

		events: {
			'click .deleteEntry':'deleteEntry'
		},

		deleteEntry: function(e) {
			e.preventDefault();

			this.model.destroy();
			this.remove();
		}
	});
});