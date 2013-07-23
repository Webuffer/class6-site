// 技术论坛模块上下显示和隐藏效果
// 还有一个功能没有实现，即由 + 号变回 - 号
function iconHide(i){
	$("#techContent"+i).slideToggle("slow");
	$("#hideIcon"+i+" i").removeClass("icon-minus");
	$("#hideIcon"+i+" i").addClass("icon-plus");
}