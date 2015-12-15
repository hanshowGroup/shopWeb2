
var app = angular.module('myApp',
    [
    ]).run(function($rootScope,$http){
        Mock.mockjax(app);
    });


app.controller('appCtrl',['$scope','$http', function($scope,$http){
//    var getData = function(){
//        var temp=Mock.mock({
//            'names|1-10': [{
//            'name|+1': 1,
//            'country': '111'
//            }]
//        });
//        $scope.names1=temp.names;
//    };
//    getData();

    $scope.get = function() {
        $http.get("goodsList.json")
    .success(function (response) {$scope.goods = response.goods;});
    };

    $scope.get();
}]);

$(document).ready(function() {
//    $('#apTable').dataTable ({
//        
//    });
   
    $('.btn-add').click(function(e){
		e.preventDefault();
		$('#addGoods').modal('show');
	});
    $('.btn-binding').click(function(e){
		e.preventDefault();
		$('#bindingGoods').modal('show');
	});
     $('.btn-unbinding').click(function(e){
		e.preventDefault();
		$('#unbindingGoods').modal('show');
	});
    $('#binding1').tooltip({
        html:true,
        container:'body',
        title:function(){
            var string="<table><caption>绑定信息</caption><thead><tr><th>序号</th><th>ID</th><th>型号</th><th>尺寸</th><th>电量</th><th>心跳</th></tr></thead><tbody><tr><td>1</td><td>53-45-67-99</td><td>Classic 290-N/-C</td></td><td>296px*128px</td><td>正常</td><td>0.1s</td></tr><tr><td>2</td><td>53-45-63-99</td><td>Classic 290-N/-C</td></td><td>296px*128px</td><td>低</td><td>0.1s</td></tr></tbody></table>";
            //var string="价签列表<br/>23-87-44-99<br/>45-23-76-99";
        return string;
        }
    });
    $('#binding2').tooltip({
        html:true,
        container:'body',
        title:function(){
             var string="<table><caption>绑定信息</caption><thead><tr><th>序号</th><th>ID</th><th>型号</th><th>尺寸</th><th>电量</th><th>心跳</th></tr></thead><tbody><tr><td>1</td><td>23-87-44-99</td><td>Classic 290-N/-C</td></td><td>296px*128px</td><td>正常</td><td>0.1s</td></tr></tbody></table>";
            return string;
        }
    });
    $('.goodsTemp').tooltip({
       html:true,
        container:'body',
        title:function(){
            var string="<img src='./hs_img/temp.jpg'>";
            return string;
        }
    });
});