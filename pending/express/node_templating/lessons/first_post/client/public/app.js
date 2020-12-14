$(document).ready(function(){

	$('#first-post').on('keypress', function(e){
		if(e.key === "Enter"){
			var obj = {
				"name": $('#first-post').val()
			}

			$.ajax({
				method: 'POST',
				url: '/first-post',
				data: JSON.stringify(obj),
				contentType: 'application/json',
				success:function(res){

					$('div').eq(0).text(res.name)
					$('#first-post').val("");
				}
			})
		}
	})

});