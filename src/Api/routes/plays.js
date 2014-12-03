var Play     = require('./../models/play');

module.exports = function (express, app, router) {

	router.route('/plays')
      .post(function(req, res) {

        var play = new Play(req.body);

        play.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Play created!' });
        });
      })
      .get(function(req, res) {

	      	Play.find(
                    {"_type" : "Play"},
                    function(err, plays) {
            	            if (err)
            	                res.send(err);

            	            res.json(plays);
            	        });
      });
}