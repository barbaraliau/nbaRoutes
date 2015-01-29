var app = angular.module('nbaRoutes');

app.controller('homeCtrl', function($scope, homeService, teamService){
	
$scope.allTeams = [];


	var listOfTeams = ["utahjazz", "losangeleslakers", "miamiheat"];

	for (var i = 0; i < listOfTeams.length; i++) {
		teamService.getTeamData(listOfTeams[i])
		.then(function(results){
				$scope.allTeams.push(results);
				console.log(results);
				// for(var j = 0; j < results.length; j++) {	
				// 		if (results[i].homeTeam === 'utahjazz') {
				// 	$scope.homeTeam = 'Utah Jazz';
				// 	$scope.logoPath = 'images/jazz-logo.png'
				// 		}
				// }
		})
	}

	console.log($scope.allTeams)

		
		// else if ($routeParams.team === 'losangeleslakers') {
		// 	$scope.homeTeam = 'Los Angeles Lakers';
		// 	$scope.logoPath = 'images/lakers-logo.png'
		// }
		// else if ($routeParams.team === 'miamiheat') {
		// 	$scope.homeTeam = 'Miami Heat';
		// 	$scope.logoPath = 'images/heat-logo.png'
		// } else {
		// 	$scope.logoPath = 'images/nba-logo.png'
		// }
				
});	

// looop through all the teams. call getTeamData. store info in object. put all that data into html x 3
