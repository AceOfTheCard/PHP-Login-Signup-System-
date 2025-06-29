<?php 

  include "connection.php";

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    $email = $_POST["email"];
    $password = $_POST["pass"];

    $stmt = $conn->prepare("SELECT * FROM users WHERE email = ? ");
    $stmt->bind_param("s",$email);
    $stmt->execute();
    $results = $stmt->get_result();

    if($results->num_rows > 0){
        $row = $results->fetch_assoc();
        if(password_verify($password,$row["password"])){
            header("Location:../html/login.html?messg=Logged In successfully");
        }
    }
    
  }

?>