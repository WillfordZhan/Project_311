jQuery(document).ready(function($){
    var img = $('.unselected');
    img.hover(
        function () {
            img.addClass("selected"); 
    }
);
$(".selected").hover(function(){
    $(this).stop(true).animate({left:0},500);
},function(){
    $(this).stop(true).animate({left:-100},500);
});
});