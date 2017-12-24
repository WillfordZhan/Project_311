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
            },500);
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
            },500);
            img.removeClass("img-card-move");
            ismouseenter = false;
        });
    });
});



/*$(".selected").hover(function(){
    $(this).stop(true).animate({left:0},500);
},function(){
    $(this).stop(true).animate({left:-100},500);
});
});
*/