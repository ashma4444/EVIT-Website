$( 'document' ).ready(function(){

    let data_city = document.querySelectorAll(".content-wrapper");

    $(".btn").on("click", function(){
        var city = $(this).attr("data-city");

        $(this).addClass("active");
        $(this).siblings().removeClass("active");

        data_city.forEach((val)=>{
            if(val.getAttribute("id") === city){
                
                $("#"+city).addClass("activediv");
                $("#"+city).siblings().removeClass("activediv");
            }
        })
    });
})