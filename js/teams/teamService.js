var app = angular.module('nbaRoutes');

app.service('teamService', function($http, $q){

	this.addNewGame = function(gameObj) {
		var url = "https://api.parse.com/1/classes/" + gameObj.homeTeam;
		if (parseInt(gameObj.homeTeamScore) > parseInt(gameObj.opponentScore)) {
			gameObj.won = true;
		} else {
			gameObj.won = false;
		}
		return $http({
		method: 'POST',
		url: "https://api.parse.com/1/classes/" + gameObj.homeTeam,
		data: gameObj
		}).then(function(data) {
			console.log(data)
		})
	};

	this.getTeamData = function(team) {
		var deferred = $q.defer();
		var url = "https://api.parse.com/1/classes/" + team;
		$http({
			method: 'GET',
			url: url
		}).then(function(data) {
			var results = data.data.results
			var wins = 0;
			var loss = 0;
			for (var i = 0; i < results.length; i++) {
				if (results[i].won) {
					wins++;
				} else {
					loss++;
				}
			};
			results.wins = wins;
			results.losses = loss;
			deferred.resolve(results);
				console.log(results)

			})
		return deferred.promise;
	};


});

