//var myApp = angular.module('musicApp', ['ngRoute', 'ngResource', 'ui.bootstrap', 'ngAnimate']);

myApp.controller('genresController',['$scope', 'genre', function($scope, genre){

    $scope.response = {};
    $scope.tempGenres = [];
    $scope.genres = [];

    $scope.pageSize = 10;
    $scope.currentPage = 1;

    $scope.getResponse = function(pageCounter){

        genre.one.get({pageNo: pageCounter},
        function successCallback(response){
        $scope.response = response;
        //console.log($scope.response);
        $scope.genreDetails(response);
        if(response.next){
            $scope.getResponse(pageCounter+1);
        }
        },
        function errorCallback(response){
        alert("Some error occurred. Check the console.");
        console.log(response);
        }
        ); // end get()

    }

    $scope.getResponse(1);

    $scope.genreDetails = function(data){
        for(var i=0; i<data.results.length; i++){
            $scope.genres.push({
                id   : data.results[i].id,
                name : data.results[i].name
            });
        }
        //console.log($scope.genres);
    }

    // $scope.genreDetails = function(data){
    //     for(var i=0; i<data.results.length; i++){
    //         $scope.tempGenres.push(data.results[i].name);
    //     }
    //     //console.log($scope.tempGenres);
    //     // removing duplicate genres
    //     $scope.genres = $scope.tempGenres.filter(function(value, index, array){
    //         return (array.indexOf(value) == index);
    //     });
    //     //console.log($scope.genres.length);
    // }

    }]);// end genresController