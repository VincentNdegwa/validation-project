<?php
$dbServer =  "localhost";
$dbusername ="vincent-pc";
$dbpassword = "vincent-pc";
$dbname = "users";

$connectDb = new mysqli($dbServer, $dbusername, $dbpassword, $dbname);

// if (!$connectDb) {
//     die("data base failed to connect");
// }else{
//     echo "database connected";
// }
