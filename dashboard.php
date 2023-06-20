<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="./page.css">
    <link rel="stylesheet" href="./dashboard.css">
</head>

<body>
    <Header>
        <nav>
            <a href="./login.php" target="_self">
                <p>Login</p>
                <i class='bx bx-log-out'></i>
            </a>
            <a href="./register.php" target="_self">
                <p>Register</p>
                <i class='bx bx-user-plus'></i>
            </a>
        </nav>
    </Header>
    <Main>
        <?php
        $username = $_GET["username"];
        echo "<h1 class='welcome'>Welcome {$username} </h1>"
        ?>

    </Main>

    <script src="./js/dashboard.js"></script>
</body>

</html>