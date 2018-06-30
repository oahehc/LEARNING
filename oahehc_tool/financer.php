<?php
//啟用暫存 for session
ob_start();
?>
<html>
<head>
<!--Load jquery-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.3/jquery-ui.min.js"></script>
	<script src="ext/jquery.blockUI.js"></script>
	<script src="ext/jquery.cookie.js"></script>
	<script src="ext/md5.min.js"></script>
<!--Load css-->
<link href="css/financer.css" media="screen" rel="stylesheet" type="text/css">	
<!--meta setting-->
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="keyword" content="finance, tool, account">
	<meta name="description" content="personal financial control tool">
	<meta name="author" content="Oahehc">	
	<!--icon for website-->
	<link rel="shortcut icon" href="pic/financer.jpg">
	<!--icon for mobile device-->
	<link rel="apple-touch-icon" href="pic/financer.jpg">
	<!--set scale for mobile-->
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!--full screen for mobile-->
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="mobile-web-app-capable" content="yes">	
	<title>Financer</title>
</head>	
	<script language="JavaScript">
		$(function(){
			//set localstorage to cookies
			var localStorage_account = localStorage.getItem("oahehc_account_009"); 
			var localStorage_pw = localStorage.getItem("oahehc_pw_009");
				if((localStorage_account != "") && (localStorage_account != null) && (localStorage_pw != "") && (localStorage_pw != null))
				{
				$.cookie("input_account_009_localstorage", localStorage_account, {path:'/'});
				$.cookie("input_pw_009_localstorage", localStorage_pw, {path:'/'});
				}
			
			
			//account logout
			$("input#logout").click(function(){
				$("input.logout_check").css("display","inline");
				$(this).css("display","none");
			})
			$("input#logout_confirm").click(function(){
				document.financer.action.value = "logout";
                localStorage.removeItem("oahehc_account_009"); 
                localStorage.removeItem("oahehc_pw_009"); 
				$.blockUI({ message: '<h1>Loading...</h1>' });
				document.financer.submit();				
			})
			$("input#logout_cancel").click(function(){
				$("input.logout_check").css("display","none");
				$("input#logout").css("display","block");
			})
			
			//head open,close
			$("input#hide_head").click(function(){
				$("div.head").css("display","none");
				$("div.aside").css("display","block");
			})
			$("input#show_head").click(function(){
				$("div.head").css("display","block");
				$("div.aside").css("display","none");
			})
			
			/*three div mode*/
			$("input#three_div").click(function(){
				$(this).css("display","none");
				$("input#four_div").css("display","block");
				$("div#IV").css("display","none");
				$("div#I").attr("class", "I full");		
			})
			$("input#four_div").click(function(){
				$(this).css("display","none");
				$("input#three_div").css("display","block");
				$("div#IV").css("display","block");
				$("div#I").attr("class", "I");		
			})
		});
	</script>
<body>
<?php
/*增加session time為2hr
$sessionLifeTime=7200;
@ini_set('session.gc_maxlifetime',$sessionLifeTime); //000未開放設定ini
session_set_cookie_params($sessionLifeTime);
*/

//start session
session_start();

//time zone
date_default_timezone_set("Asia/Taipei");


/*000web*/
include ("ext/constant.php");
$link = mysql_connect(mysql_host,mysql_user,mysql_pw);
mysql_query("SET NAMES 'utf8'");
mysql_select_db(mysql_db,$link);
error_reporting(0);

/*localhost
include ("../../../oahehc/constant.php");
$link = mysql_connect(mysql_host_offline,mysql_user_offline,mysql_pw_offline);
mysql_query("SET NAMES 'utf8'");
mysql_select_db(mysql_db_offline,$link);
    $_SESSION["login_id_009"] = "allen";
    $_SESSION["login_pw_009"] = "c4ca4238a0b923820dcc509a6f75849b";
*/

//get COOKIES if account information don't in SESSION
if(empty($_SESSION["login_id_009"]))
{
    if(!empty($_COOKIE["input_account_009"])){
        $_SESSION["login_id_009"] = $_COOKIE["input_account_009"];
    }
    elseif(!empty($_COOKIE["input_account_009_localstorage"])){
        $_SESSION["login_id_009"] = $_COOKIE["input_account_009_localstorage"];
    }
}
if(empty($_SESSION["login_pw_009"]))
{
    if(!empty($_COOKIE["input_pw_009"])){
        $_SESSION["login_pw_009"] = $_COOKIE["input_pw_009"];
    }
    elseif(!empty($_COOKIE["input_pw_009_localstorage"])){
        $_SESSION["login_pw_009"] = $_COOKIE["input_pw_009_localstorage"];
    }
}
	
//locate to login page if account information don't exist
$_SESSION["last_url"] = "financer.php";//set url for re-locate after login
if(empty($_SESSION["login_id_009"]) || empty($_SESSION["login_pw_009"]))
{header("location:login.php");}
else
{
//check password
$select_pw = "select pw from account where id='".$_SESSION["login_id_009"]."'";
$result_pw = mysql_query($select_pw,$link);
$data = mysql_fetch_row($result_pw);
	if($data[0] != $_SESSION["login_pw_009"])
	{
	$_SESSION["login_id_009"] = "";
	$_SESSION["login_pw_009"] = "";
	header("location:login.php");
	}
	else
	{$id = ucfirst($_SESSION["login_id_009"]);}
}
	
//insert visit data to mysql
if($_SESSION["visit_financer"] != "y" && !empty($id))
{
//set to prevent duplicate data
$_SESSION["visit_financer"] = "y";

//get user ip
	if(!empty($_SERVER['HTTP_CLIENT_IP']))
	{$user_ip = $_SERVER['HTTP_CLIENT_IP'];}
	else if (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))
	{$user_ip = $_SERVER['HTTP_X_FORWARDED_FOR'];}
	else
	{$user_ip = $_SERVER['REMOTE_ADDR'];}

//time
date_default_timezone_set("Asia/Taipei");
$onload_time  = date("Y-m-d H:i:s");

//current file name
$url = $_SERVER["PHP_SELF"];

//last page
$last_page = $_SERVER["HTTP_REFERER"];	

//browser
$agent = $_SERVER["HTTP_USER_AGENT"];

//insert
$insert_visit = "insert into visit(user_id,user_ip,onload_time,url,last_page,agent) 
				 Values('$id','$user_ip','$onload_time','$url','$last_page','$agent')";
$insert = mysql_query($insert_visit);


//check repeated expense
	//get this monday
	$period_final = strtotime(date("y-m-d",time()-(60*60*24*(date("N",time())-1))));
	
	//select checked stamp
	$select_period_update = "select created from financer where id='$id' and type='' and category='' and amount=0 and remark='週期檢核'";
	$result_period_update = mysql_query($select_period_update,$link);
	$data_period_update = mysql_fetch_row($result_period_update);
	//empty than create one data (for 1st login)
	if(empty($data_period_update[0]))
	{
	$insert_period_update = "insert into financer(`id`,`type`,`category`,`created`,`amount`,`remark`) Values('$id','','','$period_final','0','週期檢核')";
	mysql_query($insert_period_update,$link);			
	}
	else
	{
	$period_start = $data_period_update[0];
	
		//weekly check and update repeated expense
		while($period_start<$period_final)
		{
		$period_end = $period_start + 60*60*24*7;
		
		//select all repeated expense
		$select_period_data = "select type,category,created,amount,remark,repeated,budget,repeat_date,credit from financer where id='$id' and repeated is NOT NULL and created>='$period_start' and created<'$period_end'";
		$result_period_data = mysql_query($select_period_data,$link);
		@mysql_data_seek($result_period_data,0);
		@$number_period_data = mysql_num_rows($result_period_data);				
			for($k=0; $k<$number_period_data; $k++)
			{
			$data_period_data = mysql_fetch_row($result_period_data);
					
				//create new data base on repeated period
				if($data_period_data[5] == "週")
				{
				$new_created = $data_period_data[2] + 60*60*24*7;
				
				$insert_period_data = "insert into financer(`id`,`type`,`category`,`created`,`amount`,`remark`,`repeated`,`budget`,`credit`) 
									   Values('$id','$data_period_data[0]','$data_period_data[1]','$new_created','$data_period_data[3]','$data_period_data[4]','$data_period_data[5]','$data_period_data[6]','$data_period_data[8]')";
				mysql_query($insert_period_data,$link);
				}
				elseif($data_period_data[5] == "月")
				{
				//create new date by original day
				$original_day = $data_period_data[7];
				$original_month = date("n",$data_period_data[2]);
				$new_created = strtotime((date("Y",$data_period_data[2])+floor(date("m",$data_period_data[2])/12))."-".((date("m",$data_period_data[2])%12)+1)."-".$original_day);						

	
				//day adjust for 29~31
				$new_month = date("n",$new_created);
					while(($new_month - $original_month)==2)
					{
					$new_created = $new_created -60*60*24;
					$new_month = date("n",$new_created);
					}
				
				$insert_period_data = "insert into financer(`id`,`type`,`category`,`created`,`amount`,`remark`,`repeated`,`repeat_date`,`budget`,`credit`) 
									   Values('$id','$data_period_data[0]','$data_period_data[1]','$new_created','$data_period_data[3]','$data_period_data[4]','$data_period_data[5]','$data_period_data[7]','$data_period_data[6]','$data_period_data[8]')";
				mysql_query($insert_period_data,$link);	
				}
			}	
		$period_start = $period_end;
		}

	//update checked stamp
	$update_period_update = "update financer set created='$period_final' where id='$id' and type='' and category='' and amount=0 and remark='週期檢核'";
	mysql_query($update_period_update,$link);
	}

//payment auto alert
	//+3 day
	$alert_day = 3;
	$gap = 60*60*24*$alert_day;
	$time_plus = time() + $gap;
	
	//repeated expense
	$select_repeated_expense = "select category,created,amount,remark from financer where type='支出' and id='$id' and created<$time_plus and repeated!='' and (paid='' OR paid is NULL) and (credit='' OR credit is NULL)";
	$result_repeated_expense = mysql_query($select_repeated_expense);
	@mysql_data_seek($result_repeated_expense,0);
	@$number_repeated_expense = mysql_num_rows($result_repeated_expense);				
		for($k=0; $k<$number_repeated_expense; $k++)
		{
		$data_repeated_expense = mysql_fetch_row($result_repeated_expense);	
		$payment = $payment.$data_repeated_expense[0]." ".$data_repeated_expense[3]." ".date("m/d",$data_repeated_expense[1])."*".number_format($data_repeated_expense[2]*-1,0,".",",")."\\n";
		}	
/*	
//credit card
$select_credit_deadline = "select repeat_date,credit from financer where id='$id' and type='' and category='' and remark='credit_card_payment'";
$result_credit_deadline = mysql_query($select_credit_deadline);
@$number_credit_deadline = mysql_num_rows($result_credit_deadline);		
	for($i=0;$i<$number_credit_deadline;$i++)
	{
	$data_credit_deadline = mysql_fetch_row($result_credit_deadline);
	
	
	}	
*/	
	//alert
	if(!empty($payment))
	{echo "<script>alert('[週期費用付款提醒]\\n$payment')</script>";}
}		

//mapping array for month and day
$day_number = array(1=>31,2=>28,3=>31,4=>30,5=>31,6=>30,7=>31,8=>31,9=>30,10=>31,11=>30,12=>31);
?>
<form method="POST" name="financer" id="financer">
<input type="hidden" name="action">

