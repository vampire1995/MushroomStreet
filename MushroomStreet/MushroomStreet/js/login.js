/**
 * Created by Administrator on 2017/9/22.
 */
$(function(){
    var arr =[false,false,false];


    $.idcode.setCode();   //加载生成验证码方法
    $("#change").on("click",function(){
        $.idcode.setCode();
    })
    $("#code").on("focus",function(){
        $(this).val("");
    })

    //用户名
    $("#username").on("blur",function(){
        if($(this).val()==""){
            arr[0]=false;
        }else{
            arr[0]=true;
        }
    });

    //密码
    $("#pwd").on("blur",function(){
        if($(this).val()==""){
            arr[1]=false;
        }else{
            arr[1]=true;
        }
    });

    //验证码

    $("#code").on("blur",function(){
        if($(this).val()==""){
            arr[2]=false;
            $(this).siblings("p").text("请输入验证码");
        }else{
            if($(this).val()==$("#idcode").text()){
                arr[2]=true;
                $(this).siblings("p").text("");
            }else{
                arr[2]=false;
                console.log(111);
                $(this).siblings("p").text("验证码错误");
                $.idcode.setCode();
            }
        }
    });

    $("#btn").on("click",function(){

        //cookie
       var str = $("form").serialize();
        console.log(str);
        var obj ={};
       //将str转为obj对象方便存储到cookie中
            obj = toObj(str,obj);
       $.cookie("user",JSON.stringify(obj),{expires:7});

        console.log(obj);


        if(arr[0]&&arr[1]&&arr[2]){
            $.ajax({
                "url":"http://localhost:8080/MushroomStreet/php/login.php",
                data:str,
                type:"post",
                dataType:"json",
                success:function(res){
                    if(res.status==1){
                        window.location.href="main.html";

                    }
                    else{
                        alert("用户名或密码错误");
                    }
                }
            })
         }
        else{
            alert("请填写登录信息");
        }



    })








})

function toObj(str,obj){
    if(str.indexOf("&")!=-1){
        var arr = str.split("&");
        for(var i=0;i<arr.length;i++){
            if(arr[i].indexOf("=")){
                var arr2 =arr[i].split("=");
                obj[arr2[0]]=arr2[1];
            }
        }
    }else{
        if(str.indexOf("=")!=-1){
            var arr =str.split("=");
            obj[arr[0]]=arr[1];
        }
    }
    return obj;
}