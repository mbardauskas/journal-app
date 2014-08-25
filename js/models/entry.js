define(['underscore', 'backbone'], function(_, Backbone) {
	return Backbone.Model.extend({
		defaults: {
			subject: "",
			datetime: "",
			text: ""
		},
		urlRoot: "/index.php/api/entries"
	});
});