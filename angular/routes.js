//var myApp = angular.module('musicApp', ['ngRoute', 'ngResource', 'ui.bootstrap', 'ngAnimate']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/home',{
            // location of the template
        	templateUrl		: 'views/home-view.html',
        	//controller to use
            controller      : 'homeController'
        })
        .when('/about',{
            templateUrl     : 'views/about-view.html'
        })
        .when('/genres',{
            templateUrl     : 'views/genres-view.html',
            controller      : 'genresController'
        })
        .when('/track',{
            templateUrl     : 'views/trackadd-view.html',
            controller      : 'trackAddController'
        })
        .when('/genre',{
            templateUrl     : 'views/genreadd-view.html',
            controller      : 'genreAddController'
        })
        .when('/track/:trackId',{
            templateUrl     : 'views/trackedit-view.html',
            controller      : 'trackEditController'
        })
        .when('/genre/:genreId',{
            templateUrl     : 'views/genreedit-view.html',
            controller      : 'genreEditController'
        })
        .otherwise(
            {
                redirectTo:'/home'
                //template   : '<h1>404 page not found</h1>'
            });
}]);