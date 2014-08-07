define(['underscore', 'backbone'], function(_, Backbone) {
	return Backbone.Model.extend({
		defaults: {
			subject: 'Name/title',
			datetime: "now",
			text: "text placeholder"
		}
	});
});