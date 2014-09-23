define([
	'jquery',
	'underscore',
	'backbone',
	'confirmation'], function($, _, Backbone, Confirmation) {
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

			var removeModel = function() {
				this.model.destroy();
				this.remove();
			};

			Confirmation.confirm('Are you sure you want to remove this entry?', removeModel.bind(this));
		}
	});
});