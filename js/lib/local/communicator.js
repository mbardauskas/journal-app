define(['js/appEvents'], function(appEvents) {
	return {
		get: {
			type: 'get',
			reset: true,
			error: function(object, jqxhr) {
				if(jqxhr.status == 403 || jqxhr.status == 404) {
					appEvents.trigger('userInvalidLogin');
                    console.log(jqxhr.status);
				}
				else {
					console.log(jqxhr.status, jqxhr.responseText);
				}
			}
		}
	}
});