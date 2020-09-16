var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
ajax_.open('get', 'http://192.168.1.47:3000/useing/public', true);
ajax_.send();
ajax_.onreadystatechange = function () {
    if (ajax_.readyState == 4 && ajax_.status == 200) {
        var data = ajax_.responseText;
        // 2.找数据源
        data = JSON.parse(data);
        // console.log(data);
        var innerT = doT.template(document.getElementById('first_').innerText);
        // console.log(innerT(data.list))

        document.getElementById('get_').innerHTML = innerT(data);
        var li = $('.two_').find('li');
        for (var i = 0; i < li.length; i++) {
            if (i % 4 == 3) {
                li[i].style.marginRight = '0px';
            }
        }
    }
}
