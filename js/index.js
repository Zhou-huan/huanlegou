// 首页js代码  保证网页加载完成后,才执行js
$(function(){
        //电子书轮播图
        $(".esliderbox").tyslide({
            boxh:217,//盒子的高度
            w:330,//盒子的宽度
            h:217,//图片的高度
            isShow:true,//是否显示控制器
            isShowBtn:true,//是否显示左右按钮
            controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
            controlsW:20,//控制按钮宽度
            controlsH:4,//控制按钮高度
            radius:0,//控制按钮圆角度数
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
            $('.einner>ul').eq(index).addClass('on').siblings().removeClass('on');
            $('.commentinner>ul').eq(index).addClass('on').siblings().removeClass('on');
            $('#extension>ul').eq(index).addClass('on').siblings().removeClass('on');
        });
        //公共小轮播图
        $(".commentsliderbox").tyslide({
            boxh:340,//盒子的高度
            w:429,//盒子的宽度
            h:340,//图片的高度
            isShow:true,//是否显示控制器
            isShowBtn:true,//是否显示左右按钮
            controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
            controlsW:20,//控制按钮宽度
            controlsH:4,//控制按钮高度
            radius:0,//控制按钮圆角度数
            controlsColor:"#d7d7d7",//普通控制按钮的颜色
            controlsCurrentColor:"#93d46f",//当前控制按钮的颜色
            isShowNum:false //是否显示数字
        });
       
        /* 楼层 */
        //用一个变量存颜色
        var bgcolor=['#93d46f','#f9c7ac','#c9b0f1','#b6c61a','pink'];
        $('#floor li').hover(function(){
            //获取当前li的索引
            var  index=$(this).index();
            $(this).css({
                'width':'80px',
                'background-color':bgcolor[index],
                'background-position-x':'-40px',
            })
        },function(){
            $(this).css({
                'width':'40px',
                'background-color':'',
                'background-position-x':'0',
            });
        }).click(function(){
            //获取当前li标签的索引值
            var index=$(this).index();
            //找到index对应的.floorbox类名的楼层，获取对应楼层距离顶部的值
            var fTop=$('.floorbox').eq(index).offset().top;
            //设置当前楼层到顶部的距离的值==》设置到滚动条（获取的html或者body上的滚动条上
            $('html,body').animate({'scrollTop':fTop-50},500);
        });

        /* 二维码弹出事件 */
       /*  $('#codeBox .coupon').mouseover(function(){
            $(this).closest('#codeBox').find('.twoCode').animate({'right':'40px'},600);
        },function(){
            $(this).closest('#codeBox').find('.twoCode').animate({'right':'-90px'},600);
        }) */

        $('#codeBox .coupon').on('mouseenter',function(){
            $('.twoCode').show();
        }).on('mouseleave',function(){
            $('.twoCode').hide();
        })
        /* 右侧导航栏 */
        //右侧导航
        var btb=$(".rightNav");
        var tempS;
        $(".rightNav").hover(function(){
                var thisObj = $(this);
                tempS = setTimeout(function(){
                thisObj.find("a").each(function(i){
                    var tA=$(this);
                    setTimeout(function(){ tA.animate({right:"0"},200);},50*i);
                });
            },200);

        },function(){
            if(tempS){ clearTimeout(tempS); }
            $(this).find("a").each(function(i){
                var tA=$(this);
                setTimeout(function(){ tA.animate({right:"-110"},200,function(){
                });},50*i);
            });

        });

    })