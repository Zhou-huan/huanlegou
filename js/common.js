$(function(){
    //公共 主轮播图
    $("#bannerInner").tyslide({
        boxh:418,//盒子的高度
        w:1000,//盒子的宽度
        h:390,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:0,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:20,//控制按钮高度
        radius:10,//控制按钮圆角度数
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#93d46f",//当前控制按钮的颜色
        isShowNum:true //是否显示数字
    });
     //公共 手风琴效果
     $('.sliderbar li').hover(function(){
        //把当前li下面的h4隐藏起来  $('h4',this)  表找 h4 在 this里面找
            $('h4',this).slideUp(1);
        //换li下面p标签的字体颜色
             $('p',this).addClass('cf60');

        //把当前li下面的div显示出来
        // $(this).find('div').removeClass('hide');
            $('div',this).slideDown(1);

        //把当前li以外的其它li标签里面的标题显示, div隐藏
            $(this).siblings().find('h4').slideDown(1);
            $(this).siblings().find('div').slideUp(1);
            $('p',this).siblings().removeClass('cf60');
    });
    /* 固定头部js */
    //给window注册滚动事件
    $(window).scroll(function(){
        //获取滚动条的距离
       var sTop=$(this).scrollTop();
        //判断如果条滚动的高度大于500显示固定头部，否则影藏起来
        if(sTop>500){
            //显示头部固定
            $('#fixedHead').slideDown();
            //将搜索框追加到固定头部中
            $('.search').appendTo('#fixedHead');

        }else{
            //影藏固定头部
            $('#fixedHead').slideUp();
            //将搜索框追加回页面头部
            $('#fixedHead .search').appendTo('.searchBox');
        }
    })
    //返回顶部按钮
        //定义关闭按钮的初始状态
        var state='on';
        //点击top按钮回到顶部
        topbtn.onclick=function(){
            //利用定时器制作动画效果
            var i=300;
            var timer=setInterval(function(){
                var y=scrollY-i;//相当于初速度为300，一直减到40时，保持匀速减少。
                //当滚动条位置已经是最顶部，就不需要在滚动了，清除定时器
                if(y<=0){
                    clearInterval(timer);
                }
                if(i>=40){//如果速度已经小于40，就切换到匀速
                    i-=20;
                }
                window.scroll(0,y);
            },50);
        }
        //点击关闭按钮就关闭按钮盒子
        closebtn.onclick=function(){
            this.parentNode.style.display='none';
            state='off';//关闭后，定义按钮的状态为关闭。
        }
        //当高度滑动超过200时，按钮盒子就出现，否则按钮盒子就影藏
        window.onscroll=function(){
            if(scrollY>=200 && state=='on'){
                btns.style.display='block';
            }else{
                btns.style.display='none';
            }
        };
})