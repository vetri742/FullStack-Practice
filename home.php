<?php
    include("connection.php");
    
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">

</head>



<body class="bg-info ">
    <div class="container my-5">
        <div class="row">
            <div class="col-4"></div>
            <div class="col-4">
                 <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"])?>" method="post">
                <div class="mb-3">
                <label  class="form-label">USERNAME</label>
                <input type="text " name="username" class="form-control w-100 ">
                </div>

                   <div class="mb-3">
                <label  class="form-label">PASSWORD</label>
                <input type="password" name="password" class="form-control w-100 ">
                </div>
                <div class="text-center">
                <input type="submit" class="btn btn-danger my-2  px-3 " value="Register ">

                </div>

                </form>
    
            </div>
            <div class="col-4"></div>
        </div>
    </div>
    <?php
    if($_SERVER["REQUEST_METHOD"]=="POST"){
        $username=filter_input(INPUT_POST,"username",FILTER_SANITIZE_SPECIAL_CHARS);
        $password=filter_input(INPUT_POST,"password",FILTER_SANITIZE_SPECIAL_CHARS);
        if(!empty($username) && !empty($password)){
            
            $hash=password_hash('$password',PASSWORD_DEFAULT);
            $sql_data="INSERT INTO employees(username,passwordd)
                        VALUES('$username','$hash');" ;
            mysqli_query($mysql_connect,$sql_data);
            echo "<h5>YOU REGISTERED SUCCESSFULLY</h5>";
          
        }
        else{
            echo "<h5 class='text-danger px-2'>MISSING USERNAME/PASSWORD</h5>";
        }

        //echo "<h3>HELLO , {$username}<h3>";
    }
    
    ?>
   
</body>
</html>

