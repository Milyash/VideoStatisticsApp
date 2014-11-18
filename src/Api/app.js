var express = require('express')
var mongoose   = require('mongoose');
var bodyParser = require('body-parser');
var fs = require('fs');

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

var Video     = require('./models/video');

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    
    next(); // make sure we go to the next routes and don't stop here
});

// on routes that end in /videos
// ----------------------------------------------------
router.route('/videos') 
    // get all the videos (accessed at GET http://localhost:8080/api/videos)
    .get(function(req, res) {

        Video.find(function(err, videos) {
            if (err)
                res.send(err);

            res.json(videos);
        });
    })
    // create a video (accessed at POST http://localhost:8080/api/videos)
    .post(function(req, res) {
        
        var video = new Video();      // create a new instance of the Video model
        video.url = req.body.url;  // set the videos url

        // save the bear and check for errors
        video.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Video created!' });
        });
    });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

var server = app.listen(port, function () {

  var host = server.address().address

  console.log('Api app listening at http://%s:%s', host, port)

})