// require express
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');
mongoose.Promise = global.Promise;

// sets up my port
var port = process.env.PORT || 3000;

// gives me access to public folder
app.use('/assets', express.static(__dirname + '/public'));

// server side template
app.set('view engine', 'ejs'); 

// calls a function that contains my database password and username
mongoose.connect(config.getDbConnectionString());
setupController(app);
apiController(app);

// listens to the port (event emitter)
app.listen(port);