var Play     = require('./../models/play');
var Pause     = require('./../models/pause');

module.exports = function (express, app, router) {

	router.route('/events')
      .get(function(req, res) {

        var play = new Play({
          time: 10,
          play: "Ahah"
        });

        var pause = new Pause({
          time: 20,
          pause: "Aight"
        })

        play.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Play created!' });
        });

        pause.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Video created!' });
        });
      })
}