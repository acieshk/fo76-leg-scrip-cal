//Install express server
const express = require('express');
const path = require('path');

const app = express();
var compression = require('compression')
var serveStatic = require('serve-static')
// Serve only the static files form the dist directory
app.use(compression())
app.use(serveStatic(path.join(__dirname + '/dist/fo76-legendary-scrip-calculator/')))
// app.use(
//   serveStatic(path.join(__dirname + '/dist/fo76-legendary-scrip-calculator/')
//   ,{
//     maxAge: '1d',
//     setHeaders: setCustomCacheControl
//   }
// ));
app.get('/fo76/*',function(req, res) {
  console.log('i get something')
  res.sendFile(path.join(__dirname+'/dist/fo76-legendary-scrip-calculator/index.html'));
  // res.sendFile(path.join(__dirname+'/dist/test.html'));
});
// app.get('/fo76Scrip/*', function(req,res) {
//
//   res.sendFile(path.join(__dirname+'/dist/fo76-legendary-scrip-calculator/index.html'));
// });

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

function setCustomCacheControl (res, path) {
  if (serveStatic.mime.lookup(path) === 'text/html') {
    // Custom Cache-Control for HTML files
    res.setHeader('Cache-Control', 'public, max-age=0')
  }
}