<!--header--------------------------------------------------------------------------------->
<?php
//account logout
if($_POST["action"] == "logout")
{	
    $_SESSION["login_pw_009"] = "";
    $_SESSION["login_id_009"] = "";
    $_SESSION["visit_financer"] = "";
    $_SESSION["last_url"] = "financer.php";
    unset($_COOKIE["input_account_009"]);
    unset($_COOKIE["input_pw_009"]);
    setcookie("input_account_009", null, -1, "/");
    setcookie("input_pw_009", null, -1, "/");
    unset($_COOKIE["input_account_009_localstorage"]);
    unset($_COOKIE["input_pw_009_localstorage"]);
    setcookie("input_account_009_localstorage", null, -1, "/");
    setcookie("input_pw_009_localstorage", null, -1, "/");
    header("location:login.php");
}
?>
<div class="head">
	<div class="account">
		<input class="aside_flag" type="button" value="登出" id="logout">
		<input class="aside_flag logout_check" type="button" name="logout_check" value="確定登出?" id="logout_confirm">
		<input class="aside_flag logout_check" type="button" name="cancel" value="取消" id="logout_cancel">
	</div>
	<div class="author">
		<input class="link" type="button" value="Recorder" onclick="window.open('recorder.php','_blank')">
		<input class="link" type="button" value="帳號管理" onclick="window.open('account_manager.php','_blank')">
		<input class="link" type="button" value="網站教學" onclick="window.open('financer_introduction.php','_blank')">
		<input class="link" type="button" value="聯絡作者" onclick="window.open('contact_author_financer.php','_blank')">
	</div>	
	<div class="setting">
		<input class="aside_flag" type="button" value="&#10005;" id="hide_head">
	</div>		
</div>

<div class="aside">	
	<input class="aside_id web" type="button" value="<?php echo $id;?>" id="show_head">
	<input class="aside_id mobile" type="button" value="▼" id="show_head">
	<br>
	<div class="change">
	<input class="aside" type="button" value="3DIV" id="three_div">
	<input class="aside" type="button" value="4DIV" id="four_div">
	</div>
</div>

<!--start for left div-------------------------------------------------------------------------------->
<div class="left">
<!--Timer => input--------------------------------------------------------------------------------->
<div class="II" id="II">
	<div class="content" id="content2">
	<?php
	//設定欄位筆數
	$column_number_max = 20;	
	
	//將紀錄寫入mysql
	if($_POST["save_data"] == "y")
	{
		$income_input = 0;
		$expense_input = 0;
		$column_number = $_POST["column_number"];
		for($i=1;$i<$column_number;$i++)
		{
		//取得欄位資料
			//移動至當下時間, 以便明細排序與輸入時間一致
		$date_input = strtotime($_POST["date_$i"]." ".date("H:i:s",time()));
		$type_input = $_POST["type_$i"];
		$category_input = $_POST["category_$i"];
		$amount_input = $_POST["amount_$i"];
		$remark_input = $_POST["remark_$i"];
		$period_input = $_POST["period_$i"];
		$credit_input = $_POST["credit_$i"];

		//資料驗證
			//type,category,amount均空白則忽略此筆資料
			if(empty($type_input) && empty($category_input) && empty($amount_input))
			{;}
			elseif(empty($date_input))
			{
			$error .= "第 $i 筆 : [ERROR]日期請勿空白\\n";
			$input_check++;
			$array_error[$i] = "error";
			}			
			elseif(empty($type_input))
			{
			$error .= "第 $i 筆 : [ERROR]類別請勿空白\\n";
			$input_check++;
			$array_error[$i] = "error";
			}
			elseif($type_input!="收入" && $type_input!="支出")
			{
			$error .= "第 $i 筆 : [ERROR]類別需為收入或支出\\n";
			$input_check++;		
			$array_error[$i] = "error";	
			}			
			elseif(empty($category_input))
			{
			$error .= "第 $i 筆 : [ERROR]項目請勿空白\\n";
			$input_check++;		
			$array_error[$i] = "error";	
			}	
			elseif(!preg_match("/^\d+$/",$amount_input))
			{
			$error .= "第 $i 筆 : [ERROR]金額請使用正整數\\n";
			$input_check++;	
			$array_error[$i] = "error";	
			}
			elseif($period_input!="週" && $period_input!="月" && $period_input!="")
			{
			$error .= "第 $i 筆 : [ERROR]設定週期請使用週or月\\n";
			$input_check++;	
			$array_error[$i] = "error";		
			}		
			else
			{
				//依日期取得最近一筆紀錄的預算
				$select_recently_budget = "select budget from financer where id='".$id."' and type='$type_input' and category='$category_input' and created<='$date_input' order by created desc";
				$result_recently_budget = mysql_query($select_recently_budget, $link);
				@mysql_data_seek($result_recently_budget,0);
				$result_recently_budget = mysql_fetch_row($result_recently_budget);			
				
				//轉換金額正負數
				if($type_input=="支出")
				{$amount_input = $amount_input*-1;}		
			
				//新增為週期資料
				if(!empty($period_input))
				{
				//取得週期檢核時間
				$select_period_update = "select created from financer where id='$id' and type='' and category='' and amount=0 and remark='週期檢核'";
				$result_period_update = mysql_query($select_period_update,$link);
				$data_period_update = mysql_fetch_row($result_period_update);

				//將input時間移動00:00:00, 讓週期費用統一顯示於每天第一筆
				$period_date = strtotime(date("Y-n-j",$date_input));
				$original_day = date("j",$period_date); //for month exp auto create

					if($period_input == "週")
					{
						//週期檢核時間 +1WK(因do while最後會將日期postpone一週)
						$period_inspect = $data_period_update[0]+60*60*24*7;

						//若新增週期資料在檢核時間之前, 自動新增對應記錄
						do
						{
						//寫入紀錄
						$insert_new_data = "insert into financer(`id`,`type`,`category`,`created`,`amount`,`remark`,`repeated`,`repeat_date`,`budget`,`credit`) 
											Values('$id','$type_input','$category_input','$period_date','$amount_input','$remark_input','$period_input','$original_day','$result_recently_budget[0]','$credit_input')";
						mysql_query($insert_new_data,$link);

						$period_date = $period_date+60*60*24*7;
						}while($period_date<$period_inspect);
					}
					elseif($period_input == "月")
					{
						//週期檢核時間 +1month
							//月份調整for跨年度
							if(date("n",$data_period_update[0]) == 12)
							{$period_inspect = strtotime((date("Y",$data_period_update[0])+1)."-1".date("-j",$data_period_update[0]));}
							else
							{$period_inspect = strtotime(date("Y-",$data_period_update[0]).(date("n",$data_period_update[0])+1).date("-j",$data_period_update[0]));}
										
					
						//若新增週期資料在檢核時間之前, 自動新增對應記錄
						do
						{
						//寫入紀錄						
						$insert_new_data = "insert into financer(`id`,`type`,`category`,`created`,`amount`,`remark`,`repeated`,`repeat_date`,`budget`,`credit`) 
											Values('$id','$type_input','$category_input','$period_date','$amount_input','$remark_input','$period_input','$original_day','$result_recently_budget[0]','$credit_input')";

						mysql_query($insert_new_data,$link);

						//move to next month
						$original_month = date("n",$period_date);
						$period_date = strtotime((date("Y",$period_date)+floor(date("m",$period_date)/12))."-".((date("m",$period_date)%12)+1)."-".$original_day);						
					
						//日期確認 & 調整 for day = 29~31
							$new_month = date("n",$period_date);
								while(($new_month - $original_month)==2)
								{
								$period_date = $period_date -60*60*24;
								$new_month = date("n",$period_date);
								}					
						
						}while($period_date<$period_inspect);
					}
					
				//清空原始資料
				$_POST["date_$i"] = "";
				$_POST["type_$i"] = "";
				$_POST["category_$i"] = "";
				$_POST["amount_$i"] = "";
				$_POST["remark_$i"] = "";
				$_POST["period_$i"] = "";			
				$_POST["credit_$i"] = "";			
				}
				//新增一般資料
				else
				{
				//寫入紀錄
				$insert_new_data = "insert into financer(`id`,`type`,`category`,`created`,`amount`,`remark`,`repeated`,`budget`,`credit`) 
									Values('$id','$type_input','$category_input','$date_input','$amount_input','$remark_input','$period_input','$result_recently_budget[0]','$credit_input')";
				mysql_query($insert_new_data,$link);
				
				//清空原始資料
				$_POST["date_$i"] = "";
				$_POST["type_$i"] = "";
				$_POST["category_$i"] = "";
				$_POST["amount_$i"] = "";
				$_POST["remark_$i"] = "";
				$_POST["period_$i"] = "";		
				$_POST["credit_$i"] = "";		
				}				
			//alert message for success
			$error .= "第 $i 筆 : 新增成功\\n";
			
			//calculate total input amount
				if($amount_input>0)
				{$income_input += $amount_input;}
				else
				{$expense_input += ($amount_input*-1);}
			}	
		}
		//show alert message
			$total_amount = "";
			if(!empty($expense_input))
			{$total_amount = "總支出 : ".number_format($expense_input,0,".",",")."\\n";}
			if(!empty($income_input))
			{$total_amount .= "總收入 : ".number_format($income_input,0,".",",")."\\n";}
		echo "<script>alert('".$error."\\n".$total_amount."')</script>";

		
		//all data success => reset input column
		if(empty($input_check))
		{$array_error = array();}
	}
	elseif($_POST["save_data"] == "mobile")
	{
	//取得欄位資料
		//移動至當下時間, 以便明細排序與輸入時間一致
	$date_input_mobile = strtotime($_POST["date_0"]." ".date("H:i:s",time()));
	$type_input_mobile = $_POST["type_0"];
	$category_input_mobile = $_POST["category_0"];
	$amount_input_mobile = $_POST["amount_0"];
	$remark_input_mobile = $_POST["remark_0"];
	$period_input_mobile = $_POST["period_0"];
	$credit_input_mobile = $_POST["credit_0"];

	//資料驗證
		//type,category,amount均空白則忽略此筆資料
		if(empty($type_input_mobile) && empty($category_input_mobile) && empty($amount_input_mobile))
		{;}
		elseif(empty($date_input_mobile))
		{
		$error .= "[ERROR]日期請勿空白\\n";
		echo "<script>alert('".$error."')</script>";
		}			
		elseif(empty($type_input_mobile))
		{
		$error .= "[ERROR]類別請勿空白\\n";
		echo "<script>alert('".$error."')</script>";
		}
		elseif($type_input_mobile!="收入" && $type_input_mobile!="支出")
		{
		$error .= "[ERROR]類別需為收入或支出\\n";
		echo "<script>alert('".$error."')</script>";
		}			
		elseif(empty($category_input_mobile))
		{
		$error .= "[ERROR]項目請勿空白\\n";
		echo "<script>alert('".$error."')</script>";
		}	
		elseif(!preg_match("/^\d+$/",$amount_input_mobile))
		{
		$error .= "[ERROR]金額請使用正整數\\n";
		echo "<script>alert('".$error."')</script>";
		}
		elseif($period_input_mobile!="週" && $period_input_mobile!="月" && $period_input_mobile!="")
		{
		$error .= "[ERROR]設定週期請使用週or月\\n";
		echo "<script>alert('".$error."')</script>";
		}		
		else
		{
			//依日期取得最近一筆紀錄的預算
			$select_recently_budget = "select budget from financer where id='".$id."' and type='$type_input_mobile' and category='$category_input_mobile' and created<='$date_input_mobile' order by created desc";
			$result_recently_budget = mysql_query($select_recently_budget, $link);
			@mysql_data_seek($result_recently_budget,0);
			$result_recently_budget = mysql_fetch_row($result_recently_budget);			
			
			//轉換金額正負數
			if($type_input_mobile=="支出")
			{$amount_input_mobile = $amount_input_mobile*-1;}		
		
			//新增為週期資料
			if(!empty($period_input_mobile))
			{
			//取得週期檢核時間
			$select_period_update = "select created from financer where id='$id' and type='' and category='' and amount=0 and remark='週期檢核'";
			$result_period_update = mysql_query($select_period_update,$link);
			$data_period_update = mysql_fetch_row($result_period_update);

			//將input時間移動00:00:00, 讓週期費用統一顯示於每天第一筆
			$period_date = strtotime(date("Y-n-j",$date_input_mobile));
			$original_day = date("j",$period_date); //for month exp auto create

				if($period_input == "週")
				{
					//週期檢核時間 +1WK(因do while最後會將日期postpone一週)
					$period_inspect = $data_period_update[0]+60*60*24*7;

					//若新增週期資料在檢核時間之前, 自動新增對應記錄
					do
					{
					//寫入紀錄
					$insert_new_data = "insert into financer(`id`,`type`,`category`,`created`,`amount`,`remark`,`repeated`,`repeat_date`,`budget`,`credit`) 
										Values('$id','$type_input_mobile','$category_input_mobile','$period_date','$amount_input_mobile','$remark_input_mobile','$period_input_mobile','$original_day','$result_recently_budget[0]','$credit_input_mobile')";
					mysql_query($insert_new_data,$link);

					$period_date = $period_date+60*60*24*7;
					}while($period_date<$period_inspect);
				}
				elseif($period_input_mobile == "月")
				{
					//週期檢核時間 +1month
						//月份調整for跨年度
						if(date("n",$data_period_update[0]) == 12)
						{$period_inspect = strtotime((date("Y",$data_period_update[0])+1)."-1".date("-j",$data_period_update[0]));}
						else
						{$period_inspect = strtotime(date("Y-",$data_period_update[0]).(date("n",$data_period_update[0])+1).date("-j",$data_period_update[0]));}
									
				
					//若新增週期資料在檢核時間之前, 自動新增對應記錄
					do
					{
					//寫入紀錄						
					$insert_new_data = "insert into financer(`id`,`type`,`category`,`created`,`amount`,`remark`,`repeated`,`repeat_date`,`budget`,`credit`) 
										Values('$id','$type_input_mobile','$category_input_mobile','$period_date','$amount_input_mobile','$remark_input_mobile','$period_input_mobile','$original_day','$result_recently_budget[0]','$credit_input_mobile')";

					mysql_query($insert_new_data,$link);

					//move to next month
					$original_month = date("n",$period_date);
					$period_date = strtotime((date("Y",$period_date)+floor(date("m",$period_date)/12))."-".((date("m",$period_date)%12)+1)."-".$original_day);						
				
					//日期確認 & 調整 for day = 29~31
						$new_month = date("n",$period_date);
							while(($new_month - $original_month)==2)
							{
							$period_date = $period_date -60*60*24;
							$new_month = date("n",$period_date);
							}					
					
					}while($period_date<$period_inspect);
				}
				
			//清空原始資料
			$_POST["date_0"] = "";
			$_POST["type_0"] = "";
			$_POST["category_0"] = "";
			$_POST["amount_0"] = "";
			$_POST["remark_0"] = "";
			$_POST["period_0"] = "";			
			$_POST["credit_0"] = "";			
			}
			//新增一般資料
			else
			{
			//寫入紀錄
			$insert_new_data = "insert into financer(`id`,`type`,`category`,`created`,`amount`,`remark`,`repeated`,`budget`,`credit`) 
								Values('$id','$type_input_mobile','$category_input_mobile','$date_input_mobile','$amount_input_mobile','$remark_input_mobile','$period_input_mobile','$result_recently_budget[0]','$credit_input_mobile')";
			mysql_query($insert_new_data,$link);
			
			//清空原始資料
			$_POST["date_0"] = "";
			$_POST["type_0"] = "";
			$_POST["category_0"] = "";
			$_POST["amount_0"] = "";
			$_POST["remark_0"] = "";
			$_POST["period_0"] = "";		
			$_POST["credit_0"] = "";		
			}
	
		if($amount_input_mobile<0)
		{$amount_input_mobile = $amount_input_mobile*-1;}
		//show alert message				
		echo "<script>alert('新增成功\\n  ".$type_input_mobile."\\n  ".$category_input_mobile." *".$amount_input_mobile."')</script>";				
		}
	}
	
	$type[0] = "支出";
	$type[1] = "收入";
	
	//設定 type 作為 datalist	
	echo "<datalist id='type'>";		
	for($j=0;$j<count($type);$j++)
	{echo "<option value=$type[$j]>";}	
	echo "</datalist>";
	
	//取得 type	對應的 category & 設定為datalist
	for($j=0;$j<count($type);$j++)
	{
		$select_category = "select distinct category from financer where id='".$id."' and type='$type[$j]' order by category";
		$result_category = mysql_query($select_category, $link);
		@$number_category = mysql_num_rows($result_category);
		for($i=0;$i<$number_category;$i++)
		{
		$data_category = mysql_fetch_row($result_category);
		$category[$i] = $data_category[0];
		}	
		echo "<datalist id='$type[$j]'>";		
		for($k=0;$k<count($category);$k++)
		{echo "<option value=$category[$k]>";}	
		echo "</datalist>";
	}	
	
	//設定週期的datalist
	$period = array("週","月");
	echo "<datalist id='period'>";		
		for($k=0;$k<count($period);$k++)
		{echo "<option value=$period[$k]>";}	
	echo "</datalist>";	
	
	//set credit card datalist
	$select_credit = "select distinct credit from financer where id='".$id."' and credit is NOT NULL and credit!='' order by credit";
	$result_credit = mysql_query($select_credit);
	@$number_credit = mysql_num_rows($result_credit);
		for($i=0;$i<$number_credit;$i++)
		{
		$data_credit = mysql_fetch_row($result_credit);
		$array_credit[$i] = $data_credit[0];
		}	
	echo "<datalist id='credit'>";		
		for($k=0;$k<count($array_credit);$k++)
		{echo "<option value=$array_credit[$k]>";}	
	echo "</datalist>";
	
	//mobile input interface
		//save and reset buton
		echo "<input class='mobile mobile_big' type='button' value='重填' onclick='reset_input_column()'>
			  <input class='mobile mobile_big' type='button' value='存檔' onclick='save_data_button_mobile()'>";
		  
		//將日期預設為今天
		if(empty($_POST["date_0"]))
		{$_POST["date_0"] = date('Y-m-d', time());}
	
		echo "<table class='mobile'>
				<tr>
					<th class='gray'>日期</th>
					<td><input data-date='".date('Y-m-d', time())."' class='text date center' type='date' name='date_0' value='".$_POST["date_0"]."'></td>
				</tr>
				<tr>
					<th class='gray'>類別</th>
					<td><input class='text input center type_0' name='type_0' maxlength=8 list='type' value='".$_POST["type_0"]."' onchange=\"type_select('0')\"></td>
				</tr>
				<tr>
					<th class='gray'>項目</th>
					<td><input class='text input center category_0' name='category_0' maxlength=8 list='".$_POST["type_0"]."' value='".$_POST["category_0"]."'></td>
				</tr>
				<tr>
					<th class='gray'>金額</th>
					<td><input class='text input center' type='number' step=1 min=0 name='amount_0' value='".$_POST["amount_0"]."'></td>
				</tr>
				<tr>
					<th class='gray'>備註</th>
					<td><input class='text input' name='remark_0' maxlength=50 value='".$_POST["remark_0"]."'></td>
				</tr>
				<tr>
					<th class='gray'>信用卡</th>
					<td><input class='text input' name='credit_0' maxlength=10 list='credit' value='".$_POST["credit_0"]."'></td>
				</tr>
				<tr>
					<th class='gray'>週期</th>
					<td><input class='text input center' name='period_0' list='period' value='".$_POST["period_0"]."'></td>
				</tr>
			  </table>";
			  
	
	//標題
	echo "<table class='web'>
			<tr class='gray'>
				<td class='middle titlecolumn2'>日期</td>			
				<td class='short titlecolumn2'>類別</td>
				<td class='short titlecolumn2'>項目</td>
				<td class='short titlecolumn2'>金額</td>
				<td class='middle titlecolumn2'>備註</td>
				<td class='middle titlecolumn2' title='Add credit card name to accumulate unpaid expense'>信用卡<span class='web'>*</span></td>
				<td class='short titlecolumn2' title='Set period for regular expense or income(phone bill/salary/rent..)\nSystem will generate expense automatically'>週期<span class='web'>*</span></td>
			</tr>";

			
	//填寫欄位
	for($i=1;$i<=$column_number_max;$i++)
	{
		//將日期預設為今天
		if(empty($_POST["date_$i"]))
		{$_POST["date_$i"] = date('Y-m-d', time());}
		
		//set showing table row
		$row[$i] = "input"; //default hide all row
		if(!$array_error)
		{$row[1] = "";} //show first row if first login or all data submit success
		if($array_error[$i] == "error")
		{$row[$i] = "";} //show error input row
	
	echo "<tr class='$row[$i] row_$i'>
			<td class='smallpadding'><input data-date='".date('Y-m-d', time())."' class='text date center' type='date' name='date_$i' value='".$_POST["date_$i"]."'></td>
			<td class='smallpadding'><input class='text input center type_$i' name='type_$i' maxlength=8 list='type' value='".$_POST["type_$i"]."' onchange=\"type_select('$i')\"></td>
			<td class='smallpadding'><input class='text input center category_$i' name='category_$i' maxlength=8 list='' value='".$_POST["category_$i"]."'></td>
			<td class='smallpadding'><input class='text input center' type='number' step=1 min=0 name='amount_$i' value='".$_POST["amount_$i"]."'></td>
			<td class='smallpadding'><input class='text input' name='remark_$i' maxlength=50 value='".$_POST["remark_$i"]."'></td>
			<td class='smallpadding'><input class='text input' name='credit_$i' maxlength=10 list='credit' value='".$_POST["credit_$i"]."'></td>			
			<td class='smallpadding'><input class='text input center' name='period_$i' list='period' value='".$_POST["period_$i"]."'></td>
		  </tr>";
	}
	echo "</table>";
	
	//顯示編輯按鈕
	echo "<input class='web' type='button' value='存檔' onclick='save_data_button()'>
		  <input class='web' type='button' value='清除欄位資料' onclick='reset_input_column()'>
		  <input type='hidden' name='save_data'>
		  <input type='hidden' name='column_number' value='$column_number_max'>";
	?>
	</div>
