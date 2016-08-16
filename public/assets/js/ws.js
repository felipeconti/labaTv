var connection = new WebSocket('ws://'+document.location.host+'/', 'labatv');

connection.onerror = function (error) {
	console.log('WebSocket Error ' + error);
};

connection.onmessage = function (message) {
    var msg = JSON.parse(message.data);
    if (msg.data) editor.setValue(msg.data);
};