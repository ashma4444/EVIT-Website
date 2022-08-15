$ ( document ).ready(function(){
    // Scroll to top
    $( window ).on("scroll", function(){
        if(window.pageYOffset > 100){
            $( '.scroll-to-top' ).addClass("active");
        }else{
            $( '.scroll-to-top' ).removeClass("active");
        }
    });

    // Contact box- button disable
    $('input[type="checkbox"]').click(function(){
        if($(this).prop("checked") == true){
            $( '.btn' ).prop('disabled', false);
        }
        else if($(this).prop("checked") == false){
            $( '.btn' ).prop('disabled', true);
        }
    });
})