var VolumeChange     = require('./../models/volumeChange');

module.exports = function (express, app, router) {

	router.route('/volumechanges')
      .post(function(req, res) {

        var volumeChange = new VolumeChange(req.body);

        volumeChange.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'VolumeChange created!' });
        });
      })
      .get(function(req, res) {

	      	VolumeChange.find({"_type" : "VolumeChange"},
	      				function(err, volumechanges) {
				            if (err)
				                res.send(err);

				            res.json(volumechanges);
				        });
      });
}