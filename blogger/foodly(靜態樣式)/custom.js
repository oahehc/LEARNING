/*
載入jQuery
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>

載入font-awesome
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />
*/


$(function(){
    //full size image
    var ratio, postWidth = $('.blog-posts').width();
    $('.post-body img').each(function(){
        ratio = $(this).height()/$(this).width();
        $(this).width(postWidth);
        $(this).height(postWidth*ratio);
    })
    
    //lable remove title
    var content;
    $('.post-labels').each(function(){
        content = $(this).html();
        $(this).html(content.replace('label',''));
    })
    
    //將social link更換為font-awesome內容
    $('.sb-email,.sb-blog').remove();
    $('.sb-twitter').html('<i class="fa fa-twitter" aria-hidden="true"></i>');
    $('.sb-facebook').html('<i class="fa fa-facebook" aria-hidden="true"></i>');
    $('.sb-pinterest').html('<i class="fa fa-pinterest-p" aria-hidden="true"></i>');
    $('.google-plus-share-container').html('<i class="fa fa-google-plus" aria-hidden="true"></i>');
})