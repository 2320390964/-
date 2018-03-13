var num=10;
var balloons=[];
window.onload=init;
/*init函数 生成num个气球并且初始化位置*/
function init()
{
	
	var frame=document.createDocumentFragment();
	for(var i=0;i<num;i++)
	{
		//appendchild
		var child=document.createElement("div");
		child.className="balloons";
		//修改position
		child.style.top=window.innerHeight-160+'px';
		child.style.left=Math.max(~~(window.innerWidth*Math.random()-160),0)+'px';
		child.speed=(~~(Math.random()*100));
		frame.appendChild(child);
	}
	if(document.body != null){ document.body.appendChild(frame);}
	balloons=document.getElementsByClassName("balloons");
	console.log(balloons);
	//让气球动起来
	move();
	console.log(balloons[1].speed);
	//监听点击事件
	for(i=0;i<num;i++)
	{
		balloons[i].addEventListener("click", function(e){
    	boom.call(e.target);
	},false);
	}
	
}
function move()
{
	for(var i=0;i<balloons.length;i++)
	{
		balloons[i].style.top=balloons[i].offsetTop-balloons[i].speed+'px';
		if(balloons[i].offsetTop<-160)
		{
			balloons[i].parentNode.removeChild(balloons[i]);
		}
	}
	setTimeout("move()",200);
}
function boom()
{
	//气球变小，速度变大
	this.timer=setInterval(function(){
		this.speed++;
		this.style.width=this.offsetWidth-10+'px';
		this.style.height=this.offsetHeight-10+'px';
		if(this.offsetWidth<60)
		{
			this.parentNode.removeChild(this);
		}
	}.bind(this),1000/30);
}
