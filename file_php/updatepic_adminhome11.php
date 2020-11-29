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
$id= $_POST['updatepicc'];
$img1= $_POST['Pic1'];
$img2 = $_POST['Pic2'];
$img3= $_POST['Pic3'];
$img4= $_POST['Pic4'];


$sql = "UPDATE `home11` SET `img1` = '$img1', `img2`= '$img2' , `img3`= '$img3', `img4`= '$img4' WHERE `id`= $id";
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