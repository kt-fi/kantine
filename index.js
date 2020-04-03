
// STICKY NAVBAR


$(document).ready(function(){

    var stickyNavTop = $(".navbarK").offset().top;

 
    

    var stickyNav = function(){
    var scrollTop = $(window).scrollTop()
     

   
      var headerHeight = screen.height;
    $('.header').css('height', headerHeight)

   if (scrollTop > stickyNavTop){
        $(".navbarK").addClass("sticky");
        $(".main").css("transform", "translateY(40rem)")
       $('.header').css('height', headerHeight)

        // alert()
       
    }else{
        $(".navbarK").removeClass("sticky");
        $(".main").css("transform", "translateY(0rem)")
        $('.header').css('height', headerHeight)
    }
} 

stickyNav();
$(window).scroll(function(){
    stickyNav();

    
})
} )
