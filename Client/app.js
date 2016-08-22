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
        return $http.get('/api/location?city=' + city)
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
