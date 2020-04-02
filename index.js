

// STICKY NAVBAR

$(document).ready(function(){

    var stickyNavTop = $(".navbarK").offset().top;

    var stickyNav = function(){
    var scrollTop = $(window).scrollTop()

   if (scrollTop > stickyNavTop){
        $(".navbarK").addClass("sticky");
        $(".main").css("transform", "translateY(40rem)")
    }else{
        $(".navbarK").removeClass("sticky");
        $(".main").css("transform", "translateY(0rem)")
    }
} 

stickyNav();
$(window).scroll(function(){
    stickyNav();

    
})
} )
