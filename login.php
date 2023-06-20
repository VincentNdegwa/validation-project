<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validation</title>
    <link rel="stylesheet" href="./page.css">
</head>

<body>
    <Main>
        <div class="form-container">
            <form action="./login.php" method="post">
                <p class="error"></p>
                <h1>Login</h1>
                <label>
                    Username:
                    <input type="text" name="user-name" class="user-name">
                </label>
                <label>
                    Password:
                    <input type="text" name="password" class="password">
                    <i class="bi bi-eye-slash-fill"></i>
                </label>
                <button type="submit">Login</button>
            </form>
            <h2>You don't have an account?<a href="./register.php" target="_self">Register</a></h2>
            <h4>Forgot password <a href="./forgot.php" target="_self">forget</a></h4>

        </div>
    </Main>
    <script src="./js/login.js"></script>
</body>
<?php
include("./db/database.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST["user-name"];
    $password = $_POST['password'];

    $selectQuery = "SELECT * FROM data WHERE username = '$username'";
    $result = mysqli_query($connectDb, $selectQuery);

    if ($result) {
        if (mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                $dbUsername = $row['username'];
                $dbPassword = $row['password'];
            }
            if (($dbPassword == $password) && ($dbUsername == $username)) {
                echo "<p class=server-msg >Allow login for {$dbUsername}</p>";
                header("Location: dashboard.php?username={$dbUsername}");
            } else {
                echo "<p class=server-msg >account does not exist</p>";
            }
        } else {
            echo "<p class=server-msg >Account does not exist</p>";
        }
    } else {
        echo "<p class=server-msg>Query failed</p>";
    }
}

mysqli_close($connectDb);
?>

</html>