<?php
//啟用暫存 for session
ob_start();
?>
<html>
<head>
<!--Load jquery-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.3/jquery-ui.min.js"></script>
	<script type="text/javascript" src="ext/jquery_tablesorter/jquery.tablesorter.js"></script>
	<link href="ext/jquery_tablesorter/themes/blue/style.css" rel="stylesheet" type="text/css">
	<script src="ext/jquery.blockUI.js"></script>
	<script src="ext/jquery.cookie.js"></script>
	<script src="ext/md5.min.js"></script>
	
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<style>
	body{
		font-family:Calibri, Arial, 微軟正黑體;
		font-size:1em;
		overflow:hidden;		
	}
	
	div.left,div.right{
		float:left;
		width:60%;
		height:100%;
		overflow:hidden;	
		z-index:70;	
	}
	div.right{
		width:40%;
	}	
		div.left_top{
			float:left;
			width:100%;
			height:75%;
			overflow:none;
			background:pink;	
			z-index:80;	
		}
		div.left_bottom{
			float:left;
			width:100%;
			height:23%;
			overflow:none;
			background:lightgreen;	
			z-index:80;			
		}
		div.right_top{
			float:left;
			width:100%;
			height:43%;
			overflow:none;
			background:lightyellow;	
			z-index:80;				
		}
		div.right_bottom{
			float:left;
			width:100%;
			height:55%;
			overflow:none;
			background:lightblue;	
			z-index:80;			
		}
		div.table{
			float:left;
			width:100%;
			overflow:auto;
			z-index:80;
			padding:0px;
			margin-top:2px;
		}
		div.height90{
			height:90%;
		}
		div.height85{
			height:85%;
		}
		div.height80{
			height:80%;
		}		
			div.topic{
				background:black;
				color:white;
				font-weight:bold;
				font-size:1.1em;
				opacity:0.8;
				padding-left:5px;
				margin-bottom:3px;
				z-index:90;
			}
			div.remark1{
				position:absolute;
				top:15px;
				left:50%;
				background:yellow;
				opacity:0.8;
				z-index:130;
				padding:0 10 0 5;
				font-size:0.9em;
				display:none;
			}
			div.remark2{
				position:absolute;
				top:15px;
				left:50%;
				background:yellow;
				opacity:0.8;
				z-index:130;
				padding:0 10 0 5;
				font-size:0.9em;
				display:none;
			}
			div.analysis{
				display:none;
				padding:0px;
			}
			div.button{
				position:absolute;
				top:0px;
				right:0px;
				z-index:100;
			}
	
	span{
		margin-left:5px;
		margin-right:3px;
	}
	
	input,button{
		font-family:Calibri, Arial, 微軟正黑體;
	}
		input.long{
			width:250px;
		}
		input.max{
			width:99%;
		}
		input.left,select.left{
			margin-left:5px;			
		}
		select.short{
			width:50px;
		}
		input.unborder,select.unborder{
			border:0px;
		}
		input.unpadding{
			padding:0px;
		}
		input.unmargin{
			margin:0px;
		}
		input.low{
			height:25px;
			font-size:0.9em;
		}
		input.link{
			opacity:0.6;
			background-color:#CCC;
			margin:1px;
			border:0px;
			font-size:0.9em;
			color:darkblue;
			font-weight:bold;
		}
		input.link:hover{
			background-color:black;
			color:white;
		}
		input#right_open{
			display:none;
		}
		input.normal{
			width:100%;
		}
		input.edit_button{
			width:100%;
			height:25px;
		}
		input.center{
			text-align:center;
		}
		input.edit,input.edit_repeat{
			display:none;
		}
		input.bold{
			font-weight:bold;
			font-size:1.4em;
		}
		input.mobile{
			display:none;
		}

	td.short,th.short{
		width:60px;
	}
	td.middle,th.middle{
		width:200px;
	}
	td.long,th.long{
		width:650px;	
	}
	td.tiny{
		width:1px;
	}
	td.nowrap,th.nowrap{
		white-space:nowrap;  //強制不換行		
	}
	td.unpadding{
		padding:0px;
	}
	td.bold{
		font-weight:bold;
	}
	table.tablesorter td.unpadding{
		padding: 0px;
	}
	td.center, th.center{
		text-align:center;
	}
	table.tablesorter td.red{
		background:#FF6A6A;
	}
	table.tablesorter td.yellow{
		background:#FFF888;
	}
	table.tablesorter td.green{
		background:lightgreen;
	}
	table.tablesorter td.gray{
		background:lightgray;
	}
	table.tablesorter td.lightgreen{
		background:#EEFFCC;
	}
	table.tablesorter td.transparent{
		background:transparent;
	}
	table.width95{
		width:95%;
	}
		table.tablesorter{
			margin-top:0px;
			border-collapse:collapse;
		}	
		table.tablesorter tbody tr td,table.tablesorter thead tr th,table.tablesorter thead tr td{ 
			border:solid 1px #e6EEEE;
		}		
/*frozen first row for table*/
	table.tablesorter td.titlecolumn1,th.titlecolumn1,td.titlecolumn2,th.titlecolumn2,td.titlecolumn3,th.titlecolumn3{
		position: relative;
		z-index:110;
		border-top:0px;
	}
	
/*for resposive design*/
	@media (max-width: 1660px){			
	}
	@media (max-width: 1366px){			
	}	
	@media (max-width: 960px){		
	}	
	@media (max-width: 640px){
		input.mobile{
			display:block;
		}
	}		
	
