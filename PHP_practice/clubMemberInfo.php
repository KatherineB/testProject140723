<?php
  //  print_r($_GET);
	
	//echo "<br />";
	
	$search_type = $_GET['field'];
	$search_term = $_GET['st'];
	
	if($search_type === 'mid'){
		$id_number = $_GET['st'];
		$search_item = $id_number;
		$item = 'id_number';
	}
	else if($search_type === 'fn'){
		$first_name = $_GET['st'];
		$search_item = $first_name;
		$item = 'first_name';
	}
	else if($search_type === 'ln'){
		$last_name = $_GET['st'];
		$search_item = $last_name;
		$item = 'last_name';
	}
	else{
		echo "Error: Search type not valid";
	}
	
	$file = "clubmemberinfo.json";

	
	//echo "<br />";
	
	$str = file_get_contents($file);
	$json = json_decode($str, true);
	

	
    $memberCount = count($json['clubmemberinfo']);
//	echo $memberCount;
	
//	echo "<br />";
	
	echo "<!DOCTYPE>
		<html>
		<head><title>Club Member List</title>
		<link href='clubMemberInfo.css' rel='stylesheet'>
		</head> 
		<body>";
	
	//echo '<pre>' . print_r($json, true) . '</pre>';
	
	echo "<div class='title'>Club Membership List</div>
	      <div class='search-label'> Club Members Found: </div>	
	
	       
	";
	
	for($i=0;$i<$memberCount;$i++){
       if($search_item == $json['clubmemberinfo'][$i][$item]){
		   echo "<div class='found-text'> Membership Number:" . $json['clubmemberinfo'][$i]['id_number'] . '</div><br />';
		   echo "<div class='found-text'>" . $json['clubmemberinfo'][$i]['first_name'] . ' ';
		   echo $json['clubmemberinfo'][$i]['last_name'] . "</div><br />";
		   echo "<div class='found-text'> Joined:" . $json['clubmemberinfo'][$i]['year_joined']  . "</div><br />";	  
           echo "<br />";		
	   }  
	}
	
	echo "</body></html>";

 //   print_r($json['clubmemberinfo'][0]['involvement']);

	 
?>