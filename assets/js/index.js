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

    // quotes slider
    $('.quote-container-wrapper').slick({
        dots:true,
        arrows:false,
        autoplay:true,
        autoplaySpeed:1500,
        fade:true,
        fadeSpeed: 1000
    });

    // projects icon slider
    $('.project-icons-wrapper').slick({
        dots: false,
        infinite: false,
        arrows: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: false,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
})