</style>
	<meta name="keyword" content="check list,control table,management,tool">
	<meta name="description" content="control table to manage your daily jobs">
	<meta name="author" content="Oahehc">	
	<!--網站標題/我的最愛圖片-->
	<link rel="shortcut icon" href="pic/checklist.jpg">
	<!--設為主畫面APP連結時的圖片-->
	<link rel="apple-touch-icon" href="pic/checklist.jpg">
	<!--視窗填滿手機畫面-->
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!--加到主畫面時，使網址列與最下面的選單消失，變為全螢幕模式-->
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="mobile-web-app-capable" content="yes">	
	<title>CheckList</title>
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
				
				
			//block by loading div
			$("form").submit(function(){
				$.blockUI({ message: '<h1>Loading...</h1>' });
			});
			
			//增加table排序功能
			$("#sort-1").tablesorter();
			
			//加入analysis下拉選單
			var analysis_array = ['Regular_Job','Summary','Hit_Rate'];
			$.each(analysis_array, function(){
				$("select#analysis").append("<option value=" + this + ">" + this + "</option>")
			});
			
			//加入priority下拉選單
			var priority_array = ['3','1','2','3','4','5'];
			$.each(priority_array, function(){
				$("select#priorities").append("<option value=" + this + ">" + this + "</option>")
			});		
			//加入repeat下拉選單
			var repeat_array = ['','Day','Week','Month','Quarter'];
			$.each(repeat_array, function(){
				$("select#repeats").append("<option value=" + this + ">" + this + "</option>")
			});
			
			//show remark
			$("th#remark1").mouseover(function(){
				$("div.remark1").css("display","block");
			});
			$("th#remark1").mouseout(function(){
				$("div.remark1").css("display","none");
			});		
			$("td#remark2").mouseover(function(){
				$("div.remark2").css("display","block");
			});
			$("td#remark2").mouseout(function(){
				$("div.remark2").css("display","none");
			});			
			
			//right div switch : update to cookie
			$("input#right_open").click(function(){
				$("input#right_close").css("display","block");
				$("input#right_open").css("display","none");
				$("div.left").css("width","60%");
				$("div.right").css("width","40%");
				$("div.remark1").css("left","50%");	
				$("div.remark2").css("left","50%");	
				$.cookie("input_close", "block");
				$.cookie("input_open", "none");
				$.cookie("div_left", "60%");
				$.cookie("div_right", "40%");
				$.cookie("div_remark1", "50%");
			});
			$("input#right_close").click(function(){
				$("input#right_close").css("display","none");
				$("input#right_open").css("display","block");
				$("div.left").css("width","100%");
				$("div.right").css("width","0%");
				$("div.remark1").css("left","85%");	
				$("div.remark2").css("left","85%");	
				$.cookie("input_close", "none");
				$.cookie("input_open", "block");
				$.cookie("div_left", "100%");
				$.cookie("div_right", "0%");
				$.cookie("div_remark1", "85%");				
			});
						
			//read cookie and set to css
			var input_close = $.cookie("input_close");
				if(typeof input_close === "undefined")
				{var input_close = "block";}			
			var input_open = $.cookie("input_open");
				if(typeof input_open === "undefined")
				{var input_open = "none";}			
			var div_left = $.cookie("div_left");
				if(typeof div_left === "undefined")
				{var div_left = "60%";}			
			var div_right = $.cookie("div_right");
				if(typeof div_right === "undefined")
				{var div_right = "40%";}			
			var div_remark1 = $.cookie("div_remark1");
				if(typeof div_remark1 === "undefined")
				{var div_remark1 = "50%";}		
			var div_remark2 = $.cookie("div_remark2");
				if(typeof div_remark2 === "undefined")
				{var div_remark2 = "50%";}
			$("input#right_close").css("display",input_close);
			$("input#right_open").css("display",input_open);
			$("div.left").css("width",div_left);
			$("div.right").css("width",div_right);
			$("div.remark1").css("left",div_remark1);	
			$("div.remark2").css("left",div_remark2);	
			
			//mouse on and off background-color change
			$("tr").mouseover(function(){
				$(this).children("td").css("background-color","#FFFF99");			
			});
			$("tr").mouseout(function(){
				$(this).children("td").css("background-color","");			
			});			
		});

		
	</script>
<body>
<?php
//載入函式庫
include ("ext/constant.php");

//開啟session
session_start();

//設定時區
date_default_timezone_set("Asia/Taipei");

//關閉error report
//error_reporting(0);
//error_reporting(E_ALL);

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


//若SESSION無資料, 抓取Cookies設定
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
	
//未登入自動跳轉login page (將頁面寫入SESSION, for login後自動跳轉)
$_SESSION["last_url"] = "checklist.php";
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

//寫入瀏覽紀錄
	if(empty($_SESSION["visit_checklist"]) && !empty($id))
	{
	//已寫入瀏覽紀錄, 避免寫入重複資料
	$_SESSION["visit_checklist"] = "y";

	//取得user真實ip
		if (!empty($_SERVER['HTTP_CLIENT_IP']))
		{$user_ip = $_SERVER['HTTP_CLIENT_IP'];}
		else if (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))
		{$user_ip = $_SERVER['HTTP_X_FORWARDED_FOR'];}
		else
		{$user_ip = $_SERVER['REMOTE_ADDR'];}

	//取得進入網頁時間
	$onload_time  = date('Y-m-d H:i:s');

	//取得目前瀏覽檔名
	$url = $_SERVER['PHP_SELF'];

	//取得前一網頁
	$last_page = $_SERVER['HTTP_REFERER'];	

	//取得瀏覽器資料
	$agent = $_SERVER['HTTP_USER_AGENT'];

	//寫入瀏覽紀錄
	$insert_visit = "insert into visit(user_id,user_ip,onload_time,url,last_page,agent) 
					 Values('$id','$user_ip','$onload_time','$url','$last_page','$agent')";
	$insert = mysql_query($insert_visit);
	}

//使用手機連線則切換至手機版
	if(empty($_SESSION["session_checklist_phone"]))
	{
	$agent = $_SERVER['HTTP_USER_AGENT'];
		if(strpos($agent,"NetFront") || strpos($agent,"iPhone") || strpos($agent,"MIDP-2.0") || strpos($agent,"Opera Mini") || strpos($agent,"UCWEB") || strpos($agent,"Android") || strpos($agent,"Windows CE") || strpos($agent,"SymbianOS"))
		header("Location:checklist_mobile.php");
	}
	

//限制顯示已完成工作筆數
$show_finish = 5;
//default deadline
$default_deadline = 2089036800;
//hit rate range (month)
$range = 5;

?>
<div class="button">
	<input class="link" type="button" value="►" id="right_close">
	<input class="link" type="button" value="◄" id="right_open">
	<input class="link" type="button" value="<?php echo ucfirst($id); ?>" onclick="window.open('account_manager.php','_blank')">
	<input class="link mobile" type="button" value="Mobile" onclick="window.open('checklist_mobile.php','_self')">
	<!--
	<br><input class="link" type="button" value="Refresh" onclick="window.open('checklist.php','_self')">
	-->
</div>

<form method="POST" name="checklist">
<input type="hidden" name="action">
<?PHP
//create datalist 
	//for category
	$select_category = "select distinct category from checklist where id='$id' and category is not NULL and item_type iS NULL order by category";
	$result_category = mysql_query($select_category);
	$num_category = mysql_num_rows($result_category);
	echo "<datalist id='categorys'>";
		for($i=0;$i<$num_category;$i++)
		{
		$data_category = mysql_fetch_row($result_category);
		echo "<option value='$data_category[0]'>";
		}
	echo "</datalist>";
	
	//priority
	echo "<datalist id='priorities'>
			<option value='1'>
			<option value='2'>
			<option value='3'>
			<option value='4'>
			<option value='5'>
		  </datalist>";
	//repeat
	echo "<datalist id='repeats'>
			<option value='Day'>
			<option value='Week'>
			<option value='Month'>
			<option value='Quarter'>
		  </datalist>";	

