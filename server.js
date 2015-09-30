var http = require('http');

var options = {
    hostname:'www.google.com',
    port: 80,
    path: '/upload',
    mathod: 'POST'
};

var req = http.request(options, function(res){
	console.log('STATUS: '+res.statusCode);
	console.log('HEADERS: '+JSON.stringify(res.headers));
	res.setEncoding('utf8');
	res.on('data',function(chunk){
		console.log('BODY: '+chunk);
	});
});

req.on('error', function(e){
	console.log('problem with request: '+e.message);
});

req.write('data\n');
req.write('date\n');
req.end();