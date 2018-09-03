$(document).ready(function(){

	$('.price_desc a').mouseover(function(){
		$(this).css({
			'background-color': '#EABE44',
			'border': '4px solid #82592D'
		});
		$('.price').css({
			'color': 'white',
			'background-color': '#82592D'
		});
		$('.price_text').css('color', '#000');
		$('.price_text span').css('color', '#82592D');
	});

	$('.price_desc a').mouseout(function(){
		$(this).css({
			'background-color': '#82592D',
			'border': '4px solid #82592D'
		});
		$('.price').css({
			'color': '#82592D',
			'background-color': '#fff'
		});
		$('.price_text').css('color', '#D1D1D1');
		$('.price_text span').css('color', '#fff');
	});


	$('.more').mouseover(function(){
		$(this).css({
			'background-color': '#EABE44',
			'color': '#fff'
		});
	});

	$('.more').mouseout(function(){
		$(this).css({
			'background-color': '#82592D',
			'color': '#EABE44'
		});
	});
});





























