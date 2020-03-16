$(window).scroll(function(){

    if(scrollY > 50){
        $(".mynavbar__logo").css('width', '10rem');
        $(".mynavbar__logo").css('margin-bottom', '1rem');
        $(".mynavbar__logo").css('margin-top', '1rem');
    
        $(".mynavbar__container").css('background', 'rgba(0, 0, 0, .95)')
        
        $(".mynavbar__links--1").css('padding-bottom', '1rem');
        $(".mynavbar__links--1").css('margin-bottom', '2rem');
        $(".mynavbar__links--1").css('margin-top', '2rem');
        
      


        $(".mainheader").css('background-image', 'url(../img/bg-bw.jpg)');


    }if(scrollY < 50){
        $(".mynavbar__logo").css('width', '15rem');
        $(".mynavbar__logo").css('margin-bottom', '3rem');
        $(".mynavbar__logo").css('margin-top', '3rem');
    
        $(".mynavbar__container").css('background', 'rgba(0, 0, 0, .8)')
         
        $(".mynavbar__links--1").css('padding-bottom', '2rem');
        $(".mynavbar__links--1").css('margin-bottom', '3rem');
        $(".mynavbar__links--1").css('margin-top', '3rem');

        $(".mainheader").css('background-image', 'url(../img/fondo1.jpg)');
    }
        
    

 
})

