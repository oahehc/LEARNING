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
<link href="css/recorder.css" media="screen" rel="stylesheet" type="text/css">	
<!--meta setting-->
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="keyword" content="時間管理,計時器,目標管理">
	<meta name="description" content="Tool to manage your time">
	<meta name="author" content="Oahehc">	
	<!--icon for website-->
	<link rel="shortcut icon" href="pic/recorder.jpg">
	<!--icon for mobile device-->
	<link rel="apple-touch-icon" href="pic/recorder.jpg">
	<!--set scale for mobile-->
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!--full screen for mobile-->
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="mobile-web-app-capable" content="yes">	
	<title>Recorder</title>
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
				document.recorder.action.value = "logout";	
                localStorage.removeItem("oahehc_account_009"); 
                localStorage.removeItem("oahehc_pw_009"); 
				$.blockUI({ message: '<h1>Loading...</h1>' });
				document.recorder.submit();				
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
		
	/*
		var type_select = $("select#type_select").val();
		var datalist = "datalist#" + type_select + " option";
		$("select#category_select").empty();
		$("select#category_select").append("<option value=''></option>");
		$(datalist).each(function(){
			var add = $(this).attr("value");
			$("select#category_select").append("<option id='"+add+"' value='"+add+"'>"+add+"</option>");
		});
	
		$("select#type_select").change(function(){
			var type_select = $("select#type_select").val();
			var datalist = "datalist#" + type_select + " option";
			$("select#category_select").empty();
			$("select#category_select").append("<option value=''></option>");
			$(datalist).each(function(){
				var add = $(this).attr("value");
				$("select#category_select").append("<option id='"+add+"' value='"+add+"'>"+add+"</option>");
			});
		});	
		
		$("select#type_select").change(function(){
			var category_select = $("select#category_select").val();
			var select = "option#" + category_select;
			$(select).attr("selected","true");
		});	
	*/
	});
	</script>
<body>
<?php
//增加session time為2hr
$sessionLifeTime=7200;
@ini_set('session.gc_maxlifetime',$sessionLifeTime); //000未開放設定ini
session_set_cookie_params($sessionLifeTime);

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

/*local host
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
$_SESSION["last_url"] = "recorder.php";
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
if(empty($_SESSION["visit_recorder"]) && !empty($id))
{
//已寫入瀏覽紀錄, 避免寫入重複資料
$_SESSION["visit_recorder"] = "y";

//取得user真實ip
	if (!empty($_SERVER['HTTP_CLIENT_IP']))
	{$user_ip = $_SERVER['HTTP_CLIENT_IP'];}
	else if (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))
	{$user_ip = $_SERVER['HTTP_X_FORWARDED_FOR'];}
	else
	{$user_ip = $_SERVER['REMOTE_ADDR'];}

//取得進入網頁時間
date_default_timezone_set("Asia/Taipei");
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


//取得所有type並寫成矩陣, for後續選單使用
$type = array();
$q_type = "select distinct type from recorder where id='".$id."' order by type asc";
$result_type = mysql_query($q_type,$link);
@mysql_data_seek($result_type,0);		
	for($k=0;$k<mysql_num_rows($result_type);$k++)
	{
	$data[$k] = mysql_fetch_row($result_type);
	array_push($type,$data[$k][0]);
	
	//create datalist for category
	/*
	echo "<datalist id='".$data[$k][0]."'>";			
		$q_category = "select distinct category from recorder where id='".$id."' and type='".$data[$k][0]."' order by period asc,category asc";
		$result_category = mysql_query($q_category,$link);
		@mysql_data_seek($result_category,0);		
		for($m=0;$m<mysql_num_rows($result_category);$m++)
		{
		$category[$m] = mysql_fetch_row($result_category);			
		echo "<option value='".$category[$m][0]."'>";
		}		
	echo "</datalist>";
	*/
	}

//mapping array for 對應每月天數
$day_number = array(1=>31,2=>28,3=>31,4=>30,5=>31,6=>30,7=>31,8=>31,9=>30,10=>31,11=>30,12=>31);
?>
<form method="POST" name="recorder">
<input type="hidden" name="action">
<?php
//logout
if($_POST["action"] == "logout")
{	
    $_SESSION["login_pw_009"] = "";
    $_SESSION["login_id_009"] = "";	
    $_SESSION["visit_recorder"] = "";
    $_SESSION["last_url"] = "recorder.php";	
    unset($_COOKIE["input_account_009"]);
    unset($_COOKIE["input_pw_009"]);
    setcookie('input_account_009', null, -1, '/');
    setcookie('input_pw_009', null, -1, '/');		
    unset($_COOKIE["input_account_009_localstorage"]);
    unset($_COOKIE["input_pw_009_localstorage"]);
    setcookie("input_account_009_localstorage", null, -1, "/");
    setcookie("input_pw_009_localstorage", null, -1, "/");
    header("location:login.php");
}
?>
<!--header--------------------------------------------------------------------------------->
<div class="head">
	<div class="account">
		<input class="aside_flag" type="button" value="登出" id="logout">
		<input class="aside_flag logout_check" type="button" name="logout_check" value="確定登出?" id="logout_confirm">
		<input class="aside_flag logout_check" type="button" name="cancel" value="取消" id="logout_cancel">
	</div>
	<div class="author">
		<input class="link" type="button" value="Financer" onclick="window.open('financer.php','_blank')">	
		<input class="link" type="button" value="帳號管理" onclick="window.open('account_manager.php','_blank')">
		<input class="link" type="button" value="網站教學" onclick="window.open('recorder_introduction.php','_blank')">
		<input class="link" type="button" value="聯絡作者" onclick="window.open('contact_author_recorder.php','_blank')">		
	</div>	
	<div class="setting">
		<input class="aside_flag" type="button" value="&#10005;" id="hide_head">
	</div>	
</div>
<div class="aside">	
	<input class="aside_id web" type="button" value="<?php echo $id;?>" id="show_head">
	<input class="aside_id mobile" type="button" value="▼" id="show_head">
</div>

