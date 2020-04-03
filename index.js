 

 
 //NAVBAR MOBILE
var width = $(document).width();

function smallScreen(){
    $(".navbarKDrop").css("transform", "translateY(0rem)")

    $(".navbarKDrop").hide();

    $(".navbarK__links--link").hide();
    $(".navbarK__links--brand").show();
    $(".navbarK__links--hamburger").show();
    $(".navbarK").removeClass("navBarK");
    $(".navbarK").addClass("navLinkMobile");
};

function bigScreen(){
    $(".navbarKDrop").hide();

    $(".navbarK__links--link").show();
    $(".navbarK").addClass("navBarK");
    $(".navbarK").removeClass("navLinkMobile");
    $(".navbarK__links--hamburger").hide();
    $(".navbarK__links--brand").hide();
}

function dropDownNav(){

}

$(document).ready(function(){
    width = $(document).width();
    if( width < 750 ){
     smallScreen();
    }else{
        bigScreen();
    }
})


$(window).on("resize", function(){
   width = $(document).width();
   if( width < 750 ){
        smallScreen();
   }else{
        bigScreen();
   }
});



$(".navLinksToggle").click(function(){

    
        $(".navbarKDrop").slideToggle();

    
    
})




// STICKY NAVBAR
$(document).ready(function(){

    var stickyNavTop = $(".navbarK").offset().top;
    var stickyNavTop = $(".navbarKDrop").offset().top;

    var stickyNav = function(){
    var scrollTop = $(window).scrollTop()
    var headerHeight = screen.height;

    $('.header').css('height', headerHeight)

   if (scrollTop > stickyNavTop){
        $(".navbarK").addClass("sticky");
        $(".navbarKDrop").addClass("sticky");
        $('.header').css('height', headerHeight)
    $(".navbarK__links--linkDrop").css("transform", "translateY(40rem)")
       
    }else{
        $(".navbarK").removeClass("sticky");
        $(".navbarKDrop").removeClass("sticky");
        $('.header').css('height', headerHeight)
        $(".navbarK").css("margin-top", "-40rem")
        
    }
} 

stickyNav();
$(window).scroll(function(){
    stickyNav();

    
})
} )
