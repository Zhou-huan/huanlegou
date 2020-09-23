$(function(){
    $('#myform').validate({
        rules:{//规则 通过input标签上的name来选择器指定的标签
            user:{
                required:true,//要执行规则，必须要有
                userrule:true,
               
            },
            pwd:{
                required:true,
                pwdrule:true,

            },
            surepwd:{
                required:true,
                repwdrule:true,

            },
            tel:{
                required:true,
                telrule:true,
            },
            vcode:{
                required:true,
                vcoderule:true,
            },
            telcode:{
                required:true,
                telcoderule:true,
            }

        },
        messages:{//提示信息
            user:{
                required:'请输入用户名',
            },
            pwd:{
                required:'请输入密码',
            },
            surepwd:{
                required:'请再次输入密码',
            },
            tel:{
                required:'请输入电话号码',
            },
            vcode:{
                required:'请填写验证码',
            },
            telcode:{
                required:'请输入手机验证码'
            }
        }
    });
    //自定义验证规则
   //用户名验证
   jQuery.validator.addMethod('userrule',function(value,element){
    var username=/^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
    return this.optional(element)||(username.test(value));
    },'字母开头，允许5-16字节，允许字母数字下划线');
    //密码输入验证
    jQuery.validator.addMethod('pwdrule',function(value,element){
        var password=/^[a-zA-Z]\w{5,17}$/;
        return this.optional(element)||(password.test(value));
        },'以字母开头，长度在6~18之间，只能包含字母、数字和下划线');
         //密码再次输入验证
    jQuery.validator.addMethod('repwdrule',function(value,element){
        var repass=/^[a-zA-Z]\w{5,17}$/;
        return this.optional(element)||(repass.test(value));
        },'两次密码不一样');
     // 电话号码验证 
     jQuery.validator.addMethod('telrule',function(value,element){
        var telp=/^[A-Za-z0-9]{11}$/;
        return this.optional(element)||(telp.test(value));
    },'请输入正确的电话号码额');
    //验证码
    jQuery.validator.addMethod('vcoderule',function(value,element){
        var code=/^[A-Za-z0-9]{4}$/;
        return this.optional(element)||(code.test(value));
    },'由4位数字和26个英文字母组成的字符串');
    //手机验证码
    jQuery.validator.addMethod('telcoderule',function(value,element){
        var tcode=/^[A-Za-z0-9]{6}$/;
        return this.optional(element)||(tcode.test(value));
    },'由6位数字和26个英文字母组成的字符串');

    //同意协议功能
    $('.isagree').change(function(){
        let status=$(this).prop('checked');
        if(status){
           $('.btn') .css({
               'background':'#f60',
           }).prop('disabled' ,!status);
        }else{
            $('.btn') .css({
                'background':'#ccc',
            }).prop('disabled' ,!status);
        }
    })
})