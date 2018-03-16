<?php


//后台文件设置支持跨域（PHP）
header('Access-Control-Allow-Origin:*');
header('Content-Type:text/html;charset=utf8');


//接收客户端的参数
$username = $_POST["username"];
$pwd = $_POST["pwd"];



//注册
//先检查是否有相同的用户名
$conn = new mysqli("127.0.0.1", "root", "", "mydb11") or die("连接失败！");
$sql = "select * from myclass02 where username='$username'";
$result = $conn->query($sql);
if ($result && $result->num_rows>0) {
    //不可以注册， 存在相同的用户名
    $obj = array("status"=>0, "msg"=>"用户名已经存在，请更改用户名后再注册！");
    echo json_encode($obj);
}
else {
    //可以注册， 没有相同的用户名
    //注册
    $sql = "insert into myclass02(username, password) values('$username', '$pwd')";
    $result = $conn->query($sql);
    if ($result) {
        //注册成功
        $obj = array("status"=>1, "msg"=>"恭喜您，注册成功！");
        echo json_encode($obj);
    }
    else {
        //注册失败
        $obj = array("status"=>-1, "msg"=>"注册失败，请重试！");
        echo json_encode($obj);
    }
}
$conn->close();





