<?php


//后台文件设置支持跨域（PHP）
header('Access-Control-Allow-Origin:*');
header('Content-Type:text/html;charset=utf8');


//接收客户端的参数
$username = $_POST["username"];
$pwd = $_POST["pwd"];

//登录
$conn = new mysqli("127.0.0.1", "root", "", "mydb11") or die("连接失败!");
$sql = "select * from myclass02 where username='$username' and password='$pwd'";
$result = $conn->query($sql);
if ($result && $result->num_rows>0) {
    //登录成功
    $obj = array("status"=>1, "msg"=>"登录成功！");
    echo json_encode($obj);
}
else {
    //登录失败
    $obj = array("status"=>0, "msg"=>"登录失败，用户名或密码错误！");
    echo json_encode($obj);
}
$conn->close();











