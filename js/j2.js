$(document).ready(function(){
	$('.stock-title').after("<button class='stock-info'>Get Price</button>");

	$('.stock-info').on('click', function(){
		var stock = $(this).closest('.stock-wrapper');
		var otherStocks = $('.stock-wrapper').not(stock);

		otherStocks.removeClass('selected');

		if(stock.hasClass('selected')){
			stock.removeClass('selected');
		}
		else{
			stock.addClass('selected');
		}

		$(this).addClass('show-info');
		$(this).text('$$$$$');

	});
})