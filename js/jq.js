$(document).ready(function(){

	$('.movie-wrap').on('click', 'button', function() {
		price = $(this).siblings(".title").data('price');
		$(this).after("<button class = 'show-price'>$" + price + "</button>")
		$(this).remove();
	});

	// $('.movie-wrap').mouseenter(function() {
	// 	$(this).css('background-color', 'yellow');
	// });
	// $('.movie-wrap').mouseleave(function() {
	// 	$(this).css('background-color', 'white');

	// });

	$('.filter-row').on('click', 'button', function() {

		var filter = $(this).val();
		var showMovies = $('.movies').find(filter).find('.movie-wrap');
		var hideMovies = $('.movies').find('li').not(filter).find('.movie-wrap');

		// highlight the filter selected movie-wraps. If none filter is
		// selected, showMovies will be empty and hideMovies, which is all
		// movies that showMovies is not, will be all movies. With all movies
		// contained in hideMovies, the if statement will leave them alone if
		// they don't have color, or add the uncoloring class if they do.

		if(showMovies.hasClass('uncoloring')){
			showMovies.removeClass('uncoloring');
		}

		showMovies.addClass('coloring');

		if(hideMovies.hasClass('coloring')){
			hideMovies.addClass('uncoloring');
		}

		// hideMovies.toggleClass('uncoloring');
		// hideMovies.hide();
		// showMovies.show();	

		// $('.highlighted').removeClass('highlighted');
		// showMovies.addClass('highlighted');

	});
});