</div>


<!--Target => budget--------------------------------------------------------------------------------->
<div class="III" id="III">
	<?php	
	//月份
	echo "<div class='filter'><table style='margin:0 5 5 0;'><tr>
		  <td class='unborder left unpadding'>
		  <select class='middle' name='period_select_budget' onchange='autosubmit()'>";
			  
		//取得n-4~n+1月份作為選項		  
		$month_array[5] = date('Y-m',(strtotime(date('Y-m',time())."-01")+60*60*24*40));
			echo "<option value=$month_array[5]>$month_array[5]";
		//將本月設為預設選項
		$selected = array();		
		$selected[4] = "selected";
		for($i=4;$i>=0;$i--)
		{
		$month_array[$i] = date('Y-m',strtotime($month_array[$i+1]."-01")-1);
			echo "<option value=$month_array[$i] $selected[$i]>$month_array[$i]";
		}

	echo "</td>";
	
	//月份剩餘天數
		//received select period
		if(empty($_POST["period_select_budget"]))
		{$period_select_budget = $month_array[4];}
		else
		{$period_select_budget = $_POST["period_select_budget"];}
		//計算剩餘天數
		$day_remind = max(0, ceil((strtotime(date('Y-m',strtotime($period_select_budget."-01")+60*60*24*40)."-01") - time())/60/60/24));
		
	echo "<td class='unborder right unpadding'>&nbsp;&nbsp;剩餘天數&nbsp;</td>
		  <td class='unborder left unpadding'>";	
	echo "<input class='tiny center' value=$day_remind>&nbsp;&nbsp;</td>";

	//接收月份, 計算期間
	$time_start = strtotime($period_select_budget."-01");
	$time_end = strtotime(date("y-m",$time_start+60*60*24*40)."-01");
	
	//編輯預算(新增/編輯資料寫入放最前面, 確保table刷新時能抓到最新的資料)
	if(!empty($_POST["change_budget_item"]))
	{
	//取得要修改的欄位item數
	$item_change = $_POST["change_budget_item"];
	
	//接受修改後的預算
	$new_budget = $_POST["new_budget_$item_change"];
	
		//預算必須為正整數
		if(!preg_match("/^[0-9]*[1-9][0-9]*$/",$new_budget))
		{echo "<script>alert('預算請設定為正整數')</script>";}
		else
		{
		//取得type,category,created
		$select_type_category = "select type,category,created from financer where item='".$item_change."' and id='".$id."'";
		$result_type_category = mysql_query($select_type_category,$link);
		$data_type_category = mysql_fetch_row($result_type_category);
		
			//若月份區間內無紀錄, 於time_start新增一筆紀錄
			if($data_type_category[2]<$time_start)
			{
			$insert_budget = "insert into financer(`id`,`type`,`category`,`created`,`amount`,`budget`) 
							  Values('$id','$data_type_category[0]','$data_type_category[1]','$time_start','0','$new_budget')";
			mysql_query($insert_budget,$link);
			
			//關閉edit mode
			$_SESSION["edit_budget"] = "";		
			}
			else
			{
			//更新預算
			$update_budget = "update financer set budget='".$new_budget."' where item='".$item_change."' and id='".$id."'";
			mysql_query($update_budget,$link);

			//關閉edit mode
			$_SESSION["edit_budget"] = "";
			
			//顯示alert視窗
			echo "<script>alert('預算已更新')</script>";
			}
		}
	}
	elseif(!empty($_POST["remove_budget_item"]))
	{
	//取得要修改的欄位item數
	$item_change = $_POST["remove_budget_item"];

	//取得type,category,created
	$select_type_category = "select type,category,created from financer where item='".$item_change."' and id='".$id."'";
	$result_type_category = mysql_query($select_type_category,$link);
	$data_type_category = mysql_fetch_row($result_type_category);
	
		//若月份區間內無紀錄, 於time_start新增一筆紀錄
		if($data_type_category[2]<$time_start)
		{
		$insert_budget = "insert into financer(`id`,`type`,`category`,`created`,`amount`,`budget`) 
						  Values('$id','$data_type_category[0]','$data_type_category[1]','$time_start','0','0')";
		mysql_query($insert_budget,$link);
		
		//關閉edit mode
		$_SESSION["edit_budget"] = "";		
		}
		else
		{
		//更新預算
		$update_budget = "update financer set budget='0' where item='".$item_change."' and id='".$id."'";
		mysql_query($update_budget,$link);

		//關閉edit mode
		$_SESSION["edit_budget"] = "";
		
		//顯示alert視窗
		echo "<script>alert('預算已更新')</script>";		
		}
	}	
	
	//載入&關閉 編輯模式
	if(!empty($_POST["edit_budget"]))
	{$_SESSION["edit_budget"] = $_POST["edit_budget"];}
	elseif(!empty($_POST["change_budget"]) || !empty($_POST["remove_budget"]))
	{$_SESSION["edit_budget"] = "";}	
	
	//傳遞編輯模式參數
	echo "<input type='hidden' name='edit_budget'>";
	
	//編輯模式
	if($_SESSION["edit_budget"] == "y")
	{echo "<td class='unborder right unpadding'><input type='button' value='結束編輯' onclick='edit_close()'></td>";}
	//正常顯示模式		
	else
	{echo "<td class='unborder right unpadding'><input type='button' value='編輯預算' onclick='edit_open()'></td>";}	

	echo "</tr></table></div>
		  <div style='clear:both'></div>";
	?>
	
	<div class="content" id="content3">
	<table>
		<tr class="gray">
			<td class="middle titlecolumn3">項目</td>
			<td class="short titlecolumn3">支出金額</td>
			<td class="short titlecolumn3">預算</td>
			<td class="short titlecolumn3" title="Yellow : balance ratio below remain days in this month &#10;Red : balance equal to zero">剩餘金額<span class='web'>*</span></td>
		</tr>
		
	<?php	
	//取得資料(需放在編輯/刪除後, 才能抓到最新資料)
	$select_type = "select distinct type,category from financer where id='".$id."' and type='支出' and created<'".$time_end."' order by type asc,category asc";
	$result_type = mysql_query($select_type,$link);
	@mysql_data_seek($result_type,0);
	@$number_type = mysql_num_rows($result_type);	
	
	//傳遞要變更的item
	echo "<input type=hidden name='change_budget_item'>";
	//傳遞要刪除item
	echo "<input type=hidden name='remove_budget_item'>";
	
	for($i=0;$i<$number_type;$i++)
	{
	$data_type[$i] = mysql_fetch_row($result_type);

	//取得最後一筆資料的預算 & item
	$select_budget = "select item,budget from financer where type='支出' and category='".$data_type[$i][1]."' and id='".$id."' and created<'".$time_end."' order by created desc";
	$result_budget = mysql_query($select_budget,$link);
	@mysql_data_seek($result_budget,0);
	$data_budget[$i] = mysql_fetch_row($result_budget);
	$item = $data_budget[$i][0];

		//計算支出 & 剩餘金額
		$select_expense = "select sum(amount) from financer where type='".$data_type[$i][0]."' and category='".$data_type[$i][1]."' and id='".$id."' and created>='".$time_start."' and created<'".$time_end."'";
		$result_expense = mysql_query($select_expense,$link);
		@mysql_data_seek($result_expense,0);
		$data_expense[$i] = mysql_fetch_row($result_expense);
		$total_expense[$i] = $data_expense[$i][0]*-1;
		
		//預算 & 剩餘金額
		if(empty($data_budget[$i][1]))
		{
			//for編輯模式預設值(文字無法顯示於type=number)
			$budget_value[$i] = 0;
			//剩餘金額比例設為100%
			$remind_ratio[$i] = 1;
		$remind[$i] = "-";
		$data_budget[$i][1] = "-";
		}
		else
		{
			//for編輯模式預設值(千分位符號無法顯示於type=number)
			$budget_value[$i] = $data_budget[$i][1];		
			//計算剩餘金額比例
			$remind_ratio[$i] = max(($data_budget[$i][1]+$data_expense[$i][0]),0)/$data_budget[$i][1];
		$remind[$i] = number_format(max(($data_budget[$i][1]+$data_expense[$i][0]),0),0,".",",");
		$data_budget[$i][1] = number_format($data_budget[$i][1],0,".",",");
		}
		
		//依照剩餘金額比例設定顏色
			//剩餘日期比例
			$remind_day_ratio = min(1,$day_remind/30);
		if($remind_ratio[$i] == 0)
		{$color[$i] = "#FF3232";}
		elseif($remind_ratio[$i] < $remind_day_ratio)
		{$color[$i] = "#FFFD6A";}
		else
		{$color[$i] = "";}
			  
			  
		//編輯模式
		if($_SESSION["edit_budget"] == "y")
		{
		echo "<tr>
			  <td>".$data_type[$i][1]."</td>
			  <td>".number_format($total_expense[$i],0,".",",")."</td>
			  <td class='smallpadding'>
			    <input class='center middle' type=number name=new_budget_$item value='".$budget_value[$i]."'>
			  </td>
			  <td style='background-color:".$color[$i]."'>".$remind[$i]."</td>
			  <td class='unborder left unpadding short'>
				<input type=button value='更新' onclick=change_budget($item)>
				<input type=button value='移除預算' onclick=remove_budget($item)>
			  </td>
			  </tr>"; 
		}
		//正常模式
		else
		{
			//hidden target == 0
			if($budget_value[$i] != 0)
			{
			echo "<tr>
				  <td>".$data_type[$i][1]."</td>
				  <td>".number_format($total_expense[$i],0,".",",")."</td>
				  <td>".$data_budget[$i][1]."</td>
				  <td style='background-color:".$color[$i]."'>".$remind[$i]."</td>
				  </tr>";
			}
		}		
	}
	?>
	</table>
	</div>		
