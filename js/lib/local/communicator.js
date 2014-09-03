define(['js/appEvents', 'localstorage'], function(appEvents, localStorage) {
	return {
		appApiUrl: document.getElementById('AppApiUrl').href,

		get: function(url) {
			var getObject = {
				beforeSend: this.sendAuthentication,
				type: 'get',
				reset: true,
				error: this.errorHandler
			};

			if(typeof url === 'string') {
				getObject.url = url;
			}

			return getObject;
		},

		post: function(url, hasBeforeSend) {
			var postObject = {
				url: url,
				method: "POST",
				error: this.errorHandler
			};

			if(hasBeforeSend !== true)  {
				postObject.beforeSend = this.sendAuthentication;
			}

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
		},

		sendAuthentication: function (xhr) {
			var user = localStorage.getItem('User.id');
			var pass = localStorage.getItem('User.public_key');
			var token = user.concat(":", pass);
			xhr.setRequestHeader('Authorization', ("Basic ".concat(btoa(token))));
		}
	}
});