const http = require('http');
const url = require('url');

http.createServer(function (req, res) {
    const urlObject = url.parse(req.url);
    const pathText = urlObject.pathname;
    //console.log(pathText);
	res.writeHead(200, {
		'Content-Type': 'text/plain'
	});
	res.end(pathText + '\n');
}).listen(3456);
console.log('Server running at http://localhost:3456/');