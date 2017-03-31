//var myApp = angular.module('musicApp', ['ngRoute', 'ngResource', 'ui.bootstrap', 'ngAnimate']);

myApp.controller('homeController',['$scope', '$location', 'track', function($scope, $location, track){

    $scope.response = {};
    $scope.tracks = [];

    $scope.pageSize = 10;
    $scope.currentPage = 1;

    $scope.getResponse = function(pageCounter){

        track.one.get({pageNo: pageCounter},
        function successCallback(response){
        $scope.response = response;
        //console.log($scope.response);
        $scope.trackDetails(response);
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

    $scope.trackDetails = function(data){
        for(var i=0; i<data.results.length; i++){
            $scope.tracks.push({
                id     : data.results[i].id,
                name   : data.results[i].title,
                genres : null,
                rating : data.results[i].rating
            });
        }
        //console.log($scope.tracks);
        $scope.trackGenreDetails(data);
    }

    $scope.trackGenreDetails = function(data){
        var tempGenres = [];
        for(var i=0; i<data.results.length; i++){
            for(var j=0; j<data.results[i].genres.length; j++){
                tempGenres.push(data.results[i].genres[j].name);
            }
                for(var k=0; k<$scope.tracks.length; k++){
                    if($scope.tracks[k].id == data.results[i].id){
                        $scope.tracks[k].genres = tempGenres.join(' | ');
                    }
                }
                tempGenres = [];
        }
        //console.log($scope.tracks);
    }

    $scope.ratingDetails = function(){
        var ratingArr = [];
        for(var i=0; i<10; i++){
            ratingArr.push(i);
        }
        return ratingArr;
    }

    $scope.ratingClass = function(rating, index){
        var ratingIcon = 'glyphicon glyphicon-star black';
        if(rating <= index ){
            ratingIcon = 'glyphicon glyphicon-star grey';
        }
        return ratingIcon;
    }

    $scope.emptySearchBox = function(){
        $scope.searchTrack = "";
    }

    }]);// end homeController