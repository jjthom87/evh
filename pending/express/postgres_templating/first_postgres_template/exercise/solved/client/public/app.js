$(document).ready(function(){

	$.ajax({
		method: 'GET',
		url: '/api/all-products'
	}).then(function(results){
		var newRow, nameTd, gradeTd;
		for(var i = 0; i < results.length; i++){
			newRow = $('<tr class="product-tr" data-id=' + results[i].id + '>')
			numTd = $('<td>');
			productTd = $('<td>');

			numTd.text(i + 1);
			productTd.text(results[i].product);
			newRow.append(numTd).append(productTd);
			$('#tbody').append(newRow)
		}
	});

	$(document).on('mouseover', '.product-tr', function(){
		$('#descDiv').remove();
		var product_id = $(this).data('id');
		$.ajax({
			method: 'GET',
			url: '/api/prod-desc/' + product_id
		}).then(function(success){
			var descDiv = $('<div id="descDiv">');
			descDiv.addClass('alert alert-info');

			var descP = $('<p>');
			descP.text("Product Description: " + success[0].description);

			descDiv.append(descP);
			$('div').eq(0).append(descDiv);
		});
	});

	$(document).on('mouseout', '.product-tr', function(){
		$('#descDiv').remove();
	});

});