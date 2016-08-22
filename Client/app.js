angular.module('WeatherAngular', [
  "ui.router",
  "WeatherAngular.home"
  ])
  //injections
.config(function($stateProvider, $urlRouterProvider) {
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/home");
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "home/home.html",
      controller: "homeCtrl"
    });
})
    .factory("weatherinfo", function($http){
      var getWeather = function(city){
        return $http.get('http://api.openweathermap.org/data/2.5/weather?q='+ city + '&appid=e42d32af9555a899db7106b67e9e5aae' )
        //what we get back from server
        .then(function(report){
          return report;
        })
      }
      //all the keys attached to the object
      return {
        getWeather:getWeather
      }
    })
