/**
 * Created by admin on 2015/12/5.
 */
var app = angular.module('esllistApp', []);
 app.controller('esllistCtrl',[ function($scope, $http) {
    /* console.log($scope.esllists);*/
        $scope.get= function () {
         $http.get("/shop-web/json/eslList.json")
             .success(function (response) {
                 console.log(response.esllists);
                 $scope.esllists = response.esllists;
                 // return response.esllists;
//            console.log($scope.esllists);
                 // var $log =$http.get();
                 /* $log.debug(response.esllists + $filter("json")(target));*/
             });
         /* $scope.editEsllit = function(id) {
          console.log(id);
          $scope.goodId=$scope.esllists[id-1].goodId;
          $scope.basestation=$scope.esllists[id-1].basestation;
          $scope.eslId = $scope.esllists[id-1].id;
          console.log($scope.eslId);
          console.log( $scope.goodId);
          console.log( $scope.basestation);
          }*/
     };
          $scope.get();
    /* $scope.esllists=[{
         "shop": "No.001",
         "id"	   : "01",
         "type": "11",
         "size"	   : "11",
         "electricity":100 ,
         "bind":100 ,
         "goodname":"红富士苹果",
         "goodId":1,
         "heartbeat":"123" ,
         "updemode":"已经更新",
         "updatetime":"2015/11/1 08:00:00",
         "basestation":111
     },{
         "shop": "No.001",
         "id"	   : "01",
         "type": "11",
         "size"	   : "11",
         "electricity":100 ,
         "bind":100 ,
         "goodname":"红富士苹果",
         "goodId":1,
         "heartbeat":"123" ,
         "updemode":"已经更新",
         "updatetime":"2015/11/1 08:00:00",
         "basestation":111
     }];*/
}
]);


