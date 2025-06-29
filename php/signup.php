<?php 
 
 include "connection.php";

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    
    $name = $_POST["name"];
    $surname = $_POST["surname"];
    $age = $_POST["age"];
    $email = $_POST["email"];
    $password = $_POST["pass"];

    $checkStmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
    $checkStmt->bind_param("s",$email);
    $checkStmt->execute();
    $results = $checkStmt->get_result();

    if($results->num_rows>0){
       header("Location: ../html/login.html?error=" . urlencode("User already registered"));
       exit();

    }else{

        $hashed_password = password_hash($password, PASSWORD_DEFAULT);
        $stmt =  $conn->prepare("INSERT INTO users(name,surname,age,email,password) VALUES (?,?,?,?,?)");
        $stmt->bind_param("ssiss",$name,$surname,$age,$email,$hashed_password);
        $success = $stmt->execute();
        if($success){
            header("Location:../html/login.html");
            exit();
        }else{
            echo "Something went wrong" . $conn->error ;
        }
    }
 }




 
 





?>