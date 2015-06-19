$('#post-box').focus(function(){
	$(this).val("");
});

$('#post-it').click(function(){
	var usr_post = $('#post-box').val();
	$('#post-area').append('<p>' + usr_post + '</p>')
});