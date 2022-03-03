var fs = require('fs'),
http = require('http');

let pages = [`/index.html`, `/about.html`, `/contact-me.html`,`/404.html`]
http.createServer(function (req, res) {
    if(pages.findIndex(ele => ele ===req.url) == -1) {
        req.url = `/404.html`
    }
    console.log(__dirname,req.url);
  fs.readFile(__dirname + req.url, function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
}).listen(8080);
