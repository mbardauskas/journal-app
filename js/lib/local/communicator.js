define(['js/appEvents'], function(appEvents) {
	return {
		get: {
			type: 'get',
			reset: true,
			error: function(object, jqxhr) {
				if(jqxhr.status == 403 && jqxhr.responseText == "Login Required") {
					appEvents.trigger('userInvalidLogin');
				}
				else {
					console.log(jqxhr.status, jqxhr.responseText);
				}
			}
		}
	}
});