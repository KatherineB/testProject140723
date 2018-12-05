<?php 
session_start();

if(isset($_POST['user_id']) && isset($_POST['pw']))
{
 echo "It was set" . "....";
 $nam = $_POST['user_id'];
 $pass = $_POST['pw'];
}
else{
	echo "It was not set" . "....";
}

echo $nam . "....";
echo $pass . "....";


$_SESSION['username'] = $_POST['user_id'];
$_SESSION['password'] = $_POST['pw'];

if($nam == 'kb'){
	$_SESSION['dept'] = "admin";
}
else{
	$_SESSION['dept'] = "tech";
}

header("location:login_check.php");


?>