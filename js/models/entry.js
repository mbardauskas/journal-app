// js/models/entry.js

var app = app || {};

app.Entry = Backbone.Model.extend({
	defaults: {
		subject: 'Name/title',
		datetime: "now",
		text: "text placeholder"
	}
});