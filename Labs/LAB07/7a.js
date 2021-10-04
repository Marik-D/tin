const http = require('http');
const url = require("url");

const requestListener = function(req, res) {
    const URL = url.parse(req.url, true);
    const num1 = Number(URL.query.num1);
    const num2 = Number(URL.query.num2);
    if (num1 && num2) {
        if (URL.pathname === "/add") {
            res.writeHead(200);
            res.end("" + (num1 + num2));
        } else if (URL.pathname === "/sub") {
            res.writeHead(200);
            res.end("" + (num1 - num2));
        } else if (URL.pathname === "/mul") {
            res.writeHead(200);
            res.end("" + (num1 * num2));
        } else if (URL.pathname === "/div") {
            res.writeHead(200);
            res.end("" + (num1 / num2));
        } else {
            res.writeHead(400);
            res.end("Wrong path");
        }
    } else {
        res.writeHead(400);
        res.end("Wrong parameters");
    }


}

const server = http.createServer(requestListener);
server.listen(8080);