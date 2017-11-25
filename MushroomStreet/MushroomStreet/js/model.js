//定义模块


define(['jquery'],function($){
	
	return {
		//图片列表
		imglist:(function(d){
			
			$.ajax({
				url:'http://localhost:8080/MushroomStreet/php/main.php',
				dataType:'json'
			}).done(function(d){
				var $html='<ul>';
				for(var i=0;i<5;i++){
					$html+='<li>'+'<img src="'+d[i].url+'" />'
					+'<h3 class="grid-title">'+d[i].title+'</h3>'
					+'<p class="grid-price">'+d[i].price+'</p>'
					+'</li>'
				}
				$html+='</ul>'
				$('.rotatecard').html('<i class="i"><strong></strong>红人穿搭</i>'+$html);
			})
		})(),
		
		
		imglist:(function(d){
			$.ajax({
				url:'http://localhost:8080/MushroomStreet/php/main.php',
				dataType:'json'
			}).done(function(d){
				var $html='<ul>';
				for(var i=6;i<12;i++){
					$html+='<li>'+'<img src="'+d[i].url+'" />'
					+'<h3 class="grid-title">'+d[i].title+'</h3>'
					+'<p class="grid-price">'+d[i].price+'</p>'
					+'</li>'
				}
				$html+='</ul>'
				$('.kq').html('<i class="i"><strong></strong>快抢发新日</i>'+$html);
			})
		})(),
		
		//猜你喜欢部分的图片导入
	imglist:(function(d){
			$.ajax({
				url:'http://localhost:8080/MushroomStreet/php/main.php',
				dataType:'json'
			}).done(function(d){
				var $html='<ul>';
				for(var i=6;i<30;i++){
					
					$html+='<li>'+'<img src="'+d[i].url+'" />'
					+'<h3 class="grid-title">'+d[i].title+'</h3>'
					+'<p class="grid-price">'+d[i].price+'</p>'
					+'</li>'
				}
				$html+='</ul>'
				$('.youlike').html($html);
			})
		})(),
		
	}
});



$(window).scroll(function() {
	var $scrolltop=$(window).scrollTop();
	if ($scrolltop>=1500) {
		$('.upstair').show();
	}
	else{
		$('.upstair').hide();
	}
	
	
	$('.upstair a').each(function(){
			var $top=$('.tab').eq($(this).index()).offset().top+350;
			if($top>$scrolltop){
				$('.upstair a').removeClass('active');
				$('.upstair a').eq($(this).index()).addClass('active');
				console.log("aaa")
				return false;
			}
		})
});


$('.upstair a').not('.last').on('click',function(){
		$(this).addClass('active').siblings().removeClass('active');
		var $index=$(this).index();
		var $top=$('.tab').eq($index).offset().top;
		$('html,body').animate({
			scrollTop:$top
		},200);
	});

	$('.last').on('click',function(){
		$('html,body').animate({ 
			scrollTop:0
		});
	});
	
	
	//右侧购物车等侧边栏
	$('.shopcar span').css({"cursor":"pointer"}).hover(
  function () {
    $(this).addClass("hover");
  },
  function () {
    $(this).removeClass("hover");
  }
);
$('.shopcar span:nth-of-type(5)').on('click',function(){
		$('html,body').animate({ 
			scrollTop:0
		});
	});

//倒计时
var $i=1000;
var timer=setInterval(function () {
	$i--;
	$('.show .showwrap .left .mainblock .xianshi .spcate-timer').eq(0).html($i+'s');
},1000)

	$('.show .showwrap .left .mainblock .xianshi .spcate-timer').eq(1).css({"background":"white","width":160,"color":"gray"})
	$('.show .showwrap .right .mainblock .xianshi .spcate-timer').css({"background":"white","width":160,"color":"gray"})
	
	$('.show .showwrap .left .mainblock .spcate-img').on("mouseenter",function(){
                $(this).css("transform","translate(-7px)")
            })
	$('.show .showwrap .left .mainblock .spcate-img').on("mouseleave",function(){
                $(this).css("transform","translate(0px)")
            })

$('.show .showwrap .left .subblock .img').on("mouseenter",function(){
                $(this).css("transform","translate(-4px)")
            })
	$('.show .showwrap .left .subblock .img').on("mouseleave",function(){
                $(this).css("transform","translate(0px)")
            })
	
	$('.show .showwrap .right .mainblock .spcate-img').on("mouseenter",function(){
                $(this).css("transform","translate(-7px)")
            })
	$('.show .showwrap .right .mainblock .spcate-img').on("mouseleave",function(){
                $(this).css("transform","translate(0px)")
            })
//翻牌效果
 var timer1 = setInterval(function(){ 
 			
              $(".rotatecard ul li").animate({"top":-36},700,function(){
            $(this).css("top",0);
        });
      
    },1000)
 

//头部下拉列表
 

