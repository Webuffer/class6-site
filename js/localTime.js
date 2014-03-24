//首页生日获取当前时间
window.onload=localTime;

function localTime(){
	var d=new Date();             // 定义一个新日期
	var year=d.getFullYear();             // 获取年份
	var month=d.getMonth()+1;      // 获取月份，注意要加1
	month=(month<10)?('0'+month):month;   // 格式化月份
	var day=d.getDate();               // 获取当前日数
	day=(day<10)?('0'+day):day;          // 格式化日数
	today=year+'.'+month+'.'+day;         // 格式化整体日期 
	document.getElementById('date').innerHTML=today;        // 输出日期
}