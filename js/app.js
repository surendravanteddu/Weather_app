var wa = angular.module("weatherApp", ['ngRoute', 'ngResource']);

wa.config(function ($routeProvider) {
    $routeProvider
            .when("/", {
                templateUrl : "views/home.html",
                controller: "homeController"
            })
            .when("/forecast", {
                templateUrl : "views/forecast.html",
                controller: "forecastController"
            })

});

wa.service('cityService',function(){
    this.city = "";
});

