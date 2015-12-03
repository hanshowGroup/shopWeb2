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
   
    $('.goodsTemp').tooltip({
       html:true,
        container:'body',
        title:function(){
            var string="<img src='./hs_img/temp.jpg'>";
            return string;
        }
    });
});