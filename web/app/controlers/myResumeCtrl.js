'use strict';

angular.module('myResumeApp')
    .controller('myResumeCtrl', function ($scope, $http) {


        $http.get("http://0.0.0.0:3000/resume").then(function (response) {
            $scope.cvs = [];
            for (var i = 0; i <response.data.length; ++i) {
                $scope.cvs.push({"resume":response.data[i] });

            }

            $http.get("http://0.0.0.0:3000/person").then(function (response) {
                $scope.persons = response.data;
                for (var i = 0; i < response.data.length; ++i) {
                    for (var j = 0; j < $scope.cvs.length; ++j) {
                        if ($scope.cvs[j].resume.person == response.data[i]._id) {
                            $scope.cvs[j].person = response.data[i];
                            break;
                        }


                    }
                }

                $http.get("http://0.0.0.0:3000/address").then(function (response) {
                    $scope.addresses = response.data;
                    for (var i = 0; i < response.data.length; ++i) {
                        for (var j = 0; j < $scope.cvs.length; ++j) {
                            if ($scope.cvs[j].person.contact.address == response.data[i]._id) {
                                $scope.cvs[j].person.contact.address = response.data[i];
                                break;
                            }

                        }
                    }

                    $scope.founds = [];
                    if ($scope.cvs.length > 0) {
                        $scope.selected = 0;
                        for (var i = 0; i < $scope.cvs.length; ++i) {
                            $scope.founds.push($scope.cvs[i]);
                        }

                    }
                    else {
                        alert("Aucun cv disponible");
                    }
                });

            });


        });


        $scope.updateCv = function(id) {
            for (var i = 0; i < $scope.cvs.length; i++) {
                if (id == $scope.cvs[i].person._id) {
                    $scope.selected = i;
                    break;
                }
            }

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
    .directive('other', function () {
        return {
            templateUrl : "app/views/directives/other.html"
        }
    });
;