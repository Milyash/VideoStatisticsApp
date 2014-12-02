var Video     = require('./../models/video');

module.exports = function (express, app, router) {

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
    })
}