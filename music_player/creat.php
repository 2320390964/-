<?php
//插入数据库操作
	header("Content-Type: text/html; charset=utf-8");
	session_start();
	$conn =new mysqli("localhost","root","root","music_website");
    if ($conn->connect_errno){  
      prinf("数据库连接失败: " . $conn->connect_error);  
      exit();
    }
   	mysqli_query("set character set 'utf8'");
   	mysqli_query("set names 'utf8'");
	$res=$_POST['arr'];
	$res=str_replace('\'','\\\'',$res);
	$res=str_replace('"','\"',$res);
	$arr=explode(",",$res);
	//arr=songid+','+name+','+'0,'+singer+','+pic+','+lyr;
	$songid=$arr[0];
	$songname=$arr[1];
	$image_id=$arr[4];
	$singer=$arr[3];
	$lyr=$arr[5];
	$s="insert into list (name,id,image_id,lyr,singer) values ('".$songid."','".$songid."','".$image_id."','".$lyr."','".$singer."')";
	//echo $s;
	if($conn->query($s)=== TRUE)
	{
		//phpinfo();
	}
	else
	{
		echo "Error: " . $s . "<br>" . $conn->error;
	}
	$conn->close();
?>