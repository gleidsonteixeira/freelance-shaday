$(document).ready(function(){
    quadrado(".quadrado");
    quadrado(".quadrado.meio");
    retangulo(".retangulo");
    showVideo();
})

$(window).resize(function(){
    quadrado(".quadrado");
    quadrado(".quadrado.meio");
    retangulo(".retangulo");
})

$(window).scroll(function(){
    
})

$(window).load(function(){
    
})

/***** FUNCTIONS *****/

function quadrado(e){
    return $(e).height($(e).width());
}

function retangulo(e){
    var a =  $(window).width();
    if(a >= 768){
        return $(e).height($(e).width()/2);
    }else{
        return $(e).height($(e).width());
    }
}

function showVideo(){

    $(".video-container i").click(function(){
        var a = $(this).attr("data-url");
        $("#video").addClass("active");
        $("#video iframe").attr("src", a);
    })

    $("#video i").click(function(){
        $(this).offsetParent().removeClass("active");
        $("#video iframe").attr("src", );
    })
}