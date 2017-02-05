var ctrl = angular.module("weatherApp");

ctrl.controller("homeController", ["$scope", "cityService", function ($scope, cityService) {
        $scope.name = cityService.city;
        $scope.$watch('name', function () {
            cityService.city = $scope.name;
        });
    }]);

ctrl.controller("forecastController", ["$scope", "cityService", "$resource", function ($scope, cityService, $resource) {
        $scope.name = cityService.city;
        $scope.weatherapi = $resource("http://api.openweathermap.org/data/2.5/forecast/daily",
                {callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});

        $scope.weatherResult = $scope.weatherapi.get({q: $scope.name, cnt: 7, APPID: "740e24c16559b65733251d333d05e6e7"});

        $scope.convert = function (ktemp) {
            return Math.round((1.8 * (ktemp - 273)) + 32);
        }
        $scope.dateConvert = function (date) {
            var a = new Date(date * 1000);
            var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
            return a.getDate()+"th "+(months[a.getMonth()])+", "+a.getFullYear();
        }
    }]);