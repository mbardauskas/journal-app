require.config({
	baseUrl: "",
	paths: {
		'underscore': 'js/lib/underscore-min',
		'jquery': 'js/lib/jquery-1.11.1.min',
		'backbone': 'js/lib/backbone'
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
	'js/views/entries',
	], function($, _, Backbone, EntriesView) {
	var app = app || {};

	$(function() {
		app.domainURL = "http://journal.yii/index.php/api/";
		$('#login-form').on('submit', function(e) {
			e.preventDefault();
			var $form = $(this);
			var url = app.domainURL + 'login';

			$.ajax({
				url: url,
				method: "POST",
				data: $form.serializeArray(),
				success: function(data, status) {
					console.log(data, status);
				},
				error: function(xhr, status) {
					console.log(xhr, status);
				}
			});
		});

		new EntriesView();
	});
});
