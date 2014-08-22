define([], function() {
	return (function() {
		if(window.localStorage !== "undefined") {
			return window.localStorage;
		}
		else {
			console.log("LocalStorage is not supported");
		}
	})();
});