</div>
</div>
<!--end for left div---------------------------------------------------------------------------------->

<!--start for right div-------------------------------------------------------------------------------->
<div class="right">
<!--achieve => rawdata-------------------------------------------------------------------------------->
<div class="I" id="I">
	<div class="filter"><table style="margin:0 5 5 0;"><tr>
	<?php
	//明細選單
	echo "<td class='unborder left unpadding'>
		  <select class='middle' name='rawdata_chart_select' onchange='autosubmit()'>";
	
	$rawdata_type = array("明細","信用卡明細","週期設定","關鍵字搜尋");			
	foreach($rawdata_type as $content)
	{echo "<option value=$content>$content";}
	echo "</td>";
	
	//取得chart_select
	if(empty($_POST["rawdata_chart_select"]))
	{$chart_select = $rawdata_type[0];}
	else
	{$chart_select = $_POST["rawdata_chart_select"];}
	
	if($chart_select == "明細")
	{	
		//日期
		echo "<td class='unborder left unpadding'>
			  <select class='middle' name='rawdata_period_select' onchange='autosubmit()'>";
				  
	
			//取得n-10~n+1月份作為選項		  
			$month_array[11] = date('Y-m',(strtotime(date('Y-m',time())."-01")+60*60*24*40));
				echo "<option value=$month_array[11]>$month_array[11]";
			//將本月設為預設選項
			$selected = array();
			$selected[10] = "selected";
			for($i=10;$i>=0;$i--)
			{
			$month_array[$i] = date('Y-m',strtotime($month_array[$i+1]."-01")-1);
				echo "<option value=$month_array[$i] $selected[$i]>$month_array[$i]";
			}
			
		echo "</td>";
			
		//類別
		echo "<td class='unborder left unpadding'>類別</td>	
			  <td class='unborder left unpadding'>
			  <select class='middle' name='rawdata_type_select' onchange='autosubmit()'>
			  <option value='%'>全選";
			arsort($type);
			foreach($type as $content)
			{echo "<option value=$content>$content";}
			echo "</td>";	

		//取得 type	對應的 category
			//接收type
			if(empty($_POST["rawdata_type_select"]))
			{$type_rawdata = "%";}
			else
			{$type_rawdata = $_POST["rawdata_type_select"];}	
			$select_category_rawdata = "select distinct category from financer where id='".$id."' and category!='' and type like '".$type_rawdata."' order by category asc";
			$result_category_rawdata = mysql_query($select_category_rawdata, $link);
			@$number_category_rawdata = mysql_num_rows($result_category_rawdata);
			
			//定義為矩陣, 避免foreach error message
			$category_rawdata = array();
			for($i=0;$i<$number_category_rawdata;$i++)
			{
			$data_category_rawdata = mysql_fetch_row($result_category_rawdata);
			$category_rawdata[$i] = $data_category_rawdata[0];
			}
			echo "<td class='unborder left unpadding'>項目</td>	
				  <td class='unborder left unpadding'>
				  <select class='middle' name='rawdata_category_select' onchange='autosubmit()'>
				  <option value='%'>全選</option>";
			foreach($category_rawdata as $content)
			{echo "<option value=$content>$content</option>";}
			
		echo "</td>";	
	}
	elseif($chart_select == "週期設定")
	{
	//須保留所有選項, 避免loading div無法消失
		//日期
		echo "<select class='hidden' name='rawdata_period_select'>";  
	
			//取得n-10~n+1月份作為選項		  
			$month_array[11] = date('Y-m',(strtotime(date('Y-m',time())."-01")+60*60*24*40));
				echo "<option value=$month_array[11]>$month_array[11]";
			//將本月設為預設選項
			$selected = array();
			$selected[10] = "selected";
			for($i=10;$i>=0;$i--)
			{
			$month_array[$i] = date('Y-m',strtotime($month_array[$i+1]."-01")-1);
				echo "<option value=$month_array[$i] $selected[$i]>$month_array[$i]";
			}
		echo "</select>";	
		//類別
		echo "<select class='hidden' name='rawdata_type_select'>
			  <option value='%'>全選";
			arsort($type);
			foreach($type as $content)
			{echo "<option value=$content>$content";}
		echo "</select>";

		//取得 type	對應的 category
			//接收type
			$type_rawdata = $_POST["rawdata_type_select"];	
			$select_category_rawdata = "select distinct category from financer where id='".$id."' and category!='' and type like '".$type_rawdata."' order by category asc";
			$result_category_rawdata = mysql_query($select_category_rawdata, $link);
			@$number_category_rawdata = mysql_num_rows($result_category_rawdata);
			
			//定義為矩陣, 避免foreach error message
			$category_rawdata = array();
			for($i=0;$i<$number_category_rawdata;$i++)
			{
			$data_category_rawdata = mysql_fetch_row($result_category_rawdata);
			$category_rawdata[$i] = $data_category_rawdata[0];
			}
			echo "<select class='hidden' name='rawdata_category_select'>
				  <option value='%'>全選";
			foreach($category_rawdata as $content)
			{echo "<option value=$content>$content";}
		echo "</select>";			
	
	}
	elseif($chart_select == "關鍵字搜尋")
	{
	//關鍵字
	echo "<td class='unborder left unpadding'>
			<input type='search' class='middle' name='rawdata_keyword' maxlength='20' value='".$_POST["rawdata_keyword"]."'>
		  </td>";
	//送出表單
	echo "<td class='unborder left unpadding'>
			<input type='submit' value='搜尋'>
		  </td>";
		  
	//須保留所有選項, 避免loading div無法消失
		//日期
		echo "<select class='hidden' name='rawdata_period_select'>";  
	
			//取得n-10~n+1月份作為選項		  
			$month_array[11] = date('Y-m',(strtotime(date('Y-m',time())."-01")+60*60*24*40));
				echo "<option value=$month_array[11]>$month_array[11]";
			//將本月設為預設選項
			$selected = array();
			$selected[10] = "selected";
			for($i=10;$i>=0;$i--)
			{
			$month_array[$i] = date('Y-m',strtotime($month_array[$i+1]."-01")-1);
				echo "<option value=$month_array[$i] $selected[$i]>$month_array[$i]";
			}
		echo "</select>";	
		//類別
		echo "<select class='hidden' name='rawdata_type_select'>
			  <option value='%'>全選";
			arsort($type);
			foreach($type as $content)
			{echo "<option value=$content>$content";}
		echo "</select>";

		//取得 type	對應的 category
			//接收type
			$type_rawdata = $_POST["rawdata_type_select"];
			$select_category_rawdata = "select distinct category from financer where id='".$id."' and category!='' and type like '".$type_rawdata."' order by category asc";
			$result_category_rawdata = mysql_query($select_category_rawdata, $link);
			@$number_category_rawdata = mysql_num_rows($result_category_rawdata);
			
			//定義為矩陣, 避免foreach error message
			$category_rawdata = array();
			for($i=0;$i<$number_category_rawdata;$i++)
			{
			$data_category_rawdata = mysql_fetch_row($result_category_rawdata);
			$category_rawdata[$i] = $data_category_rawdata[0];
			}
			echo "<select class='hidden' name='rawdata_category_select'>
				  <option value='%'>全選";
			foreach($category_rawdata as $content)
			{echo "<option value=$content>$content";}
		echo "</select>";	
	}
	elseif($chart_select == "信用卡明細")
	{
	$array_credit_selection = array("unpaid" => "未付","paid" => "已付");
		echo "<td class='unborder left unpadding'>";
			echo "<select class='middle' name='credit_selection' onchange='autosubmit()'>";
			foreach($array_credit_selection as $key => $content)
			{echo "<option value='$key'>$content</option>";}
			echo "</select>";
		echo "</td>";		
	}		
	echo "</tr></table></div>";
	
	//set default select for raw data
		if(empty($_POST["rawdata_period_select"]))
		{$rawdata_period_select = $month_array[10];}
		else
		{$rawdata_period_select = $_POST["rawdata_period_select"];}	
		if(empty($_POST["rawdata_category_select"]))
		{$rawdata_category_select = '%';}
		else
		{$rawdata_category_select = $_POST["rawdata_category_select"];}	

	//顯示內容
	if($chart_select == "明細")
	{
		//取得時間範圍
		$period_start = strtotime($rawdata_period_select."-01");
		$period_end = strtotime(date('Y-m', ($period_start + 3600*24*40))."-01");
		
		//接收category
		$category_rawdata = $rawdata_category_select;

		//更新紀錄
		if(!empty($_POST["change_rawdata_item"]))
		{
		//接收更新item數
		$change_item = $_POST["change_rawdata_item"];

		//接收更新資料
		$type_new = $_POST["type_edit_$change_item"];
		$category_new = $_POST["category_edit_$change_item"];
		$date_new = strtotime($_POST["date_edit_$change_item"]);
		$amount_new = $_POST["amount_edit_$change_item"];
		$remark_new = $_POST["remark_edit_$change_item"];
		$credit_new = $_POST["credit_edit_$change_item"];

		//資料驗證
			//type,category,amount均空白則忽略此筆資料
			if(empty($date_new))
			{echo "<script>alert('日期請勿空白')</script>";}			
			elseif(empty($type_new))
			{echo "<script>alert('類別請勿空白')</script>";}
			elseif(empty($category_new))
			{echo "<script>alert('項目請勿空白')</script>";}				
			elseif($type_new!="收入" && $type_new!="支出")
			{echo "<script>alert('類別需為收入或支出')</script>";}				
			elseif(!preg_match("/^\d+$/",$amount_new))
			{echo "<script>alert('金額請使用正整數')</script>";}
			else
			{
			//依日期取得最近一筆紀錄的預算
			$select_recently_budget = "select budget from financer where id='".$id."' and type='$type_new' and category='$category_new' and created<='$date_new' order by created desc";
			$result_recently_budget = mysql_query($select_recently_budget, $link);
			@mysql_data_seek($result_recently_budget,0);
			$result_recently_budget = mysql_fetch_row($result_recently_budget);			
			
			//支出金額改為負數
			if($type_new=="支出")
			{$amount_new = $amount_new*-1;}
			
			//更新紀錄
			$update_change_rawdata = "update financer set `type`='$type_new',`category`='$category_new',`created`='$date_new',`amount`='$amount_new',`remark`='$remark_new',`budget`='$result_recently_budget[0]',`credit`='$credit_new' where id='$id' and item='$change_item'";
			mysql_query($update_change_rawdata,$link);
			
			//show更新成功視窗
			echo "<script>alert('資料更新成功')</script>";	
			}
		}
			
		//移除紀錄	
		if(!empty($_POST["remove_rawdata_item"]))
		{
		//接收移除item數
		$remove_item = $_POST["remove_rawdata_item"];
		$delete_rawdata = "delete from financer where id='".$id."' and item='".$remove_item."' limit 1";
		mysql_query($delete_rawdata,$link);
		
		//刪除資料後optimize table
		mysql_query("OPTIMIZE TABLE 'financer'");	
		}	
		
		//接收編輯模式session
		if($_POST["edit_rawdata"] == "y")
		{$_SESSION["edit_rawdata"] = $_POST["edit_rawdata"];}
		elseif($_POST["edit_rawdata"] == "n")
		{$_SESSION["edit_rawdata"] = "";}
		
		//編輯模式參數
		echo "<input type='hidden' name='edit_rawdata'>";	
		//更新,移除item參數
		echo "<input type='hidden' name='change_rawdata_item'>";	
		echo "<input type='hidden' name='remove_rawdata_item'>";	

		//編輯模式顯示結束button
		if($_SESSION["edit_rawdata"] == "y")
		{echo "<input type='button' value='結束編輯' onclick='edit_rawdata_close()'>";}
		//正常模式顯示匯出 & 編輯button
		else
		{
		echo "<input type='button' value='匯出' onclick=\"window.open('csv_export_financer.php','_blank')\">";
		echo "<input type='button' value='編輯紀錄' onclick='edit_rawdata_open()'>";	
		}
		
	echo "<div class='content' id='content1'>";

	//raw data list
	echo "<table>";		
		//顯示標題
		echo "<tr class='gray'>
				<td class='short titlecolumn1'>類別</td>
				<td class='short titlecolumn1'>項目</td>
				<td class='short titlecolumn1'>日期</td>
				<td class='short titlecolumn1'>金額</td>
				<td class='middle left titlecolumn1'>備註</td>
				<td class='short titlecolumn1'>信用卡</td>
				<td class='short titlecolumn1' title='You can update period on \"週期設定\"'>週期<span class='web'>*</span></td>
				<td class='min titlecolumn1 pink'></td>
			  </tr>";

		//將明細寫入session for export
		$_SESSION["export_data_financer"] = "類別,日期,項目,金額,備註,週期,信用卡\n";

		//取得明細資料
		$select_rawdata = "select type, category, created, amount, remark, repeated, item, credit from financer where id='".$id."' and created<'".$period_end."' and created>='".$period_start."' and remark!='週期檢核' and remark!='credit_card_payment' and type like '".$type_rawdata."' and category like '".$category_rawdata."' order by type asc, created asc";
		$result_rawdata = mysql_query($select_rawdata,$link);		
		@mysql_data_seek($result_rawdata,0);
		@$number_rawdata = mysql_num_rows($result_rawdata);

		//編輯模式明細
		if($_SESSION["edit_rawdata"] == "y")
		{
			for($i=0; $i<$number_rawdata; $i++)
			{
			$data_rawdata[$i] = mysql_fetch_row($result_rawdata);
			$item = $data_rawdata[$i][6];
			
			//支出金額移除負號
			if($data_rawdata[$i][0] == "支出")
			{$data_rawdata[$i][3] = $data_rawdata[$i][3]*-1;}
			
			//原始資料寫入預設值
			if(empty($_POST["type_edit_$item"]))
			{$_POST["type_edit_$item"] = $data_rawdata[$i][0];}
			if(empty($_POST["category_edit_$item"]))
			{$_POST["category_edit_$item"] = $data_rawdata[$i][1];}
			if(empty($_POST["date_edit_$item"]))
			{$_POST["date_edit_$item"] = date('Y-m-d', $data_rawdata[$i][2]);}
			if(empty($_POST["amount_edit_$item"]))
			{$_POST["amount_edit_$item"] = $data_rawdata[$i][3];}
			if(empty($_POST["remark_edit_$item"]))
			{$_POST["remark_edit_$item"] = $data_rawdata[$i][4];}	
			if(empty($_POST["credit_edit_$item"]))
			{$_POST["credit_edit_$item"] = $data_rawdata[$i][7];}		
		
				//收入mark底色
				if($data_rawdata[$i][0] == "收入")
				{echo "<tr class='orange'>";}
				else
				{echo "<tr>";}
				echo   "<td class='smallpadding'><input class='text center' name='type_edit_$item' maxlength=8 list='type' value='".$_POST["type_edit_$item"]."' onchange='autosubmit()'></td>
						<td class='smallpadding'><input class='text center' name='category_edit_$item' maxlength=8 list='".$_POST["type_edit_$item"]."' value='".$_POST["category_edit_$item"]."'></td>
						<td class='smallpadding'><input class='text center' type='date' name='date_edit_$item' value='".$_POST["date_edit_$item"]."'></td>
						<td class='smallpadding'><input class='text center' type='number' step=1 name='amount_edit_$item' value='".$_POST["amount_edit_$item"]."'></td>
						<td class='smallpadding'><input class='text' name='remark_edit_$item' maxlength=50 value='".$_POST["remark_edit_$item"]."'></td>
						<td class='smallpadding'><input class='text' name='credit_edit_$item' maxlength=10 value='".$_POST["credit_edit_$item"]."'></td>
						<td class='smallpadding'>".$data_rawdata[$i][5]."</td>
						<td class='unborder left unpadding short'>
						  <input type=button value='更新' onclick=change_rawdata($item)>
						  <input type=button value='移除' onclick=remove_rawdata($item)>
						</td>						  
					  </tr>";				  
			}
		}
		//正常模式顯示明細		
		else
		{
			for($i=0; $i<$number_rawdata; $i++)
			{
			$data_rawdata[$i] = mysql_fetch_row($result_rawdata);

			//將明細寫入session for export (匯出資料金額不可加千分位逗號, 以免被視為欄位分隔符號)
                //類別 日期	項目 金額 備註 週期 信用卡
			$_SESSION["export_data_financer"] = $_SESSION["export_data_financer"]
                .$data_rawdata[$i][0]
                .",".date('Y/m/d', $data_rawdata[$i][2])
                .",".$data_rawdata[$i][1]
                .",".number_format($data_rawdata[$i][3],0,".","")
                .",".$data_rawdata[$i][4]
                .",".$data_rawdata[$i][5]
                .",".$data_rawdata[$i][7]."\n";
			
			//支出金額移除負號
			if($data_rawdata[$i][0] == "支出")
			{$data_rawdata[$i][3] = $data_rawdata[$i][3]*-1;}
			
				//週期任務改為粗體, 收入mark底色	
				if($data_rawdata[$i][0] == "收入" && !empty($data_rawdata[$i][5]))
				{echo "<tr class='orange bold'>";}
				elseif(!empty($data_rawdata[$i][5]))
				{echo "<tr class='bold'>";}	
				elseif($data_rawdata[$i][0] == "收入")
				{echo "<tr class='orange'>";}					
				else
				{echo "<tr>";}
				echo "	  <td>".$data_rawdata[$i][0]."</td>
						  <td>".$data_rawdata[$i][1]."</td>
						  <td>".date('m/d (D)', $data_rawdata[$i][2])."</td>
						  <td>".number_format($data_rawdata[$i][3],0,".",",")."</td>
						  <td class='left'>".$data_rawdata[$i][4]."</td>
						  <td>".$data_rawdata[$i][7]."</td>
						  <td>".$data_rawdata[$i][5]."</td>
					  </tr>";			  
			}
		}
	echo "</table>";
	echo "</div>";		
	}
	elseif($chart_select == "週期設定")
	{
		//取得週期檢核時間
		$select_period_repeated = "select created from financer where id='$id' and type='' and category='' and amount=0 and remark='週期檢核'";
		$result_period_repeated = mysql_query($select_period_repeated,$link);
		$data_period_repeated = mysql_fetch_row($result_period_repeated);
		$date_repeated = $data_period_repeated[0];

		//更新紀錄
		if(!empty($_POST["change_item_repeated"]))
		{
		//接收更新item數
		$change_item_repeated = $_POST["change_item_repeated"];

		//接收更新資料
		$type_repeated = $_POST["type_repeated_$change_item_repeated"];
		$category_repeated = $_POST["category_repeated_$change_item_repeated"];
		$date_repeated = strtotime($_POST["date_repeated_$change_item_repeated"]);
		$amount_repeated = $_POST["amount_repeated_$change_item_repeated"];
		$remark_repeated = $_POST["remark_repeated_$change_item_repeated"];
		$period_repeated = $_POST["period_repeated_$change_item_repeated"];

		//資料驗證
			//type,category,amount均空白則忽略此筆資料
			if(empty($date_repeated))
			{echo "<script>alert('日期請勿空白')</script>";}			
			elseif(empty($type_repeated))
			{echo "<script>alert('類別請勿空白')</script>";}
			elseif(empty($category_repeated))
			{echo "<script>alert('項目請勿空白')</script>";}				
			elseif($type_repeated!="收入" && $type_repeated!="支出")
			{echo "<script>alert('類別需為收入或支出')</script>";}				
			elseif(!preg_match("/^\d+$/",$amount_repeated))
			{echo "<script>alert('金額請使用正整數')</script>";}
			elseif($period_repeated!="週" && $period_repeated!="月" && $period_repeated!="")
			{echo "<script>alert('設定週期請使用週or月')</script>";}		
			else
			{
			//依日期取得最近一筆紀錄的預算
			$select_recently_budget_repeated = "select budget from financer where id='".$id."' and type='$type_repeated' and category='$category_repeated' and created<='$date_repeated' order by created desc";
			$result_recently_budget_repeated = mysql_query($select_recently_budget_repeated, $link);
			@mysql_data_seek($result_recently_budget_repeated,0);
			$data_recently_budget_repeated = mysql_fetch_row($result_recently_budget_repeated);			
			
			//更新支出金額為負數
			if($type_repeated=="支出")
			{$amount_repeated = $amount_repeated*-1;}
			
			//更新紀錄
			$repeat_date = date("j",$date_repeated);
			$update_change_repeated = "update financer set `type`='$type_repeated',`category`='$category_repeated',`created`='$date_repeated',`amount`='$amount_repeated',`remark`='$remark_repeated',`repeated`='$period_repeated',`repeat_date`='$repeat_date',`budget`='$data_recently_budget_repeated[0]' where id='$id' and item='$change_item_repeated'";
			mysql_query($update_change_repeated,$link);
			
			//show更新成功視窗
			echo "<script>alert('週期資料更新成功')</script>";
			
			//送出表單:週期設定, 避免跳回明細
			echo "<script>
				  document.financer.rawdata_chart_select.value = '週期設定';
				  document.financer.submit();	
				  </script>";		
			}
		}
			
		//移除紀錄	
		if(!empty($_POST["remove_item_repeated"]))
		{
		//接收移除item數
		$remove_item_repeated = $_POST["remove_item_repeated"];
		$delete_repeated = "delete from financer where id='".$id."' and item='".$remove_item_repeated."' limit 1";
		mysql_query($delete_repeated,$link);
		
		//刪除資料後optimize table
		mysql_query("OPTIMIZE TABLE 'financer'");	
		}

		//更新支付記錄	
		if(!empty($_POST["paid_change"]))
		{
		//接收資料
			if(!empty($_POST["c"]))
			{$paid_array = array_merge(array(0=>"0"),$_POST["c"]);}
			else
			{$paid_array = array("");}

		//取得明細資料
		$select_repeated_all = "select item from financer where id='".$id."' and remark!='週期檢核' and repeated!='' and (created>='".$date_repeated."' OR paid='' OR paid is NULL)";
		$result_repeated_all = mysql_query($select_repeated_all);
		$num_repeated_all = mysql_num_rows($result_repeated_all);
		
		//update paid record
			for($i=0; $i<$num_repeated_all; $i++)
			{
			$data_repeated_all = mysql_fetch_row($result_repeated_all);
		
				if(array_search($data_repeated_all[0], $paid_array) != 0)
				{$update_paid = "update financer set `paid`='checked' where id='$id' and item='".$data_repeated_all[0]."'";}
				else
				{$update_paid = "update financer set `paid`='' where id='$id' and item='".$data_repeated_all[0]."'";}
			
			$result_paid = mysql_query($update_paid);
			}
		}		
		
		//更新,移除item參數
		echo "<input type='hidden' name='change_item_repeated'>";	
		echo "<input type='hidden' name='remove_item_repeated'>";
		echo "<input type='hidden' name='paid_change'>";


	echo "<div class='content' id='content1'>";
		//顯示標題
	echo "<table>";		
		echo "<tr class='gray'>
				<td class='short titlecolumn1'>類別</td>
				<td class='short titlecolumn1'>項目</td>
				<td class='short titlecolumn1'>日期</td>
				<td class='short titlecolumn1'>金額</td>
				<td class='middle left titlecolumn1'>備註</td>
				<td class='short titlecolumn1' title='if you want to cancel regular expense/income &#10;A.remove this item or &#10;B.update period to empty'>週期<span class='web'>*</span></td>
				<td class='min titlecolumn1' title='click paid to close auto alert message'>已支付<span class='web'>*</span></td>				
			  </tr>";	  
			  
		//取得明細資料
		$select_repeated = "select type, category, created, amount, remark, repeated, item, paid from financer where id='".$id."' and remark!='週期檢核' and repeated!='' and (created>='".$date_repeated."' OR paid='' OR paid is NULL) order by type asc, created asc";

		$result_repeated = mysql_query($select_repeated,$link);		
		@mysql_data_seek($result_repeated,0);
		@$number_repeated = mysql_num_rows($result_repeated);

		//編輯明細	
		for($i=0; $i<$number_repeated; $i++)
		{
		$data_repeated[$i] = mysql_fetch_row($result_repeated);
		$item = $data_repeated[$i][6];
		
		//移除支出金額負號
		if($data_repeated[$i][0] == "支出")
		{$data_repeated[$i][3] = $data_repeated[$i][3]*-1;}
		
		//原始資料寫入預設值
		if(empty($_POST["type_repeated_$item"]))
		{$_POST["type_repeated_$item"] = $data_repeated[$i][0];}
		if(empty($_POST["category_repeated_$item"]))
		{$_POST["category_repeated_$item"] = $data_repeated[$i][1];}
		if(empty($_POST["date_repeated_$item"]))
		{$_POST["date_repeated_$item"] = date('Y-m-d', $data_repeated[$i][2]);}
		if(empty($_POST["amount_repeated_$item"]))
		{$_POST["amount_repeated_$item"] = $data_repeated[$i][3];}
		if(empty($_POST["remark_repeated_$item"]))
		{$_POST["remark_repeated_$item"] = $data_repeated[$i][4];}
		if(empty($_POST["period_repeated_$item"]))
		{$_POST["period_repeated_$item"] = $data_repeated[$i][5];}			

			//收入mark底色
			if($data_repeated[$i][0] == "收入")
			{echo "<tr class='orange'>";}
			else
			{echo "<tr>";}
			echo   "<td class='smallpadding'><input class='text center' name='type_repeated_$item' maxlength=8 list='type' value='".$_POST["type_repeated_$item"]."' onchange='autosubmit()'></td>
					<td class='smallpadding'><input class='text center' name='category_repeated_$item' maxlength=8 list='".$_POST["type_repeated_$item"]."' value='".$_POST["category_repeated_$item"]."'></td>
					<td class='smallpadding'><input class='text center' type='date' name='date_repeated_$item' value='".$_POST["date_repeated_$item"]."'></td>
					<td class='smallpadding'><input class='text center' type='number' step=1 name='amount_repeated_$item' value='".$_POST["amount_repeated_$item"]."'></td>
					<td class='smallpadding'><input class='text' name='remark_repeated_$item' maxlength=50 value='".$_POST["remark_repeated_$item"]."'></td>
					<td class='smallpadding'><input class='text center' name='period_repeated_$item' list='period' value='".$_POST["period_repeated_$item"]."'></td>
					<td class='smallpadding'>
						<input type='checkbox' name='c[]' value='$item' onchange='paid_submit()' ".$data_repeated[$i][7].">
					</td>
					<td class='unborder left unpadding short'>
					  <input class='unmargin' type=button value='更新' onclick=change_repeated($item)>
					  <input class='unmargin' type=button value='移除' onclick=remove_repeated($item)>
					</td>						  
				  </tr>";				  
		}
	echo "</table>";
	echo "</div>";
	}
	elseif($chart_select == "關鍵字搜尋" && !empty($_POST["rawdata_keyword"]))
	{
	$keyword =  $_POST["rawdata_keyword"];
	
	echo "<div class='content' id='content1'>";	
	//顯示標題
	echo "<table><tr class='gray'>
			<td class='short titlecolumn1'>類別</td>
			<td class='short titlecolumn1'>項目</td>
			<td class='short titlecolumn1'>日期</td>
			<td class='short titlecolumn1'>金額</td>
			<td class='middle left titlecolumn1'>備註</td>
			<td class='short titlecolumn1'>週期</td>
		  </tr>";
		  
	//取得明細資料		  
	$select_keyword = "select type, category, created, amount, remark, repeated from financer where id='".$id."' and remark!='週期檢核' and (remark like '$keyword' or category like '$keyword') order by created asc";

	$result_keyword = mysql_query($select_keyword,$link);		
	@mysql_data_seek($result_keyword,0);
	@$number_keyword = mysql_num_rows($result_keyword);

		for($i=0; $i<$number_keyword; $i++)
		{
		$data_keyword[$i] = mysql_fetch_row($result_keyword);
		
			//收入mark底色
			if($data_keyword[$i][0] == "收入")
			{
			//calculate total amount
			$summary_income += $data_keyword[$i][3];
			echo "<tr class='orange'>";
			}
			//支出金額移除負號
			else
			{
			$data_keyword[$i][3] = $data_keyword[$i][3]*-1;
			//calculate total amount
			$summary_expense += $data_keyword[$i][3];
			echo "<tr>";
			}
		echo "	  <td>".$data_keyword[$i][0]."</td>
				  <td>".$data_keyword[$i][1]."</td>
				  <td>".date('m/d (D)', $data_keyword[$i][2])."</td>
				  <td>".number_format($data_keyword[$i][3],0,".",",")."</td>
				  <td class='left'>".$data_keyword[$i][4]."</td>
				  <td>".$data_keyword[$i][5]."</td>
			  </tr>";
		}
		//show total amount
		echo "<tr class='bold'>
				  <td class='unborder'></td>
				  <td class='unborder'></td>
				  <td class='unborder'>收入加總</td>
				  <td class='unborder'>".number_format($summary_income,0,".",",")."</td>
				  <td class='unborder'></td>
				  <td class='unborder'></td>
			  </tr>";
		echo "<tr class='bold'>
				  <td class='unborder'></td>
				  <td class='unborder'></td>
				  <td class='unborder'>支出加總</td>
				  <td class='unborder'>".number_format($summary_expense,0,".",",")."</td>
				  <td class='unborder'></td>
				  <td class='unborder'></td>
			  </tr>";
	echo "</table>";
	echo "</div>";			  
	}
	elseif($chart_select == "信用卡明細")
	{	
	//update credit paid
		if($_POST["action"] == "credit_paid")
		{
		$credit_paid_item = $_POST["credit_paid"];
		
			for($i=0;$i<count($credit_paid_item);$i++)
			{
			$update_credit_paid = "update financer set `paid`='paid' where id='$id' and item='".$credit_paid_item[$i]."'";
			mysql_query($update_credit_paid);
			}
		}
		elseif($_POST["action"] == "credit_unpaid")
		{
		$credit_unpaid_item = $_POST["credit_unpaid"];
		
			for($i=0;$i<count($credit_unpaid_item);$i++)
			{
			$update_credit_unpaid = "update financer set `paid`=NULL where id='$id' and item='".$credit_unpaid_item[$i]."'";
			mysql_query($update_credit_unpaid);
			}
		}
	
	//update payment date
		if($_POST["action"] == "update_payment_date")
		{
		$payment_date = $_POST["payment_date"];
		$credit_name = $_POST["credit_name"];
		
			//select current setting
			$select_credit_payment_item = "select item from financer where id='$id' and type='' and category='' and credit='".$credit_name."' and remark='credit_card_payment' order by created desc limit 1";
			$result_credit_payment_item = mysql_query($select_credit_payment_item);
			$data_credit_payment_item = mysql_fetch_row($result_credit_payment_item);
			
			if(empty($data_credit_payment_item[0]))
			{
			$now = time();
			$insert_credit_payment_date = "insert into financer(`id`,`created`,`amount`,`remark`,`repeat_date`,`credit`)
											Values('$id','$now',0,'credit_card_payment','$payment_date','$credit_name')";
			$result_credit_payment_date = mysql_query($insert_credit_payment_date);
			}
			else
			{
			$update_credit_payment_date = "update financer set repeat_date='$payment_date' where id='".$id."' and item='".$data_credit_payment_item[0]."'";
			$result_credit_payment_date = mysql_query($update_credit_payment_date);
			}
		}	
		
		
	//show credit data
		//no credit data
		if(empty($array_credit))
		{echo "<br><br><span class='big'>無信用卡資料</span>";}
		//show paid data
		elseif($_POST["credit_selection"]=="paid")
		{
		//show paid list
		echo "<div class='content' id='content1'>";	
		echo "<table>";
			echo "<tr>";
				echo "<td class='short gray'>信用卡</td>";
				echo "<td class='short gray'>項目</td>";
				echo "<td class='short gray'>日期</td>";
				echo "<td class='short gray'>金額</td>";
				echo "<td class='short gray left'>備註</td>";
				echo "<td class='middle unborder left'>
						<input type='button' value='取消付款' onclick='save_credit_unpaid()'>
					  </td>";
			echo "</tr>";
			
			for($k=0;$k<count($array_credit);$k++)
			{
			//select all unpaid data and summary total amount by credit card
			$select_credit_paid_list = "select item,category,created,amount,remark from financer where id='$id' and type!='' and category!='' and paid='paid' and credit='".$array_credit[$k]."' order by created desc";
			$result_credit_paid_list = mysql_query($select_credit_paid_list);
			$num_credit_paid_list[$k] = mysql_num_rows($result_credit_paid_list);
				for($i=0;$i<$num_credit_paid_list[$k];$i++)
				{
				$data_credit_paid_list = mysql_fetch_row($result_credit_paid_list);
				echo "<tr>";
					echo "<td>".$array_credit[$k]."</td>";
					echo "<td>".$data_credit_paid_list[1]."</td>";
					echo "<td>".date('m/d (D)',$data_credit_paid_list[2])."</td>";
					echo "<td>".number_format($data_credit_paid_list[3]*-1,0,".",",")."</td>";
					echo "<td class='left'>".$data_credit_paid_list[4]."</td>";
					echo "<td class='left unborder'>
							<input type='checkbox' class='credit_checkbox' name='credit_unpaid[]' value='".$data_credit_paid_list[0]."' data-amount='".$data_credit_paid_list[3]."'>
						  </td>";
				echo "</tr>";
				}
			}
		echo "</table>";
		echo "</div>";			
		}
		//show unpaid data
		else
		{
		//select all unpaid data and summary total amount by credit card
			for($k=0;$k<count($array_credit);$k++)
			{
			$select_credit_list = "select item,category,created,amount,remark from financer where id='$id' and type!='' and category!='' and (paid is NULL or paid='' or paid='checked') and credit='".$array_credit[$k]."' order by created desc";
			$result_credit_list = mysql_query($select_credit_list);
			$num_credit_list[$k] = mysql_num_rows($result_credit_list);
				@mysql_data_seek($result_credit_list,0);
				for($i=0;$i<$num_credit_list[$k];$i++)
				{
				$data_credit_list = mysql_fetch_row($result_credit_list);
				$array_credit_list[$k][$i][0] = $data_credit_list[0];
				$array_credit_list[$k][$i][1] = $data_credit_list[1];
				$array_credit_list[$k][$i][2] = $data_credit_list[2];
				$array_credit_list[$k][$i][3] = $data_credit_list[3];
				$array_credit_list[$k][$i][4] = $data_credit_list[4];
				$array_credit_sum[$k] -= $data_credit_list[3];
				}
			}
			
		//select credit card payment date
			for($k=0;$k<count($array_credit);$k++)
			{
			$select_credit_payment = "select repeat_date from financer where id='$id' and type='' and category='' and credit='".$array_credit[$k]."' and remark='credit_card_payment' order by created desc limit 1";
			$result_credit_payment = mysql_query($select_credit_payment);
			$data_credit_payment = mysql_fetch_row($result_credit_payment);
			$credit_paymeny_date[$k] = $data_credit_payment[0];
			}		
		
		echo "<div class='content' id='content1'>";	
		//show total unpaid amount
		echo "<input type='hidden' name='payment_date'>";
		echo "<input type='hidden' name='credit_name'>";
		echo "<table>";
			echo "<tr class='bold'>";
				echo "<td class='short black'>信用卡</td>";
				echo "<td class='short black'>帳單金額</td>";
				echo "<td class='short black'>付款日期</td>";
				echo "<td class='long unborder left'></td>";
			echo "</tr>";
			for($k=0;$k<count($array_credit);$k++)
			{
			echo "<tr class='bold'>";
				echo "<td class='lightgray'>".$array_credit[$k]."</td>";
				echo "<td class='lightgray'>".number_format($array_credit_sum[$k],0,".",",")."</td>";
					if(empty($credit_paymeny_date[$k]))
					{echo "<td class='lightgray'><input class='text center' type='number' id='credit_payment_$array_credit[$k]' min=1 max=31 step=1></td>";}
					else
					{echo "<td class='lightgray'><input class='text center' type='number' id='credit_payment_$array_credit[$k]' min=1 max=31 step=1 value='".$credit_paymeny_date[$k]."'></td>";}
				echo "<td class='unborder left'><input type='button' value='更新' onclick=\"update_payment_date('$array_credit[$k]')\"></td>";
			echo "</tr>";
			}
		echo "</table><br>";

		//show unpaid list
		echo "<table>";
			echo "<tr>";
				echo "<td class='short gray'>信用卡</td>";
				echo "<td class='short gray'>項目</td>";
				echo "<td class='short gray'>日期</td>";
				echo "<td class='short gray'>金額</td>";
				echo "<td class='short gray left'>備註</td>";
				echo "<td class='middle unborder left'>
						<input type='button' value='付款' onclick='save_credit_paid()'>
					  </td>";
			echo "</tr>";
			
			for($k=0;$k<count($array_credit);$k++)
			{
				for($i=0;$i<$num_credit_list[$k];$i++)
				{
				echo "<tr>";
					echo "<td>".$array_credit[$k]."</td>";
					echo "<td>".$array_credit_list[$k][$i][1]."</td>";
					echo "<td>".date('m/d (D)',$array_credit_list[$k][$i][2])."</td>";
					echo "<td>".number_format($array_credit_list[$k][$i][3]*-1,0,".",",")."</td>";
					echo "<td class='left'>".$array_credit_list[$k][$i][4]."</td>";
					echo "<td class='left unborder'>
							<input type='checkbox' class='credit_checkbox' name='credit_paid[]' value='".$array_credit_list[$k][$i][0]."' data-amount='".$array_credit_list[$k][$i][3]."'>
						  </td>";
				echo "</tr>";
				}
			}
		echo "</table>";
		echo "</div>";
		}
	}
	?>	
