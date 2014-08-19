define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
	return Backbone.View.extend({
		el: $('#region-content-view'),

		template: _.template( $('#regionContentTemplate').html() ),

		initialize: function() {
			this.render();
		},

		render: function() {
			this.$el.html(this.template());
			return this;
		},

		replaceView: function(view) {
			this.$el.html(view.el);
		}
	});
});