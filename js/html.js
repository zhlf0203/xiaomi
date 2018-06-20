/*
* @Author: msi-pc
* @Date:   2018-06-08 11:31:36
* @Last Modified by:   msi-pc
* @Last Modified time: 2018-06-15 09:33:31
*/


// 导航下啦
window.onload=function(){
	let qqq1=document.getElementById("qqq1");
	let qqq2=document.getElementById("qqq2");
	// console.log(qqq1,qqq2);
	qqq1.onmouseenter=function() {
		qqq2.style.height="98px";
		qqq2.style.boxShadow="0 1px 5px 1px rgba(0,0,0,0.4)";
	}
	qqq1.onmouseleave=function() {
		qqq2.style.height="0";
		qqq2.style.boxShadow="none";
	}
// 导航侧拉
	let lunbotu=document.getElementsByClassName("lunbotu")[0];
	let lis=lunbotu.getElementsByTagName("li");
	let chz=document.getElementsByClassName("chz");
	console.log(lunbotu,lis,chz);
	for (let i=0;i<lis.length;i++) {
		lis[i].onmouseenter=function() {
			chz[i].style.display="block";
		}
		lis[i].onmouseleave=function() {
			chz[i].style.display="none";
		}
	}
// 家电
	function xxk(zhineng){
		// let zhineng=document.getElementsByClassName("zhineng")[0];
		let lis1=zhineng.getElementsByTagName("li");
		let bottom=zhineng.getElementsByClassName("bottom");
		let hez111=zhineng.getElementsByClassName("hez111");
		console.log(zhineng,lis1,hez111);
		for (let i=0;i<lis1.length;i++) {
			lis1[i].onmouseenter=function() {
				for (let j=0;j<lis1.length;j++){
					hez111[j].style.display="none";
					lis1[j].style.color="#000";
					lis1[j].style.borderBottom="none"
				}
				hez111[i].style.display="block";
				lis1[i].style.color="#ff6700";
				lis1[i].style.borderBottom="2px solid #ff6700";
			}
		}
	}
	let zhineng=document.getElementsByClassName("zhineng")[0];
	let zhineng1=document.getElementsByClassName("zhineng")[1];
	let zhineng2=document.getElementsByClassName("zhineng")[2];
	xxk(zhineng);
	xxk(zhineng2);
	xxk(zhineng1);

	// 导航
	let daohangbox=document.getElementsByClassName("daohangbox")[0];
	let aa=daohangbox.getElementsByClassName("aa");
	let xiala=document.getElementsByClassName("xiala")[0];
	let xialabox=daohangbox.getElementsByClassName("xialabox");
	console.log(daohangbox,aa,xiala,xialabox);

	for (let i=0;i<aa.length;i++){
		aa[i].onmouseenter=function() {
			for (let j=0;j<xialabox.length;j++){
				xialabox[j].style.height="230px";
				xialabox[j].style.display="none";
			}
			xiala.style.height="230px";
			xiala.style.boxShadow="0 1px 1px 1px rgba(0,0,0,0.4)";
			xiala.style.borderTop="1px solid rgba(0,0,0,0.4)"
			xialabox[i].style.display="block";
		}
		aa[i].onmouseleave=function() {
			xiala.style.height="0";
			xiala.style.boxShadow="none";
			xiala.style.borderTop="none";
			for (let j=0;j<aa.length;j++){
				xialabox[j].style.height="0";
			}
		}

	}

	// 轮播图
	// 
	let img=document.querySelectorAll(".lunbotu .bt1 a img");
	console.log(img);
	let dian=document.querySelectorAll(".lunbotu .dian li");
	console.log(dian);
	// let lun=document.getElementsByClassName("lunbotu")[0];
	// console.log(lun);
	let left=lunbotu.getElementsByClassName("sanjiao")[0];
	let right=lunbotu.getElementsByClassName("sanjiao1")[0];
	console.log(left,right);

	let index=0;
	let t=setInterval(back,2000);
	img[0].style.zIndex=10;
	dian[0].className="hot";
	function back(){
		index++;
		if(index==img.length){
			index=0;
		}
		img.forEach(function(val){
			val.style.zIndex=5;
		})
		dian.forEach(function(val){
			val.className="";
		})
		img[index].style.zIndex=10;
		dian[index].className="hot";
	}
	function back1(){
		index--;
		if(index<0){
			index=img.length-1;
		}
		img.forEach(function(val){
			val.style.zIndex=5;
		})
		dian.forEach(function(val){
			val.className="";
		})
		img[index].style.zIndex=10;
		dian[index].className="hot";
	}
	lunbotu.onmouseenter=function(){
		clearInterval(t);
	}
	lunbotu.onmouseleave=function(){
		t=setInterval(back,2000);
	}
	left.onclick=function(){
		back1();
	}
	right.onclick=function(){
		back();
	}
	for (let i=0;i<dian.length;i++) {
		dian[i].onclick=function(){
			img.forEach(function(val){
				val.style.zIndex=5;
			});
			dian.forEach(function(val){
				val.className="";
			});
			img[i].style.zIndex=10;
			dian[i].className="hot";
			index=i;
		}
	}

	// 内容
	// 
	function cela(box){
	let neirong=document.querySelector(".neirong");
	let bottom=neirong.querySelector(".bottom");
	// let box=bottom.querySelector(".box");
	let liss=box.querySelectorAll("li");
	let dian1=box.querySelectorAll(" .dian dl");
	let left1=box.querySelector(".hez1");
	let right1=box.querySelector(".hez2");
	let boxwidth=parseInt(getComputedStyle(box,null).width);
	console.log(neirong,bottom,left1,right1,dian1,liss,boxwidth);
	let index1=0;
	let next=0;
	let flag=true
	// let boxwidth=296;
	function move(){
		next++;
		if(next==liss.length){
      		next=0;
      	}
		liss[next].style.left=boxwidth+"px";
		animate(liss[index1],{left:-boxwidth});
		animate(liss[next],{left:0},function(){
      	 	flag=true
     	 });
		dian1[index1].classList.remove("hot1");
		dian1[next].classList.add("hot1");
		index1=next;
	}
	function movel(){
		next--;
		if(next<0){
      		next=liss.length-1;
      	}
		liss[next].style.left=-boxwidth+"px";
		animate(liss[index1],{left:boxwidth});
		animate(liss[next],{left:0},function(){
      	 	flag=true;
      	});
		dian1[index1].classList.remove("hot1");
		dian1[next].classList.add("hot1");
		index1=next;
	}
	dian1.forEach(function(ele,i){
		ele.onclick=function(){
			if(index1==i){
            		return;
            }
			if(index1<i){
				liss[i].style.left=boxwidth+'px';
				animate(liss[index],{left:-boxwidth});
				animate(liss[i],{left:0});
			}
			if(index1>i){
				liss[i].style.left=-boxwidth+'px';
				animate(liss[index1],{left:boxwidth});
				animate(liss[i],{left:0}); 
			}
			dian1[index1].classList.remove('hot1');
			dian1[i].classList.add('hot1');
			next=index1=i;
		}
	})

	left1.onclick=function(){
		if(!flag){
			return;
		}
		if(next<=0){
			return;
		}
		flag=false;
		movel();
	}
	right1.onclick=function(){
		if(!flag){
			return
		}
		if(next==liss.length-1){
			return;
		}
		flag=false;
		move();
	}
	}



	let box4=document.querySelectorAll(".neirong .bottom .box");
	console.log(box4);
	cela(box4[0]);
	cela(box4[1]);
	cela(box4[2]);
	cela(box4[3]);


	let xiangou=document.querySelector(".xiangou");
	let bottom1=xiangou.querySelector(".bottom");
	let box1=bottom1.querySelectorAll(".box");
	let top=xiangou.querySelector(".top");
	let zou=top.querySelector(".box1");
	let you=top.querySelector(".box2");
	let kuandu=parseInt(getComputedStyle(bottom1,null).width)/3;
	// console.log(xiangou,bottom1,box1,top,zou,you,kuandu);

	let times=0;
	you.onclick=function(){
		times++;
		if(times==3){
			times=2;
		}
		
		bottom1.style.transform=`translateX(${-kuandu*times}px)`;
		
	}
	zou.onclick=function(){
		times--;
		if(times<0){
			times=0;
		}
		bottom1.style.transform=`translateX(${-kuandu*times}px)`;
		
	}

}