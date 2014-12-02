module.exports = function (express, router) {

	// middleware to use for all requests
	router.use(function(req, res, next) {
	    
	    next(); // make sure we go to the next routes and don't stop here
	});
}
