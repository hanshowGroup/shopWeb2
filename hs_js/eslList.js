/**
 * Created by admin on 2015/12/5.
 */
var app = angular.module('esllistApp', []);
app.controller('esllistCtrl',function($scope,$http) {
        $scope.bind = function (eslList) {
        $scope.goodId = eslList.goodId;
        $scope.baseStation =eslList.baseStation;
        $scope.eslId =eslList.id;
        $scope.esl=eslList;
        $scope.deleteId=eslList.id;
 }
    /**
     * 清空表格
     */
   $scope.addEsl=function(){
       $scope.esl=[];//esl 赋数组一个空值
       $scope.eslShopIdSpan="";
       $scope.eslTypeSpan="";
   }
    /**
     * 表格的提交
     */
    $scope.inforEsl=function() {
        if($scope.esl.shopId==""||$scope.esl.shopId==null){
            $scope.eslShopIdSpan="门店不能为空";
        }else if($scope.esl.type==""||$scope.esl.type==null){
            $scope.eslTypeSpan="型号不能为空";
        }else{
            var id=$scope.esl.id;
            if(id==undefined){
                var data = $scope.esl;
                console.log(data);
                if($scope.esl)
                    $http(
                        {
                            method: 'POST',
                            url: 'http://localhost/shop-web/json/addEsl.php',
    //                        params : {'shopId':'01'},
                            data: data,
                            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                        }
                    )
                        .success(function (response) {
                            console.log(response);
                            //$uibModalInstance.close();
                            $("#eslInforModal").modal('hide');
                            $scope.msgSpan="增加成功";
                            $("#msgModal").modal('show');
                        }).error(function(response){
                            $("#eslInforModal").modal('hide');
                            console.log(response);
                            $scope.msgSpan="增加失败";
                            $("#msgModal").modal('show');

                        });
            }else {
                var data = $scope.esl;
                console.log(data);
                $http(
                    {
                        method: 'post',
                        url: "http://localhost/shop-web/json/editEsl.php",
                        data: data,
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    }
                )
                    .success(function (response) {
                        console.log(response);
                        $("#eslInforModal").modal('hide');
                        $scope.msgSpan="修改成功";
                        $("#msgModal").modal('show');
                    }).error(function(response){
                        console.log(response);
                        $scope.msgSpan="修改失败";
                        $("#msgModal").modal('show');
                    });
            }
        }
    };
    /**
     * 删除操作
     */
    $scope.deleteEsl=function(){
      var id=$scope.deleteId;
        $http(
            {
                method: 'post',
                url: "http://localhost/shop-web/json/deleteEsl.php",
                data: id,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }
        )
            .success(function (response) {
                console.log(response);
                $("#deleteModal").modal('hide');
                $scope.msgSpan="删除成功";
                $("#msgModal").modal('show');
            }).error(function(response){
                console.log(response);
                $("#deleteModal").modal('hide');
                $scope.msgSpan="删除失败";
                $("#msgModal").modal('show');

        });
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

    $scope.eslLists = [{
        "shopId": "No.001",
        "id": "01",
        "type": "11",
        "size": "11",
        "electricity": 100,
        "bind": 100,
        "goodName": "红富士苹果",
        "goodId": 1,
        "heartBeat": "123",
        "updateState": "已经更新",
        "updateTime": "2015/11/1 08:00:00",
        "baseStation": 111
    }, {
        "shopId": "No.002",
        "id": "02",
        "type": "11",
        "size": "11",
        "electricity": 100,
        "bind": 100,
        "goodName": "红富士苹果",
        "goodId": 2,
        "heartBeat": "1234",
        "updateState": "已经更新",
        "updateTime": "2015/11/1 08:00:00",
        "baseStation": 112
    }, {
        "shopId": "No.003",
        "id": "01",
        "type": "11",
        "size": "11",
        "electricity": 100,
        "bind": 100,
        "goodName": "红富士苹果",
        "goodId": 1,
        "heartBeat": "12345",
        "updateState": "已经更新",
        "updateTime": "2015/11/1 08:00:00",
        "baseStation": 112
    },{
        "shopId": "No.004",
        "id": "01",
        "type": "11",
        "size": "11",
        "electricity": 100,
        "bind": 100,
        "goodName": "红富士苹果",
        "goodId": 1,
        "heartBeat": "1234546",
        "updateState": "已经更新",
        "updateTime": "2015/11/1 08:00:00",
        "baseStation": 111
    },{
        "shopId": "No.005",
        "id": "01",
        "type": "11",
        "size": "11",
        "electricity": 100,
        "bind": 100,
        "goodName": "红富士苹果",
        "goodId": 1,
        "heartBeat": "1234567",
        "updateState": "已经更新",
        "updateTime": "2015/11/1 08:00:00",
        "baseStation": 111
    },{
        "shopId": "No.006",
        "id": "01",
        "type": "11",
        "size": "11",
        "electricity": 100,
        "bind": 100,
        "goodName": "红富士苹果",
        "goodId": 1,
        "heartBeat": "12345678",
        "updateState": "已经更新",
        "updateTime": "2015/11/1 08:00:00",
        "baseStation": 111
    },{
        "shopId": "No.007",
        "id": "01",
        "type": "11",
        "size": "11",
        "electricity": 100,
        "bind": 100,
        "goodName": "红富士苹果",
        "goodId": 1,
        "heartBeat": "123321",
        "updateState": "已经更新",
        "updateTime": "2015/11/1 08:00:00",
        "baseStation": 111
    },{
        "shopId": "No.008",
        "id": "01",
        "type": "11",
        "size": "11",
        "electricity": 100,
        "bind": 100,
        "goodName": "红富士苹果",
        "goodId": 1,
        "heartBeat": "123212",
        "updateState": "已经更新",
        "updateTime": "2015/11/1 08:00:00",
        "baseStation": 111
    },{
        "shopId": "No.009",
        "id": "01",
        "type": "11",
        "size": "11",
        "electricity": 100,
        "bind": 100,
        "goodName": "红富士苹果",
        "goodId": 1,
        "heartBeat": "123344",
        "updateState": "已经更新",
        "updateTime": "2015/11/1 08:00:00",
        "baseStation": 111
    },{
        "shopId": "No.010",
        "id": "01",
        "Type": "11",
        "size": "11",
        "electricity": 100,
        "bind": 100,
        "goodName": "红富士苹果",
        "goodId": 1,
        "heartBeat": "123434",
        "updateState": "已经更新",
        "updateTime": "2015/11/1 08:00:00",
        "baseStation": 111
    },{
        "shopId": "No.011",
        "id": "01",
        "type": "11",
        "size": "11",
        "electricity": 100,
        "bind": 100,
        "goodName": "红富士苹果",
        "goodId": 1,
        "heartBeat": "123546",
        "updateState": "已经更新",
        "updateTime": "2015/11/1 08:00:00",
        "baseStation": 111
    },{
        "shopId": "No.012",
        "id": "01",
        "type": "11",
        "size": "11",
        "electricity": 100,
        "bind": 100,
        "goodName": "红富士苹果",
        "goodId": 1,
        "heartBeat": "12354",
        "updateState": "已经更新",
        "updateTime": "2015/11/1 08:00:00",
        "baseStation": 111
    }]

});
/*function selectbox(obj) {
 /!* $(obj).find("btncheckbox");*!/

 }*/




