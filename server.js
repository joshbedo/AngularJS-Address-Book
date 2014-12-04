var express = require('express'),
    api     = require('./api'),
    app     = express();

app
  .use(express.static('./public'))
  .use('/api', api)
  .get('*', function(req, res) {
    res.sendfile('public/index.html');
  })
  .listen(3000);
