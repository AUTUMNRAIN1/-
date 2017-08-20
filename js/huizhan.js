
$(function(){
	//会粘1开始
			$('#tab li').click(function(){
					$('#tab li').removeClass('fli');	
					$(this).addClass('fli');

					$('#tab_con_z .hide1').removeClass('fdiv1');
					$('#tab_con_z .hide1').eq($(this).index()).addClass('fdiv1');
			})
		 	
			 	$('.prev-btn').click(function(){
			var left=$('.c-img').scrollLeft();
			$('.c-img').scrollLeft(left-144);
		})
		$('.next-btn').click(function(){
			var right=$('.c-img').scrollLeft();
			$('.c-img').scrollLeft(right+144);
		})
	//会粘1结束
	
	//会粘2开始		
			$('.prev-btn2').click(function(){
				var left=$('.c-img2').scrollLeft();
				$('.c-img2').scrollLeft(left-1128);		
				var	num= parseInt($('.change b').text()) ;
				if(num>1){					
					$('.change b').text(num-1);
				}
				getData();
			})	
			$('.next-btn2').click(function(){
				var right=$('.c-img2').scrollLeft();
				$('.c-img2').scrollLeft(right+1128);
				var	num= parseInt($('.change b').text()) ;
				if(num<4){
					$('.change b').text(num+1)
				}
				getData();
			})		
			$('.picture2').mouseenter(function(){
				$(this).find('.sm').animate({'height':'45px'});
				$(this).find('.sm').css("display","block");
//				$(this).find('.sm').fadeTo(500,0.01);//实现c1逐渐淡化
			}).mouseleave(function(){
				$(this).find('.sm').animate({'height':'0px'});
				$(this).find('.sm').css("display","none");
				//$(this).find('.sm').fadeTo(100,1);//实现c1逐渐显示
			})	
	//会粘2结束
})				
		 
		 
		