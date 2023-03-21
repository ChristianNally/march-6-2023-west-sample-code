const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

const server = http.createServer((req, res) => {
  console.log(`requestListener was called`);
  // console.log('req.method:', req.method);
  // console.log('req.url:', req.url);

  const route = `${req.method} ${req.url}`;
  console.log('route:', route);

  switch(route) {
    case 'GET /':
      // home page

      filePath = path.join(__dirname, 'views', 'index.html');
      console.log('filePath', filePath);
      fs.readFile(filePath, 'utf8', (err, fileContent) => {
        if (err){
          res.statusCode = 500;
          res.write('err.message:', err.message);
          res.end();
        } else {
          res.statusCode = 200;
          res.write(fileContent);
          res.end();
        }
      });
      break;
    case 'GET /monkeyfuzz':
      // monkey fuzz page!
      res.statusCode = 200;
      res.write('this is the monkey fuzz page!!');
      res.write('this is MORE monkey fuzz!');      
      res.end();
      break;
    default: // 404
      res.statusCode = 404;
      res.write('404 not found, no seriously... i could not find it.');
      res.end();      
      break;
  }

});

server.listen(port, () => {
  console.log(`Server is listening on port = ${port}`);
});