<!--Timer--------------------------------------------------------------------------------->
<div class="II" id="II">	
	<?php
	//接收選取的type & category
	$type_select = substr($_POST["type_select"],0,strpos($_POST["type_select"],"__",0));
	$category_select = substr($_POST["type_select"],strpos($_POST["type_select"],"__",0)+2,100);
	
	//將紀錄寫入mysql
		//開始計時
		if($_POST["starting"] == "y")
		{		
		//取得時間
		$time_start = time();
		
		//取得period
		$select_period = "select period from recorder where type='".$type_select."' and category='".$category_select."' and id='".$id."'"; 
		$result_period = mysql_query($select_period,$link);
		$data_period = mysql_fetch_row($result_period);
		
		//寫入開始時間
		$insert_start = "insert into recorder(id,type,category,period,start) 
						 Values('$id','$type_select','$category_select','$data_period[0]','$time_start')";
		mysql_query($insert_start,$link);
		
header("location:recorder.php");
		}
		//結束計時	
		elseif(($_POST["starting"] == "n") || ($_POST["starting"] == "s"))
		{
		//select未停止計時任務
		$select_starting = "select item,start from recorder where start IS NOT NULL and end is NULL and id='".$id."' and type='".$type_select."' and category='".$category_select."'";
		$result_starting = mysql_query($select_starting,$link);
		//取得計時中item數 & 開始時間
		$data_starting = mysql_fetch_row($result_starting);
		
		//取得目前時間
		$time_end = time();
		
			if(@mysql_num_rows($result_starting) != 0)
			{
			//寫入停止時間
			$update_end = "update recorder set end='".$time_end."' where id='".$id."' and item='".$data_starting[0]."'";
			mysql_query($update_end,$link);
			
				//mobile version relocation when stop clocking
				/*
				if($_POST["starting"] == "s")
				{header("location:recorder.php");}
				*/
			}
			//開始時間 > now	
			elseif($data_starting[1] > $time_end)
			{
			$time_start = date('m-d H:i:s',$data_starting[1]);
			$time_now = date('m-d H:i:s',$time_end);
			
			echo "<script>alert('寫入時間異常, 請確認並修正資料\\n 開始時間 : $time_start\\n 目前時間 : $time_now')</script>";
			}
			else
			{echo "<script>alert('此任務尚未開始計時')</script>";}
		}
		//手動新增紀錄	
		elseif($_POST["starting"] == "m")
		{
		//設定預設時間 = now
		$default = date("Y-m-d",time())."T".date("H:i",time());
		if(empty($_POST["start_new_record"])){$start_time_new = $default;}
		else{$start_time_new = $_POST["start_new_record"];}
		if(empty($_POST["end_new_record"])){$end_time_new = $default;}
		else{$end_time_new = $_POST["end_new_record"];}

		//手動新增頁面
		//顯示輸入時間欄位
		echo "<div class='new'>
				<span class=big> 
				類別&nbsp;$type_select<br>
				項目&nbsp;$category_select
				</span>";
		echo "<table class='new'>
				<tr>		
					<td class='short unborder'>開始</td>
					<td class='unpadding left unborder short'><input class='text unpadding' type='datetime-local' name='start_new_record' value='$start_time_new'></td>
					<td class='unborder'></td>
				</tr>
				<tr>
					<td class='short unborder'>結束</td>
					<td class='unpadding left unborder short'><input class='text unpadding' type='datetime-local' name='end_new_record' value='$end_time_new'></td>
					<td class='unborder'></td>
				</tr>
				<tr>
					<td class='unborder unpadding left' colspan=3>
						<input type='button' value='新增紀錄' onclick='save_new_record()'>
						<input type='button' value='結束新增' onclick='finish_new_record()'>					
						<input type='hidden' name='save_new'>					
					</td>
				</tr>
			</table>";	
		echo "</div>";
		
		//存入資料
			if($_POST["save_new"] == "y")
			{
			//接收時間
			$start_setting = min(strtotime($_POST["start_new_record"]),strtotime($_POST["end_new_record"]));
			$end_setting = max(strtotime($_POST["start_new_record"]),strtotime($_POST["end_new_record"]));
			
            //寫入mysql
                //取得period
                $select_period = "select period from recorder where type='".$type_select."' and category='".$category_select."' and id='".$id."'"; 
                $result_period = mysql_query($select_period,$link);
                $data_period = mysql_fetch_row($result_period);

                //寫入開始時間
                $insert_start = "insert into recorder(id,type,category,period,start,end) 
                                 Values('$id','$type_select','$category_select','$data_period[0]','$start_setting','$end_setting')";
                mysql_query($insert_start,$link);


            //新增完畢alert
            echo "<script>
                    alert('資料新增完畢\\n開始時間 ".date("m-d H:i",$start_setting)."\\n結束時間 ".date("m-d H:i",$end_setting)."');
                    location.replace('recorder.php');					
                  </script>";
			}
		}
	?>
	
	<div class="filter">
	<table style="margin:0 5 5 0;">
		<?php
		//確認是否有未停止計時任務
		$select_null = "select type,category,start from recorder where start IS NOT NULL and end is NULL and id='".$id."'";
		$result_null = mysql_query($select_null,$link);
		
			if(@mysql_num_rows($result_null) != 0)
			{
			$data_null = mysql_fetch_row($result_null);
			$stop_button = "yes";
			
			echo "<tr>
					<td class='unborder left unpadding'>
					<select class='big' id='type_select' name='type_select' onchange='autosubmit()'>
					<option value=$data_null[0]__$data_null[1]>$data_null[0] : $data_null[1]
					</td>";
			echo "</tr>";			
			$type_array[0] = $data_null[0]."__".$data_null[1];
			
			/*type and category separate version
			echo "<tr>";
				echo "<td class='unborder right unpadding'><span class='big'>類別&nbsp;</span></td>
					  <td class='unborder left unpadding'>
						<select class='big' id='type_select' name='type_select' onchange='submit()'>";
					echo "<option value=$data_null[0]>$data_null[0]";		

				echo "</td>";
				echo "<td class='unborder right unpadding'><span class='big'>&nbsp;項目&nbsp;</span></td>
					  <td class='unborder left unpadding'>
						<select class='big' id='category_select' name='category_select' onchange='submit()'>";
					echo "<option value=$data_null[1]>$data_null[1]";			
				echo "</td>";
			echo "</tr>";
			*/
			}
			else
			{
			$stop_button = "";
			
			//create array for type and category
			$select_type = "select type, category from `recorder` WHERE id='".$id."' group by category order by type, category desc";
			$result_type = mysql_query($select_type);
			$num_type = mysql_num_rows($result_type);
			$type_array = array();
				for($i=0;$i<$num_type;$i++)
				{
				$data_select_type = mysql_fetch_row($result_type);
				$type_array[$i] = $data_select_type[0]."__".$data_select_type[1];
				}

			echo "<tr>
					  <td class='unborder left unpadding'>
						<select class='big' id='type_select' name='type_select' onchange='autosubmit()'>";
						for($l=0;$l<count($type_array);$l++)
						{
						$new_type_array = str_replace("__"," : ",$type_array[$l]);							
						echo "<option value=$type_array[$l]>$new_type_array";
						}			
				echo "</td>";
			echo "</tr>";
				
			/*type and category separate version
			echo "<tr>";
				echo "<td class='unborder right unpadding'><span class='big'>類別&nbsp;</span></td>
					  <td class='unborder left unpadding'>
						<select class='big' id='type_select' name='type_select' onchange='submit()'>";

						for($l=0;$l<count($type);$l++)
						{echo "<option value=$type[$l]>$type[$l]";}			

				echo "</td>";
				echo "<td class='unborder right unpadding'><span class='big'>&nbsp;項目&nbsp;</span></td>
					  <td class='unborder left unpadding'>
						<select class='big' id='category_select' name='category_select' onchange='submit()'>
						<option value=''>";

						//接收選取的type
						$type_select = $_POST["type_select"];				
						$q_category = "select distinct category from recorder where id='".$id."' and type='".$type_select."' order by period asc,category asc";
						$result_category = mysql_query($q_category,$link);
						@mysql_data_seek($result_category,0);		
						for($m=0;$m<mysql_num_rows($result_category);$m++)
						{
						$category[$m] = mysql_fetch_row($result_category);			
						echo "<option value='".$category[$m][0]."'>".$category[$m][0];
						}
			
				echo "</td>";
			echo "</tr>";
			*/			
			}
		?>
	</table>
	</div>
	<div class="filter"><table style="margin:0 0 5 0;">
	<tr>	
		<td class="unborder unpadding">
			<?php
			if($stop_button == "yes")
			{
			echo "<input class='big web' type='button' value='停止計時' onclick='timer_stop()'>";
			echo "<input class='big mobile' type='button' value='停止計時' onclick='timer_stop_mobile()'>";
			}
			else
			{
			echo "<input class='big' type='button' value='開始計時' onclick='timer_start()'>";
			}
			?>
				
			<input class="big" type="button" value="手動新增" onclick="manual_setting()">
			<input type="hidden" name="starting">
		</td>		
	</tr>
	</table></div>
	<div style="clear:both"></div>
	
	<div class="content" id="content2">
	<?PHP	
	/*進入網頁後先送出表單, 確保type有資料, 能產生對應的category選項; type_array!=null(user已有建立資料)才送出表單
	if(!empty($type) && empty($_POST["type_select"]))
	{echo "<script>document.recorder.submit();</script>";}
	*/
	//開啟/關閉編輯模式
	if($_POST["record_edit"]=="y")
	{$_SESSION["record_edit"] = "y";}
	elseif($_POST["record_edit"]=="n")
	{$_SESSION["record_edit"] = "";}
	
	//for編輯模式中傳遞要編輯/刪除的item數
	echo "<input type='hidden' name='change_record_item'>";
	echo "<input type='hidden' name='delete_record_item'>";

	//刪除紀錄
	if(!empty($_POST["delete_record_item"]))
	{
	//取得要刪除的欄位item數	
	$delete_item = $_POST["delete_record_item"];
	$delete_record = "delete from recorder where item='".$delete_item."' and id='".$id."'";
	mysql_query($delete_record,$link);
	//刪除資料後optimize table
	mysql_query("OPTIMIZE TABLE 'recorder'");
	//刪除後關閉編輯模式
	$_SESSION["record_edit"] = "";	
	//顯示資料已刪除
	echo "<script>alert('資料已刪除');</script>";
	}
	
	//更新紀錄
	if(!empty($_POST["change_record_item"]))
	{
	//取得要修改的欄位item數
	$change_item = $_POST["change_record_item"];
	//接受修改後的表單資料
	$start_date_change = $_POST["start_date_change_$change_item"];
	$start_change = $_POST["start_change_$change_item"];
	$end_date_change = $_POST["end_date_change_$change_item"];	
	$end_change = $_POST["end_change_$change_item"];
	
	//開始結束日期不同, 彈出確認視窗
	if(($start_date_change != $end_date_change) && empty($_POST["change_date_check"]))
	{
	echo "<script>
			if (confirm('開始與結束日期不同, 請確認是否更新資料?'))
			{	
			document.recorder.change_record_item.value=$change_item;	
			document.recorder.change_date_check.value='y';
			$.blockUI({ message: '<h1>Loading...</h1>' });
			document.recorder.submit();
			}
		  </script>";
	}
	
	//將輸入日期/時間轉為時間標籤
	$new_start = mktime(substr($start_change,0,2),substr($start_change,3,2),substr($start_change,6,2),substr($start_date_change,5,2),substr($start_date_change,8,2),substr($start_date_change,0,4));
	if(empty($end_change))
	{$new_end = "";}
	else
	{$new_end =  mktime(substr($end_change,0,2),substr($end_change,3,2),substr($end_change,6,2),substr($end_date_change,5,2),substr($end_date_change,8,2),substr($end_date_change,0,4));}
	
		//排除開始時間>結束時間
		if($new_start>$new_end && !empty($end_change))
		{echo "<script>alert('開始時間晚於結束時間, 請重新輸入');</script>";}
		//排除開始日期時間空白
		elseif(empty($start_date_change) || empty($start_change))
		{echo "<script>alert('開始日期與時間請勿空白');</script>";}
		//結束時間空白, 需設定為NULL, 避免系統設定結束時間為0
		elseif(empty($end_change))
		{
		$update_record = "update recorder set start='".$new_start."', end=NULL where item='".$change_item."' and id='".$id."'";
		mysql_query($update_record,$link);
		//更新後關閉編輯模式
		$_SESSION["record_edit"] = "";
		//顯示資料更新視窗
		echo "<script>alert('資料已更新');</script>";
		}
		else
		{
		//修改目標欄位
		$update_record = "update recorder set start='".$new_start."', end='".$new_end."' where item='".$change_item."' and id='".$id."'";
		mysql_query($update_record,$link);
		//更新後關閉編輯模式
		$_SESSION["record_edit"] = "";
		//顯示資料更新視窗		
		echo "<script>alert('資料已更新');</script>";		
		}
	}

	//編輯模式下不顯示執行時間, 開始/結束日期分開顯示(for user可手動編輯跨日記錄
	if($_SESSION["record_edit"] == "y")
	{
	echo "<table>
			<tr class='gray'>
				<td class='middle titlecolumn2'>開始日期</td>			
				<td class='middle titlecolumn2'>開始時間</td>
				<td class='middle titlecolumn2'>結束日期</td>
				<td class='middle titlecolumn2'>結束時間</td>
				<td class='titlecolumn2 yellow'></td>
			</tr>";
	}
	//正常顯示紀錄
	else
	{
	echo "<table>
			<tr class='gray'>
				<td class='middle titlecolumn2'>日期</td>			
				<td class='middle titlecolumn2'>開始時間</td>
				<td class='middle titlecolumn2'>結束時間</td>
				<td class='middle titlecolumn2'>執行時間<span class='web'>(小時)</span></td>
			</tr>";
	}
	
	//預設顯示最近5筆資料
		//初次進入頁面表單未送出, 直接顯示首筆type資料
		if(empty($type_select))
		{
		$type_select = substr($type_array[0],0,strpos($type_array[0],"__",0));
		$category_select = substr($type_array[0],strpos($type_array[0],"__",0)+2,100);
		}
	
	if(empty($_POST["record_limited"]))
	{
	$select_record = "select item,start,end from recorder where target IS NULL and id='".$id."' and type='".$type_select."' and category='".$category_select."' order by start desc limit 5";
	}
	else
	{
	$select_record = "select item,start,end from recorder where target IS NULL and id='".$id."' and type='".$type_select."' and category='".$category_select."' order by start desc";	
	}
	
	//取得資料
	$result_record = mysql_query($select_record,$link);
	@mysql_data_seek($result_record,0);
	for($i=0;$i<@mysql_num_rows($result_record);$i++)
	{
	$data_record[$i] = mysql_fetch_row($result_record);	
	$item_record = $data_record[$i][0];
	$start_record[$i] = $data_record[$i][1];
	$end_record[$i] = $data_record[$i][2];
	
	//時間換算
	$date[$i] = date('Y-m-d D', $start_record[$i]);
	$start_date[$i] = date('Y-m-d', $start_record[$i]);
	$start_time[$i] = date('H:i:s', $start_record[$i]);
		if(empty($end_record[$i]))
		{
		$end_date[$i] = "";
		$end_time[$i] = "";
		$process_time[$i] = "";
		}
		else
		{
		$end_date[$i] = date('Y-m-d', $end_record[$i]);		
		$end_time[$i] = date('H:i:s', $end_record[$i]);
		//process time統一顯示至小數點第二位		
		$process_time[$i] = number_format((($end_record[$i]-$start_record[$i])/3600),2);
		}
	
		//編輯模式
		if($_SESSION["record_edit"] == "y")
		{
		echo "<tr>
				  <td class='unpadding left'><input class='text' type='date' name='start_date_change_$item_record' value='".$start_date[$i]."'></td>
				  <td class='unpadding left'><input class='text' type='time' name='start_change_$item_record' value='".$start_time[$i]."'></td>
				  <td class='unpadding left'><input class='text' type='date' name='end_date_change_$item_record' value='".$end_date[$i]."'></td>
				  <td class='unpadding left'><input class='text' type='time' name='end_change_$item_record' value='".$end_time[$i]."'></td>
				  <td class='unborder unpadding left'>
					<input type='button' value='更新' onclick='change_record($item_record)'>
					<input type='button' value='刪除' onclick='delete_record($item_record)'>					
					<input type='hidden' name='change_date_check'>					
				  </td>
			  </tr>";
		}
		//正常顯示記錄
		else
		{	
		echo "<tr>
				  <td>$date[$i]</td>
				  <td>$start_time[$i]</td>
				  <td>$end_time[$i]</td>
				  <td>$process_time[$i]</td>
			  </tr>";
		}	  
	}
	echo "</table>";
	
	//顯示/隱藏所有記錄
	if(empty($_POST["record_limited"]))
	{echo "<input type='button' value='顯示所有記錄' onclick='show_record()'>";}
	else
	{echo "<input type='button' value='隱藏紀錄' onclick='hide_record()'>";}
	echo "<input type='hidden' name='record_limited'>";
	
	//顯示編輯按鈕
	if($_SESSION["record_edit"] == "")
	{echo "<input type='button' value='編輯記錄' onclick='start_edit_record()'>";}
	else
	{echo "<input type='button' value='結束編輯' onclick='finish_edit_record()'>";}
	echo "<input type='hidden' name='record_edit'>"	
	?>
	</div>
