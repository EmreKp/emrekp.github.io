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
	});
	$("body").keypress(function(e){
		if (e.which == 32) {
			if (!playing) {
				$(".play-music").text('||')
				$("#muzik").trigger('play');
				playing = true;
			} else {
				$(".play-music").text('|>');
				$('#muzik').trigger('pause');
				playing = false;
			}
		}
	})
})