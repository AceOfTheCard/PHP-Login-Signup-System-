<?php 
   
   session_start();

   // establishing a connection 
   $username = "root";
   $password = "";
   $servername = "localhost";
   $dbname = "users";

   $conn = new mysqli($servername, $username, $password, $dbname);
   if(!$conn){
     die("Couldn't establish a connection");
   }

   session_destroy();




?>