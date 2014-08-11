require.config({
	baseUrl: "",
	paths: {
		'underscore': 'js/lib/underscore-min',
		'jquery': 'js/lib/jquery-1.11.1.min',
		'backbone': 'js/lib/backbone',
		'appRouter': 'js/appRouter'
	},
	shim: {
		'underscore': {
			exports: '_'
		},
		'jquery': {
			exports: 'jQuery'
		},
		'backbone': {
			exports: 'Backbone'
		}
	}
});

define([
	'jquery',
	'underscore',
	'backbone',
	'appRouter'
	], function($, _, Backbone, appRouter) {

	$(function() {
		new appRouter();
		Backbone.history.start();
	});
});
