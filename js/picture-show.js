//轮播特效的实现
window.onload = function() {
	var list = document.querySelector('.picture-show ul');
	var button = document.querySelectorAll('.picture-num span');
	var autoTimer = timer = null;
	var box = document.querySelector('.news-left');
	var index = 0;
	var i = 0;

	//鼠标点击onclick下面数字上，可以跳到对应图片（或者onmouseover）
	for(i=0; i<button.length; i++){
		button[i].index = i;
		button[i].onclick = function(){
			clear();
			this.className = 'current-pic';
			index = this.index;
			startMove(-(index*403));	//负号为反方向
		}
	}
	//清除当前的样式名
	function clear(){
		for(i=0; i<button.length; i++){
			button[i].className = '';
		}
	}
	//自动翻转
	function autoCutover(){
		clear();
		index < button.length-1 ? index++ : index = 0;
		button[index].className = 'current-pic';

		startMove(-(index*403));
	}
	
	function startMove(target){
		clearInterval(timer);
		timer = setInterval(function(){
			doMove(target);
		},30);
	}
	//Math.ceil()和Math.floor()都是截取数字整数部分，不同的是ceil()总是比较大，floor()总是比较小
	function doMove(target){
		var speed = (target-list.offsetLeft)/5;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		list.offsetLeft == target ? clearInterval(timer) : list.style.left = list.offsetLeft + speed + 'px';
	}

	autoTimer = setInterval(autoCutover,2000);

	//鼠标停留在图片上时，停止转动
	box.onmouseover = function(){
		clearInterval(autoTimer);
	}

	box.onmouseout = function(){
		autoTimer = setInterval(autoCutover,2000);
	}
}

