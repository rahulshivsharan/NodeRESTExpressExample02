var organisationUnitLevels = organisationUnitLevels;
module.exports = new organisationUnitLevels();

function organisationUnitLevels(){
	var app = require("./app.js");
	var request = require("request");
	var router = app.getRouter();

	
	/*
		Get all organisationUnitLevels
	*/	
	router.route("/organisationUnitLevels.json").get(function(req,res){
		var forwardUrl = app.getEndPoint() + "/api/organisationUnitLevels.json";
		request({
				url : forwardUrl,
				method : "GET",
				headers : app.getHeaders()
		},function(error,response){
				
				if(error){

					res.status(400);
					res.send(error);
				}else{
					res.status(200);
					res.send(response);			
				}
				
				res.end();
		});// end of request

	}); // end of route.route

	/*
		Get one organisationUnitLevel
		based on id
	*/	
	router.route("/organisationUnitLevels/:id.json").get(function(req,res){
		var forwardUrl = app.getEndPoint() + "/api/organisationUnitLevels/" + req.params.id + ".json";
		
		request({
				url : forwardUrl,
				method : "GET",
				headers : app.getHeaders()
		},function(error,response){
				
				if(error){

					res.status(400);
					res.send(error);
				}else{
					res.status(200);
					res.send(response);			
				}
				
				res.end();
		});// end of request

	}); // end of route.route	

} // end of organisationUnitLevels




