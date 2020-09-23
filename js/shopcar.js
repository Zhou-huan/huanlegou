//文档加载
$(function(){
    //功能1：全选
    $('.allSelect').change(function(){
        //获取全选的checked的状态值
        let status=$(this).prop('checked');
        //把商品列表中的状态设置成全选的状态
        $('.sigleSel').prop('checked',status);
        //把另一个全选设置成同步状态值
        $('.allSelect').prop('checked',status);
        //调用计算总价和总量
        allTotals();

    });
    //设置当所有单选框都勾选时，全选框才勾选
    $('.sigleSel').change(function(){

         //调用计算总价和总量
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
    //数量增加减少
    //为添加按钮设置点击事件
    $('.addNum').click(function(){
        //取消手型禁用
        $('.reduce').css({'cursor':'pointer'});
        //获取数量框中的值
        let num=$(this).siblings('.cont').val();
        //点击时，将值加一
        num++;
        //再将加完的值丢进数量框中
        $(this).siblings('.cont').val(num);
        //调用小计的方法
        minTatol(this,num);
         //调用计算总价和总量
         allTotals();
    })
    //为删除按钮设置点击事件
    $('.reduceNum').click(function(){
         //获取数量框中的值
        let num=$(this).siblings('.cont').val();
        //点击时，将值减一
        num--;
        //判断，当值小于1时，设置按钮鼠标属性为禁用，跳出循环
        if(num<1){
            $(this).css({'cursor':'not-allowed'});
            return;
        }
        //将减完的值丢回数量框中
        $(this).siblings('.cont').val(num);
        //调用小计的方法
        minTatol(this,num);
         //调用计算总价和总量
         allTotals();
    });
    //封装小计方法
    function minTatol(obj,sNum){
         //拿到单价框中的单价
         let sPrice=$(obj).closest('tr').find('.unitprice').text();
         //数量乘以单价计算小计
         let all=(sPrice*sNum).toFixed(2);
         //再将合计放回小计框中
         $(obj).closest('td').next().text(all);
    }
    //封装计算总价方法
    function allTotals(){
        //定义变量来存总价和总数量
        let allp=0;
        let allnum=0;
        $('.sigleSel:checked').each(function(){
            //获取选中商品的数量和
           let nums= parseInt($(this).closest('tr').find('.cont').val());
           //将数量累计得出总数量
           allnum+=nums;
           //获取选中商品的小计
           let sprices=parseInt($(this).closest('tr').find('.subtotal').text());
           allp+=sprices;
        })
        //输出到网页中
        //把总数设置到 .total
        $('.counts').text(allnum);
        //总价格
        //处理数据
        allp=allp.toFixed(2);
        //将总价设置到 .total
        $('.total').text(allp);
    };
    //删除商品行操作
        //点击删除按钮时，对商品行进行删除
        $('.removed').click(function(){
            $(this).closest('tr').remove();
        });
        //点击删除全部商品时，对勾选的商品进行删除
        $('.removeSel').click(function(){
            $('.sigleSel:checked').each(function(){
                $(this).closest('tr').remove();
            })
        });
})