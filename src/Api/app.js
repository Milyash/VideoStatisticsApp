var express = require('express')
var mongoose   = require('mongoose')
var bodyParser = require('body-parser')
var fs = require('fs')

var app = express()

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Load local parameters
  var data = fs.readFileSync('./config_local.json'),
      parameters;
  try {
    parameters = JSON.parse(data);
  }
  catch (err) {
    console.log('There has been an error parsing config file.')
    console.log(err);
  }

//Enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var port = process.env.PORT || parameters.server_port;        // set our port

mongoose.connect('mongodb://localhost:' + parameters.db_port);

//Load our routes and controllers
var router = express.Router();
require('./routes/global.js')(express, router)
require('./routes/plays.js')(express, app, router)
require('./routes/pauses.js')(express, app, router)
app.use('/api', router);

var server = app.listen(port, function () {

  var host = server.address().address

  console.log('Api app listening at http://%s:%s', host, port)

})