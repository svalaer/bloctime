//require('./firebase');
//require('./greyscale');
//require('./main');

var Bloctime = angular.module('Bloctime', ['ui.router']);

Bloctime.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $stateProvider.state('landing', {
        url: '/',
        controller: 'Landing.controller',
        templateUrl: '/dist/landing.html'
    });
    $stateProvider.state('timer', {
        url: '/timer',
        controller: 'Timer.controller',
        templateUrl: '/dist/timer.html'
    });
}]);

Bloctime.controller('Landing.controller', ['$scope', function($scope) {
    console.log("test1");
}]);

Bloctime.controller('Timer.controller', ['$scope', function($scope) {
    console.log("test2");
}]);