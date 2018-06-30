<?php 
//啟用暫存 for session
ob_start();
?>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
<script src="http://ajax.microsoft.com/ajax/jquery/jquery-1.4.min.js"></script>
	<script src="ext/jquery.cookie.js"></script>
	<script src="ext/md5.min.js"></script>
<style>
	body, input{
		font-family: Calibri, Arial, 微軟正黑體;
		font-size: 1.5em;
	}
    body{
        background-color: #3E3E3E;
        color: white;
    }
    input{
        width: 100%;
        max-width: 480px;
        margin: 1px;
        border: 0px;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;        
    }
    .text{
        padding-left: 5px;
    }
    .check{
        width: 25px;
        height: 25px;
    }
    .button{
        background-color: #06D8D8;
        border-radius: 5px;
    }
    a{
        color: lightgray;
        text-decoration: none;
    }
        a:hover{
            color: lightblue;        
        }
	
/*for resposive design*/
	@media (max-width: 640px){
	}	
</style>

	<meta name="keyword" content="">
	<meta name="description" content="">
	<meta name="author" content="Oahehc">	
	<!--網站標題/我的最愛圖片-->
	<link rel="shortcut icon" href="pic/recorder.jpg">
	<!--設為主畫面APP連結時的圖片-->
	<link rel="apple-touch-icon" href="pic/recorder.jpg">
	<!--視窗填滿手機畫面-->
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!--加到主畫面時，使網址列與最下面的選單消失，變為全螢幕模式-->
	<meta name="apple-mobile-web-app-capable" content="yes">	
	<title>Login</title>
</head>
	<script language="JavaScript">
		$(function(){
		//將帳密寫入cookies
			$("form").submit(function(){
				var auto = $("input.check").attr('checked');
				var deviceVal = $("input#device").val();
				if(auto!="")
				{
				var account = $("input#id").val();
				var pw = md5($("input#password").val());

                $.cookie("input_account_009", account, {path:'/', expires:30});
                $.cookie("input_pw_009", pw, {path:'/', expires:30});
                localStorage["oahehc_account_009"] = account; 
                localStorage["oahehc_pw_009"] = pw;
                /*
					//cookies for PC
					if(deviceVal == "pc")
					{
					$.cookie("input_account_009", account, {path:'/', expires:30});
					$.cookie("input_pw_009", pw, {path:'/', expires:30});
					//alert('帳號密碼已記錄(時效30天)');
					}
					//localstorage for mobile
					else if(deviceVal == "mobile")
					{
					localStorage["oahehc_account_009"] = account; 
					localStorage["oahehc_pw_009"] = pw;
					//alert('帳號密碼已記錄');
					}
                */
				}
			});	
		});	
	</script>
<body>
<?php
//載入PHP mailer
include_once("ext/class.phpmailer.php"); 

//關閉error report
error_reporting(0);

//session start
session_start();

/*000web*/
include ("ext/constant.php");
$link = mysql_connect(mysql_host,mysql_user,mysql_pw);
mysql_query("SET NAMES 'utf8'");
mysql_select_db(mysql_db,$link);

/*localhost
include ("../../../oahehc/constant.php");
$link = mysql_connect(mysql_host_offline,mysql_user_offline,mysql_pw_offline);
mysql_query("SET NAMES 'utf8'");
mysql_select_db(mysql_db_offline,$link);
*/

//取得user真實ip
if (!empty($_SERVER['HTTP_CLIENT_IP']))
{$user_ip = $_SERVER['HTTP_CLIENT_IP'];}
else if (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))
{$user_ip = $_SERVER['HTTP_X_FORWARDED_FOR'];}
else
{$user_ip = $_SERVER['REMOTE_ADDR'];}

//密碼錯誤次數過多, 將資料寫入MYSQL
if($_SESSION["pw_error"] >=5)
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


//帳號,密碼錯誤次數過多鎖定ip
$lock_time = 600;
if((time()-$error_time)<$lock_time)
{
    $minute = floor(($lock_time-time()+$error_time)/60);
    echo "<span class='red'>因帳號/密碼錯誤次數過多,<br>系統暫停使用,<br>時間還剩下 : ".$minute."分鐘<br></span>";

    //加入註解符號隱藏div frame選單
    echo "<!--";
}
?>

<div class="frame" id="frame">
	<form method="post" name="login">
	<?PHP
	//add hide input for device type
	$agent = $_SERVER['HTTP_USER_AGENT'];
		if(strpos($agent,"NetFront") || strpos($agent,"iPhone") || strpos($agent,"MIDP-2.0") || strpos($agent,"Opera Mini") || strpos($agent,"UCWEB") || strpos($agent,"Android") || strpos($agent,"Windows CE") || strpos($agent,"SymbianOS"))
		{echo "<input type='hidden' id='device' value='mobile'>";}
		else
		{echo "<input type='hidden' id='device' value='pc'>";}
	?>
        
    <input id="id" class="text" name="id" maxlength=20 value="<?=strtolower($_POST[id])?>" placeholder="帳號" autofocus><br>
    <input id="password" class="text" type="password" name="password" value="<?=$_POST[password]?>" placeholder="密碼"><br>
    <input class="button" type="submit" name="sub" value="登入"><br>
    <input class="button" type="button" name="forget" value="忘記帳號密碼"><br>
    <input class="button" type="button" value="註冊" onclick="window.open('register.php','_self')"><br>
    <input class="check" type="checkbox" name="save_account" checked> 紀錄帳號密碼<br>
    <a target=_blank href="contact_author_recorder.php">※ 聯絡作者 ※</a>
	</form>
