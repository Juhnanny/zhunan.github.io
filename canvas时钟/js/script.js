var clock = document.getElementById('clock');
var context = clock.getContext('2d');
var width = context.canvas.width;
var height = context.canvas.height;
var radius = width / 2;
var scale = width / 200

var drawBackground = function(){
	context.save();
	context.translate(radius, radius);//将坐标原点移动到圆心
	context.beginPath();
	context.lineWidth = 8 * scale; //设置线宽
	context.arc(0, 0, radius - context.lineWidth / 2, 0, 2 * Math.PI, false);
	context.stroke();

	var hoursList = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];
	context.font = 18 * scale + 'px Arial'; //设置字体
	context.textAlign = 'center'; 
	context.textBaseline = 'middle';

	//绘制1-12的数字
	hoursList.forEach(function(hour, i){
		var rad = 2 * Math.PI / 12 * i; //获取某个数字的弧度
		var x = Math.cos(rad) * (radius - 25 * scale); //由弧度求出x坐标
		var y = Math.sin(rad) * (radius - 25 * scale); //由弧度求出y坐标
		context.fillText(hour, x, y); //绘制文本
	})

	//绘制表盘上的时刻点
	for(var i = 0; i < 60; i++){
		var rad = 2 * Math.PI / 60 * i;
		var x = Math.cos(rad) * (radius - 13 * scale);
		var y = Math.sin(rad) * (radius - 13 * scale);
		context.beginPath();
		if(i % 5 == 0){ //整点
			context.fillStyle = '#000';
			context.arc(x, y, 2 * scale, 0, 2 * Math.PI, false);
		}else{ //非整点
			context.fillStyle = '#686868';
			context.arc(x, y, 1.5 * scale, 0, 2 * Math.PI, false);
		}
		context.fill();
	}
}

//绘制时针
var drawHour = function(hour, minute){
	context.save();
	context.beginPath();
	var rad = 2 * Math.PI / 12 * hour; //小时的弧度
	var mrad = 2 * Math.PI / 12 / 60 * minute; //分钟的弧度
	context.rotate(rad + mrad);
	context.lineWidth = 5 * scale;
	context.lineCap = 'round'; 
	context.moveTo(0, 8 * scale);
	context.lineTo(0, -radius + 45 * scale);
	context.stroke();
	context.restore();
}

//绘制分针
var drawMinute = function(minute){
	context.save();
	context.beginPath();
	var rad = 2 * Math.PI / 60 * minute;
	context.rotate(rad);
	context.lineWidth = 3 * scale;
	context.lineCap = 'round';
	context.moveTo(0, 8 * scale);
	context.lineTo(0, -radius + 35 *scale);
	context.stroke();
	context.restore();
}

//绘制秒针
var drawSecond = function(second){
	context.save();
	context.beginPath();
	context.fillStyle = '#CC0000';
	var rad = 2 * Math.PI / 60 * second;
	context.rotate(rad);
	context.moveTo(-2 * scale, 10 * scale);
	context.lineTo(2 * scale, 10 * scale);
	context.lineTo(1, -radius + 25 * scale);
	context.lineTo(-1, -radius + 25 * scale);
	context.fill()
	context.restore();
}

//绘制三个针的交叉点
var drawDot = function(){
	context.beginPath();
	context.fillStyle = '#fff';
	context.arc(0, 0, 2 * scale, 0, 2 * Math.PI, false);
	context.fill();
}

//动态的绘制时间
function draw(){
	context.clearRect(0, 0, width, height);
	var now = new Date(); //获取当前时间
	var hours = now.getHours();
	var minutes = now.getMinutes();
	var seconds = now.getSeconds();
	drawBackground();
	drawHour(hours, minutes);
	drawMinute(minutes);
	drawSecond(seconds);
	drawDot();
	context.restore();
}
draw();
setInterval(draw, 1000);//每隔一秒绘制一次











