$(function(){
			$('.right_h .myjd').mouseover(function(){//我的京东下拉菜单
				$('.have').css('display','block');
				$(this).css({
					"background-color": "#fff",
//					"border": "0.5px solid #ccc",
					"border-bottom":"#FFFFFF"
				});
				$('.have').mouseover(function(){
					$(this).css('display','block');
					$('.myjd').css('background-color','#fff');
				})
			})
			$('.right_h .myjd').mouseout(function(){
				$('.have').css('display','none');
				$(this).css({
					"background-color": '#f1f1f1',
					"border": 'none'
				});
				$('.have').mouseout(function(){
					$(this).css('display','none');
					$('.myjd').css('background-color','#f1f1f1');
				})
			})
			
			
			$('.sjjd_li').mouseover(function(){//手机京东下拉菜单
				$('.sjjd').css('background-position','0 -25px');//图标变化
				
			})
			$('.sjjd_li').mouseout(function(){//手机京东下拉菜单
				$('.sjjd').css('background-position','0 0');//图标变化		
			})
	
			//搜索框的光标
			//输入框获取焦点时
			$('.search_inp').focus(function(){
				$('.search_lab').css('display','none');
			})
			//输入框失去焦点时
			$('#search_inp').blur(function(){
				if($(this).value == ""){
					alert(1);
					$('.search_lab').css('display','block');					
				}			
				else{
//					alert($(this).value);
					$('.search_lab').css('display','none');
				}				
			})
	
			
			// 放大镜实现  picbox_top
			function fdj(liid,bg1,bg2){
				$(liid).mouseover(function(){
					$('.picbox_top').css('background',bg1);
					$('.picbox_top .big').css('background-image',bg2);
				})
			}
			fdj("#mi_li1","url(img/aa1.jpg)","url(img/aaa1.jpg)");
			fdj("#mi_li2","url(img/aa2.jpg)","url(img/aaa2.jpg)");
			fdj("#mi_li3","url(img/aa3.jpg)","url(img/aaa3.jpg)");
			fdj("#mi_li4","url(img/aa1.jpg)","url(img/aaa1.jpg)");
			fdj("#mi_li5","url(img/aa2.jpg)","url(img/aaa2.jpg)");
			
			
			$('.picbox_top').hover(function(){
				$('.small').show();
				$('.big').show();
				$('.big').css('height','540px');
			})
			$('.picbox_top').mouseleave(function(){
				$('.small').hide();
				$('.big').hide();
			})
			$('.big').mouseover(function(){
				console.log($(this))
				$(this).css('height','0px');
			})

			var x =0,y = 0;
			$('.picbox_top').mousemove(function(event){
				//1.这里改成clientXpageX或Y就不行了，不知道怎么解释
				//2.outerWidth(true)==内边距+外边距+边框
				//3.outerWidth()==内边距+边框
				x = event.pageX- $(this).offset().left - $('.small').outerWidth(true)/2;
				y = event.pageY - $(this).offset().top - $('.small').outerHeight(true)/2;
				if(x<0) {
					x = 0;
				} 
				else if(x>$(this).outerWidth(true)-$('.small').outerWidth(true))
				{
					x=$(this).outerWidth(true)-$('.small').outerWidth(true);
				}
				if(y<0){
					y=0;
				}
				else if(y>$(this).outerHeight(true)-$('.small').outerHeight(true))
				{
					y=$(this).outerHeight(true)-$('.small').outerHeight(true);
				}
				//小盒子移动的距离
				$('.small').css('left',x + "px");
				$('.small').css('top',y + "px");
				
				//大盒子的放大比例
				left1=-x *  $('.big').outerWidth(true) /$('.picbox_top').outerWidth(true);
				top1=-y *  $('.big').outerWidth(true) /$('.picbox_top').outerWidth(true); 				
		        $('.big').css('background-position',left1+"px"+' '+top1+"px");
		        //之前采用了css调left和top的值真是够折腾的。。。还好老师教我用background-position解决了	       
		        
			})	
			
			 //三级菜单的li标签颜色变化
				$('.items_a').mouseover(function(){
					$(this).css('background','#b61d1d');
					$(this).next().css('background','#B1191A');
					//next()返回被选元素的下一个同胞元素
				})
				$('.items_a').mouseout(function(){
					$(this).css('background','#7C7171');
					$(this).next().css('background','#5c5251');
				})
				
				//三级菜单的实现
				$('.catelog_dt').mouseover(function(){
		        	$('.catelog_dd').css('display','block');
		       })
		        $('.catelog_dt').mouseout(function(){
		        	$('.items_detail').css('display','none');
		        	$('.catelog_dd').css('display','none');
		        })
		        $('.items').mouseover(function(){		        	
	        		$('.items_detail').eq($(this).index()).show().siblings().hide();
	        		$('h3').show();
	        		$('span').show();
		        })  
		        
		        
		 
})