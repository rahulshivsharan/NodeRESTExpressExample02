var application = require("./app.js");
var app = application.getApp();

var organisationUnitLevels = require("./organisationUnitLevels.js");

var server = app.listen(application.getPort(),serverFn);

organisationUnitLevels.init();

function serverFn(){
	var host = server.address().address;
  	var port = server.address().port;

  	console.log("Example app listening at http://%s:%s", host, port);
} // end of serverFn