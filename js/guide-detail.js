// 点击喜欢
$('.img1,.img2').on('click',function(){
    $(this).hide();
    $(this).siblings('img').show(); 
})
$('.img1').on('click',function(){
    $('.main_right span').text(' 16');
})
$('.img2').on('click',function(){
    $('.main_right span').text(' 15');
})

// 点击分享
$('.main_right>li').eq(1).find('img').on('click',function(){
    $('.bshare-custom').toggle();
})  
$('.bshare-custom a').on('click',function(){
    $('.img3').hide();
    $('.img3').siblings('img').show();
}) 