function getQueryStringValue (key) {
	return unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));  
}

//getQueryStringValue("editor") === 'true';

sendData = function sendData () {
	if (connection.readyState == 1) {
		var msg = {
			data: document.getElementById("data_value").value
		};
		connection.send(JSON.stringify(msg));
	}
};