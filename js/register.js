var tel_patt=/^(13[0-9]|14[0-9]|15[0-9]|166|17[0-9]|18[0-9]|19[8|9])\d{8}$/g;
var chec=/^\d{4}$/;
$('form').on('submit',function(){  
    if(tel_patt.test($('.tel').val())){
        if($('.check_img').val()!='r2b7'){
            alert('图片校验码不正确'); 
        }else if(chec.test($('.check_num').val())==false){
            alert('请输入4位数字验证码'); 
        }else if($('.user').val()!='admin'){
            alert('请使用初始用户名');
        }else if($('.pwd').val()!=1234){
            alert('请使用初始密码'); 
        }else if($('.repwd').val()!=$('input[name=rePassword]').val()){
            alert('两次密码输入不一致');
        }else{
            alert('注册成功');
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
