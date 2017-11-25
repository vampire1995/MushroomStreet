/**
 * Created by Administrator on 2017/9/22.
 */

var arr = [false, false, false, false, true];
$(function() {

	$.idcode.setCode(); //加载生成验证码方法
	$("#change").on("click", function() {
		$.idcode.setCode();
	})
	$("#code").on("focus", function() {
		$(this).val("");
	})

	//正则判断
	//用户名
	$("#username").on("blur", function() {
		var res = /^[a-zA-Z]\w{2,8}$/;
		var text1 = "用户名";
		var num = 0;
		var text = "用户名须以字母开头的3~9位数字字母下划线";
		judge(this, text, res, text1, num);
	});
	//密码
	$("#pwd").on("blur", function() {
		var res = /^[a-zA-z0-9]{6,10}$/;
		var num = 1;
		var text = "密码为6-10位的字母或数字";
		var text1 = "密码";
		judge(this, text, res, text1, num);
	})
	//确认密码
	$("#pwdc").on("blur", function() {
		if($(this).val() == "") {
			$(this).siblings("p").text("请再输一次密码");
			arr[2] = false;
		} else {
			if($(this).val() == $("#pwd").val()) {
				$(this).siblings("p").text("");
				arr[2] = true;
			} else {
				$(this).siblings("p").text("两次密码不一致请重新输入");
				arr[2] = false;
			}
		}
	});

	//验证码
	$("#code").on("blur", function() {
		if($(this).val() == "") {
			$(this).siblings("p").text("请输入验证码");
			arr[3] = false;
		} else {

			if($(this).val() == $("#idcode").text()) {
				$(this).siblings("p").text("");
				arr[3] = true;
			} else {
				$(this).siblings("p").text("验证码错误");
				$.idcode.setCode();
				arr[3] = false;
			}
		}
	});

	//条约不同意不能注册
	$("#check").on("click", function() {
		if($("#check").prop("checked")) {
			$("#btn").css("background", "#e83917");
			arr[4] = true;
		} else {
			$("#btn").css("background", "#ccc");
			arr[4] = false;
		}
	})

	//按钮提交
	$("#btn").on("click", function() {
		// console.log(arr);
		console.log($("form").serialize());
		if(arr[0] && arr[1] && arr[2] && arr[3] && arr[4]) {
			$.ajax({
				"url": "http://localhost:8080/MushroomStreet/php/reg.php",
				data: $("form").serialize(),
				type: "post",
				dataType: "json",
				success: function(res) {
					console.log(res);

					if(res.status == 1) {
						alert("用户名已存在请重新注册");
					} else {

						window.location.href = "login.html";

					}
				}
			})
		} else {
			alert("请正确填写完整信息");
		}

	})

})

function judge(ele, text, res, text1, num) {
	if($(ele).val() == "") {
		$(ele).siblings("p").text(text1 + "不能为空");
		arr[num] = false;
	} else {
		if(res.test($(ele).val())) {
			$(ele).siblings("p").text("");
			arr[num] = true;
		} else {
			$(ele).siblings("p").text(text);
			arr[num] = false;
		}
	}
}