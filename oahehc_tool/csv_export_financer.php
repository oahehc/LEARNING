<?php 
//啟用暫存 for session
ob_start();
session_start();

header("Content-type: text/x-csv");
header("Content-Disposition: attachment; filename=data_export.csv");
$content = mb_convert_encoding($_SESSION["export_data_financer"] ,"Big5" ,"UTF-8");
echo $content;
exit;

?>
