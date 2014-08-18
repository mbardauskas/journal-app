define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
	return Backbone.View.extend({
		el: $('#menu-view'),

		template: _.template( $('#menuTemplate').html() ),

		initialize: function() {
			this.render();
		},

		render: function() {
			this.$el.html(this.template());
			return this;
		}
	});
});