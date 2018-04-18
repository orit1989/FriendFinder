
// We need to include the path package to get the correct file path for our html
var path = require("path");

module.exports = function(app){

	// In each of the below cases the user is shown an HTML page of content
	app.get("/survey", function(req, res){
		res.sendFile(path.join(__dirname + "../../public/survey.html"));
	});

	// If no matching route is found default to home
	app.use(function(req, res){
		res.sendFile(path.join(__dirname + "../../public/home.html"));
	});

	app.get("/style", function(req, res){
		res.sendFile(path.join(__dirname + "../../public/style.css"));
	});

}