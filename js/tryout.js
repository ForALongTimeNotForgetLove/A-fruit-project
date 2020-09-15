$('.two_1').on('click',function(){
    $(this).find('img').attr('src','./../../image/小图片/loading-icon.gif')
    $(this).find('span').text('请等待')
 })
 $('.one').find('a[href=#]').parent().css('border-bottom' ,'6px solid red');