</div>

<!--Chart---------------------------------------------------------------------------------------->
<div class="IV" id="IV">

	<div class="filter"><table style="margin:0 5 5 0;"><tr>
	<?php
//設定顏色array
$color_array = array("FF0066","FF7700","FFFF66","00FF99","0066FF","AA33FF",
				 	 "FF6600","FF7799","FFFF99","99FF00","00CCFF","AA99FF",
					 "FF0000","FF7766","FFFF00","00FF00","0000FF","AA00FF",
					 "FF3399","FF7733","FFFF33","00FF66","0099FF","AACCFF",
					 "FF9933","FF77CC","FFFFCC","99FF66","0033FF","AA66FF");	

	//圖表種類 TBD:"柱狀圖","明細"
	echo "<td class='unborder left unpadding'>
		  <select class='middle' name='chart_type_select' onchange='autosubmit()'>";
	
	$chart = array("收支紀錄");			
	foreach($chart as $content)
	{echo "<option value=$content>$content";}

	echo "</td></tr></table></div>";
	
	//接收選取的chart
	if(empty($_POST["chart_type_select"]))
	{$chart_type_select = $chart[0];}
	else
	{$chart_type_select = $_POST["chart_type_select"];}
	
	//依照chart類別顯示對應選單
	if($chart_type_select == "收支紀錄")
	{
	echo "<div class='filter'><table style='margin:0 5 5 0;'><tr>";
	
	//日期
	echo "<td class='unborder left unpadding'>
		  <select class='middle' name='chart_period_select' onchange='autosubmit()'>";
			  
		//取得n-10~n+1月份作為選項		  
		$month_array[11] = date('Y-m',(strtotime(date('Y-m',time())."-01")+60*60*24*40));
			echo "<option value=$month_array[11]>$month_array[11]";
		//將本月設為預設選項
		$selected = array();
		$selected[10] = "selected";
		for($i=10;$i>=0;$i--)
		{
		$month_array[$i] = date('Y-m',strtotime($month_array[$i+1]."-01")-1);
			echo "<option value=$month_array[$i] $selected[$i]>$month_array[$i]";
		}		
		
	echo "</td></tr>";		
	echo "</table></div>";
	}	

	
	echo "<div class='content' id='content4'>";	
	//接收選單(表單未送出則defaul載入本月)
	if(empty($_POST["chart_period_select"]))
	{$chart_period_select = $month_array[10];}
	else
	{$chart_period_select = $_POST["chart_period_select"];}
	
	if($chart_type_select == "收支紀錄" && !empty($chart_period_select))
	{
		//取得起始時間
		if(substr($chart_period_select,5,2)<6)
		{$month_select = strtotime((substr($chart_period_select,0,4)-1)."-".(substr($chart_period_select,5,2)+7)."-01");}
		else
		{$month_select = strtotime(substr($chart_period_select,0,4)."-".(substr($chart_period_select,5,2)-5)."-01");}
//$month_end = strtotime(date('Y-m',strtotime($chart_period_select."-01")+60*60*24*40)."-01");
//echo date('Y-m-d H:i:s',$month_start)."<br>".date('Y-m-d H:i:s',$month_end);

		echo "<table><tr class='gray'><td class='middle titlecolumn4'></td>";
		//設定首月起始時間
		$month_start[1] = $month_select;	
		for($i=1;$i<=6;$i++)
		{
		//取得本月結束時間
		$month_end[$i] = strtotime(date("Y-m",($month_start[$i] + 60*60*24*40))."-01");
		
		//取得下月起始時間
		$month_start[$i+1] = $month_end[$i];

		//顯示月份
		echo "<td class='short titlecolumn4'>".date("Y-m",$month_start[$i])."</td>";
		}
		echo "</tr>";
			
		
		//支出總和
		echo "<tr class='bold'><td class='left'>支出</td>";
		for($i=1;$i<=6;$i++)
		{
		//取得支出總和
		$select_total_expense = "select sum(amount) from financer where type='支出' and id='$id' and created>='".$month_start[$i]."' and created<'".$month_end[$i]."'";
		$result_total_expense = mysql_query($select_total_expense,$link);
		$data_total_expense[$i] = mysql_fetch_row($result_total_expense);
		echo "<td>".number_format(($data_total_expense[$i][0]*-1),0,".",",")."</td>";
		}
		echo "</tr>";	
		
		//取得支出明細
		$select_category_expense = "select distinct category from financer where type='支出' and id='$id' order by category";
		$result_category_expense = mysql_query($select_category_expense,$link);		
		@mysql_data_seek($result_category_expense,0);
		@$number_category_expense = mysql_num_rows($result_category_expense);
		for($j=0;$j<$number_category_expense;$j++)
		{
		$data_category_expense = mysql_fetch_row($result_category_expense);
		
		//若該category在時間區件內均為0則不顯示資料
		$select_sum_expense = "select sum(amount) from financer where type='支出' and category='".$data_category_expense[0]."' and id='$id' and created>='".$month_start[1]."' and created<'".$month_end[6]."'";
		$result_sum_expense = mysql_query($select_sum_expense,$link);
		$data_sum_expense = mysql_fetch_row($result_sum_expense);
			if($data_sum_expense[0] != 0)
			{
				echo "<tr><td class='italic'>".$data_category_expense[0]."</td>";
				for($i=1;$i<=6;$i++)
				{
				//取得各category金額
				$select_amount_expense = "select sum(amount) from financer where type='支出' and category='".$data_category_expense[0]."' and id='$id' and created>='".$month_start[$i]."' and created<'".$month_end[$i]."'";
				$result_amount_expense = mysql_query($select_amount_expense,$link);
				$data_amount_expense[$i] = mysql_fetch_row($result_amount_expense);
				echo "<td>".number_format(($data_amount_expense[$i][0]*-1),0,".",",")."</td>";
				}
			echo "</tr>";
			}
		}		

		//收入總和
		echo "<tr class='bold'><td class='left'>收入</td>";
		for($i=1;$i<=6;$i++)
		{
		//取得收入總和
		$select_total_income = "select sum(amount) from financer where type='收入' and id='$id' and created>='".$month_start[$i]."' and created<'".$month_end[$i]."'";
		$result_total_income = mysql_query($select_total_income,$link);
		$data_total_income[$i] = mysql_fetch_row($result_total_income);
		echo "<td>".number_format($data_total_income[$i][0],0,".",",")."</td>";
		}
		echo "</tr>";	

		//取得收入明細
		$select_category_income = "select distinct category from financer where type='收入' and id='$id' order by category";
		$result_category_income = mysql_query($select_category_income,$link);		
		@mysql_data_seek($result_category_income,0);
		@$number_category_income = mysql_num_rows($result_category_income);
		for($j=0;$j<$number_category_income;$j++)
		{
		$data_category_income = mysql_fetch_row($result_category_income);

		//若該category在時間區件內均為0則不顯示資料
		$select_sum_income = "select sum(amount) from financer where type='收入' and category='".$data_category_income[0]."' and id='$id' and created>='".$month_start[1]."' and created<'".$month_end[6]."'";
		$result_sum_income = mysql_query($select_sum_income,$link);
		$data_sum_income = mysql_fetch_row($result_sum_income);
			if($data_sum_income[0] != 0)
			{		
			echo "<tr><td class='italic'>".$data_category_income[0]."</td>";
				for($i=1;$i<=6;$i++)
				{
				//取得各category金額
				$select_amount_income = "select sum(amount) from financer where type='收入' and category='".$data_category_income[0]."' and id='$id' and created>='".$month_start[$i]."' and created<'".$month_end[$i]."'";
				$result_amount_income = mysql_query($select_amount_income,$link);
				$data_amount_income[$i] = mysql_fetch_row($result_amount_income);
				echo "<td>".number_format(($data_amount_income[$i][0]),0,".",",")."</td>";
				}
			echo "</tr>";
			}
		}
		
		//顯示結餘
		echo "<tr class='bold'><td class='left'>結餘</td>";
		for($i=1;$i<=6;$i++)
		{
			if(($data_total_income[$i][0]+$data_total_expense[$i][0])<0)
			{echo "<td class='red'>";}
			else
			{echo "<td>";}	
		echo number_format(($data_total_income[$i][0]+$data_total_expense[$i][0]),0,".",",")."</td>";
		}
		echo "</tr></table>";
	}
	echo "</div>";	
	?>

