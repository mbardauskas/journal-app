define(['underscore', 'backbone', 'localstorage', 'js/appEvents'], function(_, Backbone, localStorage, appEvents) {
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
			var url = '/index.php/api/login';

			$.ajax({
				url: url,
				method: "POST",
				data: data,
				success: function(data, status) {
					self.loggedIn();
				},
				error: function(xhr, status) {
					console.log(xhr, status);
				}
			});
		},

		logout: function() {
			var self = this;
			var url = '/index.php/api/logout';

			$.ajax({
				url: url,
				method: "GET",
				success: function(data, status) {
					self.loggedOut();
				},
				error: function(xhr, status) {
					console.log(xhr, status);
				}
			});
		},

		setLoginStatus: function(status) {
			localStorage.setItem('authStatus', status);
		},

		isLoggedIn: function() {
			return localStorage.getItem('authStatus') != 0;
		},

		loggedIn: function() {
			this.setLoginStatus(1);
			appEvents.trigger('userLoggedIn');
		},

		loggedOut: function() {
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

	appEvents.on('invalidLogin', function() {
		User.loggedOut();
	});

	return User;
});