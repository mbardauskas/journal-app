// js/views/entry.js

var app = app || {};

app.EntryView = Backbone.View.extend({
	tagName: 'div',
	className: 'entry-item',
	template: _.template( $('#entryTemplate').html() ),
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});