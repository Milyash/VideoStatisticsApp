var Pause     = require('./../models/pause');

module.exports = function (express, app, router) {

	router.route('/pauses')
      .post(function(req, res) {

        var pause = new Pause(req.body);

        pause.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Pause created!' });
        });
      })
      .get(function(req, res) {

	      	Pause.find({"_type" : "Pause"},
	      				function(err, pauses) {
				            if (err)
				                res.send(err);

				            res.json(pauses);
				        });
      });
}