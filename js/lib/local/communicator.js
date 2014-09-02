define(['js/appEvents'], function(appEvents) {
	return {
		appApiUrl: document.getElementById('AppApiUrl').href,
		get: function(url) {
			var getObject = {
				type: 'get',
				reset: true,
				error: this.errorHandler
			};

			if(typeof url === 'string') {
				getObject.url = url;
			}

			return getObject;
		},

		post: function(url) {
			var postObject = {
				url: url,
				method: "POST",
				error: this.errorHandler
			};

			if(typeof url === 'string') {
				postObject.url = url;
			}

			return postObject;
		},

		errorHandler: function(object, jqxhr) {
			if(jqxhr.status == 403 || jqxhr.status == 404) {
				appEvents.trigger('userInvalidLogin');
				console.log(jqxhr.status);
			}
			else {
				console.log(jqxhr.status, jqxhr.responseText);
			}
		}
	}
});