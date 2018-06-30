/*首頁圖片改正*/
blogger.templates().template(
    "CustomCSS",
    ".item{transform: rotate(0deg) !important; margin:0px 10px 10px 10px !important;}"
);


/*隱藏 Snapshot 選單*/
blogger.templates().template(
    "CustomCSS",
    "#views{display: none;}" + "#pages:before{border: 0px;}"
);


/*導覽列加入分類*/
1. 新增網頁, 使用分類作為網頁名稱
2. 網頁內文中, 使用Javascript重新導向至分類篩選的URL
    <script>
    window.location = "http://testoahehc.blogspot.com/search/label/Music";
    </script>
3. 於小工具中, 將該網頁加入導覽列中


/*點擊影片文章, 開啟後自動撥放*/
1. 於文章中修改 iframe 行內 style 設定, 調整 Youtube 大小, 並加入自訂id
<iframe allowfullscreen="" class="YOUTUBE-iframe-video" frameborder="0" height="400"  width="800 id="yourName" src="https://www.youtube.com/embed/6AaiOwjmUN8?feature=player_embedded""></iframe>
2. 使用Javascript 修改 iframe src, 讓 Youtube 自動撥放
<script>
$(function(){
     $('#yourName').attr('src','https://www.youtube.com/embed/6AaiOwjmUN8?autoplay=1');
})
</script> 