<?php 
//啟用暫存 for session
ob_start();
?>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	
<style>
	body{
		font-family:Calibri, Arial, 微軟正黑體;
		font-size:1em;
	}
	input{
		font-family:Calibri, Arial, 微軟正黑體;	
	}
	input.text{
		width:97%;
	}
	
	table{
		border-collapse:collapse;
		width:380px;
		text-align:left;
	}
	td{
		border:0px;
		padding:5px;
	}
	tr#password1,tr#password2,tr#password3,tr#password4{
		display:none;
	}

	
	span.big{
		font-weight:bold;	
	}
	span.small{
		font-size:0.9em;
		font-style:italic;		
	}		
	span.red{
		font-size:1.2em;
		color:red;
		font-weight:bold;		
	}
	
</style>

	<meta name="keyword" content="">
	<meta name="description" content="">
	<meta name="author" content="Oahehc">	
	<!--網站標題/我的最愛圖片-->
	<link rel="shortcut icon" href="">
	<!--設為主畫面APP連結時的圖片-->
	<link rel="apple-touch-icon" href="">
	<!--視窗填滿手機畫面-->
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!--加到主畫面時，使網址列與最下面的選單消失，變為全螢幕模式-->
	<meta name="apple-mobile-web-app-capable" content="yes">	
	<title>Account Manager</title>
</head>
<body>
<?php
//開啟session
session_start();

//設定顯示登入紀錄筆數
$login_history = 5;
//設定purge網頁選項
$web_type = "<option value=''></option>
			 <option value='recorder'>Recorder</option>
			 <option value='financer'>Financer</option>
			 <option value='checklist'>Checklist</option>";
//鎖定ip秒數
$lock_time = 600;
//最多連續登入錯誤限制
$max_error = 5;


/*000web*/
include ("ext/constant.php");
$link = mysql_connect(mysql_host,mysql_user,mysql_pw);
mysql_query("SET NAMES 'utf8'");
mysql_select_db(mysql_db,$link);

/*local host
include ("../../../oahehc/constant.php");
$link = mysql_connect(mysql_host_offline,mysql_user_offline,mysql_pw_offline);
mysql_query("SET NAMES 'utf8'");
mysql_select_db(mysql_db_offline,$link);
*/

//未登入自動跳轉login page
$_SESSION["last_url"] = "account_manager.php";
if(empty($_SESSION["login_id_009"]) || empty($_SESSION["login_pw_009"]))
{header("location:login.php");}
else
{
$select_pw = "select pw from account where id='".$_SESSION["login_id_009"]."'";
$result_pw = mysql_query($select_pw,$link);
$data = mysql_fetch_row($result_pw);
	if($data[0] != $_SESSION["login_pw_009"])
	{header("location:login.php");}
	else
	{
	$id = $_SESSION["login_id_009"];
	$id = ucfirst($id);
	}
}

//取得user真實ip
if (!empty($_SERVER['HTTP_CLIENT_IP']))
{$user_ip = $_SERVER['HTTP_CLIENT_IP'];}
else if (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))
{$user_ip = $_SERVER['HTTP_X_FORWARDED_FOR'];}
else
{$user_ip = $_SERVER['REMOTE_ADDR'];}

//密碼錯誤次數過多, 將資料寫入MYSQL
if($_SESSION["pw_error"] >= $max_error)
{
//清除SESSION避免重複寫入
$_SESSION["pw_error"] = 0;

//取得進入網頁時間
date_default_timezone_set("Asia/Taipei");
$login_time  = date('Y-m-d H:i:s');
$time = time();

//寫入瀏覽紀錄
$insert_error = "insert into pw_error(user_id,user_ip,login_time,time_stamp) 
				 Values('$id','$user_ip','$login_time','$time')";
$insert = mysql_query($insert_error);
}


//取得最近一次密碼錯誤的時間 by user_ip
$select_error = "select time_stamp from pw_error where user_ip ='".$user_ip."' order by time_stamp desc";
$result_error = mysql_query($select_error);
@mysql_data_seek($result_error,0);
if(@mysql_num_rows($result_error)!= 0)
{
$data_error = mysql_fetch_row($result_error);
$error_time = $data_error[0];
}
else
{$error_time = 0;}


