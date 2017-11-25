<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/9/22
 * Time: 14:54
 */

//跨域
header('Access-Control-Allow-Origin:*');
//请求方式
if($_SERVER["REQUEST_METHOD"]=="POST"){
    $uname = $_REQUEST["uname"];
    $upwd = $_REQUEST["upwd"];

    //链接数据库
    $serverName = 'localhost';//数据库的IP地址
    $dbUser='root';//用户名
    $dbPwd = '123456';//密码
    $dbName='js1707';//库名称

    $conn = new mysqli($serverName,$dbUser,$dbPwd,$dbName);
    mysqli_query($conn,"set names utf8");
    if($conn->connect_error){
        $arr=array();
        $arr["status"]=0;
        $arr["msg"]="数据库连接失败";
        print_r(json_encode($arr));
    }

    //执行sql语句
    $sql = "SELECT*FROM login WHERE user='".$uname."' AND pwd='".$upwd."' ;";
    $result=$conn->query($sql);

    if($result->num_rows>=1){
        $arr=array();
        $arr["status"]=1;
        $arr["msg"]="登录成功";
        print_r(json_encode($arr));
    }else{
        $arr=array();
        $arr["status"]=1;
        $arr["msg"]="用户名或者密码错误";
        print_r(json_encode($arr));
    }


}