</div>


<!--Target Setting--------------------------------------------------------------------------------->
<div class="I" id="I">
	<div class="content" id="content1">
	<table>
		<tr class="gray">
			<td class="middle titlecolumn1">類別</td>
			<td class="middle titlecolumn1">項目</td>
			<td class="short titlecolumn1">週期</td>
			<td class="middle titlecolumn1">目標<span class="web">(小時)</span></td>
			<td class="left long web titlecolumn1">備註</td>
		</tr>
		<?php
		//取得type list作為datalist, for編輯/新增資料使用
		echo "<datalist id='type'>";		
		for($j=0;$j<count($type);$j++)
		{echo "<option value=$type[$j]>";}	
		echo "</datalist>";
		
		//將新增資料寫入資料庫(新增/編輯資料寫入放最前面, 確保table刷新時能抓到最新的資料)
		if(!empty($_POST["save_target"]) && $_SESSION["add_target"] == "y")
		{
		$type = $_POST["new_type"];
		$category = $_POST["new_category"];
		$period = $_POST["new_period"];
		$target = $_POST["new_target"];
		$remark = $_POST["new_remark"];
		
		//檢查資料是否已存在
		$q_add_target = "select item from recorder where type='$type' and category='$category' and id='$id'";
		$result_q_add_target = mysql_query($q_add_target,$link);
			//資料已存在, 禁止新增避免計算錯誤
			if(@mysql_num_rows($result_q_add_target) != 0)
			{echo "<script>alert('已存在相同資料, 請使用其他名稱或先刪除原紀錄')</script>";}
			//類別,項目,target空白禁止寫入
			elseif(empty($type) || empty($category) || empty($target))
			{echo "<script>alert('類別、項目、目標欄位請勿空白')</script>";}			
			else
			{
			//取得目前時間
			$now = time();
			//寫入新任務資料
			$i_add_target = "insert into recorder(id,type,category,period,target,start,end,remark) 
							 Value('$id','$type','$category','$period','$target','$now','$now','$remark')";
			mysql_query($i_add_target,$link);
			}
		}
		//刪除target資料
		elseif(!empty($_POST["delete_target_item"]) && $_SESSION["edit_target"] == "y")
		{
		$item = $_POST["delete_target_item"];
		//依item查詢對應 type & category
		$q_delete_item = "select type,category from recorder where item='".$item."' and id='".$id."'";
		$result_delete = mysql_query($q_delete_item,$link);
		$data_delete = mysql_fetch_row($result_delete);
		//移除所有對應紀錄		
		$delete_target = "delete from recorder where type='".$data_delete[0]."' and category='".$data_delete[1]."' and id='".$id."'";
		mysql_query($delete_target,$link);
		
		//關閉edit mode
		$_SESSION["edit_target"] = "";
		
		//顯示刪除視窗
		echo "<script>alert('資料已刪除');</script>";
		
		//刪除資料後optimize table
		mysql_query("OPTIMIZE TABLE 'recorder'");
		}
		//更新欄位內容
		elseif(!empty($_POST["change_target_item"]) && $_SESSION["edit_target"] == "y")
		{
		//取得要修改的欄位item數
		$item = $_POST["change_target_item"];
		//接受修改後的表單資料
		$type = $_POST["type_$item"];
		$category = $_POST["category_$item"];
		$period = $_POST["period_$item"];
		$target = $_POST["target_$item"];
		$remark = $_POST["remark_$item"];

		//取得原type & category
		$select_target = "select type,category from recorder where item='".$item."' and id='".$id."'";
		$result_original = mysql_query($select_target,$link);
		$data_original = mysql_fetch_row($result_original);
		$type_original = $data_original[0];
		$category_original = $data_original[1];
		
		//修改目標欄位
		$update_target = "update recorder set type='".$type."', category='".$category."'
		                  , period='".$period."', target='".$target."', remark='".$remark."'
						  where item='".$item."' and id='".$id."'";
		mysql_query($update_target,$link);
		
		//修改所有對應紀錄
		$update_all_record = "update recorder set type='".$type."', category='".$category."'
                              where type='".$type_original."' and category='".$category_original."' and id='".$id."'";
		mysql_query($update_all_record,$link);

		//關閉edit mode
		$_SESSION["edit_target"] = "";

		//顯示修改視窗
		echo "<script>alert('資料已更新');</script>";		
		}
		
		//載入&關閉 新增/編輯模式
		if(!empty($_POST["add_target"]))
		{$_SESSION["add_target"] = "y";}
		elseif(!empty($_POST["edit_target"]))
		{$_SESSION["edit_target"] = "y";}
		elseif(!empty($_POST["save_target"]) || !empty($_POST["cancel_target"]) || !empty($_POST["change_target_item"]))
		{
		$_SESSION["add_target"] = "";
		$_SESSION["edit_target"] = "";		
		}
		
		//取得資料(需放在編輯/刪除後, 才能抓到最新資料)
		$q_target = "select distinct item,type,category,period,target,remark from recorder where target is NOT NULL and id='".$id."' order by type asc,period asc,category asc";
		$result = mysql_query($q_target,$link);
		@mysql_data_seek($result,0);
		@$target_number = mysql_num_rows($result);	
		
		//顯示設定目標
		//編輯模式
		if($_SESSION["edit_target"] == "y")
		{
		//傳遞要刪除item編號用
		echo "<input type=hidden name='delete_target_item'>";
		//傳遞要變更的item
		echo "<input type=hidden name='change_target_item'>";
		
			for($i=0;$i<$target_number;$i++)
			{
			$data[$i] = mysql_fetch_row($result);			
			$item = $data[$i][0];

			echo "<tr><td><input class='text center' name=type_$item list='type' maxlength=20 value='".$data[$i][1]."'></td>
				  <td><input class='text center' name=category_$item maxlength=20 value='".$data[$i][2]."'></td>
			  	  <td>";
				  
			echo "<select name=period_$item>";
				if(substr($data[$i][3],0,1) == 1)
				{
				echo "<option value='1.日' selected>日
					  <option value='2.週'>週
					  <option value='3.月'>月";
				}
				elseif(substr($data[$i][3],0,1) == 2)
				{
				echo "<option value='1.日'>日
					  <option value='2.週' selected>週
					  <option value='3.月'>月";
				}
				else
				{
				echo "<option value='1.日'>日
					  <option value='2.週'>週
					  <option value='3.月' selected>月";
				}
				
			echo "</td>
				  <td><input class='text center' type=number step=0.1 min=0 max=800 name=target_$item value='".$data[$i][4]."'></td>
				  <td class='left web'><input class=text name=remark_$item value='".$data[$i][5]."'></td>
				  <td class='unborder left unpadding'>
					<input type=button value='更新' onclick=change_target($item)>
					<input type=button value='刪除' onclick=delete_target($item)>
				  </td>
				  </tr>";
			}		
		}
		//正常顯示模式
		else
		{
			for($i=0;$i<$target_number;$i++)
			{
			$data[$i] = mysql_fetch_row($result);
					
			//target統一顯示至小數點第一位
			$target = number_format($data[$i][4],1);

			echo "<tr><td>".$data[$i][1]."</td><td>".$data[$i][2]."</td><td>".substr($data[$i][3],2,3)."</td><td>".$target."</td><td class='left web'>".$data[$i][5]."</td></tr>";
			}
		
		//任務總時數
		$sum_target = "select period,sum(target) from recorder where id='".$id."' and target is NOT NULL group by period";
		$result_sum = mysql_query($sum_target,$link);
		@mysql_data_seek($result_sum,0);
			for($n=0;$n<@mysql_num_rows($result_sum);$n++)
			{
			$data_sum = mysql_fetch_row($result_sum);
				if(substr($data_sum[0],0,1) == 1)
				{$day_sum = $data_sum[1];}
				elseif(substr($data_sum[0],0,1) == 2)
				{$week_sum = $data_sum[1];}
				elseif(substr($data_sum[0],0,1) == 3)
				{$month_sum = $data_sum[1];}
			}
			
			//新增欄位模式中不顯示總計
			if($_SESSION["add_target"] != "y")
			{			
			//計算各區間的任務時數
			$day_average = number_format(($day_sum + $week_sum/7 + $month_sum*12/365),1);
			$week_average = number_format((($day_sum + $week_sum/7 + $month_sum*12/365)*7),1);
			$month_average = number_format((($day_sum + $week_sum/7 + $month_sum*12/365)*365/12),1);
				
			echo "<tr class='lightgray'><td colspan=3>平均每日目標時數</td><td>$day_average</td>
										<td rowspan=3 class='left web'><i>依目前目標設定,<br>計算每日/週/月平均需完成時數</td></tr>
				  <tr class='lightgray'><td colspan=3>平均每週目標時數</td><td>$week_average</td></tr>
				  <tr class='lightgray'><td colspan=3>平均每月目標時數</td><td>$month_average</td></tr>";
			}
		}		
		//新增欄位模式		
		if($_SESSION["add_target"] == "y")
		{
		echo "<tr><td>
			    <input class='text center' name=new_type list='type' maxlength=20 autofocus>
			  </td>
			  <td>
			    <input class='text center' name=new_category maxlength=20>		
		      </td>
			  <td>
			    <select name=new_period>
				<option value='1.日'>日
				<option value='2.週'>週
				<option value='3.月'>月
			  </td>
			  <td>
			    <input class='text center' type=number step=0.1 min=0 max=800 name=new_target>
			  </td>
			  <td class='web'>
			    <input class=text name=new_remark>
			  </td></tr>";  
		}		
		
		//新增欄位模式
		if($_SESSION["add_target"] == "y")
		{
		echo "<tr><td class='left unborder unpadding' colspan=5>
				<input type='submit' name='save_target' value='存檔'>
				<input type='submit' name='cancel_target' value='取消'>
			  </td></tr>";
		}
		//編輯模式
		elseif($_SESSION["edit_target"] == "y")
		{
		echo "<tr><td class='left unborder unpadding' colspan=5>
				<input type='submit' name='save_target' value='結束編輯'>
			  </td></tr>";		
		}
		//正常顯示模式		
		else
		{
		echo "<tr><td class='left unborder unpadding' colspan=5>
				<input type='submit' name='add_target' value='新增目標'>
				<input type='submit' name='edit_target' value='編輯目標'>
			  </td></tr>";
		}
		?>
	</table>
	</div>
