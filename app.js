// server.js
// load the things we need
var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var app = express();

var isProduction = process.env.NODE_ENV === 'production';

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(expressLayouts);

// use res.render to load up an ejs view file
app.use(require('./routes'));

app.use(express.static(__dirname + '/public'));

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
  /// error handlers
  
  // development error handler
  // will print stacktrace
  if (!isProduction) {
    app.use(function(err, req, res, next) {
      console.log(err.stack);
  
      res.status(err.status || 500);
  
      res.json({'errors': {
        message: err.message,
        error: err
      }});
    });
  }
  
  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({'errors': {
      message: err.message,
      error: {}
    }});
  });

// finally, let's start our server...
var server = app.listen( process.env.PORT || 8080, function() {
    console.log('Listening on port ' + server.address().port + '...');
});
