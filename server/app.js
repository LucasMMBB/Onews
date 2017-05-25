var express = require('express');
var path = require('path');

var index = require('./routes/index');
var news = require('./routes/news');

var app = express();

// view engine setup
app.set('views', path.join(__dirname,'../onews-app/build/'));
app.set('view engine', 'jade');
app.use('/static', express.static(path.join(__dirname, '../onews-app/build/static/')));

app.all("*", function(req, res, next){
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Headers","X-Requested-With");
	next();
});

app.use('/', index);
app.use('/news', news);
// catch 404 and forward to error handler
app.use(function(req, res) {
  var err = new Error('Not Found');
  err.status = 404;
  res.render('404 Not Found');
});


module.exports = app;
