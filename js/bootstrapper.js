define([
	'backbone',
	'js/appRouter'], function(Backbone, appRouter) {
	var bootstrapper = function() {
		this.init();
	};
	bootstrapper.prototype.init = function() {
		new appRouter();
		Backbone.history.start();
	};
	return bootstrapper;
});
