var express = require('express')
var mongoose   = require('mongoose');

var app = express()

var port = process.env.PORT || 8080;        // set our port

mongoose.connect('mongodb://localhost:27017');

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

        Video.find(function(err, bears) {
            if (err)
                res.send(err);

            res.json(bears);
        });
    });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);


var server = app.listen(port, function () {

  var host = server.address().address

  console.log('Api app listening at http://%s:%s', host, port)

})