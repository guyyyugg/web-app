<?php
include('cors.php');
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "webapp";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$pos= $_POST['pos'];
$smoson = $_POST['smoson'];
$first_name= $_POST['first_name'];
$last_name= $_POST['last_name'];
$thai_name= $_POST['thai_name'];
$history= $_POST['history'];
$img1= $_POST['img1'];
$img2 = $_POST['img2'];
$img3= $_POST['img3'];
$img4= $_POST['img4'];
$sql = "INSERT INTO `home11` (`pos`, `smoson`, `first_name`, `last_name`, `thai_name`, `history`, `img1`, `img2`, `img3`, `img4`) VALUES ('$pos', '$smoson', '$first_name', '$last_name' , '$thai_name', '$history', '$img1', '$img2', '$img3', '$img4');";
// $userData = mysqli_query($conn,"select * from tbl_sample");
// $response = array();

// while($row = mysqli_fetch_assoc($userData)){

//    $response[] = $row;
// }

// echo json_encode($response);

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>