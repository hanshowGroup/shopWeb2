/**
 * Created by admin on 2015/12/5.
 */
var app = angular.module('esllistApp', []);
app.controller('esllistCtrl', function($scope, $http) {
    $http.get("json/eslList.json")
        .success(function (response) {$scope.esllists = response.records;});

});