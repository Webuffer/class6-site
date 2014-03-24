$(function(){
var pageDiv1=new jsPage("list","all","p1","1"); 
pageMethod.call(pageDiv1);

var pageDiv2=new jsPage("list2","all","p2","5"); 
pageMethod.call(pageDiv2);
})//$

function pageMethod(){
var obj=this;
obj.resetTotal(); 
obj.reloadpage("1",obj.list_class);
obj.page(); //生成页码
ready2go.call(obj);
}

function ready2go(){
var obj=this;
$("#"+obj.page_obj_id+" a").live("click",function(){ //点击页码的时候跳到相应页 
obj.target_p=parseInt($(this).attr("p"));
gotopage.call(obj,obj.target_p);
}) 
}

function showClass(list,x,pDiv,pSize){ 
var pObj=new jsPage(list,x,pDiv,pSize); 
pageMethod.call(pObj); 
}

function jsPage(list_id,list_class,page_obj_id,pagesize){
// list_id 结果集UL的id
// list_class 要显示的类别
// page_id 存放页码的id
// pagesize 每页显示多少条
this.list_obj_id=list_id;
this.list_Obj=$("#"+list_id);
this.li=$("#"+list_id+" li");
this.li.hide();
this.page_obj_id=page_obj_id;
this.page_obj=$("#"+page_obj_id); //存放页码的div
this.list_class=list_class; // 类别 
if(list_class=="all"){
this.results=this.li.length; // 总记录数等于所有记录
}else{
this.results=$("#"+list_id+" li."+list_class).length; // 总记录数等于指定类别的li数 
} 

this.totalpage; // 总页数
this.pagesize=pagesize; //每页记录数
this.cpage=1; //当前页,默认显示第一页
this.count; 
this.target_p;
this.curcount;
this.outstr= ""; // 输出页码html 
}//jsPage

function gotopage(target){ 
this.cpage = target; //把页面计数定位到第几页
this.page();
this.reloadpage(target,this.list_class); 
}

jsPage.prototype.reloadpage=function(p,resultType){
this.li.hide();
for(var i=this.pagesize*p-this.pagesize;i<this.pagesize*p;i++){ 
if(resultType=="all"){
this.li.eq(i).show();
}else{
$("#"+this.list_obj_id+" li."+resultType).eq(i).show();
}
} 
}
jsPage.prototype.resetTotal=function(){ 
if(this.results==0){
this.totalpage=0;
this.cpage=0;
}else if(this.results<=this.pagesize){
this.totalpage=1;
}else if(parseInt(this.results/this.pagesize)==1){
this.totalpage=2;
}else if(parseInt(this.results/this.pagesize)>1 && this.results%this.pagesize==0){
this.totalpage=this.results/this.pagesize;
}else{
this.totalpage=parseInt(this.results/this.pagesize)+1;
} 
}//resetTotal()

jsPage.prototype.page=function(){
if(this.totalpage<=5){ //总页数小于五页 页码以五页为单位
for (this.count=1;this.count<=this.totalpage;this.count++) { 
if(this.count!=this.cpage) {
this.outstr = this.outstr + "<a href='javascript:void(0)' p='"+this.count+"' >"+this.count+"</a>";
}else{
this.outstr = this.outstr + "<span class='current' >"+this.count+"</span>";
}
}
}
if(this.totalpage>5){ //总页数大于十页
if(parseInt((this.cpage-1)/5) == 0) { 
for (this.count=1;this.count<=5;this.count++) { 
if(this.count!=this.cpage) {
this.outstr = this.outstr + "<a href='javascript:void(0)' p='"+this.count+"' >"+this.count+"</a>";
}else{
this.outstr = this.outstr + "<span class='current'>"+this.count+"</span>";
}
}
this.outstr = this.outstr + "<a href='javascript:void(0)' p='"+this.count+"' >&raquo;</a>";
}else if(parseInt((this.cpage-1)/5) == parseInt(this.totalpage/5)){ 
this.outstr = this.outstr + "<a href='javascript:void(0)' p='"+(parseInt((this.cpage-1)/5)*5)+"' >&laquo;<\/a>";
for (this.count=parseInt(this.totalpage/5)*5+1;this.count<=this.totalpage;this.count++) { 
if(this.count!=this.cpage) {
this.outstr = this.outstr + "<a href='javascript:void(0)' p='"+this.count+"' >"+this.count+"</a>";
}else{
this.outstr = this.outstr + "<span class='current'>"+this.count+"</span>";
}
}
} else { 
var lastP;
this.outstr = this.outstr + "<a href='javascript:void(0)' p='"+(parseInt((this.cpage-1)/5)*5)+"' >&laquo;<\/a>";
for (this.count=parseInt((this.cpage-1)/5)*5+1;this.count<=parseInt((this.cpage-1)/5)*5+5;this.count++){ 
if(this.count!=this.cpage) {
this.outstr = this.outstr + "<a href='javascript:void(0)' p='"+this.count+"' >"+this.count+"</a>";
}else{
this.outstr = this.outstr + "<span class='current'>"+this.count+"</span>";
}
if(this.count==this.totalpage){
lastP="";
}else{
lastP="<a href='javascript:void(0)' p='"+(this.count+1)+"' >&raquo;</a>";
}
} 
this.outstr = this.outstr + lastP;
}
} 
document.getElementById(this.page_obj_id).innerHTML = "<div><span  id='info' >" + this.outstr + "<\/div>";
this.outstr = "";
}