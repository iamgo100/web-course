// JS is cool
function task(x) {
    const server = http.createServer((req, res) => {
      const urlParts = req.url.split('/');
      if (urlParts[1] === 'challenge') {
        res.write(x);
        res.end();
      }
      if (urlParts[1] === 'api' && urlParts[2] === 'rv') {
        res.write(urlParts[3].split('').reverse().join(''));
        res.end();
      }
    res.end();
    });
    return server;
  }