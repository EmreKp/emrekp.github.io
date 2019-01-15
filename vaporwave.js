$(document).ready(function(){
	var playing = false;
	$(".play-music").click(function(){
		if (!playing) {
			$(this).text('||')
			$("#muzik").trigger('play');
			playing = true;
		} else {
			$(this).text('|>');
			$('#muzik').trigger('pause');
			playing = false;
		}
		
	})
})