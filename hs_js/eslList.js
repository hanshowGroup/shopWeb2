/**
 * Created by admin on 2015/12/5.
 */
var app = angular.module('esllistApp', []);
app.controller('esllistCtrl', function($scope, $http) {
   $http.get("json/eslList.json")
        .success(function (response) {$scope.esllists = response.records;
           console.log(response);
          console.log(response.esllists)});

    $scope.esllists=[{
        "shop": "No.001",
        "id"	   : "01",
        "type": "11",
        "size"	   : "11",
        "electricity":100 ,
        "bind":100 ,
        "heartbeat":"123" ,
        "updemode":"已经更新",
        "updatetime":"2015/11/1 08:00:00"
    },{
        "shop": "No.001",
        "id"	   : "01",
        "type": "11",
        "size"	   : "11",
        "electricity":100 ,
        "bind":100 ,
        "heartbeat":"123" ,
        "updemode":"已经更新",
        "updatetime":"2015/11/1 08:00:00"
    }];

});