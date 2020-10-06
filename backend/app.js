var app = require('connect')()
var serveStatic = require('serve-static')

// Serve up mock-api folder
app.use('/api', serveStatic('backend/mock-api', {
  'index': false,
  'setHeaders': setJsonHeaders
}))
 
// Set header to force download
function setJsonHeaders (res, path) {
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
  res.setHeader('Content-type', 'application/json')
}

// Serve up public folder
app.use('/', serveStatic('../build', {'index': ['index.html', 'index.htm']}))

app.listen(8888, function() {
    console.log('Acesse: http://localhost:8888')
});
