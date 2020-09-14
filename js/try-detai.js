// 倒计时
setInterval(function() {
	var now = new Date();
	var now_time = now.getTime();
	var f_n = new Date(2020, 9, 1);
	var f_n_time = f_n.getTime();
	var time_1 = f_n_time - now_time;
	var d = Math.floor(time_1 / 1000 / 60 / 60 / 24);
	var h = Math.floor(time_1 / 1000 / 60 / 60 % 24);
	var m = Math.floor(time_1 / 1000 / 60 % 60);
	document.getElementsByClassName('time')[0].innerText = ('申请时间剩余：' + d + '天' + h + '小时' + m + '分钟');
}, 1000);