//regular job auto create
	if($_SESSION["repeat_check"]!="y")
	{
	$_SESSION["repeat_check"]="y";
	
	//select all repeat job 
	$select_repeat = "select * from checklist where id='$id' and item_type='repeat' and finish is NULL";
	$result_select_repeat = mysql_query($select_repeat);
	$num_repeat = @mysql_num_rows($result_select_repeat);
	
		for($i=0;$i<$num_repeat;$i++)
		{
		$data_repeat = mysql_fetch_row($result_select_repeat);
		
			if($data_repeat[9] < time())
			{
			$check_end_date = strtotime((date("Y",time())+floor(date("m",time())/12))."-".((date("m",time())%12)+1)."-1"); //next month 1st	day
			
			$now = time();		
			
			//create relative job				
				//daily (workday only)
				if($data_repeat[6] == "Day")
				{	
				$repeat_deadline = $data_repeat[9]-1;
					while($repeat_deadline < $check_end_date)
					{		
					$repeat_deadline += 60*60*24;	
					//except holiday
						if(date("N",$repeat_deadline)<6)
						{
						$insert_new_repeat = "insert into checklist(`id`,`priority`,`category`,`content`,`remark`,`repeated`,`deadline`,`create_date`)
											  Values('$id','$data_repeat[2]','$data_repeat[3]','$data_repeat[4]','$data_repeat[5]','$data_repeat[6]','$repeat_deadline','$now')";
						$result_new_repeat = mysql_query($insert_new_repeat);
						}
					}
				}
				//weekly
				elseif($data_repeat[6] == "Week")
				{	
				$repeat_deadline = $data_repeat[9]-1;
					while($repeat_deadline < $check_end_date)
					{	
					$repeat_deadline += 60*60*24*7;		
					$insert_new_repeat = "insert into checklist(`id`,`priority`,`category`,`content`,`remark`,`repeated`,`deadline`,`create_date`)
										  Values('$id','$data_repeat[2]','$data_repeat[3]','$data_repeat[4]','$data_repeat[5]','$data_repeat[6]','$repeat_deadline','$now')";
					$result_new_repeat = mysql_query($insert_new_repeat);
					}
				}				
				//monthly
				elseif($data_repeat[6] == "Month")
				{
				//get original day
				$original_day = date("j",$data_repeat[7]);
				$original_deadline = $data_repeat[9]-1;
				$repeat_deadline = $data_repeat[9]-1;
					while($repeat_deadline < $check_end_date)
					{	
					//create new date by original day
					$repeat_deadline = strtotime((date("Y",$repeat_deadline)+floor(date("m",$repeat_deadline)/12))."-".((date("m",$repeat_deadline)%12)+1)."-".$original_day);
					//move to 23:59:59
					$repeat_deadline = $repeat_deadline + 60*60*24 - 1;
					
					//date adjust for 28~31 monthly repeat
						$original_month = date("n",$original_deadline);
						$new_month = date("n",$repeat_deadline);
						while(($new_month-$original_month)==2)
						{
						$repeat_deadline = $repeat_deadline - 60*60*24;
						$new_month = date("n",$repeat_deadline);
						}
						$original_deadline = $repeat_deadline;
					
					$insert_new_repeat = "insert into checklist(`id`,`priority`,`category`,`content`,`remark`,`repeated`,`deadline`,`create_date`)
										  Values('$id','$data_repeat[2]','$data_repeat[3]','$data_repeat[4]','$data_repeat[5]','$data_repeat[6]','$repeat_deadline','$now')";
					$result_new_repeat = mysql_query($insert_new_repeat);
					}				
				}
				//quarterly
				elseif($data_repeat[6] == "Quarter")
				{
				//get original day
				$original_day = date("j",$data_repeat[7]);
				$original_deadline = $data_repeat[9]-1;
				$repeat_deadline = $data_repeat[9]-1;
					while($repeat_deadline < $check_end_date)
					{	
					//create new date by original day
					$repeat_deadline = strtotime((date("Y",$repeat_deadline)+floor((date("m",$repeat_deadline)+2)/12))."-".(((date("m",$repeat_deadline)+2)%12)+1)."-".$original_day);

					//move to 23:59:59
					$repeat_deadline = $repeat_deadline + 60*60*24 - 1;
					
					//date adjust for 28~31 monthly repeat
						$original_month = date("n",$original_deadline);
						$new_month = date("n",$repeat_deadline);
						while((($new_month-$original_month)==4) || (($original_month-$new_month)==8))
						{
						$repeat_deadline = $repeat_deadline - 60*60*24;
						$new_month = date("n",$repeat_deadline);
						}
						$original_deadline = $repeat_deadline;
					
					$insert_new_repeat = "insert into checklist(`id`,`priority`,`category`,`content`,`remark`,`repeated`,`deadline`,`create_date`)
										  Values('$id','$data_repeat[2]','$data_repeat[3]','$data_repeat[4]','$data_repeat[5]','$data_repeat[6]','$repeat_deadline','$now')";
					$result_new_repeat = mysql_query($insert_new_repeat);
					}
				}			
			
			//update check date
			$new_check_date = $repeat_deadline + 1;
			$update_repeat = "update checklist set create_date='$new_check_date' where item='$data_repeat[0]' and id='$id'";
			$result_update_repeat = mysql_query($update_repeat);
			}
		}
	}
	
	
//input receive and action
//Add new job
	if($_POST["action"] == "add")
	{
	//received data
	$new_priority = $_POST["new_priority"];
	$new_category = $_POST["new_category"];
	$new_content = $_POST["new_content"];
	$new_remark = $_POST["new_remark"];
		if(empty($_POST["new_deadline"]))
		{$new_deadline = $default_deadline;}
		else
		{$new_deadline = strtotime($_POST["new_deadline"]) + 60*60*24 -1;} //移動至23:59:59
	$new_repeat = $_POST["new_repeat"];
	$new_create = time();

	
	//insert to mysql
		//repeat job create another item
		if(!empty($new_repeat))
		{
		//create_date = deadline + 1 for auto create check (move to 00:00:00)
		$repeat_create = $new_deadline + 1;	
		
		$insert_repeat = "insert into checklist(`id`,`priority`,`category`,`content`,`remark`,`repeated`,`deadline`,`create_date`,`item_type`) 
						  Values('$id','$new_priority','$new_category','$new_content','$new_remark','$new_repeat','$new_deadline','$repeat_create','repeat')";
		$result_repeat = mysql_query($insert_repeat);
		
		//clear session for auto create
		$_SESSION["repeat_check"] = "";
		}
		
		//create new job
		if(empty($_POST["new_finish"]))
		{
		$insert_new = "insert into checklist(`id`,`priority`,`category`,`content`,`remark`,`repeated`,`deadline`,`create_date`) 
					   Values('$id','$new_priority','$new_category','$new_content','$new_remark','$new_repeat','$new_deadline','$new_create')";
		}
		else
		{
		$new_finish = strtotime($_POST["new_finish"]) + 60*60*24 -1; //移動至23:59:59
		$insert_new = "insert into checklist(`id`,`priority`,`category`,`content`,`remark`,`repeated`,`deadline`,`finish`,`create_date`) 
					   Values('$id','$new_priority','$new_category','$new_content','$new_remark','$new_repeat','$new_deadline','$new_finish','$new_create')";
		}	
		$result_new = mysql_query($insert_new);
		if($result_new)
		{
		echo "<script>alert('[Success] New job has been created')</script>";
		//header("location:checklist.php");
		}
	}
//finish job
	elseif($_POST["action"] == "finish")
	{
	//received data	
	$finish_item = $_POST["finish_item"];
	$finish_time = time();
	
	//update data
	$update_finish = "update checklist set finish='$finish_time' where item='$finish_item' and id='$id'";
	$result_finish = mysql_query($update_finish);
	//if($result_finish){header("location:checklist.php");}	
	}
