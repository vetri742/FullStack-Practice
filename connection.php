<?php
    
        $mysql_server="localhost";
        $mysql_user="root";
        $mysql_pw="";
        $database_name="employeedb";
        $mysql_connect="";
try{
        $mysql_connect=mysqli_connect($mysql_server,$mysql_user,$mysql_pw,$database_name);

}
catch(mysqli_sql_exception){
    echo 'Failed to connect'."<br>";
}
?>