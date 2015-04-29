//require('./firebase');
//require('./greyscale');
//require('./main');

var Bloctime = angular.module('Bloctime', ['ui.router', 'firebase']);

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
        controller: 'DemoCtrl',
        templateUrl: '/dist/timer.html'
    });
}]);

Bloctime.controller('Landing.controller', ['$scope', function($scope) {
    console.log("test1");
}]);

Bloctime.controller('Timer.controller', ['$scope', function($scope) {
    console.log("test2");
}]);

Bloctime.constant("FIREBASE_URL", "'https://blinding-inferno-1918.firebaseio.com/'" );

Bloctime.controller('DemoCtrl', ['$scope', '$firebaseObject', "FIREBASE_URL", function ($scope, $firebase, FIREBASE_URL) {

    // Get Stored TODOs
    var todosRef = new Firebase('https://blinding-inferno-1918.firebaseio.com/');
    $scope.todos = $firebase(todosRef);


    // Update the "completed" status
    $scope.changeStatus   = function (item) {

        // Get the Firebase reference of the item
        var itemRef = new  Firebase('https://blinding-inferno-1918.firebaseio.com/' + item.id);

        // Firebase : Update the item
        $firebase(itemRef).$set({
            id: item.id,
            name : item.name,
            completed: !item.completed
        });

    };



    // Remove a Todo
    $scope.removeItem   = function (index, item, event) {

        // Avoid wrong removing
        if (item.id == undefined)return;

        // Firebase: Remove item from the list
        $scope.todos.$remove(item.id);

    };



    // Add new TODO
    $scope.addItem  = function () {

        // Create a unique ID
        var timestamp = new Date().valueOf();

        // Get the Firebase reference of the item
        var itemRef = new Firebase('https://blinding-inferno-1918.firebaseio.com/' + timestamp);

        $firebase(itemRef).$set({
            id: timestamp,
            name : $scope.todoName,
            completed: false
        });

        $scope.todoName = "";

    };


}]);











