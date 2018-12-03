<?php
   /* 
	echo $_GET['top'];
	echo $_GET['deep'];*/
	
	/*print_r($_GET);*/
	
	$file = "members.json";
	$top = $_GET['top'];
	$deep = $_GET['deep'];
	
	/*echo $file;*/
	echo $top;
	echo $deep;
	
	$str = file_get_contents($file);
	$json = json_decode($str, true);
	
    $memberCount = count($json['members']);
	echo $memberCount;
	
	/*echo '<pre>' . print_r($json, true) . '</pre>';*/
	
	for($i=0;$i<$memberCount;$i++){
	   $data = $json['members'][$i+1][$deep];
	   echo $data;
	}
	
	echo $json['members'][1]['year_joined'];

	 
?>