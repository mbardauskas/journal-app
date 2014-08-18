define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
	return Backbone.View.extend({
		el: $('#content-view'),

		template: _.template( $('#contentTemplate').html() ),

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