</div>
</div>
<!--end for right div---------------------------------------------------------------------------------->
</form>
</body>
</html>

<script language="JavaScript">
$.blockUI.defaults.css = {
							padding:	0,
							margin:		0,
							width:		'60%',
							top:		'40%',
							left:		'20%',
							textAlign:	'center',
							color:		'#000',
							border:		'3px solid #aaa',
							backgroundColor:'#fff',
							cursor:		'wait'
						}

<!--設定selected避免跳回首筆選項-->
	var period_select_budget = "<?=$_POST['period_select_budget']?>";
	if(period_select_budget != "")
	{financer.period_select_budget.value = period_select_budget;}

	var rawdata_chart_select = "<?=$_POST['rawdata_chart_select']?>";
	if(rawdata_chart_select != "")
	{financer.rawdata_chart_select.value = rawdata_chart_select;}

	var rawdata_period_select = "<?=$_POST['rawdata_period_select']?>";
	if(rawdata_period_select != "")
	{financer.rawdata_period_select.value = rawdata_period_select;}
	
	var rawdata_type_select = "<?=$_POST['rawdata_type_select']?>";
	if(rawdata_type_select != "")
	{financer.rawdata_type_select.value = rawdata_type_select;}

	var rawdata_category_select = "<?=$_POST['rawdata_category_select']?>";
	if(rawdata_category_select != "")
	{financer.rawdata_category_select.value = rawdata_category_select;}
	
	var chart_type_select = "<?=$_POST['chart_type_select']?>";
	if(chart_type_select != "")
	{financer.chart_type_select.value = chart_type_select;}	
	
	var chart_period_select = "<?=$_POST['chart_period_select']?>";
	if(chart_period_select != "")
	{financer.chart_period_select.value = chart_period_select;}	

	var credit_selection = "<?=$_POST['credit_selection']?>";
	if(credit_selection != "")
	{financer.credit_selection.value = credit_selection;}	
	
	
	
