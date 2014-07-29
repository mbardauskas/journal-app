// js/collections/entries.js

var app = app || {};

app.Entries = Backbone.Collection.extend({
	model: app.Entry,
	url: '/index.php/api/entries'
});