(
	function()
	{
		var $ = function(_id)
		{
			return document.getElementById(_id);
		};
		
		var inpStyle = function()
		{
			var inps = $("inpList").getElementsByTagName("input");//获得id为inpList 中的所有的input
			for(var i = 0; i < inps.length; i++)
			{
				inps[i].onfocus = function()
				{
					var par = this.parentNode.parentNode;
					var msg = par.getElementsByTagName("p")[0];
					this.parentNode.parentNode.className = "point cl";//this 指向当前咱们所触发此事件的元素
					check.focus[this.id](par, this, msg);
				}
				
				inps[i].onblur = function()
				{
					var par = this.parentNode.parentNode;
					var msg = par.getElementsByTagName("p")[0];
					par.className = "def cl";//this 指向当前咱们所触发此事件的元素
					check.blurs[this.id](par, this, msg);
				}
			}
			
			$("enter").onclick = function()
			{
				subcheck(inps);
			}
		};
				
		var check =
		{
			focus:
			{
				uname:function(_dd, _this, _p)
				{
					_dd.className = "point cl";
					_p.innerHTML = "<i></i>给自己起个名字吧，它将成为您登录本站的用户名";
				},
				email:function(_dd, _this, _p)
				{
					_dd.className = "point cl";
					_p.innerHTML = "<i></i>请输入您的常用邮箱地址，此邮箱地址将作为修改密码";
				},
				mobile:function(_dd, _this, _p)
				{
					_dd.className = "point cl";
					_p.innerHTML = "<i></i>请输入您的手机号码，方便我们之间的联系";
				},
				pwd:function(_dd, _this, _p)
				{
					_dd.className = "point cl";
					_p.innerHTML = "<i></i>请输入安全密码，它将作为您的登录密码";
				},
				qrpwd:function(_dd, _this, _p)
				{
					_dd.className = "point cl";
					_p.innerHTML = "<i></i>请将上面的密码再输入一次";
				}
			},
			blurs:
			{
				uname:function(_dd, _this, _p)//dd标签 当前输入框 消息区域的标签p
				{
					var flag = false;
					_dd.className = "error cl";
					if(_this.value == "")
					{
						_p.innerHTML = "<i></i>用户帐号不得为空！";
					}
					else if(_this.value.length < 3 || _this.value.length > 16)
					{
						_p.innerHTML = "<i></i>用户名长度应控制在3-16位字符之间！";
					}
					else if(!/^[\w_-\u4e00-\u9fa5]+$/.test(_this.value))
					{
						_p.innerHTML = "<i></i>用户名只能由大小写字母，数字，下划线，中横线和中文组成！";
					}
					else
					{
						_dd.className = "ok cl";
						_p.innerHTML = "<i></i>";
						flag = true;
					}
					return flag;
				},
				email:function(_dd, _this, _p)
				{
					var flag = false;
					_dd.className = "error cl";
					if(_this.value == "")
					{
						_p.innerHTML = "<i></i>邮箱不能为空！";
					}
					else if(!/\w+((-w+)|(\.\w+))*\@[\w]+((\.|-)[\w]+)*\.[\w]+/.test(_this.value))
					{
						_p.innerHTML = "<i></i>请输入正确的邮箱地址！";
					}
					else
					{
						_dd.className = "ok cl";
						_p.innerHTML = "<i></i>";
						flag = true;
					}
					return flag;
				},
				mobile:function(_dd, _this, _p)
				{
					var flag = false;
					_dd.className = "error cl";
					if(_this.value == "")
					{
						_p.innerHTML = "<i></i>手机号码不能为空！";
					}
					else if(!/0?(13|14|15|18)[0-9]{9}/.test(_this.value))
					{
						_p.innerHTML = "<i></i>请输入正确的手机号码！";
					}
					else
					{
						_dd.className = "ok cl";
						_p.innerHTML = "<i></i>";
						flag = true;
					}
					return flag;
				},
				pwd:function(_dd, _this, _p)
				{
					var flag = false;
					_dd.className = "error cl";
					if(_this.value == "")
					{
						_p.innerHTML = "<i></i>密码不能为空！";
					}
					else if(_this.value.length < 6 || _this.value.length > 16)
					{
						_p.innerHTML = "<i></i>密码长度应控制在6-16位字符之间！";
					}
					else if(!/^[\w_-]+$/.test(_this.value))
					{
						_p.innerHTML = "<i></i>密码只能由大小写字母，数字，下划线和中横线组成！";
					}
					else
					{
						_dd.className = "ok cl";
						_p.innerHTML = "<i></i>";
						flag = true;
					}
					return flag;
				},
				qrpwd:function(_dd, _this, _p)
				{
					var flag = false;
					var pwd = $("pwd");
					_dd.className = "error cl";
					if(_this.value == "")
					{
						_p.innerHTML = "<i></i>为了保证您输入的密码准确无误，请再次输入密码！";
					}
					else if(_this.value != pwd.value)
					{
						_p.innerHTML = "<i></i>密码两次输入不一致，请重新输入！";
					}
					else
					{
						_dd.className = "ok cl";
						_p.innerHTML = "<i></i>";
						flag = true;
					}
					return flag;
				}
			}
		};
		
		var subcheck = function(inps)
		{
			var flag = true;
			for(var i = 0; i < inps.length; i++)
			{
				var par = inps[i].parentNode.parentNode;
				var msg = par.getElementsByTagName("p")[0];
				if(!check.blurs[inps[i].id](par, inps[i], msg))
				{
					flag = false;
					break;
				}
			}
			
			if(flag)
			{
				alert("可以提交");
			}
			else
			{
				alert("不可提交");
			}
		}
		
		window.onload = function()//相当于程序的入口 main方法
		{
			inpStyle();
		}
	}
)();