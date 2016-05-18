'use strict';

angular.module('myResumeApp')
    .controller('myResumeCtrl', function ($scope, $http) {

        $http.get("./data/my-resume.json").then(function (response) {
            debugger;
            $scope.cvs = response.data;
            $scope.founds = [];
            if ($scope.cvs.length > 0) {
                $scope.selected = $scope.cvs[0].person.id;
                for (var i = 0; i < $scope.cvs.length; ++i) {
                    $scope.founds.push($scope.cvs[i]);
                }
            }
            else {
                alert("Aucun cv disponible");
            }

        });

        $scope.updateCv = function (id) {
            $scope.selected = id;
        };

        $scope.search = function () {
            $scope.founds = [];
            for (var i = 0; i < $scope.cvs.length; ++i) {
                if ($scope.cvs[i].person.name.toLowerCase().indexOf(this.searchval.toLowerCase()) > -1) {
                    $scope.founds.push($scope.cvs[i]);
                }
            }

        }

    })
    .directive('xp', function () {
        return {
            templateUrl: "app/views/directives/xp.html"
        }
    })
    .directive('cvtab', function () {
        return {
            templateUrl: "app/views/directives/cvtab.html"
        }
    })
    .directive('cvhead', function () {
        return {
            templateUrl: "app/views/directives/cvhead.html"
        }
    })
;