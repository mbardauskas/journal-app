// js/models/user.js

var app = app || {};


app.User = Backbone.Model.extend({

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

	buildUserData: function() {
		return [
			{name: "uid", value: this.get("uid")},
			{name: "public_token", value: this.getPublicKey()}
		];
	}

});