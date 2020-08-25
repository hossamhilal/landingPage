/*global $ */
(function($) {
    "use strict";

    // Show Side Icons
    $(window).scroll(function(){
        if ($(window).scrollTop() > 350){
            $('.side').show();
            console.log('top');
        } else if ( $(window).scrollTop() <= 350){
            console.log('down')
            $('.side').hide();
        }
    });
    
    // iniat WOW Js
    new WOW().init();
   
})(jQuery);

