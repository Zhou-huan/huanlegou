
$(function(){
    /* 导航部分 */
    $('.vipnav a').hover(function(){
        $(this).addClass('on').siblings('a').removeClass('on');
    })
    /* 轮播图部分 */
      //公共小轮播图
      $("#vBannerInner").tyslide({
        boxh:474,//盒子的高度
        w:732,//盒子的宽度
        h:474,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:20,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:15,//控制按钮宽度
        controlsH:15,//控制按钮高度
        radius:15,//控制按钮圆角度数
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#93d46f",//当前控制按钮的颜色
        isShowNum:false //是否显示数字
    });
    /* 添加到购物车操作 */
    $('.addPruducts').hide();
    $('#mspecials li').hover(function(){
        $(this).find('.addPruducts').stop().slideDown();
    },function(){
        $(this).find('.addPruducts').stop().slideUp();
    })
})