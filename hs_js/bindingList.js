$(document).ready(function() {
//    $('#apTable').dataTable ({
//        
//    });
    $('.btn-binding').click(function(e){
		e.preventDefault();
		$('#bindingGoods').modal('show');
	});
    
     $('.btn-unbinding').click(function(e){
		e.preventDefault();
		$('#unbindingGoods').modal('show');
	});
});