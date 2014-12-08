var Seek     = require('./../models/seek');

module.exports = function (express, app, router) {

	router.route('/seeks')
      .post(function(req, res) {

        var seek = new Seek(req.body);

        seek.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Seek created!' });
        });
      })
      .get(function(req, res) {

	      	Seek.find({"_type" : "Seek"},
	      				function(err, seeks) {
				            if (err)
				                res.send(err);

				            res.json(seeks);
				        });
      });
}