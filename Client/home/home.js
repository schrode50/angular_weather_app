angular.module("WeatherAngular.home", [])

.controller("homeCtrl", function($scope, weatherinfo){
  $scope.data;
  $scope.temp;
  $scope.submit = function(city){
     weatherinfo.getWeather(city)
     .then(function(dataFromServer){
       console.log("city is ---->", dataFromServer.name);
       console.log("temp is --->", dataFromServer.data.main.temp);
       $scope.data = dataFromServer.data.weather;
       $scope.temp = Math.floor(dataFromServer.data.main.temp * 9/5 - 459.67) + " " + "\xB0" + "F";
     });
  };
});
