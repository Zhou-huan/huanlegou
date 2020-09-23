// 首页js代码  保证网页加载完成后,才执行js
$(function(){
        //热书畅销手风琴效果
        $('.sellsliderbar li').hover(function(){
            $(this).addClass('shows').siblings().removeClass('shows');
        });
         //选项卡 tab切换
         $('.commentnav>li').hover(function(){
            //为当前按钮添加.current,同时清除其他兄弟标签的.current;
            $(this).addClass('current').siblings().removeClass('current');
            //获取当前按钮下标对应的列表下标
            var index=$(this).index();
             //为当前列表添加.on,同时清除其他兄弟列表的.on;
            $('.commentinner>ul').eq(index).addClass('on').siblings().removeClass('on');
        });
        /* 换一批 */
        

         //独家提供轮播图
    $(".bookSlide").tyslide({
        boxh:518,//盒子的高度
        w:1200,//盒子的宽度
        h:390,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:20,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:20,//控制按钮高度
        radius:10,//控制按钮圆角度数
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#93d46f",//当前控制按钮的颜色
        isShowNum:false //是否显示数字
    });
      //选项卡 tab切换
      $('.commentnav>li').hover(function(){
        //为当前按钮添加.current,同时清除其他兄弟标签的.current;
        $(this).addClass('current').siblings().removeClass('current');
        //获取当前按钮下标对应的列表下标
        var index=$(this).index();
         //为当前列表添加.on,同时清除其他兄弟列表的.on;
        $('.bookCommon>div').eq(index).addClass('show').siblings().removeClass('show');
    });
    /* 换一批 */
    //设置变量来保存索引
    let num=0;
    //获取当前productbox的高度 相当于 li
    let liHeight=parseInt($('.loveUl .productbox').eq(0).css('height'))
    //注册事件
    $('.supplyTitle .but').click(function(){
        num++;
        //判定
        if(num>2){
            num=0;
        }
        //获取移动的距离
        var Hei=-liHeight*num;
        //设置loveUI的top
        $('.loveUl').animate({'top':Hei+'px'},500);
    })
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
    })

    /* 跳转楼层 */
     $(window).scroll(function () {
        var scrollTop = $(document).scrollTop();
        var documentHeight = $(document).height();
        var windowHeight = $(window).height();
        var contentItems = $("body").find(".item");
        var currentItem = "";

        if (scrollTop+windowHeight==documentHeight) {
            currentItem= "#" + contentItems.last().attr("id");
        }else{
            contentItems.each(function () {
                var contentItem = $(this);
                var offsetTop = contentItem.offset().top;
                if (scrollTop > offsetTop-100) {//此处的200视具体情况自行设定，因为如果不减去一个数值，在刚好滚动到一个div的边缘时，菜单的选中状态会出错，比如，页面刚好滚动到第一个div的底部的时候，页面已经显示出第二个div，而菜单中还是第一个选项处于选中状态
                    currentItem = "#" + contentItem.attr("id");
                }
            });
        }
        if (currentItem != $("#menu").find(".currentR").attr("href")) {
            $("#menu").find(".currentR").removeClass("currentR");
            $("#menu").find("[href=" + currentItem + "]").addClass("currentR");
        }
    });
})