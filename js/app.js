require.config({
	baseUrl: "",
	paths: {
		'underscore': 'js/lib/underscore-min',
		'jquery': 'js/lib/jquery-1.11.1.min',
		'backbone': 'js/lib/backbone',
		'bootstrapper': 'js/bootstrapper'
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
	'bootstrapper'], function($, _, Backbone, bootstrapper) {
	$(function() {
		new bootstrapper();
	});
});
