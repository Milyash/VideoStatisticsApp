module.exports = function (express, app, router) {

	/* GET home page. */
	router.get('/users', function(req, res) {
	  res.json('index', { title: 'Express' });
	});
}
