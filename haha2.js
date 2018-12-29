// var cover=document.getElementsByClassName('box1')[0];
// window.onscroll=function(){
// 	var st=document.documentElement.scrollTop||document.body.scrollTop;
// 	if(st>180){
// 		cover.style.position='fixed'
// 		cover.style.zIndex=1;
// 	}else{
// 		cover.style.position='static'
// 	}
// }
//选择容量
var btn02=document.getElementById("btn02");
var btn01=document.getElementById("btn01");
var im1=btn01.getElementsByTagName('img')[0];
var im2=btn02.getElementsByTagName('img')[0];
var sp2=document.getElementById("sp2");
btn01.onclick=function(){
	btn02.style.border="none";
	im2.src="img/duigou1.png";
	im1.src="img/duigou.png";
	sp2.innerHTML="150ml";
	btn01.style.border="1px solid #ff0754";
}
btn02.onclick=function(){
	btn01.style.border="none";
	im1.src="img/duigou1.png";
	im2.src="img/duigou.png";
	sp2.innerHTML="200ml";
	btn02.style.border="1px solid #ff0754";
}
//选择数量
var ip1=document.getElementById("ip1");
var five=document.getElementById("five");
var btn03=document.getElementById("btn03");
var btn04=document.getElementById("btn04");
btn03.onclick=function(){
	if(ip1.value==1){
		ip1.value=1;
	}else{
		ip1.value--;
		five.innerHTML=6-ip1.value;
	}
}
btn04.onclick=function(){
	if(ip1.value==6){
		ip1.value=6;
	}else{
		ip1.value++;
		five.innerHTML=6-ip1.value;
	}
}
//滑动图片
var bt1=document.getElementById("bt1");
var bt2=document.getElementById("bt2");
var Bimg=document.getElementById("bg");
var imb2=document.getElementById("imb2");
var imb1=document.getElementById("imb1");
var imbx=document.getElementById("imbx");
bt2.onclick=function(){
	imbx.src="img/pp1.jpeg";
	Bimg.src="img/pp1.jpeg";
	imb1.style.border="none";
	imb2.style.border="1px solid #ff9003";
}
bt1.onclick=function(){
	imbx.src="img/pp0.jpeg";
	Bimg.src="img/pp0.jpeg";
	imb2.style.border="none";
	imb1.style.border="1px solid #ff9003";
}
//选择图片
var imb1=document.getElementById("imb1");
var imb2=document.getElementById("imb2");
imb2.onclick=function(){
	imbx.src="img/pp1.jpeg";
	Bimg.src="img/pp1.jpeg";
	imb1.style.border="none";
	imb2.style.border="1px solid #ff9003";
}
imb1.onclick=function(){
	imbx.src="img/pp0.jpeg";
	Bimg.src="img/pp0.jpeg";
	imb2.style.border="none";
	imb1.style.border="1px solid #ff9003";
}
//放大镜
var bxx1=document.getElementById("bxx1");
var mobx=document.getElementById("mobx");
var imbx=document.getElementById("imbx");
var movebox=document.getElementById("movebox");
bxx1.onmousemove=function(event){
	event=event||window.event;
	left=event.pageX-15-movebox.offsetWidth;
	top1=event.pageY-230-movebox.offsetHeight/2;
	movebox.style.top=top1+"px";
	movebox.style.left=left+"px";
	mobx.style.display="block";
	movebox.style.display="block";

	//大图定位
	bleft=left+bxx1.offsetWidth-movebox.offsetWidth-230;
	btop=top1+50;
	Bimg.style.top=-btop+"px";
	Bimg.style.left=-bleft+"px";
}
bxx1.onmouseout=function(){
	mobx.style.display="none";
	movebox.style.display="none";
}
movebox.onmouseover=function(){
	movebox.style.display="block";
}
//添加购物车
var body=document.body;
var doc=document.documentElement;
var btn06=document.getElementById("btn06");
var bbox=document.getElementById("bbox");
var sbx=document.getElementById("sbx");
var back=document.getElementById("back");
var con=document.getElementById("con");
btn06.onclick=function(){
	bbox.style.display="block";
	sbx.style.display="block";
	var a=body.clientHeight;
	var b=body.clientWidth;
	var hei=sbx.offsetHeight;
	var sc=doc.scrollTop;
	var h=(a-hei)/2-150;
	sbx.style.top=h+"px";
	sbx.style.left=(b-sbx.offsetWidth)/2+"px";
	bbox.style.height=a+"px";
	bbox.style.width=b+"px";
	
}
back.onclick=function(){
	bbox.style.display="none";
	sbx.style.display="none";
}
con.onclick=function(){
	bbox.style.display="none";
	sbx.style.display="none";
}
