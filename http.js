import http from 'http';

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Hello World!");

    console.log("http://localhost:8080" + req.url);

    res.end();
}).listen(8080);

console.log("本機端的網址: http://localhost:8080");