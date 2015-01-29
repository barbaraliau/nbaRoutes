var app = angular.module('nbaRoutes');

app.service('homeService', function($http, $q, teamService){

	this.teamObj = function() {
		var listOfTeams = ["utahjazz", "losangeleslakers", "miamiheat"];
		var allTeams = [];
			{
				allTeams.push(teamService.getTeamData(listOfTeams[i]))
				.then(function(){
					console.log(allTeams);
				})
		}
}
	

	








})
