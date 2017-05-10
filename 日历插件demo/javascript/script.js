var month_leap = [31,29,31,30,31,30,31,31,30,31,30,31];
var month_normal = [31,28,31,30,31,30,31,31,30,31,30,31];
var month_name = ["January","Febrary","March","April","May","June","July","Auguest","September","October","November","December"];


var my_date = new Date();
var my_year = my_date.getFullYear();
var my_month = my_date.getMonth();
var my_day = my_date.getDate();


var oYear = document.getElementById("year");
var oMonth = document.getElementById("cur_month");
var oYearList = document.getElementsByClassName("year-list")[0];
var oMonthList = document.getElementsByClassName("month-list")[0];
var oYearLi = oYearList.getElementsByTagName("li");
var oMonthLi = oMonthList.getElementsByTagName("li");
var holder = document.getElementById("days"); 
var oDateLi = holder.getElementsByTagName("li");
var back = document.getElementsByClassName("back")[0];

//定义一个改变显示日期的函数
function changeDate(){
	oYear.onclick = function(){
		oYearList.style.display = oYearList.style.display == "none" ? "block" : "none";
		oMonthList.style.display = "none";
	}
	oMonth.onclick = function(){
		oMonthList.style.display = oMonthList.style.display == "none" ? "block" : "none";
		oYearList.style.display = "none";
	}
	for(var i = 0; i < oYearLi.length; i++){
		oYearLi[i].onclick = function(){
			oYear.innerHTML = this.innerHTML;
			my_year = parseInt(this.innerHTML);
			refreshDate();
			oYearList.style.display = "none";
		}
	}
	for(var i = 0; i < oMonthLi.length; i++){
		oMonthLi[i].onclick = function(){
			oMonth.innerHTML = this.innerHTML;
			my_month = parseInt(this.innerHTML) - 1;
			refreshDate();
			oMonthList.style.display = "none";
		}
	}
}
changeDate();

//创建回到今天的函数
function backToday(){
	back.onclick = function(){
		my_year = my_date.getFullYear();
		my_month = my_date.getMonth();
		oYear.innerHTML = my_year + '年';
		oMonth.innerHTML = my_month + 1 + '月';
		refreshDate();
	}
}
backToday();

//获取某年某月的第一天是星期几
function dayStart(year, month){
	var tmpDate = new Date(year, month, 1);
	return tmpDate.getDay();
}

//判断某一年是不是闰年，获取某个月的总天数
function daysMonth(year, month){
	if((year % 4 == 0 && year %100 != 0) || year % 400 == 0){
		return month_leap[month];
	} else{
		return month_normal[month];
	}
}

//创建一个refreshDate函数来生成月份显示
function refreshDate(){
	var content = "";
	var totalDay = daysMonth(my_year, my_month); //获取该月总天数
	var firstDay = dayStart(my_year, my_month); //获取该月第一天是星期几
	var myclass;
	for(var i = 1; i < firstDay; i++){ 
		content += "<li></li>"; //为起始日之前的日期创建空白节点
	}
	for(var i = 1; i <= totalDay; i++){
		if (i==my_day && my_year==my_date.getFullYear() && my_month==my_date.getMonth()){
			myclass = " class = 'green'"; //当该日期是当天时
		}else if((i + firstDay) % 7 == 0 || parseInt((i + firstDay) % 7) == 1){
			myclass = " class = 'red'"; //获取一个月中哪些天是周六和周日，字体变红
		}else{
			myclass = "";
		}
		content += "<li" + myclass + ">" + i + "</li>"; //创建日期节点
	}
	holder.innerHTML = content; //设置日期显示	
	DateBgColor();
}
refreshDate();

//内容为空的li鼠标移入背景颜色不变
function DateBgColor(){
	for(var i = 1; i <= 32; i++){
		if(oDateLi[i].innerHTML != ''){
			oDateLi[i].onmouseover = function(){
				this.style.backgroundColor = '#13D04E';
			}
			oDateLi[i].onmouseout = function(){
				this.style.backgroundColor = '';
			}
		}
	}	
}















