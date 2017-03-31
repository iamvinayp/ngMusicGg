//var myApp = angular.module('musicApp', ['ngRoute', 'ngResource', 'ui.bootstrap', 'ngAnimate']);

myApp.factory('track', ['$resource', function ($resource){

    return {
        one: $resource('http://104.197.128.152:8000/v1/tracks?page=:pageNo', {pageNo:'@pageNo'}),
        two: $resource('http://104.197.128.152:8000/v1/tracks/:id', {id:'@id'})
    };
}]); // end factory()

myApp.factory('genre', ['$resource', function ($resource){

    return {
        one: $resource('http://104.197.128.152:8000/v1/genres?page=:pageNo', {pageNo:'@pageNo'}),
        two: $resource('http://104.197.128.152:8000/v1/genres/:id', {id:'@id'})
    };
}]); // end factory()