//ontime finish job
	elseif($_POST["action"] == "ontime_finish")
	{
	//received data	
	$finish_item = $_POST["finish_item"];
		//select finish time (equal to deadline)
		$select_finish_time = "select deadline from checklist where item='$finish_item' and id='$id'";
		$result_finish_time = mysql_query($select_finish_time);
		$data_finish_time = mysql_fetch_row($result_finish_time);
	
	//update data
	$update_finish = "update checklist set finish='$data_finish_time[0]' where item='$finish_item' and id='$id'";
	$result_finish = mysql_query($update_finish);
	//if($result_finish){header("location:checklist.php");}	
	}
//delete unfinish job
	elseif($_POST["action"] == "delete")
	{
	//received data	
	$delete_item = $_POST["finish_item"];
	
	//delete data
	$delete_job = "delete from checklist where item='$delete_item' and id='$id'";
	$result_delete = mysql_query($delete_job);
	//if($result_delete){header("location:checklist.php");}	
	}
//undo finish job
	elseif($_POST["action"] == "undo")
	{
	//received data	
	$undo_item = $_POST["undo_item"];
	
	//update data
	$update_undo = "update checklist set finish=NULL where item='$undo_item' and id='$id'";
	$result_undo = mysql_query($update_undo);
	//if($result_undo){header("location:checklist.php");}
	}
//close regular job
	elseif($_POST["action"] == "close")
	{
	//received data	
	$close_item = $_POST["close_item"];
	$now = time();
	
	//update data
	$update_repeat = "update checklist set finish='$now' where item='$close_item' and id='$id'";
	$result_update_repeat = mysql_query($update_repeat);
	//if($result_update_repeat){header("location:checklist.php");}
	}
//export data
	elseif($_POST["action"] == "export")
	{
	//select data
	$select_unfinish_export = "select * from checklist where id='$id' and finish is NULL order by item_type desc, deadline asc";
	$result_unfinish_export = mysql_query($select_unfinish_export);
	$num_unfinish_export = mysql_num_rows($result_unfinish_export);
	
	//create session for data
	$_SESSION["export_data_checklist"] = "Type,Priority,Category,Content,Remark,Deadline,Repeat\n";
		for($i=0;$i<$num_unfinish_export;$i++)
		{
		$data_unfinish_export = mysql_fetch_row($result_unfinish_export);
		//remove original ","
		$data_unfinish_export = str_replace(",","_",$data_unfinish_export);
		$_SESSION["export_data_checklist"].= $data_unfinish_export[10].",".$data_unfinish_export[2].",".$data_unfinish_export[3].",".$data_unfinish_export[4].",".$data_unfinish_export[5].",".date("Y/m/d",$data_unfinish_export[7]).",".$data_unfinish_export[6]."\n";
		}
	
	//open export page
	echo "<script>window.open('checklist_export.php','_blank')</script>";
	}
//export all data
	elseif($_POST["action"] == "export_all")
	{
	//select data
	$select_all_export = "select * from checklist where id='$id' order by item_type desc, deadline asc";
	$result_all_export = mysql_query($select_all_export);
	$num_all_export = mysql_num_rows($result_all_export);
	
	//create session for data
	$_SESSION["export_data_checklist"] = "Type,Priority,Category,Content,Remark,Deadline,Finish,Repeat\n";
		for($i=0;$i<$num_all_export;$i++)
		{
		$data_all_export = mysql_fetch_row($result_all_export);
		//remove original ","
		$data_all_export = str_replace(",","_",$data_all_export);
		//finish date
			if(empty($data_all_export[8]))
			{$finish_date = "";}
			else
			{$finish_date = date("Y/m/d",$data_all_export[8]);}
		$_SESSION["export_data_checklist"].= $data_all_export[10].",".$data_all_export[2].",".$data_all_export[3].",".$data_all_export[4].",".$data_all_export[5].",".date("Y/m/d",$data_all_export[7]).",".$finish_date.",".$data_all_export[6]."\n";
		}	
	
	//open export page
	echo "<script>window.open('checklist_export.php','_blank')</script>";	
	}
//edit unfinish job
	elseif($_POST["action"] == "save_edit")
	{
	$edit_item = $_POST["edit_item"];
	//received data
	$now = time();
	$edit_priority = $_POST["priority_$edit_item"];
	$edit_category = $_POST["category_$edit_item"];
	$edit_content = $_POST["content_$edit_item"];
	$edit_remark = $_POST["remark_$edit_item"];
		if(empty($_POST["deadline_$edit_item"]))
		{$edit_deadline = $default_deadline;}
		else
		{$edit_deadline = strtotime($_POST["deadline_$edit_item"]) + 60*60*24 -1;} //移動至23:59:59
		
	//update to mysql
	$update_edit = "update checklist set priority='$edit_priority', category='$edit_category', content='$edit_content', remark='$edit_remark', deadline='$edit_deadline', create_date='$now' where id='".$id."' and item='$edit_item'";
	$result_edit = mysql_query($update_edit);
		if($result_edit)
		{echo "<script>alert('[Success] Data has been updated')</script>";}
	}
//edit repeat job
	elseif($_POST["action"] == "save_edit_repeat")
	{
	$edit_item_repeat = $_POST["edit_item_repeat"];
	//received data
	$edit_priority = $_POST["repeat_priority_$edit_item_repeat"];
	$edit_category = $_POST["repeat_category_$edit_item_repeat"];
	$edit_content = $_POST["repeat_content_$edit_item_repeat"];
	$edit_remark = $_POST["repeat_remark_$edit_item_repeat"];
		
	//update to mysql
	$update_edit_repeat = "update checklist set priority='$edit_priority', category='$edit_category', content='$edit_content', remark='$edit_remark' where id='".$id."' and item='$edit_item_repeat'";
	$result_edit_repeat = mysql_query($update_edit_repeat);
		if($result_edit_repeat)
		{echo "<script>alert('[Success] Data has been updated')</script>";}
	}
?>