$("#top .wrap ul li").eq(1).hover(
  function () {
    $(".div0").css({"display":"block"})
  },
  function () {
    $(".div0").css({"display":"none"})
  }
);
$("#top .wrap ul li").eq(2).hover(
  function () {
    $(".div1").css({"display":"block"})
  },
  function () {
    $(".div1").css({"display":"none"})
  }
);
$("#top .wrap ul li").eq(3).hover(
  function () {
    $(".div2").css({"display":"block"})
  },
  function () {
    $(".div2").css({"display":"none"})
  }
);
$("#top .wrap ul li").eq(4).hover(
  function () {
    $(".div3").css({"display":"block"})
  },
  function () {
    $(".div3").css({"display":"none"})
  }
);

$(".popgoods a").hover(
  function () {
    $(this).css({"color":"red", "text-decoration":"underline"});
  },
  function () {
    $(this).css({"color":"black","text-decoration":"none"});
  }
);

$(".thememarket a").hover(
  function () {
    $(this).addClass("hover");
  },
  function () {
    $(this).removeClass("hover");
  }
);
$(".rightlink a").hover(
  function () {
    $(this).addClass("color");
  },
  function () {
    $(this).removeClass("color");
  }
);

$(".aa a ").hover(
  function () {
  	$(this).css({"background":"orange"});
    $(".aa1").show()
  },
  function () {
  	$(this).css({"background":"lightcoral","opcity":"1"});
    $(".aa1").hide();  
  }
);

$(".aa a span").hover(
  function () {
  	$(this).css({"text-decoration":"underline"});
   
  },
  function () {
  	$(this).css({"text-decoration":"none"});
   
  }
);
$(".aa1 a").hover(
  function () {
  	$(this).css({"text-decoration":"underline"});
   
  },
  function () {
  	$(this).css({"text-decoration":"none"});
   
  }
);


//轮播图
var $index=0;//当前索引
    	var $qindex=0;//前一个索引
    	var $btn=$('.btn span');
    	var $img=$('.scroll img');
    	
    	$btn.on('click',function(ev){
    		$index=$(this).index();
    		imgscroll(ev);
    		$qindex=$index;
    	});
    	
    	$('.banner').hover(function(){
    		$('.prev').show();
    		$('.next').show();
    	},function(){
    		$('.prev').hide();
    		$('.next').hide();
    	})
    	
    	$('.next').on('click',function(ev){
    		$index++;
    		if($index>5){
    			$index=0;
    			$qindex=5;
    		}
    		imgscroll(ev);
    		$qindex=$index;
    	});
    	
    	$('.prev').on('click',function(ev){
    		$index--;
    		if($index<0){
    			$index=5;
    			$qindex=0;
    		}
    		imgscroll(ev);
    		$qindex=$index;
    	});
    	
    	function imgscroll(ev){
    		$btn.eq($index).addClass('hover').siblings('span').removeClass('hover');
    		if($index==0 && $qindex==5){
    			if(ev.target.nodeName=='A'){
    				$img.eq($qindex).animate({
		    			left:-820
		    		});
		    		$img.eq($index).css('left','820px').animate({
		    			left:0
		    		})
    			}else if(ev.target.nodeName=='SPAN'){
    				$img.eq($qindex).animate({
		    			left:820
		    		});
		    		$img.eq($index).css('left','-820px').animate({
		    			left:0
		    		})
    			}
    			
    		}else if($index==5 && $qindex==0){
	    		if(ev.target.nodeName=='A'){
    				$img.eq($qindex).animate({
		    			left:820
		    		});
		    		$img.eq($index).css('left','-820px').animate({
		    			left:0
		    		})
    			}else if(ev.target.nodeName=='SPAN'){
    				$img.eq($qindex).animate({
		    			left:-820
		    		});
		    		$img.eq($index).css('left','820px').animate({
		    			left:0
		    		})
    			}
    			
    		}else if($index>$qindex){
    			$img.eq($qindex).animate({
	    			left:-820
	    		});
	    		$img.eq($index).css('left','820px').animate({
	    			left:0
	    		})
    		}else if($index<$qindex){
    			$img.eq($qindex).animate({
	    			left:820
	    		});
	    		$img.eq($index).css('left','-820px').animate({
	    			left:0
	    		})
    		}
    	}
    //轮播图	
$("#banner").scrollBanner({
	images : [
		{src:"http://s17.mogucdn.com/mlcdn/c45406/171013_7k5lk8klli6c74gah7dh4b16k790j_778x440.png_900x9999.v1c7E.70.webp",title:"banner1",href:"#"},
		{src:"http://s10.mogucdn.com/mlcdn/c45406/171013_828fa8l59ik12l3ekd11g648dhk4g_778x440.jpg_900x9999.v1c7E.70.webp",title:"banner2",href:"#"},
		{src:"http://s3.mogucdn.com/mlcdn/c45406/171013_8ef61blj2e45lcfe84clgelh51feh_778x440.png_900x9999.v1c7E.70.webp",title:"banner3",href:"#"},
		{src:"http://s10.mogucdn.com/mlcdn/c45406/171013_2g3i77l1fbh8ld1hj7150e84gikhe_778x440.jpg_900x9999.v1c7E.70.webp",title:"banner4",href:"#"}
	],
	scrollTime:1400,
	bannerHeight:"450px",
	iconColor: "#FFFFFF",
	iconHoverColor : "#82C900",
	iconPosition : "center"
});

