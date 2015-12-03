$(document).ready(function() {
    $('.btn-add').click(function(e){
		e.preventDefault();
		$('#addStore').modal('show');
	});
     $('.btn-edit').click(function(e){
		e.preventDefault();
		$('#editStore').modal('show');
	});
});