<!--start for left div---------------------------------------------------------------------------------->
<div class="left">
	<!--left_top : list--------------------------------------------------------------------------------->
		<?PHP
		//remove 反斜線
		if(get_magic_quotes_gpc())
		{$_POST["keyword"] = stripslashes($_POST["keyword"]);}
		?>
	<div class="left_top">
		<div class="topic">List</div>
		<input class="long left" name="keyword" value="<?PHP echo $_POST["keyword"]; ?>" maxlength=50  placeholder="content like %fcst% and repeated=''" onchange="submit()">
		<input type="submit" value="Search">
		<input type="button" value="Export" onclick="export_unfinish()">	
		<input type="button" value="Export All" onclick="export_all()">
			<select name="filter" onchange="submit()">
				<option value=""></option>
				<option value="unroutine">Un-Routine</option>
				<option value="routine">Routine</option>
			</select>
		
		<div class="remark1">
			Red : Delay<br>
			Yellow : Today<br>
			Green : This week<br>
		</div>
		<div class="remark2">
			√ : finish<br>
			X : delete<br>
			O : ontime finish<br>
		</div>
		<div class="table height90" id="content1">
		<table id="sort-1" class="tablesorter">
			<thead><tr>
				<th class="short titlecolumn1">Priority</th>
				<th class="short titlecolumn1">Category</th>
				<th class="long titlecolumn1">Content</th>
				<th class="middle titlecolumn1">Remark</th>
				<th class="short titlecolumn1" id="remark1">Deadline</th>
				<th class="short titlecolumn1">Repeat</th>
				<td class="gray titlecolumn1" id="remark2">
					<input class="unedit bold edit_button" type="button" value="Edit" onclick="edit_unfinish()">
					<input class="edit bold edit_button" type="button" value="Finish" onclick="window.open('checklist.php','_self')">
				</td>
			</tr></thead> 
			 
			<tbody>
			<?PHP
			//received search keyword and filter
			if($_POST["filter"] == "unroutine")
			{
			$search_keyword = "and repeated=''";
			}
			elseif($_POST["filter"] == "routine")
			{
			$search_keyword = "and repeated!=''";
			}						
			elseif(!empty($_POST["keyword"]))
			{
				if(gettype(stripos($_POST["keyword"],"like"))=="integer" || gettype(stripos($_POST["keyword"],"="))=="integer" || gettype(stripos($_POST["keyword"],">"))=="integer" || gettype(stripos($_POST["keyword"],"<"))=="integer")
				{$search_keyword = "and (".$_POST["keyword"].")";}
				//if keyword without =,<,>like then search by category,content,remark
				else
				{$search_keyword = "and (category like '%".$_POST["keyword"]."%' or content like '%".$_POST["keyword"]."%' or remark like '%".$_POST["keyword"]."%')";}
			}
			else
			{$search_keyword = "";}
	
			//show priority 1 job (important or ongoing project)
			$select_ongoing = "select * from checklist where id='$id' and finish is NULL and item_type is NULL and priority=1 $search_keyword order by deadline,priority,content";
			$result_ongoing = mysql_query($select_ongoing);
			$num_ongoing = @mysql_num_rows($result_ongoing);
				for($i=0;$i<$num_ongoing;$i++)
				{				
				$data_ongoing = mysql_fetch_row($result_ongoing);
					//color management
					$today = time();
					$tomorrow = $today + 60*60*24;
					$week = strtotime(date("y-m-d",time()+(60*60*24*(8-date("N",time()))))); //下周周一00:00:00
					if($data_ongoing[7]<$today)
					{$color = "red";}
					elseif($data_ongoing[7]<$tomorrow)
					{$color = "yellow";}
					elseif($data_ongoing[7]<$week)
					{$color = "green";}
					else
					{$color = "";}
				$k = $data_ongoing[0];
				echo "<tr>
						<td class='center red'>
							<span class='unedit'>$data_ongoing[2]</span>
							<input class='edit unborder unmargin normal center' name='priority_$k' value='$data_ongoing[2]' list='priorities'>
						</td>
						<td>
							<span class='unedit'>$data_ongoing[3]</span>
							<input class='edit unborder unmargin normal' name='category_$k' value='$data_ongoing[3]' maxlength=30 list='categorys'>
						</td>
						<td>
							<span class='unedit'>$data_ongoing[4]</span>
							<input class='edit unborder unmargin normal' name='content_$k' value='$data_ongoing[4]' maxlength=100>
						</td>
						<td>
							<span class='unedit'>$data_ongoing[5]</span>
							<input class='edit unborder unmargin normal' name='remark_$k' value='$data_ongoing[5]' maxlength=100>
						</td>
						<td class='nowrap $color'>
							<span class='unedit'>".date("m-d D",$data_ongoing[7])."</span>
							<input class='edit unborder unmargin normal' type='date' name='deadline_$k' value='".date("Y-m-d",$data_ongoing[7])."'>
						</td>
						<td class='center nowrap'>
							<span>$data_ongoing[6]</span>
						</td>
						<td class='tiny unpadding transparent nowrap'>
							<input class='low unedit' type='button' value='√' onclick='finish_job(\"$k\")'><input class='low unedit' type='button' value='X' onclick='delete_job(\"$k\")'><input class='low unedit' type='button' value='O' onclick='ontime_finish_job(\"$k\")'>
							<input class='edit_button edit' type='button' value='Save' onclick='save_edit(\"$k\")'>
						</td>
					  </tr>";
				}			
			
			//show unfinish job order by deadline
			$select_unfinish = "select * from checklist where id='$id' and finish is NULL and item_type is NULL and priority!=1 $search_keyword order by deadline,priority,content";
			$result_unfinish = mysql_query($select_unfinish);
			$num_unfinish = @mysql_num_rows($result_unfinish);
				for($i=0;$i<$num_unfinish;$i++)
				{
				//odd,even line mark different background-color
					if($i%2 == 1)
					{$odd = "lightgreen";}
					else
					{$odd = "";}
					
				$data_unfinish = mysql_fetch_row($result_unfinish);
					//color management
					$today = time();
					$tomorrow = $today + 60*60*24;
					$week = strtotime(date("y-m-d",time()+(60*60*24*(8-date("N",time()))))); //下周周一00:00:00
					if($data_unfinish[7]<$today)
					{$color = "red";}
					elseif($data_unfinish[7]<$tomorrow)
					{$color = "yellow";}
					elseif($data_unfinish[7]<$week)
					{$color = "green";}
					else
					{$color = "";}
				$k = $data_unfinish[0];
				echo "<tr>
						<td class='center $odd'>
							<span class='unedit'>$data_unfinish[2]</span>
							<input class='edit unborder unmargin normal center' name='priority_$k' value='$data_unfinish[2]' list='priorities'>
						</td>
						<td class='$odd'>
							<span class='unedit'>$data_unfinish[3]</span>
							<input class='edit unborder unmargin normal' name='category_$k' value='$data_unfinish[3]' maxlength=30 list='categorys'>
						</td>
						<td class='$odd'>
							<span class='unedit'>$data_unfinish[4]</span>
							<input class='edit unborder unmargin normal' name='content_$k' value='$data_unfinish[4]' maxlength=100>
						</td>
						<td class='$odd'>
							<span class='unedit'>$data_unfinish[5]</span>
							<input class='edit unborder unmargin normal' name='remark_$k' value='$data_unfinish[5]' maxlength=100>
						</td>
						<td class='nowrap $color'>
							<span class='unedit'>".date("m-d D",$data_unfinish[7])."</span>
							<input class='edit unborder unmargin normal' type='date' name='deadline_$k' value='".date("Y-m-d",$data_unfinish[7])."'>
						</td>
						<td class='center nowrap $odd'>
							<span>$data_unfinish[6]</span>
						</td>
						<td class='tiny unpadding transparent nowrap'>
							<input class='low unedit' type='button' value='√' onclick='finish_job(\"$k\")'><input class='low unedit' type='button' value='X' onclick='delete_job(\"$k\")'><input class='low unedit' type='button' value='O' onclick='ontime_finish_job(\"$k\")'>
							<input class='edit_button edit' type='button' value='Save' onclick='save_edit(\"$k\")'>
						</td>
					  </tr>";
				}
				echo "<input type='hidden' name='edit_item'>";
			?>
			<input type="hidden" name="finish_item">
			</tbody>
		</table>
		</div> 
	</div> 

	<!--left_bottom : history--------------------------------------------------------------------------->
	<div class="left_bottom">
		<div class="topic">History</div>
		<div class="table height80" id="content2">		
		<table id="sort-2" class="tablesorter">
			<thead><tr>
				<th class="short titlecolumn2">Priority</th>
				<th class="short titlecolumn2">Category</th>
				<th class="long titlecolumn2">Content</th>
				<th class="middle titlecolumn2">Remark</th>
				<th class="short titlecolumn2">Deadline</th>
				<th class="short titlecolumn2">Finish</th>
				<td class="gray titlecolumn2"></td>
			</tr></thead> 
			 
			<tbody>
			<?PHP
			$select_finish = "select * from checklist where id='$id' and finish is not NULL and item_type is NULL order by finish desc limit $show_finish";
			$result_finish = mysql_query($select_finish);
			$num_finish = mysql_num_rows($result_finish);
				for($i=0;$i<min($num_finish,$show_finish);$i++)
				{
				$data_finish = mysql_fetch_row($result_finish);
				echo "<tr>
						<td class='center'>$data_finish[2]</td>
						<td>$data_finish[3]</td>
						<td>$data_finish[4]</td>
						<td>$data_finish[5]</td>
						<td class='nowrap'>".date("y-m-d",$data_finish[7])."</td>
						<td class='nowrap'>".date("y-m-d",$data_finish[8])."</td>
						<td class='tiny unpadding transparent nowrap'><input class='low' type='button' value='Undo' onclick='undo_job(\"$data_finish[0]\")'></td>
					  </tr>";				
				}
			?>
			<input type="hidden" name="undo_item">
			</tbody>
		</table>		
		</div>
	</div>
