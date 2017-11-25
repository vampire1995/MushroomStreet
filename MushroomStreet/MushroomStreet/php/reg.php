<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/9/22
 * Time: 11:38
 */
header('Access-Control-Allow-Origin: *');//跨域

if($_SERVER["REQUEST_METHOD"]=="POST"){
    $uname=$_REQUEST["uname"];
    $upwd=$_REQUEST["upwd"];

//链接数据库 ip地址 用户名 密码 库名称
    $serverName='localhost';//数据库的名称 IP地址
    $dbUser='root';//用户名
    $dbPwd='123456';//密码
    $dbName='js1707';//库名称

    $conn=new mysqli($serverName,$dbUser,$dbPwd,$dbName);
    mysqli_query($conn,"set names utf8");
    if($conn->connect_error){
        $arr=array();
        $arr["status"]=0;
        $arr["msg"]="链接数据库失败";
        print_r(json_encode($arr));
    }

//执行sql语句
    $sql=" INSERT INTO login(user,pwd) VALUES('".$uname."','".$upwd."')";

//    $sql="SELECT*FROM userinfo WHERE username='jay100' AND upwd='123'";
    $result = $conn->query($sql);//返回一个对象
//如果数据库中返回的结果大于等于1 表示登录成功
    if($result>= 1){
        $arr=array();
        $arr["status"]=1;
        $arr["msg"]="注册成功";
        print_r(json_encode($arr));
    }
    else{
        $arr=array();
        $arr["status"]=0;
        $arr["msg"]="注册失败";
        print_r(json_encode($arr));
    }
}