$('.one>.t1').find('a[href=#]').parent().css('border-bottom' ,'6px solid red')
$('.one>.t1').find('a[href=#]').css('color','red')
$('.two_1').on('click',function(){
    $(this).find('img').attr('src','./../../image/小图片/loading-icon.gif')
    $(this).find('span').text('请等待')
 })
 var li = $('.two').find('li');
 for(var i=0;i<li.length;i++){
     if(i%4 == 3){
        li[i].style.marginRight = '0px';
     }
 }