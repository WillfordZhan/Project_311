$(".selected").hover(function(){
    $(this).stop(true).animate({left:0},500);
},function(){
    $(this).stop(true).animate({left:-100},500);
});