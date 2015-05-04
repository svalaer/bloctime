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

Bloctime.controller('DemoCtrl', ['$scope', '$firebaseArray', "FIREBASE_URL", function ($scope, $firebaseArray, FIREBASE_URL) {

    // Get Stored TODOs
    var todosRef = new Firebase('https://blinding-inferno-1918.firebaseio.com/todos');
    $scope.todos = $firebaseArray(todosRef);


    // Update the "completed" status
    $scope.updateItem = function($id) {
        var item = $scope.todos.$getRecord($id);
        item.status = "Completed";
        $scope.todos.$save(item);
    };

    //$scope.changeStatus   = function(item) {
    //
    //    // Get the Firebase reference of the item
    //    var itemRef = new  Firebase('https://blinding-inferno-1918.firebaseio.com/' + item.id);
    //
    //    // Firebase : Update the item
    //    $firebaseArray(itemRef).set({
    //        id: item.id,
    //        name : item.name,
    //        completed: !item.completed
    //    });
    //
    //};



    // Remove a Todo
    $scope.removeItem  = function($index) {
        $scope.todos.$remove($index)

    };



    // Add new TODO
    $scope.addItem  = function(name) {
        $scope.todos.$add({
            name: name
        })


    };


}]);

var map = new google.maps.Map();











