$(function(){
    /* 导航部分 */
    $('.vipnav a').hover(function(){
        $(this).addClass('on').siblings('a').removeClass('on');
    });
    /* 删除列表行操作 */
    $('.mainRight .remove').click(function(){
        $(this).closest('tr').remove();
    })
     //点击删除全部商品时，对勾选的商品进行删除
        $('.removeSel').click(function(){
            $('.sigleSel:checked').each(function(){
                $(this).closest('tr').remove();
            })
        });
    //功能1：全选
    $('.allSelect').change(function(){
        //获取全选的checked的状态值
        let status=$(this).prop('checked');
        //把商品列表中的状态设置成全选的状态
        $('.sigleSel').prop('checked',status);
        //把另一个全选设置成同步状态值
        $('.allSelect').prop('checked',status);
        allTotals();
    });
     //设置当所有单选框都勾选时，全选框才勾选
     $('.sigleSel').change(function(){
        allTotals();
        //制定标杆来判定是否给全部进行选中
        let flag=true;
        //获取每一个.sigleSel的状态值 $(this).prop('checked')只能获取当前
        //使用遍历来获取每一个.sigleSel的状态值
        $('.sigleSel').each(function(index,value){
           let status= $(this).prop('checked');
           //判定每一个的状态值，只要有一个false那么就执行if语句
           //设置标杆状态值为false
           if(!status){//如果为false
            //改变标杆状态值，中止程序
               flag=false;
               return false;
           };
        })
        //判定标杆状态来设置全选按钮的状态值
        if(flag){
            $('.allSelect').prop('checked',true);
        }else{
            $('.allSelect').prop('checked',false);
        }
    });
    /* 封装方法计算总价 */
    //封装计算总价方法
    function allTotals(){
        //定义变量来存总价
        let allp=0;
        $('.sigleSel:checked').each(function(){
           //获取选中商品的小计
           let sprices=parseInt($(this).closest('tr').find('.unitprice').text());
           allp+=sprices;
        })
        //输出到网页中
        //总价格
        //处理数据
        allp=allp.toFixed(2);
        //将总价设置到 .total
        $('.total').text(allp);
    };
})