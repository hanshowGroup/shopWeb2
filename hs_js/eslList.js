/**
 * Created by admin on 2015/12/5.
 */
var app = angular.module('esllistApp', []);
 app.controller('esllistCtrl',function($scope) {
     /* console.log($scope.esllists);*/
     /*  $scope.get= function () {*/
     // $scope.esllists=null;
     $scope.editEsllit = function (id) {
         $scope.goodId = $scope.esllists[id - 1].goodId;
         $scope.basestation = $scope.esllists[id - 1].basestation;
         $scope.eslId = $scope.esllists[id - 1].id;
     }
     /* $http.get("/shop-web/json/eslList.json")
             .success(function (response) {
                 $scope.esllists = response.esllists;
                 // return response.esllists;
                 console.log($scope.esllists);
             })*/
         // var $log =$http.get();
         /* $log.debug(response.esllists + $filter("json")(target));*/

         /*   );
          /*  } ,2000);*/
         /*);*/
         /* };
          $scope.get();*/

         /*  };*/
         /*$scope.get();*/

         /*  ]);*/
        
         $scope.esllists = [{
          "shop": "No.001",
          "id": "01",
          "type": "11",
          "size": "11",
          "electricity": 100,
          "bind": 100,
          "goodname": "红富士苹果",
          "goodId": 1,
          "heartbeat": "123",
          "updemode": "已经更新",
          "updatetime": "2015/11/1 08:00:00",
          "basestation": 111
          }, {
          "shop": "No.001",
          "id": "02",
          "type": "11",
          "size": "11",
          "electricity": 100,
          "bind": 100,
          "goodname": "红富士苹果",
          "goodId": 2,
          "heartbeat": "1234",
          "updemode": "已经更新",
          "updatetime": "2015/11/1 08:00:00",
          "basestation": 112
          },
             {
                 "shop": "No.001",
                 "id": "01",
                 "type": "11",
                 "size": "11",
                 "electricity": 100,
                 "bind": 100,
                 "goodname": "红富士苹果",
                 "goodId": 1,
                 "heartbeat": "12345",
                 "updemode": "已经更新",
                 "updatetime": "2015/11/1 08:00:00",
                 "basestation": 111
             },{
                 "shop": "No.001",
                 "id": "01",
                 "type": "11",
                 "size": "11",
                 "electricity": 100,
                 "bind": 100,
                 "goodname": "红富士苹果",
                 "goodId": 1,
                 "heartbeat": "1234546",
                 "updemode": "已经更新",
                 "updatetime": "2015/11/1 08:00:00",
                 "basestation": 111
             },{
                 "shop": "No.001",
                 "id": "01",
                 "type": "11",
                 "size": "11",
                 "electricity": 100,
                 "bind": 100,
                 "goodname": "红富士苹果",
                 "goodId": 1,
                 "heartbeat": "1234567",
                 "updemode": "已经更新",
                 "updatetime": "2015/11/1 08:00:00",
                 "basestation": 111
             },{
                 "shop": "No.001",
                 "id": "01",
                 "type": "11",
                 "size": "11",
                 "electricity": 100,
                 "bind": 100,
                 "goodname": "红富士苹果",
                 "goodId": 1,
                 "heartbeat": "12345678",
                 "updemode": "已经更新",
                 "updatetime": "2015/11/1 08:00:00",
                 "basestation": 111
             },{
                 "shop": "No.001",
                 "id": "01",
                 "type": "11",
                 "size": "11",
                 "electricity": 100,
                 "bind": 100,
                 "goodname": "红富士苹果",
                 "goodId": 1,
                 "heartbeat": "123321",
                 "updemode": "已经更新",
                 "updatetime": "2015/11/1 08:00:00",
                 "basestation": 111
             },{
                 "shop": "No.001",
                 "id": "01",
                 "type": "11",
                 "size": "11",
                 "electricity": 100,
                 "bind": 100,
                 "goodname": "红富士苹果",
                 "goodId": 1,
                 "heartbeat": "123212",
                 "updemode": "已经更新",
                 "updatetime": "2015/11/1 08:00:00",
                 "basestation": 111
             },{
                 "shop": "No.001",
                 "id": "01",
                 "type": "11",
                 "size": "11",
                 "electricity": 100,
                 "bind": 100,
                 "goodname": "红富士苹果",
                 "goodId": 1,
                 "heartbeat": "123344",
                 "updemode": "已经更新",
                 "updatetime": "2015/11/1 08:00:00",
                 "basestation": 111
             },{
                 "shop": "No.001",
                 "id": "01",
                 "type": "11",
                 "size": "11",
                 "electricity": 100,
                 "bind": 100,
                 "goodname": "红富士苹果",
                 "goodId": 1,
                 "heartbeat": "123434",
                 "updemode": "已经更新",
                 "updatetime": "2015/11/1 08:00:00",
                 "basestation": 111
             },{
                 "shop": "No.001",
                 "id": "01",
                 "type": "11",
                 "size": "11",
                 "electricity": 100,
                 "bind": 100,
                 "goodname": "红富士苹果",
                 "goodId": 1,
                 "heartbeat": "123546",
                 "updemode": "已经更新",
                 "updatetime": "2015/11/1 08:00:00",
                 "basestation": 111
             },{
                 "shop": "No.001",
                 "id": "01",
                 "type": "11",
                 "size": "11",
                 "electricity": 100,
                 "bind": 100,
                 "goodname": "红富士苹果",
                 "goodId": 1,
                 "heartbeat": "12354",
                 "updemode": "已经更新",
                 "updatetime": "2015/11/1 08:00:00",
                 "basestation": 111
             }]

 });



