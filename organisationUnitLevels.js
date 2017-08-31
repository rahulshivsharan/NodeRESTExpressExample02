var organisationUnitLevels = organisationUnitLevels;
module.exports = new organisationUnitLevels();

function organisationUnitLevels(){
	var app = require("./app.js");
	var request = require("request");
	var router = app.getRouter();

	// public methods 
	this.init = init;

	// private methods;
	var getOrganisationUnitLevels = getOrganisationUnitLevels;
	var getOrganisationUnitLevel = getOrganisationUnitLevel;
		
	function init(){
		getOrganisationUnitLevels();
		getOrganisationUnitLevel();
	}// end of init

	// get all organisationUnitLevels
	function getOrganisationUnitLevels(){
		var url = "/organisationUnitLevels.json";
		router.route(url).get(function(req,res){
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

	}// end of getOrganisationUnitLevels

	function getOrganisationUnitLevel(){
		var url = "/organisationUnitLevels/:orgUnitLevelsId.json";
		router.route(url).get(function(req,res){
			var forwardUrl = app.getEndPoint() + "/api/organisationUnitLevels/" + req.params.orgUnitLevelsId + ".json";
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

	}// end of getOrganisationUnitLevel

} // end of organisationUnitLevels