//密碼錯誤次數過多 => 鎖定ip
if((time()-$error_time)<$lock_time)
{
echo "<span class='red'>密碼輸入錯誤次數過多,<br>為保護您的帳號資料,<br>系統將強制登出此帳號<br></span>";
$_SESSION["login_id_009"] = "";
$_SESSION["login_pw_009"] = "";
header("refresh:5");
}
else
{
	//取得id相關資料
	$q_user = "select pw,mail,date from account where id='".$id."'";
	$result = mysql_query($q_user,$link);
	@mysql_data_seek($result,0);
	$data = mysql_fetch_row($result);
	$password = $data[0];
	$mail = $data[1];
	$register_date = $data[2];

	//查詢登入記錄
	$q_visiter = "select user_ip,onload_time from visit where user_id='".$id."' order by item desc";
	$result = mysql_query($q_visiter,$link);
	$num = mysql_num_rows($result);
		if($num>1)
		{
			for($i=0;$i<min($num,$login_history);$i++)
			{
			$data = mysql_fetch_row($result);
			$login_ip[$i] = $data[0];
			$login_date[$i] = $data[1];
			}
		}


	//個人資料
	echo "<form method='post' name='change_pw'>";
	echo "<table><tr>
			<td width=40%>
				<span class=big>帳號</span>
			</td>
			<td>
				$id
				<input type='button' value='登出' onclick='logout()'>
				<input type='hidden' name='account_logout'>
			</td>
		  </tr>";
	echo "<tr>
			<td><span class=big>註冊信箱</span></td>
			<td>".$mail."</td>
		  </tr>";
	echo "<tr>
			<td><span class=big>註冊時間</span></td>
			<td>".$register_date."</td>
		  </tr>";  


	//變更密碼
	echo "<tr>
			<td><span class=big>密碼</span></td>
			<td>
			<input type=button value='變更密碼' onclick='open_pw()'>
			</td>
		  </tr>";


	//顯示輸入密碼欄位
	echo "<tr id=password1><td align=right><span class=small>原始密碼</span></td>
		  <td><input class=text type=password name=old_pw maxlength=20px></td></tr>
		  <tr id=password2><td align=right><span class=small>新密碼</span></td>
		  <td><input class=text type=password name=new_pw maxlength=20px></td></tr>
		  <tr id=password3><td align=right><span class=small>新密碼確認</span></td>
		  <td><input class=text type=password name=new_pw_c maxlength=20px></td></tr>
		  <tr id=password4><td></td>
		  <td align=right>
			<input type=submit name=change_pw_submit value='確認變更'>	
			<input type=button value='取消' onclick='close_pw()'>
		  </td></tr>";


	//登入記錄
	echo "<tr>
		  <td><span class=big>最近登入紀錄</span></td>
		  <td>".$login_date[0]."<br>".$login_ip[0]."</td>
		  </tr>";  
		  
		  for($i=1;$i<count($login_ip);$i++)
		  {
		  echo "<tr>
					<td></td>
					<td>".$login_date[$i]."<br>".$login_ip[$i]."</td>
				</tr>";
		  
		  }
		
	//Purge button
	echo "<tr>
			<td><span class=big>清除資料</span></td>
		    <td>
				<select name='purge_web'>
					$web_type
				</select>
				<input type='button' value='刪除' onclick='purge_data()'>
				<input type='hidden' name='data_purge'>
			</td>
		  </tr>"; 	
	
		 
	//取得最近一次密碼錯誤的資訊 by user_id
	$select_error_record = "select user_ip,login_time from pw_error where user_id ='".$id."' order by time_stamp desc";
	$result_error_record = mysql_query($select_error_record);
	@mysql_data_seek($result_error_record,0);
	if(@mysql_num_rows($result_error_record)!= 0)
	{
	$data_error_record = mysql_fetch_row($result_error_record);
	$error_ip = $data_error_record[0];
	$error_date = $data_error_record[1];
	
	//顯示密碼輸入錯誤記錄
	echo "<tr><td colspan=2></td></tr>";		
	echo "<tr><td colspan=2><span class=big>前次密碼連續錯誤5次紀錄</span></td></tr>";	
	echo "<tr><td>登入時間</td>
		 <td>".$error_date."</td></tr>";  
	echo "<tr><td>登入IP</td>
		 <td>".$error_ip."</td></tr>"; 
	}		  

//Received and do action
	//change password
	if(!empty($_POST["change_pw_submit"]))
	{
		//接收表單資料
		$old_pw = md5($_POST["old_pw"]);
		$new_pw = $_POST["new_pw"];
		$new_pw_c = $_POST["new_pw_c"];

		//Remove 字母&數字, 確認是否包含特殊字元
		$password_str_check = preg_replace("/[a-zA-Z0-9_]/","",$new_pw);

		//修改結果以表格顯示, 避免變更結果顯示在首行
		echo "<tr id=result><td colspan=2 align=left>";

			if($old_pw!=$password)
			{
			echo "原始密碼錯誤, 請重新輸入";
			$_SESSION["pw_error"]++;
			//持續開啟變更表單
			echo "<script>
				document.getElementById('password1').style.display = 'table-row';
				document.getElementById('password2').style.display = 'table-row';
				document.getElementById('password3').style.display = 'table-row';
				document.getElementById('password4').style.display = 'table-row';		
				</script>";		
			}
			elseif($new_pw!=$new_pw_c)
			{
			echo "新密碼與密碼確認輸入內容不同, 請重新輸入";
			//持續開啟變更表單
			echo "<script>
				document.getElementById('password1').style.display = 'table-row';
				document.getElementById('password2').style.display = 'table-row';
				document.getElementById('password3').style.display = 'table-row';
				document.getElementById('password4').style.display = 'table-row';		
				</script>";		
			}
			elseif(strlen($new_pw)<8)
			{
			echo "密碼須超過8個字元";
			//持續開啟變更表單
			echo "<script>
				document.getElementById('password1').style.display = 'table-row';
				document.getElementById('password2').style.display = 'table-row';
				document.getElementById('password3').style.display = 'table-row';
				document.getElementById('password4').style.display = 'table-row';		
				</script>";		
			}
			elseif(!empty($password_str_check))
			{
			echo "密碼請使用英文字母+數字";
			//持續開啟變更表單
			echo "<script>
				document.getElementById('password1').style.display = 'table-row';
				document.getElementById('password2').style.display = 'table-row';
				document.getElementById('password3').style.display = 'table-row';
				document.getElementById('password4').style.display = 'table-row';		
				</script>";		
			}
			else
			{
			$new_pw = md5($new_pw);
			$u_pw = "update account set pw='".$new_pw."' where id='".$id."'";
			mysql_query($u_pw,$link);
			echo "密碼更新完畢";
			}
		echo "</td></tr>";		
	}
	//account log output
	elseif($_POST["account_logout"]=="y")
	{
        //clear session
        $_SESSION["login_pw_009"] = "";
        $_SESSION["login_id_009"] = "";	
        $_SESSION["visit_recorder"] = "";
        $_SESSION["visit_financer"] = "";
        $_SESSION["visit_checklist"] = "";
        
        //clear cookie
        unset($_COOKIE["input_account_009"]);
        unset($_COOKIE["input_pw_009"]);
        setcookie('input_account_009', null, -1, '/');
        setcookie('input_pw_009', null, -1, '/');		
        unset($_COOKIE["input_account_009_localstorage"]);
        unset($_COOKIE["input_pw_009_localstorage"]);
        setcookie("input_account_009_localstorage", null, -1, "/");
        setcookie("input_pw_009_localstorage", null, -1, "/");
        
        //close main page
        echo "<script>
                window.opener.location.reload();
                window.opener.close();
              </script>";

        //locate to login page
        header("location:login.php");
	}
	//data purge
	elseif($_POST["data_purge"] == "y")
	{
	$website = $_POST["purge_web"];
	$purge_data = "delete from $website where id='$id'";
	$result_purge = mysql_query($purge_data);
		if($result_purge)
		{
		//refresh main page and alert
		echo "<script>
				window.opener.location.reload();
				alert('資料已移除');		
			  </script>";
		}	
	}

	echo "</form>";	
	echo "</table>";
}
?>


