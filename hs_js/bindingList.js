 var app = angular.module('bindinglistApp', []);
     app.controller('bindinglistCtrl', function($scope) {
	    $scope.error=true;
		/*/!* var bindbtn=true;*!/
		 $scope.mouseleave = function () {
			 bingbtn=true;
		 }
		 $scope.mouseenter=function(){
			 bindbtn=false;
		 }*/
		 $scope.editbindingList=function(){
			 $scope.error=false;
		 }
		/*$scope.bodyonclick=function(){
			 if(bindbtn){
					 $scope.error=bindbtn;

			 }else{
				  $scope.error=bindbtn;
				 }
			 }*/

		/* if(bindbtn){
			 $scope.editbindingList=function(){
				 $scope.error=bindbtn;
			 }
		 }else{
			 $scope.editbindingList=function(){
				 $scope.error=bindbtn;
			 }
		 }*/
	 });
 $(document).ready(function() {
	/* $('. row-binding').click(function (e){
		 e.preventDefault();
		 $('.btn-binding').prop(disable, true);
	 });*/
	 $('.btn-binding').click(function(e){
		 e.preventDefault();
		 $('#bindingGoods').modal('show');
	 });
	 $('.btn-unbinding').click(function(e){
		 e.preventDefault();
		 $('#unbindingGoods').modal('show');
	 });
 });
