<?php
    echo $_GET['file'];
	echo $_GET['top'];
	echo $_GET['deep'];
	
	print_r($_GET);
	
	$top = $_GET['top'];
	
	echo $top;
	
	$str = file_get_contents('members.json');
	$json = json_decode($str, true);
	echo '<pre>' . print_r($json, true) . '</pre>';
	
	$year_joined = $json['members'][$top]['year_joined'];
	echo $year_joined;
?>