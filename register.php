<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./page.css">

</head>

<body>
    <Main>
        <div class="form-container">
            <form action="./register.php" method="post">

                <h1>Register</h1>
                <p class="error"></p>

                <label>
                    Username:
                    <input type="text" name="user-name" class="user-name">
                </label>

                <label>
                    Email:
                    <input type="text" name="email" class="email">
                </label>

                <label>
                    Password:
                    <input type="text" name="password1" class="password1 password">
                    <i class="bi bi-eye-slash-fill"></i>
                </label>

                <label>
                    Password:
                    <input type="text" name="password2" class="password2 password">
                    <i class="bi bi-eye-slash-fill"></i>
                </label>
                <button type="submit">Register</button>
            </form>
            <h2>You have an account?<a href="./login.php" target="_self">Login</a></h2>
        </div>
    </Main>
    <script src="./js/register.js"></script>
</body>

</html>
<?php
include("./db/database.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["user-name"];
    $useremail = $_POST["email"];
    $password1 = $_POST["password1"];
    $password2 = $_POST["password2"];

    if (($password1 == $password2)) {
        $insertQuery = "INSERT INTO data(username, password) VALUES ('$username', '$password1')";
        if (mysqli_query($connectDb, $insertQuery)) {
            echo "<p class=server-msg>User registered</p>";
            $selectQuery = "SELECT * FROM data WHERE username = '$username' AND password = '$password1' ";
            $results = mysqli_query($connectDb, $selectQuery);
            if (!$results) {
                echo "<p class=server-msg>Try to loggin manually the auto loging failed</p>";
            } else {
                if (mysqli_num_rows($results) > 0) {
                    while ($row = mysqli_fetch_assoc($results)) {
                        $currentUser = $row['username'];
                    }
                    header("Location: dashboard.php?username={$currentUser}");
                }
            };
        } else {
            echo "<p class=server-msg>Failed to register: " . mysqli_error($connectDb) . "</p>";
        }
    } else {
        echo "<p class=server-msg>Please confirm your password</p>";
    }

    mysqli_close($connectDb);
}
?>