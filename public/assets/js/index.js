function getQueryStringValue (key) {
	return unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));  
}

//getQueryStringValue("editor") === 'true';

// connection.readyState == 1
// connection.send(JSON.stringify(msg));
