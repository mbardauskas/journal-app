define([], function() {
	return {
		confirm: function(message, callback) {
			if(window.confirm(message)) {
				callback();
			}
		}
	}
});