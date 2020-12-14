$(document).ready(function(){

	$('#pic').on('click', function(){
		$('#pic').animate({
	        margin: '25px',
	        opacity: '0.5',
	        height: '400px',
	        width: 'auto'
		}, 5000)
	});

	var aTag = $('<a>',{
		type: 'button',
		class: 'btn btn-info',
		href: '/',
		text: 'Back Home'
	});
	aTag.css('text-decoration', 'none').css('font-size','30px');
	$('div').eq(0).append(aTag);


})