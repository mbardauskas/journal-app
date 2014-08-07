define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
	return Backbone.View.extend({
		tagName: 'div',
		className: 'entry-item',
		template: _.template( $('#entryTemplate').html() ),
		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},
		events: {
			'click .deleteEntry':'deleteEntry',
			'click .editEntry':'editEntry'
		},
		deleteEntry: function(e) {
			e.preventDefault();

			this.model.destroy();
			this.remove();
		},
		editEntry: function(e) {
			e.preventDefault();

			console.log('edit');
		}
	});
});