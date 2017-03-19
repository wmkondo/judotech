var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/prospect', function(request, response) {
  response.render('pages/prospect');
});

app.get('/indicate', function(request, response) {
  response.render('pages/indicate');
});

app.get('/about/history', function(request, response) {
  response.render('pages/about/history');
});

app.get('/about/mission', function(request, response) {
  response.render('pages/about/mission');
});

app.get('/about/vision', function(request, response) {
  response.render('pages/about/vision');
});

app.get('/about/values', function(request, response) {
  response.render('pages/about/values');
});

app.get('/secretary/time-board', function(request, response) {
  response.render('pages/secretary/time-board');
});

app.get('/secretary/calendar', function(request, response) {
  response.render('pages/secretary/calendar');
});

app.get('/secretary/instructors', function(request, response) {
  response.render('pages/secretary/instructors');
});

app.get('/secretary/administrators', function(request, response) {
  response.render('pages/secretary/administrators');
});

app.get('/secretary/partners', function(request, response) {
  response.render('pages/secretary/partners');
});

app.get('/athlete/career', function(request, response) {
  response.render('pages/athlete/career');
});

app.get('/athlete/rules', function(request, response) {
  response.render('pages/athlete/rules');
});

app.get('/contact', function(request, response) {
  response.render('pages/contact');
});

app.get('/location', function(request, response) {
  response.render('pages/location');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
