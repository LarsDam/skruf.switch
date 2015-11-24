var http = require('http');
var fs = require('fs');

function handleRequest(req, res) {
	var path = './demo/index.html';
	if(req.url.indexOf('.') > -1) {
		path = './demo/' + req.url;
	}

	fs.readFile(path, function(err, content) {
		res.end(content);
	});
}

var server = http.createServer(handleRequest);

server.listen(3000, function() {
	console.log('Server listening');
});