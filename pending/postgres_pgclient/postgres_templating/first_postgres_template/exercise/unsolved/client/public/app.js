$(document).ready(function(){

	$.ajax({
		method: 'GET',
		url: /* first get route */
	}).then(function(results){
		var newRow, nameTd, gradeTd;
		for(var i = 0; i < results.length; i++){
			newRow = $('<tr class="product-tr" data-id=' + results[i].id + '>')
			numTd = $('<td>');
			productTd = $('<td>');

		}
	});

	$(document).on('mouseover', '.product-tr', function(){
		var product_id = $(this).data('id');
		$.ajax({
			method: 'GET',
			url: /* 2nd get route */ + product_id
		}).then(function(success){

		});
	});

	$(document).on('mouseout', '.product-tr', function(){
	});

});