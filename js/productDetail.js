$(function(){
     /* 商品分类切换部分 */
     $('.menuSlide').hide();
     /*  $('.kinds').hover(function(){
          $('.menuSlide').slideDown();
      },function(){
          $('.menuSlide').slideUp();
      }) */
      $('.kinds').on('mouseenter',function(){
          $('.menuSlide').stop().slideDown();
      }).on('mouseleave',function(){
          $('.menuSlide').stop().slideUp();
      });
      //引入放大镜插件
      $(function() {
	
        var magnifierConfig = {
            magnifier : "#magnifier1",//最外层的大容器
            width : 340,//承载容器宽
            height : 380,//承载容器高
            moveWidth : null,//如果设置了移动盒子的宽度，则不计算缩放比例
            zoom : 5//缩放比例
        };
    
        var _magnifier = magnifier(magnifierConfig);
    
        /*magnifier的内置函数调用*/
        /*
            //设置magnifier函数的index属性
            _magnifier.setIndex(1);
    
            //重新载入主图,根据magnifier函数的index属性
            _magnifier.eqImg();
        */
    });
    /* 种类选择 */
    $('.detailSel span').click(function(){
        $(this).css('cursor','pointer')
        $(this).addClass('active').siblings('span').removeClass('active');
    })
    /* 购物车增减数量操作 */
    //增加数量操作
    $('.addshop .bAdd').click(function(){
         //取消手型禁用
         $('.bReduce').css({'cursor':'pointer'});
        var num=$('.addshop span').text();
        num++;
        $('.addshop span').text(num);
    })
    //删除数量操作
    $('.addshop .bReduce').click(function(){

        var num=$('.addshop span').text();
        num--;
         //判断，当值小于1时，设置按钮鼠标属性为禁用，跳出循环
         if(num<1){
            $(this).css({'cursor':'not-allowed'});
            return;
        }
        $('.addshop span').text(num);
    });
    /* 商品介绍与评价切换 */
    $('.commentnav>li').hover(function(){
        $(this).css('cursor','pointer');
        $(this).addClass('current').siblings('li').removeClass('current');
        var index=$(this).index();
        $('.change>div').eq(index).show().siblings().hide();
    })
})