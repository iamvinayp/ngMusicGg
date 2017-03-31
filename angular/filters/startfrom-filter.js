//var myApp = angular.module('musicApp', ['ngRoute', 'ngResource', 'ui.bootstrap', 'ngAnimate']);
// custom filter for filtering data to be displayed for each page
myApp.filter('startFrom', function(){
    return function(dataArray, start){
        if(!start){
            return dataArray;
        }
        else{
            return dataArray.slice(start);
        }
    };
});