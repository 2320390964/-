

/*搜索*/
function getSearch()
{
  islyric=false;
  //showLyric();
    var key=$('#search').val();
    //var number = 23;
   key=key.replace(/\s/g, "");
   var d='{"TransCode":"020336","OpenId":"123456789","Body":{"key":"'+key+'"}}';
  d=JSON.parse(d);
    $.post("https://api.hibai.cn/api/index/index", 
        d, function(data) {
      
      if(data['ErrCode']!="OK")
      {
        alert("无法搜索到该歌曲");
      }
        var html='<div class="song" id="song" style="border-bottom: 1px solid gray;border-right:1px solid gray;">歌曲名</div><div class="singer" id="singer"  style="border-bottom: 1px solid gray;">歌手</div>';
        $('#lyric').html(String(html));
         console.log(data['Body']);
        data['Body'].forEach(
            //value
            function(value)
            {
                var a=value["url"];
               // console.log(a);
                var songid=a.match(/Music\?id=(\S*)&type=url/);
                songid=songid[1];
                var name=value['title'];
                var singer=value['author'];
                a=value["pic"];
                var pic=a.match(/Music\?id=(\S*)&type=pic/);
                pic=pic[1];
                a=value["lrc"];
                var lyr=a.match(/Music\?id=(\S*)&type=lrc/);
                lyr=lyr[1];
                arr=songid+','+name+','+'0,'+singer+','+pic+','+lyr;
                var h1="<a href='#' onclick='creatLocal(\""+arr+"\")'>"+"<span class='song'>"+name+"</span>"+"<span class='singer'>"+singer+"</span></a><div class='clear'></div>";
                 $('#lyric').append(String(h1));
                }
              )
            })
}


