var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
ajax_.open('get', 'http://192.168.1.47:3000/useing/public', true);
ajax_.send();
var get = Date.now();
ajax_.onreadystatechange = function () {
    if (ajax_.readyState == 4 && ajax_.status == 200) {
        var data = ajax_.responseText;
        // 2.找数据源
        data = JSON.parse(data);
       
        var innerT = doT.template(document.getElementById('first_').innerText);
        // console.log(innerT(data.list))

        document.getElementById('get_').innerHTML = innerT(data);
        
        var li = $('.two_').find('li');
        for (var i = 0; i < li.length; i++) {
            if (i % 4 == 3) {
                li[i].style.marginRight = '0px';
            }
        }
        // var p = $('.two_').find('.text_').text();
        // p.text('1111');
        // console.log(p)
        var time_=[];
        var res = [];
        data.forEach(function(item,index){
            time_.push(new Date(item.endTime).getTime())
        });
        
        for(var i =0;i<time_.length;i++){
            if(get<=time_[i]){
                res.push('已过期')
                // $('.time').text('已过期');
            }else if(get>time_[i]){
                var ti = get-time_[i];
                var h = Math.floor(ti / 1000 / 60 / 60 % 24);
                res.push('还剩'+h+'时')
                // $('.time').text('还剩'+h+'时');
            }
        }
        
            $('#get_').find('li').find('.time').each(function(index,item){
                $(item).text(res[index])
            });
      
        
        
        // console.log(time_)
        // console.log(res)
        // var f_n = ;
        // var f_ = f_n;
        
        // var f__=f_-get;
        // console.log(f__);
        // var y = Math.floor(f__/1000/60/60/24/365);
        // var d = Math.floor(f__ / 1000 / 60 / 60 / 24);
	    // var h = Math.floor(f__ / 1000 / 60 / 60 % 24);
        // console.log('申请时间剩余：' + y + '年' + d + '天' + h + '小时');
    }
}