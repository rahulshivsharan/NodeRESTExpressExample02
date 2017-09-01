var App = App;

module.exports = new App();

function App(){
	var express = require("express");
	var app = express();
	var bodyParser = require("body-parser");
	var router = express.Router();

	// private variables
	var headerObject = {
		"Cookie" : "JSESSIONID=el8bhj86874f125axw2sur147"
	};
	var END_POINT = "http://localhost:8082"; // endpoint where dhis is deployed
	var SERVER_PORT = 8188;

	var rawBodySaver = rawBodySaver; 

	// public methods
	this.getPort = getPort;
	this.getHeaders = getHeaders;
	this.getEndPoint = getEndPoint;
	this.getApp = getApp;
	this.getRouter = getRouter;

	// cors headers set
	app.use(function(req, res, next) {
	  res.header("Access-Control-Allow-Origin", "*");
	  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");	  
	  next();
	});

	app.use("/api",router);

	// body parser configuration
	app.use(bodyParser.json({ verify: rawBodySaver,limit: '50mb' }));
	app.use(bodyParser.raw({ verify: rawBodySaver,limit: '50mb', type: function () { return true } }));
	app.use(bodyParser.urlencoded({ verify: rawBodySaver, extended: true, limit: '50mb' }));


	function rawBodySaver(req, res, buf, encoding) {
		  if (buf && buf.length) {
		    req.rawBody = buf.toString(encoding || 'utf8');
		  }
	}// end of rawBodySaver

	function getRouter(){
		return router;
	}

	function getPort(){
		return SERVER_PORT;
	}

	function getHeaders(){
		return headerObject;
	}

	function getEndPoint(){
		return END_POINT;
	}

	function getApp(){
		return app;
	}
	
}// end of App

