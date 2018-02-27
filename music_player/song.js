﻿var d=0;
function picrotate()
{
	//console.log(0);
	d+=0.1;
	if(d>360)
	{
		d=d-360;
	}

		document.getElementById("me").style.transform = "rotate(" + d + "deg)";
}
var songObj=function()
{
	this.name;
	this.islike;
	this.lyr;
	this.image_id;
	this.singer;
	this.id;
}
songObj.prototype.init = function(a,b,c,e,f,h) {
	this.name=a;
	this.image_id=b;
	this.singer=c;
	this.islike=h;
	this.lyr=e;
	this.id=f;
	//this.isdownload=false;
	//alert("hi");
	// body...
};
songObj.prototype.update=function()
{
	//更新图片
	var width=300;
	var html='<img id="me" style="filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity: 1;opacity: 1;" src="https://api.hibai.cn/music/Qmusic/Music?id='+this.image_id+'&type=pic">';
	$('#pic').html(String(html));
	setInterval("picrotate()",200);
	//更新简介
	html='<span style="font-size:16px;">'+this.name+'</span>'+
			'<span style="font-size:16px">--'+this.singer+'</span><br>'+
			'<span style="font-size:14px">未知专辑</span>';
		$('#intro').html(String(html));
	//更新音乐
	this.updateMusic();
	//更新heart
	this.showHeart();
	//this.showTrashbin();
	this.changelink();
	//在更新音乐时更新this.duration和currentTime
};
songObj.prototype.updateMusic=function()
{
	var html;
	html='<audio src="https://api.hibai.cn/music/Qmusic/Music?id='+this.id+'&type=url" id="play" style="margin-left:20px;"></audio>';
	//console.log(this.id);
	$('#music').html(String(html));
	var musicplay=document.getElementById('play');
	musicplay.addEventListener("canplay", function(){
		var time=parseInt(musicplay.duration);
		var minutes=parseInt(time/60);
		var seconds=parseInt(musicplay.duration)-minutes*60;
		if(minutes<10)
	{
		minutes='0'+minutes;
	}
	if (seconds<10) {seconds='0'+seconds;}
		var sc='/'+minutes+':'+seconds;
		$('#duration').html(String(sc));
		});
	var sc='00:00';
	$('#currenttime').html(String(sc));

	musicplay.addEventListener('timeupdate',function(){  if (!isNaN(musicplay.duration)) {

            var progressValue = musicplay.currentTime/musicplay.duration; //用时间比来获取进度条的值
            if(progressValue == 1){
                progressValue=0;//当播放完成，进度条跳到开始
            }
            drawprocess(progressValue);
            showCurrentTime(musicplay.currentTime);
        }},false);
	//监听媒体文件结束的事件（ended），这边一首歌曲结束就读取下一首歌曲，实现播放上的循环播放
                             musicplay.addEventListener('ended', function(){
								if(num==0)
								{
									alert("后台没有歌曲！");
									return;
								}
								else
								{
									index+=1;
									index%=num;
									isplay=true;
									//改照片，改歌词，改简介，改div-music
									songs[index].update();
									var player=document.getElementById("play");
						      		player.play();
						      		var html='<img src="src\\begin-icon.png" style="width:40px;height:40px;">';
						       		$('#pauseb').html(String(html));
						       		showLyric();
						       		console.log("from ened");
								}}, false);

};
songObj.prototype.showHeart=function()
{
	if(this.islike==true)
	{
		var html='<img src="src\\like-icon.png" style="width:20px;height:20px;">';
       	$('#heartb').html(String(html));
	}
	else
	{
		var html='<img src="src\\unlike-icon.png" style="width:20px;height:20px;">';
       	$('#heartb').html(String(html));
	}
};
songObj.prototype.changeHeart=function()
{
	var like=0;
	if(this.islike==false)
	{
		this.islike=true;
		like=1;
	}
	else
	{
		this.islike=false;
	}
	this.showHeart();
	$.ajax(
	{
		type:'GET',
		url:"http://139.199.64.191:8080/player/changeheart.jsp?id="+this.id+"&islike="+like,
		success:function(data)
		{
		}
	}
		);
}
songObj.prototype.changelink=function()
{
	var url='http://ws.stream.qqmusic.qq.com/'+this.id+'.m4a?fromtag=46';
	var html='<a href="'+url+'"><img src="src\\download-icon.png" style="width:25px;height:25px;"></a>';
	$('#download').html(String(html));
	//this.isdownload=true;
};
songObj.prototype.download=function()
{
	var html='<a href="src\\'+index+'.rar"><img src="src\\download-icon.png" style="width:25px;height:25px;"></a>';
	$('#download').html(String(html));
	//this.isdownload=true;
};