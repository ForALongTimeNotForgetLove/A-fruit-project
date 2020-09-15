var tel_patt=/^1[3578]\d{9}$/;
var chec=/^\d{4}$/;
var pass=/^\w{6,10}$/;
$('form').on('submit',function(){  
    if(tel_patt.test($('.tel').val())){
        if($('.check_img').val()!='r2b7'){
            alert('图片校验码不正确'); 
        }else if(chec.test($('.check_num').val())==false){
            alert('请输入4位数字验证码'); 
        }else if(pass.test($('.pwd').val())==false){
            alert('请输入6-10位密码'); 
        }else if($('.repwd').val()!=$('.pwd').val()){
            alert('两次密码输入不一致');
        }else{ 
            $.ajax({
                url:'http://192.168.1.47:3000/users',
                type:"post",
                data:{
                    type:'register',
                    phone: $('.tel').val(),
                    pass: $('.pwd').val()
                },
                success(res){
                    alert(res); 
                }
            })
 
        }
    }else{
        alert('手机号格式不正确');
    }
})
// 获取验证码倒计时
var n=0;
var timer=null;
$('.btn').one('click',function cli(){  
    n=60; 
    timer=setInterval(function(){
        n--;
        $('.btn').val('请'+n+'秒后重试'); 
        if(n<=0){
            clearInterval(timer);
            $('.btn').val('获取验证码'); 
            $('.btn').one('click',cli);  
        } 
    },1000)
})









// $.post('http://192.168.1.47:3000/user/regist',{
//     username:'admin',
//     password:'123456'
// })
