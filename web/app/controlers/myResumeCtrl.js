'use strict';

angular.module('myResumeApp')
    .controller('myResumeCtrl', function($scope, $http){

        $http.get("./data/my-resume.json").then(function (response) {
            $scope.cvs = response.data;
            if ($scope.cvs.length > 0)
                $scope.selected = $scope.cvs[0].person.id;
            else
                alert("Aucun cv disponible");
        });

        $scope.updateCv =function(id) {
            $scope.selected = id;
        };

    });