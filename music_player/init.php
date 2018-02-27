<?php
	header("Content-Type: text/html; charset=utf-8");
	session_start();

	$conn =new mysqli("localhost","root","root","music_website");
    if ($conn->connect_errno){  
      prinf("数据库连接失败: " . $conn->connect_error);  
      exit();
    }

   	mysqli_query("set character set 'utf8'");
   	mysqli_query("set names 'utf8'"); 

	$sql="select count(*) from music_list";
	$query=$conn->query($sql);
	$result=mysqli_fetch_array($query);
	echo "\n\n";
	//echo $result[0];//歌曲数量
	if($result[0])
	{
		$sql="select * from music_list";
		$query=$conn->query($sql);
		$data=array();
		while($res=mysqli_fetch_array($query,MYSQLI_ASSOC))
		{
			array_push($data,$res);
		}
		echo json_encode($data);
	}
	$conn>close();
?>