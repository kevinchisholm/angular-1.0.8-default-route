//create the router module
var myRouter = angular.module('mainRouter', []),

    //the function expression that will 
    //configure our router module
    configFunction = function ($routeProvider) {
    $routeProvider

        //when the user clicks <a href="#hello">Hello</a>
        .when('/hello', {
            templateUrl: 'message.html',
            controller: function ($scope) {
                $scope.message = 'Hello!';
            }
        })

        //when the user clicks <a href="#goodbye">Goodbye</a>
        .when('/goodbye', {
            templateUrl: 'message.html',
            controller: function ($scope) {
                $scope.message = 'GoodBye!';
            }
        })

        .otherwise({
        redirectTo: '/',
        templateUrl: 'message.html',
        controller: function ($scope) {
                $scope.message = 'Welcome!!';
            }
        });
    };

//call the config method of our router module
myRouter.config(['$routeProvider', configFunction]);