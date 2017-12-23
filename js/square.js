jQuery(document).ready(function($){
    var ismouseenter = false // 初态未移入鼠标
    var imgdiv = $('.unselected');
    var img = $('img-card');
    var hidden = $('.hidden-info');
    imgdiv.mouseenter(function(){
        //alert('');
        if (ismouseenter == true) {
            return;
        }
        hidden.animate({
            opacity:1
        },500);
        ismouseenter = true;
    });
    imgdiv.mouseleave(function (){
        //alert('');
        if (ismouseenter == false) {
            return;
        }
        hidden.animate({
            opacity:0
        },500);
        ismouseenter = false;
    });
});



/*$(".selected").hover(function(){
    $(this).stop(true).animate({left:0},500);
},function(){
    $(this).stop(true).animate({left:-100},500);
});
});
*/