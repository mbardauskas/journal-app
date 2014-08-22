require.config({
	baseUrl: "",
	paths: {
		'underscore': 'js/lib/underscore-min',
		'jquery': 'js/lib/jquery-1.11.1.min',
		'backbone': 'js/lib/backbone',
		'backbone-localstorage': 'js/lib/backbone.localStorage-min',
		'bootstrapper': 'js/bootstrapper',
		'localstorage': 'js/localstorage'
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