</div>	
<!--end for left div------------------------------------------------------------------------------------>


<!--start for right div--------------------------------------------------------------------------------->
<div class="right">
	<!--right_top : new--------------------------------------------------------------------------------->
	<div class="right_top">
		<div class="topic">New</div>
		<table class="tablesorter width95">
			<tr>
				<th class="short">Priority</th>
				<td><select id="priorities" class="unborder short" name="new_priority"></select></td>
			</tr>
			<tr>
				<th class="short">Category</th>
				<td><input class="unborder unmargin long" name="new_category" maxlength=30 list="categorys"></td>
			</tr>
			</tr>
				<th class="short">Content</th>
				<td><input class="unborder unmargin max" name="new_content" maxlength=100></td>
			</tr>
			</tr>
				<th class="short">Remark</th>
				<td><input class="unborder unmargin max" name="new_remark" maxlength=100></td>
			</tr>
			</tr>
				<th class="short">Deadline</th>
				<td><input class="unborder unmargin short" type="date" name="new_deadline"></td>
			</tr>
			</tr>
				<th class="short">Repeat</th>
				<td><select id="repeats" class="unborder" name="new_repeat"></select></td>
			</tr>
			</tr>
				<th class="short">Finish</th>
				<td><input class="unborder unmargin short" type="date" name="new_finish"></select></td>
			</tr>
		</table>
		<input class="left" type="button" value="Add" onclick="add_job()">	
		<input type="button" value="Import" onclick="window.open('checklist_import.php', 'import_page', 'width=800 height=600')">	
	</div>

	<!--right_bottom : analysis------------------------------------------------------------------------->
	<div class="right_bottom">
		<div class="topic">Analysis</div>
		<select class="left" id="analysis" name="analysis_type"></select>
		<input type="button" value="Submit" onclick="show_analysis()">
		<!--Regular Job : default show regular-->
		<div id="regular" class="analysis" style="display:block">
			<div class="table height85" id="content3">			
			<table id="sort-3" class="tablesorter">
				<thead><tr>
					<th class="short titlecolumn3">Priority</th>
					<th class="short titlecolumn3">Category</th>
					<th class="long titlecolumn3">Content</th>
					<th class="middle titlecolumn3">Remark</th>
					<th class="short titlecolumn3">Start</th>
					<th class="short titlecolumn3">Repeat</th>
					<td class="gray titlecolumn3">
						<input class="bold unedit_repeat edit_button" type="button" value="Edit" onclick="edit_repeat()">
						<input class="bold edit_repeat edit_button" type="button" value="Finish" onclick="window.open('checklist.php','_self')">
					</td>
				</tr></thead> 
				 
				<tbody>
				<?PHP
				$select_regular = "select * from checklist where id='$id' and finish is NULL and item_type='repeat' order by deadline";
				$result_regular = mysql_query($select_regular);
				$num_regular = mysql_num_rows($result_regular);
					for($i=0;$i<$num_regular;$i++)
					{

					//odd,even line mark different background-color
						if($i%2 == 1)
						{$odd = "lightgreen";}
						else
						{$odd = "";}					
					$data_regular = mysql_fetch_row($result_regular);
					$k = $data_regular[0];
					echo "<tr>
							<td class='center $odd'>
								<span class='unedit_repeat'>$data_regular[2]</span>
								<input class='edit_repeat unborder unmargin normal center' name='repeat_priority_$k' value='$data_regular[2]' list='priorities'>
							</td>
							<td class='$odd'>
								<span class='unedit_repeat'>$data_regular[3]</span>
								<input class='edit_repeat unborder unmargin normal' name='repeat_category_$k' value='$data_regular[3]' maxlength=30 list='categorys'>								
							</td>
							<td class='$odd'>
								<span class='unedit_repeat'>$data_regular[4]</span>
								<input class='edit_repeat unborder unmargin normal' name='repeat_content_$k' value='$data_regular[4]' maxlength=100>							
							</td>
							<td class='$odd'>
								<span class='unedit_repeat'>$data_regular[5]</span>
								<input class='edit_repeat unborder unmargin normal' name='repeat_remark_$k' value='$data_regular[5]' maxlength=100>								
							</td>
							<td class='nowrap $odd'>
								<span>".date("y-m-d",$data_regular[7])."</span>							
							</td>
							<td class='center $odd'>
								<span>$data_regular[6]</span>
							</td>
							<td class='tiny unpadding transparent nowrap'>
								<input class='low unedit_repeat edit_button' type='button' value='Close' onclick='repeat_close(\"$k\")'>
								<input class='low edit_repeat edit_button' type='button' value='Save' onclick='save_edit_repeat(\"$k\")'>
							</td>
						  </tr>";	
					}
					echo "<input type='hidden' name='edit_item_repeat'>";
				?>
				<input type="hidden" name="close_item">		
				</tbody>		
			</table>
			</div>
		</div>
		
		<!--Summary-->
		<div id="summary" class="analysis">
			<div class="table height85">			
			<table class="tablesorter width95">
				<tr>
					<th rowspan=2 class="center"></th>
					<th></th>
					<th class="center">Unfinish</th>
					<th></th>
					<th rowspan=2 class="center">Finish</th>
				</tr>
				<tr>
					<th class="center">Normal</th>
					<th class="center">Repeat</th>
					<th class="center">Total</th>
				</tr>
				<?PHP
				$delay = strtotime(date("y-m-d",time())); //本日 00:00:00
				$today = $delay + 60*60*24; //明日 00:00:00
				$this_week = strtotime(date("y-m-d",time()+(60*60*24*(8-date("N",time()))))); //下周周一 00:00:00
				$this_month = strtotime(date("y-m-",strtotime("+1 month",time()))."1"); //次月1號 00:00:00
				$next_month = strtotime(date("y-m-",strtotime("+2 month",time()))."1"); //n+2月1號 00:00:00	
				//delay
				$select_summary_delay = "select 
										count(case when finish is null and repeated='' and item_type is null then 1 else null end) as normal,
										count(case when finish is null and repeated!='' and item_type is null  then 1 else null end) as repeated,
										count(case when finish is null and item_type is null  then 1 else null end) as total,
										count(case when finish is not null and item_type is null then 1 else null end) as finish
										from checklist where deadline<$delay";
				$result_summary_delay = mysql_query($select_summary_delay);
				$data_summary_delay = mysql_fetch_row($result_summary_delay);
				echo "<tr>
						<td class='bold'>Delay</td>
						<td class='center'>$data_summary_delay[0]</td>
						<td class='center'>$data_summary_delay[1]</td>
						<td class='center'>$data_summary_delay[2]</td>
						<td class='center'>$data_summary_delay[3]</td>
					  </tr>";
				
				//today
				$select_summary_today = "select 
										count(case when finish is null and repeated='' and item_type is null then 1 else null end) as normal,
										count(case when finish is null and repeated!='' and item_type is null  then 1 else null end) as repeated,
										count(case when finish is null and item_type is null  then 1 else null end) as total,
										count(case when finish is not null and item_type is null then 1 else null end) as finish
										from checklist where deadline<$today and deadline>=$delay";
				$result_summary_today = mysql_query($select_summary_today);
				$data_summary_today = mysql_fetch_row($result_summary_today);
				echo "<tr>
						<td class='bold'>Today</td>
						<td class='center'>$data_summary_today[0]</td>
						<td class='center'>$data_summary_today[1]</td>
						<td class='center'>$data_summary_today[2]</td>
						<td class='center'>$data_summary_today[3]</td>
					  </tr>";
								
				//this week
				$select_summary_this_week = "select 
											count(case when finish is null and repeated='' and item_type is null then 1 else null end) as normal,
											count(case when finish is null and repeated!='' and item_type is null  then 1 else null end) as repeated,
											count(case when finish is null and item_type is null  then 1 else null end) as total,
											count(case when finish is not null and item_type is null then 1 else null end) as finish
											from checklist where deadline<$this_week and deadline>=$today";
				$result_summary_this_week = mysql_query($select_summary_this_week);
				$data_summary_this_week = mysql_fetch_row($result_summary_this_week);
				echo "<tr>
						<td class='bold'>This Week</td>
						<td class='center'>$data_summary_this_week[0]</td>
						<td class='center'>$data_summary_this_week[1]</td>
						<td class='center'>$data_summary_this_week[2]</td>
						<td class='center'>$data_summary_this_week[3]</td>
					  </tr>";				
				
				//this month
				$select_summary_this_month = "select 
											count(case when finish is null and repeated='' and item_type is null then 1 else null end) as normal,
											count(case when finish is null and repeated!='' and item_type is null  then 1 else null end) as repeated,
											count(case when finish is null and item_type is null  then 1 else null end) as total,
											count(case when finish is not null and item_type is null then 1 else null end) as finish
											from checklist where deadline<$this_month and deadline>=$this_week";
				$result_summary_this_month = mysql_query($select_summary_this_month);
				$data_summary_this_month = mysql_fetch_row($result_summary_this_month);
				echo "<tr>
						<td class='bold'>This Month</td>
						<td class='center'>$data_summary_this_month[0]</td>
						<td class='center'>$data_summary_this_month[1]</td>
						<td class='center'>$data_summary_this_month[2]</td>
						<td class='center'>$data_summary_this_month[3]</td>
					  </tr>";					
				
				//next month
				$select_summary_next_month = "select 
											count(case when finish is null and repeated='' and item_type is null then 1 else null end) as normal,
											count(case when finish is null and repeated!='' and item_type is null  then 1 else null end) as repeated,
											count(case when finish is null and item_type is null  then 1 else null end) as total,
											count(case when finish is not null and item_type is null then 1 else null end) as finish
											from checklist where deadline<$next_month and deadline>=$this_month";
				$result_summary_next_month = mysql_query($select_summary_next_month);
				$data_summary_next_month = mysql_fetch_row($result_summary_next_month);
				echo "<tr>
						<td class='bold'>Next Month</td>
						<td class='center'>$data_summary_next_month[0]</td>
						<td class='center'>$data_summary_next_month[1]</td>
						<td class='center'>$data_summary_next_month[2]</td>
						<td class='center'>$data_summary_next_month[3]</td>
					  </tr>";	
				
				//Over 2 month
				$select_summary_over_next_month = "select 
												count(case when finish is null and repeated='' and item_type is null then 1 else null end) as normal,
												count(case when finish is null and repeated!='' and item_type is null  then 1 else null end) as repeated,
												count(case when finish is null and item_type is null  then 1 else null end) as total,
												count(case when finish is not null and item_type is null then 1 else null end) as finish
												from checklist where deadline>=$next_month";
				$result_summary_over_next_month = mysql_query($select_summary_over_next_month);
				$data_summary_over_next_month = mysql_fetch_row($result_summary_over_next_month);
				echo "<tr>
						<td class='bold'>Over Next Month</td>
						<td class='center'>$data_summary_over_next_month[0]</td>
						<td class='center'>$data_summary_over_next_month[1]</td>
						<td class='center'>$data_summary_over_next_month[2]</td>
						<td class='center'>$data_summary_over_next_month[3]</td>
					  </tr>";				
				?>			
			</table>
			</div>
		</div>
		
		<!--Hit Rate-->
		<div id="hit" class="analysis">
			<div class="table height85">			
			<table class="tablesorter width95">
			<?PHP
			$start_month = strtotime(date("y-m-",strtotime("-".$range." month",time()))."1");
			
			//show title
			echo "<tr><th></th>";
				for($i=0;$i<=$range;$i++)
				{
				$title_year[$i] = date("Y",strtotime(date("y-m-",strtotime("+".$i." month",$start_month))."1"));
				$title_month = date("M",strtotime(date("y-m-",strtotime("+".$i." month",$start_month))."1"));
					if($title_year[$i] == $title_year[$i-1])
					{echo "<th class='center'><br>$title_month</th>";}
					else
					{echo "<th class='center'>$title_year[$i]<br>$title_month</th>";}
				}
			echo "</tr>";
			//Select data			
				for($i=0;$i<=$range;$i++)
				{
				$end_month = strtotime(date("y-m-",strtotime("1 month",$start_month))."1");
				$select_hitrate = "select 
									count(case when (finish<=deadline) then 1 else null end) as ontime,
									count(case when (finish>deadline) and ((finish-deadline)<=259200) then 1 else null end) as one,
									count(case when ((finish-deadline)>259200) and ((finish-deadline)<=604800) then 1 else null end) as two,
									count(case when ((finish-deadline)>604800) and ((finish-deadline)<=1209600) then 1 else null end) as three,
									count(case when ((finish-deadline)>1209600) and ((finish-deadline)<=2419200) then 1 else null end) as four,
									count(case when (finish>deadline) and ((finish-deadline)>2419200) then 1 else null end) as five 
									from checklist where finish is not null and item_type is null and deadline>=$start_month and deadline<$end_month";			
				$result_hitrate = mysql_query($select_hitrate);
				$data_hitrate[$i] = mysql_fetch_row($result_hitrate);
				$start_month = $end_month;				
				}			
			
			//show result
			$hitrate_type = array("OnTime","Delay 1~3day","Delay 1wk","Delay 1~2wk","Delay 2~4wk","Delay over 4wk");
				for($j=0;$j<count($hitrate_type);$j++)
				{
				echo "<tr><td class='bold'>$hitrate_type[$j]</td>";
					for($k=0;$k<=$range;$k++)
					{
					echo "<td class='center'>";
					echo $data_hitrate[$k][$j];
					echo "</td>";
					}
				}

			echo "<tr>";
			echo "</tr>";
			?>			
			</table>
			</div>
		</div>
				
	</div>
