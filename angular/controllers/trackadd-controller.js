//var myApp = angular.module('musicApp', ['ngRoute', 'ngResource', 'ui.bootstrap', 'ngAnimate']);

myApp.controller('trackAddController',['$scope', '$location', 'genre', function($scope, $location, genre){

    $scope.response = {};
    $scope.dupGenres = [];
    $scope.genres = [];

    //getting genre details while adding new track

    $scope.getResponse = function(pageCounter){
        genre.one.get({pageNo: pageCounter},
        function successCallback(response){
        $scope.response = response;
        //console.log($scope.response);
        $scope.genresDetails(response);
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

    $scope.genresDetails = function(data){
        for(var i=0; i<data.results.length; i++){
            $scope.dupGenres.push(data.results[i]);
        }
        //console.log($scope.tempGenres);
    }

    //track the genres selected
    $scope.trackGenre = [];
    //function to add a new track
    $scope.addTrack = function(){
        var trackGenre = $scope.trackGenre.map(Number);
        var trackData = {
            title  : $scope.trackTitle,
            rating : $scope.trackRating,
            genres : trackGenre
        }

        track.two.save({}, trackData,
        function successCallback(response){
        alert("Track added successfully");
        //console.log(trackData);
        $location.path('/');
        },
        function errorCallback(response){
        alert("Some error occurred. Check the console.");
        console.log(response);
        }
        );
    }

    }]);// end trackAddController