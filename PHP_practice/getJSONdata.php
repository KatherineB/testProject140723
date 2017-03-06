<?php
   /* echo $_GET['file'];
	echo $_GET['top'];
	echo $_GET['deep'];*/
	
	/*print_r($_GET);*/
	
	$file = $_GET['file'];
	$top = $_GET['top'];
	$deep = $_GET['deep'];
	
	echo $file;
	echo $top;
	echo $deep;
	
	$str = file_get_contents($file);
	$json = json_decode($str, true);
	echo '<pre>' . print_r($json, true) . '</pre>';
	for($i=0;$i<3;$i++){
	   $data = $json['members'][$i+1][$deep];
	   echo $data;
	}
	 
?>