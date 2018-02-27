<?php
$url=$_POST['txt'];
 if(!empty($url))
 {
	$res = file_get_contents($url);
	echo $res;
}
?>