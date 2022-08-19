$ ( document ).ready(function(){
  // sticky
  $( window ).on("scroll", function(){
    $( 'nav' ).toggleClass("sticky", window.scrollY > 0);
  })

    // ham-menu
    $( '.ham-menu-icon' ).on("click", function(){
        $("#nav").addClass("ham-menu-active");
        $("body").css("overflow", "hidden");
    });

    $( '.ham-menu-icon-cross' ).on("click", function(){
      $("#nav").removeClass("ham-menu-active");
      $("body").css("overflow", "unset");
    });

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
            $( '.disbtn' ).prop('disabled', false);
        }
        else if($(this).prop("checked") == false){
            $( '.disbtn' ).prop('disabled', true);
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
        ]
    });

    // idea-solution slider
    $('.idea-solutions-wrapper').slick({
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
            infinite: true,
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
      ]
    });

    // isotope
    $('.projects-img').isotope({
      itemSelector: '.project-img-wrapper',
      layoutMode: 'fitRows'
    });

    $('.projects-category ul li a').click(function(){
        $('.projects-category ul li a').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $('.projects-img').isotope({
            filter: selector
        });
        return false;
    });
})