</div>

<!--achieve rate--------------------------------------------------------------------------------->
<div class="III" id="III">

	<div class="filter"><table style="margin:0 5 5 0;"><tr>
	<?php
	//圖表種類 TBD:"柱狀圖","明細"
	echo "<td class='unborder left unpadding'>
		  <select class='middle' name='acheive_type_select' onchange='autosubmit()'>";
	
	$acheive_type = array("本期達成率","平均達成率");			
	foreach($acheive_type as $content)
	{echo "<option value=$content>$content";}

	echo "</td></tr></table></div>";
	echo "<div style='clear:both'></div>";
	?>
	
	<div class="content" id="content3">
	<table>
	<?php
	if(($_POST["acheive_type_select"] == "本期達成率") || empty($_POST["acheive_type_select"]))
	{
		//顯示標題
		echo "<tr class='gray'>
				<td class='middle titlecolumn3'>類別</td>
				<td class='middle titlecolumn3'>項目</td>
				<td class='short titlecolumn3'>期間</td>
				<td class='middle titlecolumn3'>目標<span class='web'>(小時)</span></td>
				<td class='middle titlecolumn3'>已完成<span class='web'>(小時)</span></td>
				<td class='middle titlecolumn3'>待完成<span class='web'>(小時)</span></td>
				<td class='left long titlecolumn3'>
					<div onMouseOver='show_remark()' onMouseOut='hide_remark()'>達成率*</div>
				</td>
			  </tr>";

		//註解for達成率
		echo "<div id='remark'>達成率若無法維持在80~120%,<br> 表示目標設定不符合您的實際狀況,<br> 建議調整目標時數</div>";

		//取得目前的月/週/日
		$month = date("M",time());
		$week = "WK".date("W",time());
		$day = date("n/j",time());

		//依照目前日期取得各週期的起始時間
		$day_start = strtotime(date('Y-m-d',time()));
		$week_start = $day_start - ((date("w",time())+6)%7)*86400;
		$month_start = strtotime(date('Y-m',time())."-1");

		//取得資料 (select放入item以便與target div排序一致)
		$q_target = "select distinct item,type,category,period,target from recorder where target is NOT NULL and id='".$id."' order by type asc,period asc,category asc";
		$result_target = mysql_query($q_target,$link);
		@mysql_data_seek($result_target,0);
		@$target_number = mysql_num_rows($result_target);	

		for($i=0;$i<$target_number;$i++)
		{
		$data[$i] = mysql_fetch_row($result_target);
				
			//target統一顯示至小數點第一位
			$target = number_format($data[$i][4],1);
			
			//依照目標週期取得對應時間 & 起始時間
			if(substr($data[$i][3],0,1) == 1)
			{
			$date = $day;
			$time_start = $day_start;
			}
			elseif(substr($data[$i][3],0,1) == 2)
			{
			$date = $week;
			$time_start = $week_start;
			}
			else
			{
			$date = $month;
			$time_start = $month_start;
			}
			
			//抓取目前完成時數
			$select_history = "select sum(end-start) from recorder where end is not NULL and id='".$id."'and type='".$data[$i][1]."'and category='".$data[$i][2]."' and start >'".$time_start."'";
			$result_history = mysql_query($select_history,$link);	
			@mysql_data_seek($result_history,0);
			@$history_number = mysql_num_rows($result_history);	
			if($history_number != 0)
			{
			$data_history = mysql_fetch_row($result_history);
			$achieved[$i] = $data_history[0]/3600;
				
			//計算剩餘時數
			$balance[$i] =  $data[$i][4] - $achieved[$i];	
				if($balance[$i] < 0)
				{$balance[$i] = number_format(0,1);}
				else
				{$balance[$i] =  number_format($balance[$i],1);}
			
			//update achieve hour format
			$achieved[$i] = number_format($achieved[$i],1);
			
			//計算達成率
			$achieved_rate[$i] = round($achieved[$i]*100/$data[$i][4]);
			}
			else
			{
			$achieved_rate[$i] = 0;
			$balance[$i] = number_format($data[$i][4],1);
			}
			
			//依照達成率設定顏色
			if($achieved_rate[$i]<60)
			{$color[$i] = "#FF3232";}
			elseif($achieved_rate[$i]<80)
			{$color[$i] = "#FFFD6A";}
			else
			{$color[$i] = "#00AF39";}
			
			//設定寬度
			$width = min($achieved_rate[$i],100)."%";
			
			//達成率加入%
			$achieved_rate_percentage[$i] = $achieved_rate[$i]."%";
			
		echo "<tr>
			  <td>".$data[$i][1]."</td>
			  <td>".$data[$i][2]."</td>
			  <td>".$date."</td>
			  <td>".$target."</td>
			  <td>".$achieved[$i]."</td>
			  <td>".$balance[$i]."</td>
			  <td class='left unpadding'>
				<div style='width:".$width.";background:".$color[$i].";text-align:left;'>&nbsp;&nbsp;".$achieved_rate_percentage[$i]."</div>
			  </td>
			  </tr>";

	//計算本日已完成時數(扣除超出目標部分) for 加總欄計算待完成時數(暫不導入)
	/*
	$select_history_today = "select sum(end-start) from recorder where end is not NULL and id='".$id."'and type='".$data[$i][1]."'and category='".$data[$i][2]."' and start >'".$day_start."'";
	$result_history_today = mysql_query($select_history_today,$link);	
	@mysql_data_seek($result_history_today,0);
	@$history_today_number = mysql_num_rows($result_history_today);	

	if($history_today_number != 0)
	{
	$data_history_today = mysql_fetch_row($result_history_today);
	//扣除超出目標部分
	$achieved_today[$i] = max(($data_history_today[0]/3600 - ($target*max($achieved_rate[$i]/100-1,0))),0);
	}
	else
	{$achieved_today[$i] = 0;}
	$achieved_today_sum = $achieved_today_sum + $achieved_today[$i];
	*/
		}
	//計算未完成平均時數(暫不導入)
	/*
		//取得剩餘天數
		if(date('w', time()) == 0)
		{$day_remind_wk = 1;}
		else
		{$day_remind_wk = 8 - date('w', time());}	
		$day_remind_month = $day_number[date('n',time())] - date('d', time()) + 1;
		
		//取得已完成時數
		$select_finish_week = "select sum(end-start)/3600 from recorder where id='".$id."' and period='2.週' and start >'".$week_start."' and start <'".$day_start."'";
		$result_finish_week = mysql_query($select_finish_week,$link);	
		$data_finish_week = mysql_fetch_row($result_finish_week);
		
		$select_finish_month = "select sum(end-start)/3600 from recorder where id='".$id."' and period='3.月' and start >'".$month_start."' and start <'".$day_start."'";
		$result_finish_month = mysql_query($select_finish_month,$link);	
		$data_finish_month = mysql_fetch_row($result_finish_month);	
		
		//計算剩餘時數
			//本日剩餘總時數 = 本日目標 + max(0,(本週目標-本週已完成))/本週剩餘天數(含當天) + max(0,本月目標-本月已完成)/本月剩餘天數(含當天)
			//本週剩餘總時數 = 本日待完成總時數*本週剩餘天數
			//本月剩餘總時數 = 本日目標*本月剩餘天數(含當天) + max(0,(本週目標-本週已完成)) + 本週目標/7*(本月剩餘天數(含當天)-本週剩餘天數(含當天)) + max(0,本月目標-本月已完成)
		$day_remind = number_format(($day_sum + max(0,($week_sum-$data_finish_week[0]))/$day_remind_wk + max(0,($month_sum-$data_finish_month[0]))/$day_remind_month),1);
		$week_remind = number_format(($day_remind*$day_remind_wk),1);
		$month_remind = number_format(($day_sum*$day_remind_month + max(0,($week_sum-$data_finish_week[0])) + $week_sum/7*($day_remind_month - $day_remind_wk) + max(0,($month_sum-$data_finish_month[0]))),1);

		//計算待完成時數(扣除超出目標部分)
		$day_remind_today = number_format($day_remind-$achieved_today_sum,1);
		$week_remind_today = number_format($week_remind-$achieved_today_sum,1);
		$month_remind_today = number_format($month_remind-$achieved_today_sum,1);

		echo "<tr class='lightgray'><td colspan=3>本日目標時數</td><td>$day_remind</td><td>$day_remind_today</td>
									<td rowspan=3 class='left'><span class='web'><i>依目前達成率,<br>計算本日/週/月剩餘時數</span></td></tr>
			  <tr class='lightgray'><td colspan=3>本週目標時數</td><td>$week_remind</td><td>$week_remind_today</td></tr>
			  <tr class='lightgray'><td colspan=3>本月目標時數</td><td>$month_remind</td><td>$month_remind_today</td></tr>";
	*/
	}
	elseif($_POST["acheive_type_select"] == "平均達成率")
	{
		//顯示標題
		echo "<tr class='gray'>
				<td class='middle'>類別</td>
				<td class='middle'>項目</td>
				<td class='short'>建立時間</td>
				<td class='middle'>目標</td>
				<td class='middle'>平均完成時數</td>
				<td class='left long'><div onMouseOver='show_remark()' onMouseOut='hide_remark()'>平均達成率*<div></td>
				<td class='left long'>總時數</td>
			  </tr>";

		//註解for達成率
		echo "<div id='remark'>達成率若無法維持在80~120%,<br> 表示目標設定不符合您的實際狀況,<br> 建議調整目標時數, 才能提高管理效果</div>";
			  
			  
		//取得所有任務建立時間 (select放入item以便與target div排序一致)
		$select_task_start = "select distinct item,type,category,period,target,start from recorder where target is NOT NULL and id='".$id."' order by type asc,period asc,category asc";
		$result_task_start = mysql_query($select_task_start,$link);	
		@mysql_data_seek($result_task_start,0);
		@$number_task_start = mysql_num_rows($result_task_start);	

		for($i=0;$i<$number_task_start;$i++)
		{
		$data_task_start[$i] = mysql_fetch_row($result_task_start);
		
		//目標顯示內容包含週期資料 = 目標時數/週期
		$target_average[$i] = number_format($data_task_start[$i][4],1)." (".substr($data_task_start[$i][3],2,3).")";
		
		//計算週期數
			//日 : (now-start)/3600/24
			//週 : (now-start)/3600/24/7
			//月 : (now-start)/3600/24/30.417 (365/12)
			if(substr($data_task_start[$i][3],0,1) == "1")
			{$period_number[$i] = (time()-$data_task_start[$i][5])/3600/24;}
			elseif(substr($data_task_start[$i][3],0,1) == "2")
			{$period_number[$i] = (time()-$data_task_start[$i][5])/3600/24/7;}
			else
			{$period_number[$i] = (time()-$data_task_start[$i][5])/3600/24/30.417;}
		
		//取得總完成時數(排除任務建立前的紀錄-user手動新增)
			$select_task_sum = "select sum(end-start)/3600 from recorder where end is NOT NULL and start>='".$data_task_start[$i][5]."' and id='".$id."' and type='".$data_task_start[$i][1]."' and category='".$data_task_start[$i][2]."'";
			$result_task_sum = mysql_query($select_task_sum,$link);	
			@mysql_data_seek($result_task_sum,0);
			$data_task_sum[$i] = mysql_fetch_row($result_task_sum);
		
		//計算平均完成時數
			$average_achieve[$i] = $data_task_sum[$i][0]/$period_number[$i];
		
		//計算平均達成率
			$achieve_average[$i] = $data_task_sum[$i][0]/$data_task_start[$i][4]/$period_number[$i]*100;
		
			//依照達成率設定顏色
			if($achieve_average[$i]<60)
			{$color_average[$i] = "#FF3232";}
			elseif($achieve_average[$i]<80)
			{$color_average[$i] = "#FFFD6A";}
			else
			{$color_average[$i] = "#00AF39";}
			
			//設定寬度
			$width_average = min($achieve_average[$i],100)."%";
			
			//達成率加入%
			$achieved_average_percentage[$i] = number_format($achieve_average[$i],2)."%";
		
			//total hours
			$select_total_time = "select sum(end-start) from recorder where end is not NULL and start is not NULL and id='".$id."'and type='".$data[$i][1]."'and category='".$data[$i][2]."'";
			$result_total_time = mysql_query($select_total_time);
			$data_total_time = mysql_fetch_row($result_total_time);
			$total_hour = number_format($data_total_time[0]/60/60,0,".",",");
		
		//顯示資料
		echo "<tr>
				<td class='middle'>".$data_task_start[$i][1]."</td>
				<td class='middle'>".$data_task_start[$i][2]."</td>
				<td class='short'>".date("y/m/d",$data_task_start[$i][5])."</td>
				<td class='middle'>$target_average[$i]</td>
				<td class='middle'>".number_format($average_achieve[$i],2)."</td>
				<td class='left unpadding'><div style='width:".$width_average.";background:".$color_average[$i].";text-align:left;'>&nbsp;&nbsp;".$achieved_average_percentage[$i]."</div></td>
				<td class='middle'>".$total_hour."</td>
			  </tr>";
		}		  
	}
	?>
		</table>		
	</div>
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
		  <select class='middle' name='chart_select' onchange='autosubmit()'>";
	
	$chart = array("時數統計","時數分布","明細");			
	foreach($chart as $content)
	{echo "<option value=$content>$content";}

	echo "</td></tr></table></div>";
	
	//接收選取的chart
	if(empty($_POST["chart_select"]))
	{$chart_select = $chart[0];}
	else
	{$chart_select = $_POST["chart_select"];}
	
	
	//依照chart類別顯示對應選單
	if($chart_select == "時數統計")
	{
	echo "<div class='filter'><table style='margin:0 5 5 0;'><tr>";
	//類別
		echo "<td class='unborder right unpadding'><span class='middle'>類別&nbsp;</span></td>
			  <td class='unborder left unpadding'>
			  <select class='middle' name='type_select_chart' onchange='autosubmit()'>
			  <option value='%'>全選";			  
			for($l=0;$l<count($type);$l++)
			{echo "<option value=$type[$l]>$type[$l]";}
		
		echo "</select></td>";

		
	//項目
		echo "<td class='unborder right unpadding'><span class='middle'>&nbsp;項目&nbsp;</span></td>
			  <td class='unborder left unpadding'>
			  <select class='middle' name='category_select_chart' onchange='autosubmit()'>
			  <option value='%'>全選";
		//接收選取的type
		if(empty($_POST["type_select_chart"]))
		{$type_select_chart = "%";}
		else
		{$type_select_chart = $_POST["type_select_chart"];}
		
		$select_category = "select distinct category from recorder where id='".$id."' and type like '".$type_select_chart."' order by period asc,category asc";
		$result_category_chart = mysql_query($select_category,$link);
		@mysql_data_seek($result_category_chart,0);		
			for($m=0;$m<mysql_num_rows($result_category_chart);$m++)
			{
			$category_chart[$m] = mysql_fetch_row($result_category_chart);			
			echo "<option value='".$category_chart[$m][0]."'>".$category_chart[$m][0];
			}
		echo "</select></td>";
		
		
	//期間
		echo "<td class='unborder right unpadding'><span class='middle'>&nbsp;週期&nbsp;</span></td>
			  <td class='unborder left unpadding'>
			  <select class='middle' name='period_select_chart' onchange='submit()'>";
		echo "<option value='1'>日";
		echo "<option value='2'>週";
		echo "<option value='3'>月";	
		echo "</select></td></tr>";
		
	echo "</table></div>";
	}	
	elseif($chart_select == "時數分布")
	{
	echo "<div class='filter'><table style='margin:0 5 5 0;'><tr>";	
	//期間
	echo "<td class='unborder right unpadding'><span class='middle'>期間&nbsp;</span></td>
		  <td class='unborder left unpadding'>
		  <select class='middle' name='period_select_chart' onchange='autosubmit()'>
		  <option value=''>";
			  
		//取得前12個月月份作為選項		  
		$month_array[11] = date('Y-m',time());
		for($i=10;$i>=0;$i--)
		{$month_array[$i] = date('Y-m',strtotime($month_array[$i+1]."-01")-1);}
		foreach($month_array as $content)
		{echo "<option value=$content>$content";}	
		
	echo "</select></td></tr></table></div>";
	
	//保留選項, 避免loading div無法消失
	echo "<select class='hidden' name='type_select_chart'>
			  <option value=''>
			  <option value='%'>全選";			  
			for($l=0;$l<count($type);$l++)
			{echo "<option value=$type[$l]>$type[$l]";}
	echo "</select>";
	echo "<select class='hidden' name='category_select_chart'>
			  <option value=''>
			  <option value='%'>全選";
		//接收選取的type
		$type_select_chart = $_POST["type_select_chart"];
		$select_category = "select distinct category from recorder where id='".$id."' and type like '".$type_select_chart."' order by period asc,category asc";
		$result_category_chart = mysql_query($select_category,$link);
		@mysql_data_seek($result_category_chart,0);		
			for($m=0;$m<mysql_num_rows($result_category_chart);$m++)
			{
			$category_chart[$m] = mysql_fetch_row($result_category_chart);			
			echo "<option value='".$category_chart[$m][0]."'>".$category_chart[$m][0];
			}
	echo "</select>";
	}
	elseif($chart_select == "明細")
	{
	echo "<div class='filter'><table style='margin:0 5 5 0;'><tr>";
	//類別
		echo "<td class='unborder right unpadding'><span class='middle'>類別&nbsp;</span></td>
			  <td class='unborder left unpadding'>
			  <select class='middle' name='type_select_chart' onchange='autosubmit()'>
			  <option value=''>
			  <option value='%'>全選";			  
			for($l=0;$l<count($type);$l++)
			{echo "<option value=$type[$l]>$type[$l]";}
	
		echo "</select></td>";

		
	//項目
		echo "<td class='unborder right unpadding'><span class='middle'>&nbsp;項目&nbsp;</span></td>
			  <td class='unborder left unpadding'>
			  <select class='middle' name='category_select_chart' onchange='autosubmit()'>
			  <option value=''>
			  <option value='%'>全選";
		//接收選取的type
		$type_select_chart = $_POST["type_select_chart"];
		$select_category = "select distinct category from recorder where id='".$id."' and type like '".$type_select_chart."' order by period asc,category asc";
		$result_category_chart = mysql_query($select_category,$link);
		@mysql_data_seek($result_category_chart,0);		
			for($m=0;$m<mysql_num_rows($result_category_chart);$m++)
			{
			$category_chart[$m] = mysql_fetch_row($result_category_chart);			
			echo "<option value='".$category_chart[$m][0]."'>".$category_chart[$m][0];
			}
		echo "</select></td>";
		
		
	//期間
		echo "<td class='unborder right unpadding'><span class='middle'>&nbsp;期間&nbsp;</span></td>
			  <td class='unborder left unpadding'>
			  <select class='middle' name='period_select_chart' onchange='autosubmit()'>
			  <option value=''>";
			  
		//取得前12個月月份作為選項		  
		$month_array[11] = date('Y-m',time());
		for($i=10;$i>=0;$i--)
		{$month_array[$i] = date('Y-m',strtotime($month_array[$i+1]."-01")-1);}
		
//調整週期選項順序 asort($month_array);
		
		foreach($month_array as $content)
		{echo "<option value=$content>$content";}	
		echo "</select></td></tr>";
		
	echo "</table></div>";
	}		
	?>
	
	<?php
	//接收選單 (chart/type先前已接收, 不重複設定)
	if(empty($_POST["category_select_chart"]))
	{$category_select_chart = "%";}
	else
	{$category_select_chart = $_POST["category_select_chart"];}
	if(empty($_POST["period_select_chart"]))
	{$period_select_chart = "1";}
	else
	{$period_select_chart = $_POST["period_select_chart"];}
	
	if($chart_select == "時數統計" && !empty($type_select_chart) && !empty($category_select_chart) && !empty($period_select_chart))
	{
	echo "<div class='content' id='content4'>";
	//顯示期數固定為12
	$period_number = 12;
	
	//取得週期區間
		//週期=日
		if($period_select_chart == "1")
		{
		$chart_title = "每日".$chart_select;
		$period_gap = 60*60*24;
		$period_start = strtotime(date('Y-m-d',time())) + $period_gap;
			
			//取得對應weekday for 2nd X座標
			for($i=0; $i<12; $i++)
			{$sec_x = "|".date('D',time()-60*60*24*$i).$sec_x;}
			$sec_x = "|3:".$sec_x;
			
			//設定完整x軸座標
			for($i=0; $i<12; $i++)
			{$x_total = "|".date('d',time()-60*60*24*$i).$x_total;}
		}
		//週期=週	
		elseif($period_select_chart == "2")
		{
		$chart_title = "每週".$chart_select;		
		$period_gap = 60*60*24*7;	
		$period_start = strtotime(date('Y-m-d',time())) - ((date("w",time())+6)%7)*86400 + $period_gap;	

			//取得月份 for 2nd X座標
				//本周剩餘天數
				$remind_weekday = 8-date('N',time());
				if($remind_weekday == 8){$remind_weekday = 1;}
				//取得起始日(12週前的週一)
				$month_start_chart = (time()-($period_number*$period_gap)+($remind_weekday*60*60*24));	
				
				$sec_x = "|3:";
				$month_week_chart[0] = "";
				//寫入週別的對應月份, 且只顯示在該月份第一週, 避免資料過雜亂(以週一的月份為基準)
				for($j=1;$j<=12;$j++)
				{
				$month_week_chart[$j] = date("M",($month_start_chart+$period_gap*($j-1)));
					if($month_week_chart[$j] != $month_week_chart[$j-1])
					{$sec_x = $sec_x."|".$month_week_chart[$j];}
					else
					{$sec_x = $sec_x."|";}
				}
			
			
			//取得起始/結束週別
			$x_end = date('W',time());		
			$x_start = $x_end-11;
			if($x_start<1)
			{
			$x_start = $x_start + 52;
				for($i=$x_start; $i<=52; $i++)
				{$x_total = $x_total."|".$i;}
				for($j=1; $j<=$x_end; $j++)
				{$x_total = $x_total."|".$j;}			
			}
			else
			{
				for($j=$x_start; $j<=$x_end; $j++)
				{$x_total = $x_total."|".$j;}
			}
		}
		//週期=月(每月天數不一, 需特別計算) 
		elseif($period_select_chart == "3")
		{		
		$chart_title = "每月".$chart_select;			
		$month_now = date('n',time());
		//只顯示今年部分
		$period_number = $month_now;			
		$period_start = strtotime(date('Y-m',time())."-1") + $day_number[$month_now]*60*60*24;
		$period_gap = "";
		
		//取得起始/結束月份
		$x_end = $month_now;
			for($j=1; $j<=$x_end; $j++)
			{
			$month_coordinate = "2014-".$j;
			$x_total = $x_total."|".date("M",strtotime(date($month_coordinate,time())));;
			}		
		
			//取得起始/結束月份 for 2nd X座標
			$sec_x = "|3:||||||||||||";
		}
			
		//依照區間計算時數
		for($i=$period_number; $i>=1; $i--)
		{
		$period_end = $period_start;
			//週期 = 月, 因每月天數不一, 需特別計算
			if(empty($period_gap))
			{$period_start = $period_start - $day_number[$i]*60*60*24;}				
			else
			{$period_start = $period_start - $period_gap;}
		$select_period_sum = "select sum(end-start)/3600 from recorder where id='".$id."' and type like '".$type_select_chart."' and category like '".$category_select_chart."' and end is not NULL and start<'".$period_end."' and start>='".$period_start."'";
		$result_period_sum = mysql_query($select_period_sum,$link);
		$data_period_sum = mysql_fetch_row($result_period_sum);
			if(empty($data_period_sum[0]))
			{$array_period_sum[$i] = 0;}
			else
			{$array_period_sum[$i] = number_format($data_period_sum[0],2);}
		}

		//取得任務週期 & 目標設定
		if(($type_select_chart != "%") && ($category_select_chart != "%"))
		{
		$select_period_target = "select period,target from recorder where id='".$id."' and type like '".$type_select_chart."' and category like '".$category_select_chart."' and target is NOT NULL";
		$result_period_target = mysql_query($select_period_target,$link);
		$data_period_target = mysql_fetch_row($result_period_target);
		$period_check = substr($data_period_target[0],0,1);
		$target_check = $data_period_target[1];
		
			//週期 == 目標週期 => 右座標軸改為達成率
			if($period_check == $period_select_chart)
			{$sec_y = ceil(max($array_period_sum))/$target_check*100;}
			else
			{$sec_y = ceil(max($array_period_sum));}
		}
		else
		{$sec_y = ceil(max($array_period_sum));}
		
		//依照時數繪製長條圖
		for($j=1; $j<=$period_number; $j++)
		{
		//將資料依照比例縮放(調整為0~100)
		@$array_period_sum_adjust[$j] = $array_period_sum[$j]/ceil(max($array_period_sum))*100;
		$chart_data = $chart_data.$array_period_sum_adjust[$j].",";
		}
			//移除最後一個逗號
			$num = strlen($chart_data)-1;
			$chart_data = str_split($chart_data,$num);

		//設定google chart
			//cht=bvg : 長條圖
			//chs=400x200 : 圖型大小
			//chf=bg,s,FFFFFF00 : 背景顏色 (顏色尾碼+00 = 透明)
			//chtt=時數統計 : 標題
			//chd=t : 資料
			//chxt=x,y : 顯示xy軸
		$chart_link = "http://chart.apis.google.com/chart?cht=bvg&chs=450x200&chf=bg,s,FFFFFF00&chco=A94FE0&chtt=".$chart_title."&chd=t:".$chart_data[0]."&chxt=x,y,r,x";

			//chxl=0 : 設定x軸座標
			//chxr=1,0,10 : 設定y軸範圍為0~10
		@$chart_link = $chart_link."&chxl=0:".$x_total.$sec_x."&chxr=1,0,".ceil(max($array_period_sum))."|2,0,".$sec_y;
		
		//完全無時數則不顯示圖表(避免更換選項時跳出空白表格)
		if(max($array_period_sum) != 0)
		{echo "<img class='chart' src=$chart_link>";}
//echo ceil(max($array_period_sum));
//echo "<BR>";
//echo $sec_y;
//echo "<BR>";
//echo $target_check;
//echo "<br>".$chart_link;

/*		//顯示各任務對應顏色 for 多任務加總圖表
		echo "<table class='small'>";
			  
		$q_target = "select distinct type,category from recorder where target is NOT NULL and id='".$id."' order by type asc,period asc";
		$result = mysql_query($q_target,$link);
		@mysql_data_seek($result,0);
		@$target_number = mysql_num_rows($result);	

		for($i=0;$i<$target_number;$i++)
		{
		$data[$i] = mysql_fetch_row($result);
		echo "<tr style='border:1px groove;'>
		      <td class='left unpadding unborder'>".$data[$i][0]."</td>
			  <td class='left unborder' style='padding:0 5'>".$data[$i][1]."</td>
		      <td class='unpadding unborder'><div style='width:100%;background:".$color_array[$i].";'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></td></tr>";
		}
		echo "</table>";
*/		
	}
	elseif($chart_select == "時數分布" && !empty($period_select_chart))
	{
	echo "<div class='content' id='content4'>";	
		//取得開始/結束時間
		$time_start_pie = strtotime($period_select_chart."-01");
		$time_end_pie = strtotime(date('Y-m',$time_start_pie+60*60*24*40)."-01");

		//取得所有任務 & 時數 (寫為array, 用任務作指標)
		$select_task_pie = "select type,category,sum(end-start)/3600 from recorder where id='".$id."' and start>'".$time_start_pie."' and start<'".$time_end_pie."' group by type, category order by sum(end-start) desc";
		$result_task_pie = mysql_query($select_task_pie,$link);
		@mysql_data_seek($result_task_pie,0);
		@$number_task_pie = mysql_num_rows($result_task_pie);
		
		if($number_task_pie != 0)
		{
			for($i=0; $i<$number_task_pie; $i++)
			{
			$data_task_pie[$i] = mysql_fetch_row($result_task_pie);
			    //排除時數為0的部分
				if($data_task_pie[$i][2] != 0)
				{
				$array_task_pie[$data_task_pie[$i][0]."_".$data_task_pie[$i][1]] = $data_task_pie[$i][2];		
				}
			}
			arsort($array_task_pie);

			//設定資料 & 顏色 & 名稱
			$j=0;
			foreach($array_task_pie as $task => $number)
			{
			$color_string = $color_string.$color_array[$j].",";
			$data_string = $data_string.$number.",";
			$name_string = $name_string.$task."(".number_format($number,1)."hr)|";
			$j++;
			}
			//移除string最後一碼
			$color_string = substr($color_string,0,strlen($color_string)-1);
			$data_string = substr($data_string,0,strlen($data_string)-1);
			$name_string = substr($name_string,0,strlen($name_string)-1);
			
			//設定google chart
			$pie_link = "http://chart.apis.google.com/chart?cht=p3&chs=600x200&chf=bg,s,FFFFFF00&chco=".$color_string."&chd=t:".$data_string."&chl=".$name_string;
			echo "<img class='chart' src=$pie_link>";
		}
		else
		{echo "<div style='clear:both'></div><div class='result'>此月份無紀錄</div>";}
	}
	elseif($chart_select == "明細" && !empty($type_select_chart) && !empty($category_select_chart) && !empty($period_select_chart))
	{
		//取得週期
		$period_start = strtotime($period_select_chart."-01");
		$period_end = strtotime(date('Y-m', ($period_start + 3600*24*40))."-01");
		
		//顯示匯出button
		echo "<input type='button' value='匯出資料' onclick=\"window.open('csv_export.php','_blank')\">";

	echo "<div class='content' id='content4'>";		
		//顯示標題
		echo "<table style='width:100%'>
			  <tr class='gray'>
			  <td class='titlecolumn4'>類別</td>
			  <td class='titlecolumn4'>項目</td>
			  <td class='titlecolumn4'>日期</td>
			  <td class='titlecolumn4'>星期</td>
			  <td class='titlecolumn4'>開始時間</td>
			  <td class='titlecolumn4'>執行時間</td>
			  </tr>";

		//將明細寫入session for export
		$_SESSION["export_data"] = "類別,項目,日期,星期,開始時間,執行時間\n";

		
		//取得明細資料
		$select_chart_list = "select type, category, start, (end-start)/3600 from recorder where id='".$id."' and type like '".$type_select_chart."' and category like '".$category_select_chart."' and target is NULL and end is not NULL and start<'".$period_end."' and start>='".$period_start."' order by item asc";
		$result_chart_list = mysql_query($select_chart_list,$link);		
		@mysql_data_seek($result_chart_list,0);
		@$number_chart_list = mysql_num_rows($result_chart_list);

		for($i=0; $i<$number_chart_list; $i++)
		{
		$data_chart_list[$i] = mysql_fetch_row($result_chart_list);	
		
		echo "<tr>
			  <td>".$data_chart_list[$i][0]."</td>
			  <td>".$data_chart_list[$i][1]."</td>
			  <td>".date('m/d', $data_chart_list[$i][2])."</td>
			  <td>".date('l', $data_chart_list[$i][2])."</td>
			  <td>".date('H:i', $data_chart_list[$i][2])."</td>
			  <td>".number_format($data_chart_list[$i][3],2)."</td>
			  </tr>";
			  
		//將明細寫入session for export
		$_SESSION["export_data"] = $_SESSION["export_data"].$data_chart_list[$i][0].",".$data_chart_list[$i][1].",".date('m/d', $data_chart_list[$i][2]).
								  ",".date('l', $data_chart_list[$i][2]).",".date('H:i', $data_chart_list[$i][2]).",".number_format($data_chart_list[$i][3],2)."\n";		
			  
			  
		}
		echo "</table>";
	}
	?>
	</div>
