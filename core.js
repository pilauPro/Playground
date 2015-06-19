$('#post-box').focus(function(){
	$(this).val("");
});

$('#post-it').click(function(){
	var usr_post = $('#post-box').val();
	var usr = $('#user').val();
	$('#post-area').append('<p>' + usr + ": " + usr_post + '</p>')
});