var app = angular.module('nbaRoutes', ['ngRoute']);

app.config(function($routeProvider, $httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');

  //router here
  $routeProvider
  .when('/', {
  	templateUrl: 'js/home/homeTmpl.html',
  	controller: 'homeCtrl'
  })
  .when('/teams/:team', {
  	templateUrl: 'js/teams/teamTmpl.html',
  	controller: 'teamCtrl',
  	resolve: {
  		teamData: function(teamService, $route) {
  			return teamService.getTeamData($route.current.params.team);
  		}
  	}
  })
  .otherwise({
  	redirectTo: '/'
  })
});

	// resolve: {
 //   	  teamData: function($http, $route) { //has to return a promise
 //   	    return $http.get($route.current.params.teamId + '.json');




//createdAt: "2014-09-29T07:05:38.594Z"homeTeam: "utahjazz"homeTeamScore: "101"objectId: "YTkKniZiLt"opponent: "Philadelphia 76ers"opponentScore: "97"updatedAt: "2014-09-29T07:05:38.594Z"won: true