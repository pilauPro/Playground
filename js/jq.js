$(document).ready(function(){
	$('.80s').on('click', function() {
		price = $(this).find(".title").data('price');
		$(this).find(".get-price").after("<button class = 'show-price'>$" + price + "</button>")
		//$(this).after("<button class = 'show-price'>$" + price + "</button>")
		$(this).find(".get-price").remove();
	});
});