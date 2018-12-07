<?php
    print_r($_GET);
	
	echo "<br />";
	
	$file = "clubmemberinfo.json";
	$id_number = $_GET['mid'];
	$first_name = $_GET['fn'];
	$last_name = $_GET['ln'];
	
	/*echo $file;*/
	echo $id_number;
	echo $first_name;
	echo $last_name;
	
	echo "<br />";
	
	$str = file_get_contents($file);
	$json = json_decode($str, true);
	

	
    $memberCount = count($json['clubmemberinfo']);
	echo $memberCount;
	
	echo "<br />";
	
	//echo '<pre>' . print_r($json, true) . '</pre>';
	
	for($i=0;$i<$memberCount;$i++){
       if($id_number == $json['clubmemberinfo'][$i]["id_number"]){
		   echo $json['clubmemberinfo'][$i]['first_name'] . ' ';
		   echo $json['clubmemberinfo'][$i]['last_name'] . "<br />";
		   echo $json['clubmemberinfo'][$i]['year_joined'];	   
	   }  
	}
	
	echo "<br />";

    print_r($json['clubmemberinfo'][0]['involvement']);

	 
?>