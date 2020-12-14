$(document).ready(function(){

	var aTag = $('<a>',{
		type: 'button',
		class: 'btn btn-info',
		href: '/profile',
		text: 'My Profile Page'
	});
	aTag.css('text-decoration', 'none').css('font-size','30px');
	$('div').eq(0).append(aTag);

})