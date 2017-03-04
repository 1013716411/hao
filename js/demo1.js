 //导航栏
    $(function(){
               $(window).scroll(function(){
                  if ($(window).scrollTop()>=60){
                    $('.nav-frame').stop(false,true).slideDown(500);
                  }else{ 
                    $('.nav-frame').stop(false,true).slideUp(500);               
                  }
               })

               $('.nav-2').click(function(){
                   $(this).find(".nav-dl").stop(false,true).slideToggle(600);
               })
//箭头按钮操作
               $('.arrow img').click(function(){
                   $('html,body').animate({scrollTop:$('.home-1').offset().top},1000);
                })
                setInterval(function(){
                   $(".arrow img").fadeOut(800).fadeIn(800)},600);
//导航栏按钮操作
              $('.tail,.tail-dd').click(function(){
                   $('html,body').animate({scrollTop:$('.footer').offset().top},1000);    
                })
//文字        
              var Height_h = $(window).height()*0.5,
                  home1_p = $('.home-1 .home-box1').offset().top - Height_h,
                  home1_img = $('.home-1 .home-box1').offset().top - Height_h,
                  home2_h1 = $('.home-2 h1').offset().top - Height_h,
                  home4_left = $('.home-4 .imgbox-left4').offset().top - Height_h,
                  home4_right = $('.home-4 .imgbox-right4').offset().top - Height_h,
                  home7_p = $('.home-7 .home-p7').offset().top - Height_h,
                  footer_p = $('.footer .footer-box').offset().top - Height_h;
                  $(window).scroll(function(){
                    var top_h = $(window).scrollTop();
                    if (top_h >= home1_p) {
                      $('.home-1 .home-box1').siblings().addClass('home-p2');
                    }
                    if (top_h >= home1_img) {
                      $('.home-1 .home-box1').siblings().addClass('home-img2');
                    }
                    if (top_h >= home2_h1) {
                      $('.home-2 h1').fadeIn(1000);
                    }
                    if (top_h >= home4_left) {
                      $('.home-4 .imgbox-left4').addClass('img-left4');
                    }
                    if (top_h >= home4_left) {
                      $('.home-4 .imgbox-right4').addClass('img-right4');
                    }
                     if (top_h >= home7_p) {
                      $('.home-7 .home-p7').addClass('home-p7-7');
                    }
                     if (top_h >= home7_p) {
                      $('.footer .footer-box').fadeIn(1000);
                    }
                  })
//相册模式 

          
        $('.imgbox4 img').click(function(){      
            var Img=$(this).attr('src');                    
            $('.black4,.close').css('display','block');
            $('.imgbox4-black img').attr('src',Img);             
            $('.imgbox4-black').fadeIn();
            $('.imgbox4-black img').css('width','400','height','400');    
                $('.imgbox4-black').css({
                    'marginTop':-$('.imgbox4-black').outerHeight()/2,
                    'marginLeft':-$('.imgbox4-black').outerWidth()/2,                   
                })       
        })
        $('.black4,.close').click(function(){
             $('.black4').css('display','none');
             $('.imgbox4-black').css('display','none');
             $('.close').css('display','none');
        })             

//轮播图    
            $(document).ready(function(){
            $('.home-mun5 li').first().addClass('mun5-1');
           	$('.home-mun5 li').mouseover(function(){
				$(this).addClass('mun5-1').siblings().removeClass('mun5-1');
				var i = $(this).index();	 
				$('.home-img5 li').eq(i).stop(false,true).fadeIn().siblings().stop(false,true).fadeOut();
			})

			    i = 0;
			var time = setInterval(move,2000);
			function move(){
				i++
				if(i == 3){
					i = 0
				}
				$('.home-mun5 li').eq(i).addClass('mun5-1').siblings().removeClass('mun5-1');
				$('.home-img5 li').eq(i).stop(false,true).fadeIn().siblings().stop(false,true).fadeOut();
			}
			$('.home-right5').hover(function(){
				clearInterval(time)
			},function(){
				time = setInterval(move,2000);
			})
			$('.btn-right5').click(function(){
				move();
			})
			$('.btn-left5').click(function(){
				if(i==0){
					i = 3
				}
				i = i-2
				move()
			})
  })
		//联系作者

		
			//用户名
          var username_1 = $('input[name="username"]'),
              number_1 = $('input[name="number"]'),
              email_1 = $('input[name="email"]'),
              word_1 = $('input[name="word"]');
           $(username_1).focus(function(){
          $(this).next().removeClass('colour1').addClass('colour2'); 
           }).blur(function(){
           	if ($(this).val().length >= 3 && $(this).val().length <=5 && $(this).val() !='') {
           		$(this).next().text('输入成功').removeClass('colour1').addClass('colour4'); 
           		Name = true;
           	}else{
                $(this).next().text('用户名应该为3-5位之间').removeClass('colour1').removeClass('colour4').addClass('colour3'); 
           	}
           })
           //手机号
           $(number_1).focus(function(){
           		$(this).next().removeClass('colour1').addClass('colour2');

           	}).blur(function(){
           		if($(this).val().match(/^[1][3][0-9]{9}$/) && $(this).val()!=''){
           			$(this).next().text('输入成功').removeClass('colour1').addClass('colour4');
           			Number1 = true; 
           		}else{
           		$(this).next().text('请输入正确的手机格式号码').removeClass('colour1').removeClass('colour4').addClass('colour3');  
           		}
           	})
           	//邮箱
           	 $(email_1).focus(function(){
           		$(this).next().removeClass('colour1').addClass('colour2');

           	}).blur(function(){
           		if($(this).val().match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/) && $(this).val()!=''){
           			$(this).next().text('输入成功').removeClass('colour1').addClass('colour4');
           			Email = true; 
           		}else{
           		$(this).next().text('请输入正确的邮箱号码').removeClass('colour1').removeClass('colour4').addClass('colour3'); 
           		}
           	})
              //留言板
             $(word_1).focus(function(){
           	$(this).next().removeClass('colour1').addClass('colour2'); 

           }).blur(function(){
           	if ($(this).val().length >= 3 && $(this).val().length <=300  && $(this).val() !='') {
           		$(this).next().text('输入成功').removeClass('colour1').addClass('colour4'); 
           		Word = true;
           	}else{
                $(this).next().text('文字控制在3到300之间').removeClass('colour1').removeClass('colour4').addClass('colour3'); 
           	}
           })
             //按钮验证
             $('.button7').click(function(){
             if (Name != false && Number1 != false && Email != false && Word != false && $(word_1).val()!='') {
                   alert('提交成功')
             }else{
                  alert('提交失败')
             	   return false;
             }	
             })
        
             //返回顶部
               $(window).scroll(function(){
               	  if ($(window).scrollTop()>=650) {
               	  	$('.home-top2').stop(false,true).fadeIn(500)
               	  }else
               	    $('.home-top2').stop(false,true).fadeOut(1000)
               })
               $('.home-top2 img , .home-top1').click(function(){
               	   if ($(window).scrollTop()) {
               	   	 $('html,body').animate({scrollTop:0},1000)
               	   }
               	   	
               	   
               })
                
       })