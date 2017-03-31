//var myApp = angular.module('musicApp', ['ngRoute', 'ngResource', 'ui.bootstrap', 'ngAnimate']);

myApp.controller('trackEditController',['$scope', '$routeParams', '$location', 'track', 'genre', function($scope, $routeParams, $location, track, genre){

    $scope.response = {};
    $scope.dupGenres = [];
    $scope.trackGenre = [];
    var trackId = $routeParams.trackId;

    //getting genre details while editing a particular track

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
        //console.log($scope.dupGenres);

    }

    //get that particular track

    $scope.getTrackById = function(){
        track.two.get({id: trackId},
        function successCallback(response){
        // console.log(response);
        var genres = [];
        for(var i=0; i<response.genres.length; i++){
            genres.push(response.genres[i].id);
        }
        $scope.trackTitle = response.title;
        $scope.trackGenre = genres.map(String);
        $scope.trackRating = parseInt(response.rating);
        console.log($scope.trackGenre);
        },
        function errorCallback(response){
        alert("Some error occurred. Check the console.");
        console.log(response);
        }
        ); // end get()
    }

    //function to edit particular track
    $scope.editTrack = function(){

        var trackGenre = $scope.trackGenre.map(Number);
        var trackData = {
            id     : trackId,
            title  : $scope.trackTitle,
            rating : $scope.trackRating,
            genres : trackGenre
        }

        track.two.save({id: trackId}, trackData,
        function successCallback(response){
        alert("Track edited successfully");
        //console.log(trackData);
        $location.path('/');
        },
        function errorCallback(response){
        alert("Some error occurred. Check the console.");
        console.log(response);
        }
        );
    }

    }]);// end trackEditController