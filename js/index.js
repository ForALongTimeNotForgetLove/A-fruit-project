setInterval(function() {
	var now = new Date();
	var now_time = now.getTime();
	var f_n = new Date(2020, 10, 1);
	var f_n_time = f_n.getTime();
	var time_1 = f_n_time - now_time;
	var d = Math.floor(time_1 / 1000 / 60 / 60 / 24);
	var h = Math.floor(time_1 / 1000 / 60 / 60 % 24);
	var m = Math.floor(time_1 / 1000 / 60 % 60);
	document.getElementsByClassName('time')[0].innerText = ('申请时间剩余：' + d + '天' + h + '小时' + m + '分钟');
}, 1000);
$(function(){
	var width = 1000;
	var firsts = $('#center>div>ul>li').first().clone();
	$('#center>div>ul').append(firsts).width($('#center>div>ul>li').length*width)
	var timer = null;
	var delay = 2000;
	timer = setInterval(li,delay);
	var i = 0;
	function li(){
		++i;
		var speed = 1000;
		if(i == $('#center>div>ul>li').length-1){
			i = 0;
			$('#center>div>ul').css({left:0});
		}
		$('#center>div>ul').stop().animate({left:-i*width},speed)
	}
})


