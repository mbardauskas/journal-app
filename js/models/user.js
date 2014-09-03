define([
	'underscore',
	'backbone',
	'localstorage',
	'communicator',
	'cryptojs',
	'js/appEvents'], function(_, Backbone, localStorage, Communicator, CryptoJS, appEvents) {
	var User = {
		generatePublicKey: function(secret_key) {
			var data = {
				"secret_key": secret_key
			};
			var json = JSON.stringify(data);
			return CryptoJS.SHA256(json);
		},

		login: function(formData, username, password) {
			var self = this;
			var url = Communicator.appApiUrl + 'login';

			var login = {
				data: formData,
				success: function(response, statusText, xhr) {
					self.loginSuccess(response);
				}
			};

			_.extend(login, Communicator.post(url, true));

			Backbone.ajax(login);
		},

		logout: function() {
			var self = this;

			var logout = {
				url: Communicator.appApiUrl + 'logout',
				success: function(data, status) {
					self.logOut();
				}
			};

			_.extend(logout, Communicator.get());

			Backbone.ajax(logout);
		},

		setLoginStatus: function(status) {
			localStorage.setItem('authStatus', status);
		},

		isLoggedIn: function() {
			return localStorage.getItem('authStatus') != 0;
		},

		loginSuccess: function(response) {
			var responseObj = $.parseJSON(response);

			localStorage.setItem('User.id', responseObj.uid);
			localStorage.setItem('User.public_key', this.generatePublicKey(response.secret_key));

			this.setLoginStatus(1);
			appEvents.trigger('userLoggedIn');
		},

		logOut: function() {
			localStorage.removeItem('User.id');
			localStorage.removeItem('User.public_key');
			this.setLoginStatus(0);
			appEvents.trigger('userLoggedOut', true);
		}
	};

	appEvents.on('userInvalidLogin userLogOut', function() {
		User.logOut();
	});

	return User;
});