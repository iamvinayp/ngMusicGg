//var myApp = angular.module('musicApp', ['ngRoute', 'ngResource', 'ngAnimate']);

myApp.directive('ngRating', function(){
    return{
        restrict: 'E',
        template: '<span ng-repeat="rating in ratingDetails()" ng-class="ratingClass(track.rating, $index)"></span>'
    };
});