var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// Create application/x-www-form-urlencoded parser  
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var todo = [];

app.use(express.static('public'));
app.use(bodyParser.json())
app.get('/list', (req, res) => {
  response = {
    todo: todo
  };
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(JSON.stringify(response));
})
app.post('/add', (req, res) => {
  // Prepare output in JSON format  
  todo.push(req.body.item)
  response = {
    status: "Success"
  };
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(JSON.stringify(response));
})
app.post('/remove', (req, res) => {
  // Prepare output in JSON format  
  todo = todo.filter(item => item !== req.body.item)
  response = {
    status: "Success"
  };
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(JSON.stringify(response));
})

var server = app.listen(8000, function () {
  var host = server.address().address
  var port = server.address().port
})

module.exports = app;