$(function(){
			$('#tab_t li').click(function(){
					$('#tab_t li').removeClass('fli_t');	
					$(this).addClass('fli_t');

					$('.hide').removeClass('fdiv');
					$('.hide').eq($(this).index()).addClass('fdiv');
			})
})