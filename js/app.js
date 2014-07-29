// js/app.js

var app = app || {};

(function($) {
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

	new app.EntriesView();
})(jQuery);