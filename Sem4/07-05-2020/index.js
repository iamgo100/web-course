require('http')
.Server((req, res) => {
    if (req.url === '/json') {
      res.writeHead(200, {
         'Content-Type': 'application/json; charset=utf-8',
         'Access-Control-Allow-Origin': '*'
      });

      res.end('{"result": "правильный JSON"}');
    }

    if (req.url === '/') {
      res.writeHead(404, {
         'Content-Type': 'text/html; charset=utf-8'
      });

      res.end('<h1>Елкина Галина Александровна</h1><h2>07.05.2020</h2>');
    }
    res.writeHead(200, {
      'Content-Type': 'text/javascript; charset=utf-8'
    });
    require('fs').createReadStream('./index.js').pipe(res);
 })
.listen(process.env.PORT);