var ul3=document.getElementById("ul3");
ul3.children[0].style.border="none";
var u5=document.getElementById("u5");
u5.children[7].style.paddingRight=0+"px";
//滚轮事件
var cover=document.getElementsByClassName('box1')[0];
window.onscroll=function(){
	var st=document.documentElement.scrollTop||document.body.scrollTop;
	if(st>180){
		cover.style.position='fixed'
		cover.style.zIndex=1;
	}else{
		cover.style.position='static'
	}
}
//轮播事件
var timer; 
var timer1;
var nbx1=document.getElementById("newbx1");
var nbx2=document.getElementById("newbx2");
var imgList=document.getElementById("imgList");
var img1=imgList.getElementsByTagName("img");
imgList.style.width=img1.length*800+"px";
var outer=document.getElementById("outer");
var navDiv=document.getElementById("navDiv");
navDiv.style.left=(outer.offsetWidth-navDiv.offsetWidth)/2+"px";
index=0;
var tag=0;
function change(){
timer1=setInterval(function(){
	index++;
	tag=index;
	if(index>img1.length-1){
		index=0;
		imgList.style.left=0;
	}
	//imgList.style.left= -809*index+"px";
	//setA();
	move(imgList,-800*index,20,function(){
				setA();
		});
	},2000)
	
}
change();
var alist=navDiv.getElementsByTagName("li");
function setA(){
	for(var i=0;i<alist.length;i++){
		alist[i].style.backgroundColor="#efeeec";
		alist[index].style.backgroundColor="#fe6c00";
	}
}
imgList.onmouseover=function(){
	clearInterval(timer1);
	nbx1.style.display="block";
	nbx2.style.display="block";
}
nbx1.onmouseover=function(){
	clearInterval(timer1);
	nbx1.style.display="block";
	nbx2.style.display="block";
}
nbx2.onmouseover=function(){
	clearInterval(timer1);
	nbx1.style.display="block";
	nbx2.style.display="block";
}

nbx1.onclick=function(){
	clearInterval(timer);
	tag=tag-1;
	if(tag<0){
		tag=5;
	}
	imgList.style.left=-800*tag+"px";
	index=tag;
	setA();
}
nbx2.onclick=function(){
	clearInterval(timer);
	tag=tag+1;
	if(tag>5){
		tag=0;
	}
	imgList.style.left=-800*tag+"px";
	index=tag;
	setA();
}

imgList.onmouseout=function(){
	change();
	nbx1.style.display="none";
	nbx2.style.display="none";
}
//轮播事件2
var bxul=document.getElementById("bxul");
var liList=bxul.getElementsByTagName("li");
var index1=0;
//liList[0].style.marginTop=-358+"px";
//alert(liList[0].offsetTop);
var old=liList[0].offsetTop;
setInterval(function(){
	index1++;
	if(index1==359){
	 	index1=2;
	}
	liList[0].style.marginTop=-index1+"px";
},30)
//move函数1
function move(obj,target,speed,callback){
		clearInterval(obj.timer);
		var current=obj.offsetLeft;
		//判断向左向右
		if(current>target){
			speed=-(speed);
		}
		obj.timer=setInterval(function(){
				//获取数值
			oldLeft=obj.offsetLeft;
				
		//更改数值
			var newLeft=parseInt(oldLeft+speed);
				//判断目标地址
			if((speed<0&&newLeft<target)||(speed>0&&newLeft>target)){
				newLeft=target;
				clearInterval(obj.timer);
				callback&&callback();
			}
			obj.style.left=newLeft+"px";
				// if(newLeft==target){
				// 	clearInterval(timer);
				// }
			},30)
		}
//move函数2
function move2(obj,target,speed,callback){
		clearInterval(obj.timer);
		var current=obj.offsetTop;
			//判断向左向右
		if(current>target){
				speed=-(speed);
			}
			obj.timer=setInterval(function(){
				//获取数值
				oldLeft=obj.offsetTop;
				
				//更改数值
				var newLeft=parseInt(oldLeft+speed);
				//判断目标地址
				if((speed<0&&newLeft<target)||(speed>0&&newLeft>target)){
					newLeft=target;
					clearInterval(obj.timer);
					callback&&callback();
				}
				box1.style.top=-newLeft+"px";
				// if(newLeft==target){
				// 	clearInterval(timer);
				// }
			},30)
		}
//鼠标事件
var body=document.body;
var bx2=document.getElementsByClassName("bx2")[0];
var id3=document.getElementById("id3");
var im=id3.getElementsByTagName("img")[1];
id3.onmouseover=function(){
	im.src="img/erwei.png";
}
id3.onmouseout=function(){
	im.src="";
}

//导航按钮
var alli=navDiv.getElementsByTagName('li');
for(var i=0;i<alli.length;i++){
	alli[i].num=i;
	alli[i].onclick=function(){
		clearInterval(timer1);
		index=this.num;
		imgList.style.left=-800*index+"px";
		setA();
	}
}

//充值点击事件
var fo1=document.getElementById("fo1"); 
var se1=document.getElementById("se1");
var sp1=document.getElementById("sp1");
var op1=document.getElementById('op1');
var btn01=document.getElementById("btn01");
var ip1=fo1.getElementsByTagName('option')[0];
var a=true;
fo1.onclick=function(){
	if(a){
		var op2=document.createElement("option");
		var op3=document.createElement("option");
		var op4=document.createElement("option");
		op2.innerHTML="10";
		op3.innerHTML="50";
		op4.innerHTML="100";
		se1.appendChild(op2);
		se1.appendChild(op3);
		se1.appendChild(op4);
	}
	a=false;
}
fo1.onchange=function(){
	sp1.innerHTML="¥"+se1.value;
}