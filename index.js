// STICKY NAVBAR

$(document).ready(function(){

    var stickyNavTop = $(".navbarK").offset().top;

    var stickyNav = function(){
    var scrollTop = $(window).scrollTop()

   if (scrollTop > stickyNavTop){
        $(".navbarK").addClass("sticky");
    }else{
        $(".navbarK").removeClass("sticky");
    }
} 

stickyNav();
$(window).scroll(function(){
    stickyNav();
})
} )