</div>
<!--end for right div---------------------------------------------------------------------------------->


</form>
</body>
</html>

<script language="JavaScript">
<!--設定selected避免跳回首筆選項-->
	var filter_selected = "<?=$_POST['filter']?>";
	if(filter_selected != "")
	{checklist.filter.value = filter_selected;}
	
	function finish_job(x){
	$.blockUI({ message: '<h1>Loading...</h1>' });
		document.checklist.finish_item.value = x;
		document.checklist.action.value = "finish";
		document.checklist.submit();
	}
	function ontime_finish_job(x){
	$.blockUI({ message: '<h1>Loading...</h1>' });
		document.checklist.finish_item.value = x;
		document.checklist.action.value = "ontime_finish";
		document.checklist.submit();
	}
	function delete_job(x){
		if(confirm('[Remind] Confirm to delete'))
		{
	$.blockUI({ message: '<h1>Loading...</h1>' });
		document.checklist.finish_item.value = x;
		document.checklist.action.value = "delete";
		document.checklist.submit();
		}
	}
	function undo_job(x){
	$.blockUI({ message: '<h1>Loading...</h1>' });
		document.checklist.undo_item.value = x;
		document.checklist.action.value = "undo";
		document.checklist.submit();
	}
	function repeat_close(x){
		if(confirm('[Remind] Confirm to close repeated job'))
		{
	$.blockUI({ message: '<h1>Loading...</h1>' });
		document.checklist.close_item.value = x;
		document.checklist.action.value = "close";
		document.checklist.submit();
		}
	}
	function add_job(){
		if(document.checklist.new_category.value == "")
		{alert('[Error] Category can\'t been empty!');}
		else if(document.checklist.new_content.value == "")
		{alert('[Error] Content can\'t been empty!');}
		else if(document.checklist.new_deadline.value == "")
		{
			if(document.checklist.new_repeat.value == "")
			{
				if(confirm('[Remind] Deadline is empty,\nConfirm to create'))
				{
	$.blockUI({ message: '<h1>Loading...</h1>' });
				document.checklist.action.value = "add";
				document.checklist.submit();
				}
			}
			else
			{alert('[Error] Repeat job deadline can\'t been empty!');}
		}
		else
		{
		var x = document.checklist.new_deadline.value;
		var deadline = Date.parse(x) + 60*60*16*1000;
		var now = Date.now();
			if(deadline < now)
			{
				if(confirm('[Remind] Deadline < now,\nConfirm to create'))
				{
	$.blockUI({ message: '<h1>Loading...</h1>' });
				document.checklist.action.value = "add";
				document.checklist.submit();
				}				
			}
			else
			{
	$.blockUI({ message: '<h1>Loading...</h1>' });
			document.checklist.action.value = "add";
			document.checklist.submit();			
			}
		}
	}
	function export_unfinish(){
	$.blockUI({ message: '<h1>Loading...</h1>' });
		document.checklist.action.value = "export";
		document.checklist.submit();
	}
	function export_all(){
		if(confirm('[Remind] Confirm to export all data (including finished)'))
		{
	$.blockUI({ message: '<h1>Loading...</h1>' });
		document.checklist.action.value = "export_all";
		document.checklist.submit();
		}
	}
