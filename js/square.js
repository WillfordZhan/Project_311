jQuery(document).ready(function($){
    var ismouseenter = false // 初态未移入鼠标
    var imgdiv = $('.unselected');
    imgdiv.each(function(){
        var img = $(this).find(('.img-card'));
        var cardContent = $(this).find(('.card-content'));
        $(this).mouseenter(function(){
            //alert('');
            if (ismouseenter == true) {
                return;
            }
            cardContent.animate({
                opacity:1
            },750);
            //alert('');
            img.addClass("img-card-move");
            //alert('');
            ismouseenter = true;
        });
        $(this).mouseleave(function (){
            //alert('');
            if (ismouseenter == false) {
                return;
            }
            cardContent.animate({
                opacity:0
            },750);
            img.removeClass("img-card-move");
            ismouseenter = false;
        });
    });
});

$(function(){
    //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
    $(function () {
        $(window).scroll(function(){
            if ($(window).scrollTop()>100){
                $("#back-to-top").fadeIn(1500);
            }
            else
            {
                $("#back-to-top").fadeOut(1500);
            }
        });

        //当点击跳转链接后，回到页面顶部位置
        $("#back-to-top").click(function(){
            if ($('html').scrollTop()) {
                $('html').animate({ scrollTop: 0 }, 100);//动画效果
                return false;
            }
            $('body').animate({ scrollTop: 0 }, 100);
            return false;
        });
    });
});