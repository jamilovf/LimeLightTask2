$(window).bind('scroll',function(e){
    parallaxScroll();
});

function parallaxScroll(){
   var scrolled = $(window).scrollTop(); 
   $('.layer-1').css('top',(0-(scrolled*.25))+'px');
   $('.layer-2').css('top',(0-(scrolled*.5))+'px');
   $('.logo-1').css('left',((scrolled*.3))+'px');
   $('.logo-2').css('right',((scrolled*.35))+'px');
   $('.logo-3').css('left',((scrolled*.25))+'px'); 
   $('.logo-4').css('right',((scrolled*.28))+'px'); 
}