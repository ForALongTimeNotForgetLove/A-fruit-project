$('.two_1').on('click',function(){
    $(this).find('img').attr('src','./../../image/小图片/loading-icon.gif')
    $(this).find('span').text('请等待')
 })
 $('.one').find('a[href=#]').parent().css('border-bottom' ,'6px solid red');


 function zan(){
    $('.red').on('click',function(){
        if($(this).hasClass('re') !=true){
           $(this).attr('src','../../image/小图片/dianzan.png');
           var three = $(this).next('span').text()-0;
           $(this).next('span').text(three+1);
           $(this).addClass('re');
        }else{
           $(this).attr('src','../../image/小图片/zan.png');
           var three = $(this).next('span').text()-0;
           $(this).next('span').text(three-1);
           $(this).removeClass('re');
        }
    })
}