</div>
</form>


<?php
//登入時檢查是否有未停止計時任務 & 是否已設定定任務
if(empty($_SESSION["unstop_check"]))
{
$select_null = "select type,category from recorder where start IS NOT NULL and end is NULL and id='".$id."'";
$result_null = mysql_query($select_null,$link);

	if(@mysql_num_rows($result_null) != 0)
	{
	$data_null = mysql_fetch_row($result_null);
	echo "<script>
		  alert('提醒:先前任務尚未停止計時\\n類別 : $data_null[0]\\n項目 : $data_null[1]')
		  </script>";
	}
	
	if(empty($type))
	{
	echo "<script>
		  alert('提醒:\\n尚未設定任何目標\\n請先點擊\"新增目標\"建立資料');
		  </script>";
	}	
$_SESSION["unstop_check"] = "y";
}

?>
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
	var type_selected = "<?=$_POST['type_select']?>";
	if(type_selected != "")
	{recorder.type_select.value = type_selected;}
	
	var category_selected = "<?=$_POST['category_select']?>"; 
	if(category_selected != "")
	{recorder.category_select.value = category_selected;}

	var acheive_type_select = "<?=$_POST['acheive_type_select']?>"; 
	if(acheive_type_select != "")
	{recorder.acheive_type_select.value = acheive_type_select;}
	
	var chart_selected = "<?=$_POST['chart_select']?>"; 
	if(chart_selected != "")
	{recorder.chart_select.value = chart_selected;}
	
	var period_selected_chart = "<?=$_POST['period_select_chart']?>"; 
	if(period_selected_chart != "")
	{recorder.period_select_chart.value = period_selected_chart;}
	
	var type_selected_chart = "<?=$_POST['type_select_chart']?>"; 
	if(type_selected_chart != "")
	{recorder.type_select_chart.value = type_selected_chart;}
	
	var category_selected_chart = "<?=$_POST['category_select_chart']?>"; 
	if(category_selected_chart != "")
	{recorder.category_select_chart.value = category_selected_chart;}

	