<!--edit mode for unfinish job-->
	function edit_unfinish(){
		$(".unedit").css("display","none");
		$("input.edit").css("display","block");
	}
	function save_edit(x){
	var priority_check = $("input[name=priority_"+x+"]").val();
		if(priority_check<1 || priority_check>5)
		{alert('[Error] Priority must between 1~5');}
		else
		{
	$.blockUI({ message: '<h1>Loading...</h1>' });
		document.checklist.edit_item.value = x;
		document.checklist.action.value = "save_edit";
		document.checklist.submit();		
		}
	}
<!--edit mode for repeat job-->
	function edit_repeat(){
		$(".unedit_repeat").css("display","none");
		$("input.edit_repeat").css("display","block");
			$("div.left").css("width","30%");
			$("div.right").css("width","70%");
			$("div.remark1").css("left","25%");			
	}
	function save_edit_repeat(x){
	var priority_check = $("input[name=repeat_priority_"+x+"]").val();
		if(priority_check<1 || priority_check>5)
		{alert('[Error] Priority must between 1~5');}
		else
		{
	$.blockUI({ message: '<h1>Loading...</h1>' });
		document.checklist.edit_item_repeat.value = x;
		document.checklist.action.value = "save_edit_repeat";
		document.checklist.submit();
		}
	}	
	
<!--show analysis-->
	function show_analysis(){
	var analysis_selected = $("select#analysis").val();
		if(analysis_selected == 'Regular_Job')
		{
		$("div.analysis").css("display","none");
		$("div#regular").css("display","block");
		}
		else if(analysis_selected == 'Summary')
		{
		$("div.analysis").css("display","none");
		$("div#summary").css("display","block");
		}
		else if(analysis_selected == 'Hit_Rate')
		{
		$("div.analysis").css("display","none");
		$("div#hit").css("display","block");
		}
	}
	
<!--frozen first column-->	
	$(function(){
		$("div#content1").scroll(function(){
			var scrollVal = $(this).scrollTop();
			$("td.titlecolumn1").css({top:scrollVal}).css("border-top","0px"); 
			$("th.titlecolumn1").css({top:scrollVal}).css("border-top","0px");  
		});

		$("div#content2").scroll(function(){
			var scrollVal = $(this).scrollTop();
			$("td.titlecolumn2").css({top:scrollVal}).css("border-top","0px");  
			$("th.titlecolumn2").css({top:scrollVal}).css("border-top","0px"); 
		});

		$("div#content3").scroll(function(){
			var scrollVal = $(this).scrollTop();
			$("td.titlecolumn3").css({top:scrollVal}).css("border-top","0px"); 
			$("th.titlecolumn3").css({top:scrollVal}).css("border-top","0px"); 
		});
	});	

</script> 

