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
$res=$_GET['arr'];
$arr=explode(",",$res);
$islike=$arr[1];
$id=$arr[0];
if($islike==true)
{
	$islike=1;
}
else
{
	$islike=0;
}
$sql="update music_list set islike='$islike' where id='$id'";
mysql_query($sql);
mysql_close($conn);
?>