<!--開始計時-->
	function timer_start(){
		if(document.recorder.type_select.value == "")
		{alert("請選擇類別");}
		else
		{
		document.recorder.starting.value = "y";		
		$.blockUI({ message: '<h1>Loading...</h1>' });
		document.recorder.submit();
		}
	}
<!--結束計時-->
	function timer_stop(){
		if(document.recorder.type_select.value == "")
		{alert("請選擇類別");}
		else
		{
		document.recorder.starting.value = "n";		
		$.blockUI({ message: '<h1>Loading...</h1>' });
		document.recorder.submit();
		}
	}
	function timer_stop_mobile(){
		if(document.recorder.type_select.value == "")
		{alert("請選擇類別");}
		else
		{
		document.recorder.starting.value = "s";		
		$.blockUI({ message: '<h1>Loading...</h1>' });
		document.recorder.submit();
		}
	}	
	
	
<!--手動新增-->
	function manual_setting(){
		if(document.recorder.type_select.value == "")
		{alert("請選擇類別");}
		else
		{
		document.recorder.starting.value = "m";
		$.blockUI({ message: '<h1>Loading...</h1>' });
		document.recorder.submit();
		}
	}
	
<!--手動新增:存檔-->
	function save_new_record(){
		if(document.recorder.start_new_record.value == "")
		{alert("請輸入開始時間");}
		else if(document.recorder.end_new_record.value == "")
		{alert("請輸入結束時間");}
		else
		{
		document.recorder.starting.value = "m";
		document.recorder.save_new.value = "y";
		$.blockUI({ message: '<h1>Loading...</h1>' });
		document.recorder.submit();
		}
	}
	
