//var myApp = angular.module('musicApp', ['ngRoute', 'ngResource', 'ui.bootstrap', 'ngAnimate']);

myApp.controller('genreEditController',['$scope', '$routeParams', '$location', 'genre', function($scope, $routeParams, $location, genre){

    var genreId = $routeParams.genreId;

    // get that particular genre
    $scope.getGenreById = function(){
        genre.two.get({id: genreId},
        function successCallback(response){
        // console.log(response);
        $scope.genreTitle = response.name;
        },
        function errorCallback(response){
        alert("Some error occurred. Check the console.");
        console.log(response);
        }
        ); // end get()
    }

    //function to add a new genre
    $scope.editGenre = function(){
        var genreData = {
            name  : $scope.genreTitle
        }

        genre.two.save({id: genreId}, genreData,
        function successCallback(response){
        alert("Genre updated successfully");
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