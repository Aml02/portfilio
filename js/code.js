var x=document.getElementById("lg-bg");
var y=document.getElementById("sm-bg");
var z=document.getElementsByClassName("nav-item");
function change1(){
	x.style.backgroundImage="url(images/purple-lg-bg.png)";
	y.style.backgroundImage="url(images/purple-bg.png)";
	z[0].style.borderTopColor="#f1f1f1";
	z[1].style.borderTopColor="transparent";
	z[2].style.borderTopColor="transparent";
	z[3].style.borderTopColor="transparent";
	
}function change2(){
	x.style.backgroundImage="url(images/green-lg-bg.png)";
	y.style.backgroundImage="url(images/green-bg.png)";
	z[0].style.borderTopColor="transparent";
	z[1].style.borderTopColor="#f1f1f1";
	z[2].style.borderTopColor="transparent";
	z[3].style.borderTopColor="transparent";
	
}function change3(){
	x.style.backgroundImage="url(images/blue-lg-bg.png)";
	y.style.backgroundImage="url(images/blue-bg.png)";
	z[0].style.borderTopColor="transparent";
	z[1].style.borderTopColor="transparent";
	z[2].style.borderTopColor="#f1f1f1";
	z[3].style.borderTopColor="transparent";
	
}function change4(){
	x.style.backgroundImage="url(images/orange-lg-bg.png)";
	y.style.backgroundImage="url(images/orange-bg.png)";
	z[0].style.borderTopColor="transparent";
	z[1].style.borderTopColor="transparent";
	z[2].style.borderTopColor="transparent";
	z[3].style.borderTopColor="#f1f1f1";
	
}
/*****************************************************************************/
var background=document.getElementsByClassName("bg-projects");
var source=[
	"images/1.png",
	"images/2.png",
	"images/3.png",
	"images/4.png",
	"images/5.png",
	"images/6.png",
	"images/7.png",
	"images/8.png",
	"images/9.png",
	"images/10.png",
	"images/11.png",
	"images/12.png"
]
for(var i=0;i<background.length;i++){
    for(var s=0;s<source.length;s++){
		if(i=s){
			background[i].style.backgroundImage="url("+source[s]+")";
		}
	}
	
}