<!--手動新增:結束-->
	function finish_new_record(){
		location.replace('recorder.php');
	}
	
<!--顯示/隱藏歷史紀錄-->
	function show_record(){
		document.recorder.record_limited.value = "y";	
		$.blockUI({ message: '<h1>Loading...</h1>' });	
		document.recorder.submit();	
	}
	function hide_record(){
		document.recorder.record_limited.value = "";	
		$.blockUI({ message: '<h1>Loading...</h1>' });	
		document.recorder.submit();	
	}
	
<!--傳遞刪除的record_item-->
    function delete_record(item){
        if (confirm("確認刪除此筆紀錄?"))
        {
		document.recorder.delete_record_item.value=item;
		$.blockUI({ message: '<h1>Loading...</h1>' });
		document.recorder.submit();
        }
    }
<!--傳遞更新的record_item-->	
    function change_record(item){
		document.recorder.change_record_item.value=item;
		$.blockUI({ message: '<h1>Loading...</h1>' });
		document.recorder.submit();
    }	
	
	
<!--開啟編輯record模式-->
    function start_edit_record(){
        document.recorder.record_edit.value="y";
		document.recorder.change_record_item.value="";	
		document.recorder.delete_record_item.value="";	
		$.blockUI({ message: '<h1>Loading...</h1>' });
		document.recorder.submit();
    }
<!--關閉編輯record模式-->
    function finish_edit_record(){
        document.recorder.record_edit.value="n";
		$.blockUI({ message: '<h1>Loading...</h1>' });
		document.recorder.submit();
    }
	
<!--傳遞刪除的target_item-->
    function delete_target(item){
        if (confirm("刪除資料將同步移除所有對應紀錄,\n請確認是否執行?"))
        {
        document.recorder.delete_target_item.value=item;
		$.blockUI({ message: '<h1>Loading...</h1>' });
		document.recorder.submit();
        }
    }
<!--傳遞更新的target_item-->	
    function change_target(item){
        document.recorder.change_target_item.value=item;
		$.blockUI({ message: '<h1>Loading...</h1>' });
		document.recorder.submit();
    }	

<!--顯示 & 隱藏註解-->	
	function show_remark(){
		document.getElementById('remark').style.display = 'block';
	}
	function hide_remark(){
		document.getElementById('remark').style.display = 'none';
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
		document.recorder.submit();	
	}	
</script> 

