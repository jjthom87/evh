$(document).ready(function(){

	var formDiv = $("<div id='form-div'>");
	formDiv.css({marginLeft: '25px'})
	var blogForm = $('<form>');
	var nameLabel = $('<label>',{
		text: 'Name'
	});
	var nameInput = $('<input>',{
		type: 'text',
		width: 300,
		id: 'name-input'
	});
	var postLabel = $('<label>',{
		text: 'Post'
	});
	var blogTA = $('<textarea>',{
		width: 300,
		height: 150,
		id: 'blog-input'
	});
	var submitInput = $('<input>',{
		type: 'submit',
		class: 'btn btn-primary',
		value: 'Post'
	});
	blogForm.append(nameLabel).append("<br>").append(nameInput).append('<br>').append(postLabel).append("<br>").append(blogTA).append("<br>").append(submitInput);
	formDiv.append(blogForm);
	$('div').eq(1).append(formDiv);

	$(document).on('submit', '#form-div', (e) => {
		e.preventDefault();
		var obj = {
			name: $('#name-input').val(),
			post: $('#blog-input').val()
		}
		$.ajax({
			method: 'POST',
			url: '/api/post-blog',
			data: JSON.stringify(obj),
			contentType: 'application/json',
			dataType: 'json'
		}).then(function(res){
			$.ajax({
				method: 'GET',
				url: '/api/get-posts'
			}).then(function(results){
				$('#noPostP').remove()
				$('#posts-div').remove();
				if(results.length > 0){
					var postsDiv = $('<div id="posts-div">');
					var postDiv, postName, postBlog;
					for(var i = 0; i < results.length; i++){
						postDiv	= $('<div>');
						postDiv.addClass('well');
						postDiv.css({display: 'inline-block', marginLeft: '25px'})

						postName = $('<p class="post-name">');
						postName.text("Name: " + results[i].name);

						postBlog = $("<p>");
						postBlog.text("Post: " + results[i].post);

						postDiv.append(postName).append("<br>").append(postBlog);
						postsDiv.append(postDiv).append("<br>");
					}
					$('#posts').append(postsDiv);

				} else {
					var noPostP = $("<p>",{
						text: 'No Posts',
						id: 'noPostP'
					});
					$('#posts').append(noPostP);
				}
			});
		})
		$('#name-input').val("");
		$('#blog-input').val("")
	});

	$.ajax({
		method: 'GET',
		url: '/api/get-posts'
	}).then(function(res){
		console.log(res)
		if(res.length <= 0){
			var noPostP = $("<p>",{
				text: 'No Posts',
				id: 'noPostP'
			});
			$('#posts').append(noPostP);
		}
	});

});