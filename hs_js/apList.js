$(document).ready(function() {
//    $('#apTable').dataTable ({
//        
//    });
    $('.btn-add').click(function(e){
		e.preventDefault();
		$('#addAp').modal('show');
	});
     $('.btn-edit').click(function(e){
		e.preventDefault();
		$('#editAp').modal('show');
	});
});