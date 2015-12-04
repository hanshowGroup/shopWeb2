//(function() {
//  (function() {
//    var app;
//    app = angular.module('app', []);
//    Mock.mockjax(app);
//    return app.controller('myCtrl', function($scope, $http) {
//      var box;
//      box = $scope.names = [];
//      $scope.get = function() {
//        $http({
//          url: 'getTest'
//        }).success(function(data) {
//            console.log(data);
//            box.push(data);
//        });
//      };
//    });
//  })();
//
//}).call(this);

$(function(){
    $('#tt').click(function(){
         $("#content").load('testtest.html');
    }); 
});