<!--寫入資料-->	
    function save_data_button(){
        document.financer.save_data.value = "y";
		$.blockUI({ message: '<h1>Loading...</h1>' });
		document.financer.submit();
    }	
<!--寫入資料_mobile-->	
    function save_data_button_mobile(){
        document.financer.save_data.value = "mobile";
		$.blockUI({ message: '<h1>Loading...</h1>' });
		document.financer.submit();
    }
	
<!--清空寫入欄位-->	
    function reset_input_column(){
		//document.getElementById("financer").reset();
		$("input.input").each(function(){
			$(this).val("");
		})
		$("input.date").each(function(){
			var defaultDate = $(this).data("date");
			$(this).val(defaultDate);
		})
		$("tr.input").css("display","none");
		$("tr.row_1").css("display","table-row");
    }	
	
<!--開啟 & 關閉預算編輯模式-->		
	function edit_open(){
        document.financer.edit_budget.value = "y";
		$.blockUI({ message: '<h1>Loading...</h1>' });
		document.financer.submit();	
	}
	function edit_close(){
        document.financer.edit_budget.value = "n";
		$.blockUI({ message: '<h1>Loading...</h1>' });
		document.financer.submit();	
	}	
	
<!--更新 & 移除預算-->		
	function remove_budget(x){
        if (confirm("確認移除預算設定?"))
        {	
        document.financer.remove_budget_item.value = x;
		$.blockUI({ message: '<h1>Loading...</h1>' });
		document.financer.submit();
		}
	}
	function change_budget(x){
        document.financer.change_budget_item.value = x;
		$.blockUI({ message: '<h1>Loading...</h1>' });
		document.financer.submit();	
	}		

