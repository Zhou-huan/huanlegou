/* 银行卡点击添加事件 */
$(function(){
    $('.pays>span').click(function(){
        $(this).toggleClass('active');
    });
    /* 成功遮蔽层 */
    let pass;
        nowBtn.onclick=function(){
        //再次点击时，设置body默认样式为显示
        meng.style.display='block';
        //获取网页的宽度和高度
        var w=document.documentElement.clientWidth;
        var h=document.documentElement.clientHeight;

        //设置蒙层的宽高  ES5写法
         meng.style.width=w+'px';
         meng.style.height=h+'px';
        meng.style.background='rgba(0,0,0,0.5)';
        message.style.display='block';
        //修改内容为成功
        pass='恭喜你，支付成功！';
        $('#message h3').text(pass);
         //换成功图片
         $('#message img').prop('src','./imgs/weixiao.jpg');
    }

    
    prov.onclick=function(){
        meng.style.display='none';
    }
     /* 失败遮蔽层 */
     let stops;
     otherBtn.onclick=function(){
        //再次点击时，设置body默认样式为显示
        meng.style.display='block';
        //获取网页的宽度和高度
        var w=document.documentElement.clientWidth;
        var h=document.documentElement.clientHeight;

        //设置蒙层的宽高  ES5写法
         meng.style.width=w+'px';
         meng.style.height=h+'px';
        meng.style.background='rgba(0,0,0,0.5)';
        message.style.display='block';
        //修改内容为失败
        texts='亲，此时不支持该方式';
        $('#message h3').text(texts);
        //换失败图片
        $('#message img').prop('src','./imgs/shibai.jpg');
    }
})