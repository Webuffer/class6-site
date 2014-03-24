//检测全部表单元素是否为空
function checkBlank(Form,infoId){
	var v = true;
	var info = document.getElementById(infoId);
	for(i = 0; i < Form.length; i ++){
		if(Form.elements[i].value == ''){
			info.innerHTML = '<p>'+Form.elements[i].title + '不能为空！'+'</p>';
			Form.elements[i].focus();
			v = false;
			return false;
		}
	}
	return v;
}

//验证姓名是否合法
function checkusername(username){
	var str = username;
	var Expression = /^(\w|[\u4e00-\u9fa5]){3,20}$/;	//[\u4e00-\u9fa5]匹配中文输入
	var objExp = new RegExp(Expression);	//创建正则表达式对象
	return objExp.test(str);
}

//验证学号是否合法
function checkusernumber(usernumber){
	var str = usernumber;
	var Expression = /^([0-9]){12}$/;
	var objExp = new RegExp(Expression);
	return objExp.test(str);
}

//验证E-mail地址是否合法
function checkemail(email){
	var str = email;
	var Expression = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
	var objExp = new RegExp(Expression);
	return objExp.test(str);
}

//验证密码是否合法
function checkPWD(PWD){
	var str = PWD;
	var Expression = /^([A-Za-z0-9]){6,20}$/;	//输入密码必须为5-19位由大小写字母或数字组成的串
	var objExp = new RegExp(Expression);
	return objExp.test(str);
}

//检测注册表单输入是否有误的函数
function checkRegist(Form,infoId){
	var info = document.getElementById(infoId);
	if(checkBlank(Form,infoId)){	//验证表单元素是否为空
		if(checkusername(Form.registName.value)){	//验证用户名
			if(checkusernumber(Form.registNumber.value)){
				if(checkemail(Form.registEmail.value)){
					if(checkPWD(Form.registPwd.value)){
						if(Form.registPwd.value == Form.registRepwd.value){	//验证两次输入的密码是否一致
							return true;
						}else{
							info.innerHTML = '<p>'+'两次输入的密码不一致！'+'</p>';
							Form.registRepwd.focus();
							return false;
						}
					}else{
						info.innerHTML = '<p>'+'输入的密码不合法！'+'</p>';
						Form.registPwd.focus();
						return false;
					}
				}else{
					info.innerHTML = '<p>'+'输入的邮箱地址不合法！'+'</p>';
					Form.registEmail.focus();		//邮箱输入框获得焦点
					return false;
				}
			}else{
				info.innerHTML = '<p>'+'输入的学号不合法！'+'</p>';
				Form.registNumber.focus();
				return false;
			}
		}else{
			info.innerHTML = '<p>'+'输入的姓名不合法！'+'</p>';
			Form.registName.focus();
			return false;
		}
	}else{
		return false;
	}
}
//检测登录表单输入账号是否正确
function checkLogin(Form,infoId){
	var info = document.getElementById(infoId);
	if(checkBlank(Form,infoId)){
		if(checkusernumber(Form.loginNumber.value)){
			if(checkPWD(Form.loginPwd.value)){
				return true;
			}else{
				info.innerHTML = '<p>'+'输入密码不合法'+'</p>';
				Form.loginPwd.focus();
				return false;
			}
		}else{
			info.innerHTML = '<p>'+'输入学号不合法'+'</p>';
			Form.loginNumber.focus();
			return false;
		}
	}else{
		return false;
	}
}