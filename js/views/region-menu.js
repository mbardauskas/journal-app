define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
	return Backbone.View.extend({
		el: $('#region-menu-view'),

		template: _.template( $('#regionMenuTemplate').html() ),

		initialize: function() {
			this.render();
		},

		render: function() {
			this.$el.html(this.template());
			return this;
		}
	});
});