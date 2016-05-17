'use strict';

angular.module('myResumeApp')
    .controller('myResumeCtrl', function($scope, $http){

        $http.get("./data/my-resume.json").then(function (response) {
            $scope.cv = response.data;
        });

    });