</body>
</html>

<script language="JavaScript">
	function open_pw(){
	document.getElementById('password1').style.display = 'table-row';
	document.getElementById('password2').style.display = 'table-row';
	document.getElementById('password3').style.display = 'table-row';
	document.getElementById('password4').style.display = 'table-row';
	}
	function close_pw(){
	document.getElementById('password1').style.display = 'none';
	document.getElementById('password2').style.display = 'none';
	document.getElementById('password3').style.display = 'none';
	document.getElementById('password4').style.display = 'none';
	document.getElementById('result').style.display = 'none';
	}
	function logout(){
		if(confirm('[Remind] 確認登出?'))
		{
		document.change_pw.account_logout.value = 'y';
        localStorage.removeItem("oahehc_account_009"); 
        localStorage.removeItem("oahehc_pw_009");
        window.opener.close();
		document.change_pw.submit();		
		}
	}
	function purge_data(){
	var web = document.change_pw.purge_web.value;
		if(web == "")
		{alert('[Error] 請選擇要刪除的網頁');}
		else
		{
			if(confirm('[Remind] 確認刪除 '+ web +' 所有資料?'))
			{
				if(confirm('[Remind] 資料刪除後無法回復, 點選確定後清除資料?'))
				{
				document.change_pw.data_purge.value = 'y';
				document.change_pw.submit();		
				}	
			}
		}			
	}
</script>