<!--開啟, 關閉明細編輯模式-->		
	function edit_rawdata_open(){
        document.financer.edit_rawdata.value = "y";
		$.blockUI({ message: '<h1>Loading...</h1>' });
		document.financer.submit();	
	}
	function edit_rawdata_close(){
        document.financer.edit_rawdata.value = "n";
		$.blockUI({ message: '<h1>Loading...</h1>' });
		document.financer.submit();	
	}

<!--更新 & 移除紀錄-->		
	function change_rawdata(x){
        document.financer.change_rawdata_item.value = x;
		$.blockUI({ message: '<h1>Loading...</h1>' });
		document.financer.submit();	
	}
	function remove_rawdata(x){
        if (confirm("確認刪除此筆資料?"))
        {	
        document.financer.remove_rawdata_item.value = x;
		$.blockUI({ message: '<h1>Loading...</h1>' });
		document.financer.submit();
		}
	}


<!--更新 & 移除週期紀錄-->		
	function change_repeated(x){
        document.financer.change_item_repeated.value = x;
        document.financer.rawdata_chart_select.value = "週期設定";
		$.blockUI({ message: '<h1>Loading...</h1>' });
		document.financer.submit();	
	}
	function remove_repeated(x){
        if (confirm("確認刪除此筆資料?"))
        {	
        document.financer.remove_item_repeated.value = x;
        document.financer.rawdata_chart_select.value = "週期設定";
		$.blockUI({ message: '<h1>Loading...</h1>' });
		document.financer.submit();
		}
	}	
	
<!--更新週期紀錄付費-->		
	function paid_submit(){
        document.financer.paid_change.value = "y";
        document.financer.rawdata_chart_select.value = "週期設定";
		$.blockUI({ message: '<h1>Loading...</h1>' });
		document.financer.submit();	
	}

<!--frozen first column-->	
	$(function(){
		$("div#content1").scroll(function(){
			var scrollVal = $(this).scrollTop();
			$("td.titlecolumn1").css({top:scrollVal}); 
		});

		$("div#content2").scroll(function(){
			var scrollVal = $(this).scrollTop();
			$("td.titlecolumn2").css({top:scrollVal}); 
		});

		$("div#content3").scroll(function(){
			var scrollVal = $(this).scrollTop();
			$("td.titlecolumn3").css({top:scrollVal}); 
		});

		$("div#content4").scroll(function(){
			var scrollVal = $(this).scrollTop();
			$("td.titlecolumn4").css({top:scrollVal}); 
		});
	});	


	function autosubmit(){
		$.blockUI({ message: '<h1>Loading...</h1>' });
		document.financer.submit();	
	}	
	
	function type_select(x){
		var typeClass = "input.type_" + x;
		var categoryClass= "input.category_" + x;
		var rowClass= "tr.row_" + (x*1+1);
		var typeValue = $(typeClass).val();
		$(categoryClass).attr("list",typeValue);
		$(rowClass).css('display','table-row');//show next line 
		$(categoryClass).focus();
        document.financer.column_number.value = (x*1+1);	
	}
	
	/*paid and unpaid credit card item*/
	function save_credit_paid(){
		var paid = 0;
		$("input.credit_checkbox").each(function(){
			var status = $(this).is(':checked');
			if(status == true)
			{paid -= $(this).data('amount');}
		})
		
		if(confirm("Confirm to update credit card bill\nNTD " + paid))
		{
        document.financer.action.value = "credit_paid";
		$.blockUI({ message: '<h1>Loading...</h1>' });
		document.financer.submit();
		}		
	}
	function save_credit_unpaid(){
		var unpaid = 0;
		$("input.credit_checkbox").each(function(){
			var status = $(this).is(':checked');
			if(status == true)
			{unpaid -= $(this).data('amount');}
		})
		
		if(confirm("Confirm to update credit card bill\nNTD " + unpaid))
		{
        document.financer.action.value = "credit_unpaid";
		$.blockUI({ message: '<h1>Loading...</h1>' });
		document.financer.submit();
		}		
	}	
	
	/*set payment date for credit card*/
	function update_payment_date(x){
		var inputClass = "input#credit_payment_" + x;
		var new_payment_date = parseInt($(inputClass).val());
			if((new_payment_date<=31) || (new_payment_date>=1))
			{
			document.financer.action.value = "update_payment_date";
			document.financer.payment_date.value = new_payment_date;
			document.financer.credit_name.value = x;
			$.blockUI({ message: '<h1>Loading...</h1>' });
			document.financer.submit();
			}
			else
			{alert("付款日期請設定為1~31");}
	}
</script> 