</div>

<?php
//取得前一網頁
if(empty($_SESSION["last_url"]))
{$last_page = "recorder.php";}
else
{$last_page = $_SESSION["last_url"];}

if((time()-$error_time)<$lock_time)
{
    //註解for隱藏div frame選單用
    echo "-->";
}
else
{
	//忘記帳號密碼
	if(!empty($_POST["forget"]))
	{
	//關閉登入表單
	echo "<script>document.getElementById('frame').style.display = 'none';</script>";

	//顯示mail表單
	echo "<div class='frame'>
			<form method='post' name='forget'>
			<fieldset><legend>忘記帳號密碼</legend>
				<div class='label'><label for='mail'>註冊信箱</label></div>
				<div class='form'><input id='mail' type='email' class='text' name='mail' placeholder='請輸入您的註冊信箱' autofocus required></div>
				<div style='clear:both'></div>			
				
				<div class='button'>
				<input class='button' type='submit' name='sub2' value='送出'>
				</div>	  
				<div style='clear:both'></div>
			</fieldset></form></div>";
	}
	elseif(!empty($_POST["sub"]))
	{
		//接收表單資料
		$id = $_POST["id"];
		$password = md5($_POST["password"]);

		//檢查id是否有特殊字元
		$id_str_check = preg_replace("/[a-zA-Z0-9_]/","",$id);
		if(!empty($id_str_check))
		{$id="";}

		//檢查pw是否有特殊字元
		$pw_str_check = preg_replace("/[a-zA-Z0-9_]/","",$password);
		if(!empty($pw_str_check))
		{$password="";}
		
		//取得該帳號註冊資料
		$q_id = "select pw,mail,verify from account where id='".$id."'";
		$result = mysql_query($q_id,$link);
		@mysql_data_seek($result,0);
		$data = mysql_fetch_row($result);

		//確認帳號是否存在
		if(mysql_num_rows($result) == 0)
		{
		echo "帳號不存在, 請重新輸入";
		$_SESSION["pw_error"]++;	
		}
		//確認密碼是否正確
		elseif($data[0] != $password)
		{
		echo "密碼錯誤, 請重新輸入";
		$_SESSION["pw_error"]++;
		}
		//確認帳號是否驗證完畢
		elseif($data[2] != 'y')
		{
		echo "帳號尚未驗證, 請至註冊信箱收取信件驗證您的帳號<br>";
		echo "點選以下按鈕可重新寄送驗證信件<br>";
		
		//紀錄資料for resend驗證信使用
		$_SESSION["id"] = $id;
		$_SESSION["mail"] = $data[1];
		$_SESSION["verify"] = $data[2];
		$_SESSION["password"] = $password;
		echo "<input class='button' type='button' value='重寄驗證信' onclick=\"window.location.replace('send_verify.php')\">";	
		}	
		//將帳號寫入SESSION後, 跳轉至主頁面
		else
		{
		$_SESSION["login_id_009"] = $id;
		$_SESSION["login_pw_009"] = $password;
		header("location:$last_page");
		}
	}

	//重寄帳號密碼
	if(!empty($_POST["sub2"]))
	{
		//關閉登入表單
		echo "<script>document.getElementById('frame').style.display = 'none';</script>";

		//接收表單資料
		$mail = $_POST["mail"];
		
		if(!filter_var($mail, FILTER_VALIDATE_EMAIL))
		{echo "信箱格式不符";}
		else	
		{
		//依照mail address查詢帳號資料
		$q_mail = "select id from account where mail='".$mail."'";
		$result = mysql_query($q_mail,$link);

			if(mysql_num_rows($result) == 0)
			{
			echo "抱歉, 此信箱系統查無註冊資料, 請您至以下連結進行註冊<br>";
			echo "<a target=_self href='register.php'>帳號註冊</a>";		
			}
			else
			{
			//取得id
			@mysql_data_seek($result,0);
			$data = mysql_fetch_row($result);		
			$id = $data[0];
			
			//將密碼更新為8碼亂數
			$password = rand(10000000,99999999);
			$u_password = "update account set pw='".$password."' where id='".$id."'";
			$update_result = mysql_query($u_password);
			
			//寄送id & 更新後的pw	
				//郵件標題  
				$subject = "[Recorder] 忘記帳號密碼";
				//郵件內容
				$message = "您的密碼已更新如下, 請登入網站後重新設定<br><br>帳號 :&nbsp;".$id."<br>密碼 :&nbsp;".$password."
							<br><a target=_blank href='http://oahehc.comoj.com/login.php'>進入網站</a><br><br>
							<font style='font-size:0.9em;color:gray'>本信件由系統自動發送, 請勿直接回復此郵件</font>";
							
				//寄送信件
				$mailer = new PHPMailer();
				mb_internal_encoding('UTF-8');                      
				$mailer->AddAddress($mail);
				$mailer->Subject = $subject;
				$mailer->CharSet="UTF-8";
				$mailer->MsgHTML($message);
				$mailer->IsHTML(true);
				
				//顯示寄送狀況
				if($mailer->Send())
				{	
				//顯示結果
				echo "帳號密碼已寄送至您的註冊信箱中<br>";
				}	
				else
				{
				echo "<script language='JavaScript'>
					  alert('信件寄送失敗, 請再試一次, 謝謝!')
					  </script>";	  
				}
			}
		}
	}
}
?>
</body>
</html>