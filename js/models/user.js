define(['underscore', 'backbone', 'localstorage', 'communicator', 'js/appEvents'], function(_, Backbone, localStorage, Communicator, appEvents) {
	var User = {
		defaults: {
			secret_key: "db57734a6a5349b3dc5df8a880f45282acf72954911b5a85de12a357c89d8e9f",
			email: "test@mail.com",
			uid: "1"
		},

		getPublicKey: function() {
			var user_data = {
				"uid": this.get("uid"),
				"email": this.get("email"),
				"secret_key": this.get("secret_key")
			};
			var json = JSON.stringify(user_data);
			return CryptoJS.SHA256(json);
		},

		login: function(data) {
			var self = this;

			var login = {
				url: Communicator.appApiUrl + 'login',
				data: data,
				success: function(data, status) {
					self.logIn();
				}
			};

			_.extend(login, Communicator.post());

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

		logIn: function() {
			this.setLoginStatus(1);
			appEvents.trigger('userLoggedIn');
		},

		logOut: function() {
			this.setLoginStatus(0);
			appEvents.trigger('userLoggedOut', true);
		},

		buildUserData: function() {
			return [
				{name: "uid", value: this.get("uid")},
				{name: "public_token", value: this.getPublicKey()}
			];
		}
	};

	appEvents.on('userInvalidLogin userLogOut', function() {
		User.logOut();
	});

	return User;
});