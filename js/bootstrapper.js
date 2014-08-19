

define([
	'jquery',
	'underscore',
	'backbone',
	'js/appRouter'
], function($, _, Backbone, appRouter) {
	var bootstrapper = function() {
		this.init();
	};
	bootstrapper.prototype.init = function() {
		new appRouter();
		Backbone.history.start();
	};
	return bootstrapper;
});
