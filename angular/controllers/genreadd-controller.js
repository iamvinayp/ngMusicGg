//var myApp = angular.module('musicApp', ['ngRoute', 'ngResource', 'ui.bootstrap', 'ngAnimate']);

myApp.controller('genreAddController',['$scope', '$location', 'genre', function($scope, $location, genre){

    //function to add a new genre
    $scope.addGenre = function(){
        var genreData = {
            name  : $scope.genreTitle
        }

        genre.two.save({}, genreData,
        function successCallback(response){
        alert("Genre added successfully");
        //console.log(trackData);
        $location.path('/genres');
        },
        function errorCallback(response){
        alert("Some error occurred. Check the console.");
        console.log(response);
        }
        );
    }

    }]);// end genreAddController