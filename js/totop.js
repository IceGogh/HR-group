$(function(){
    $(window).on('scroll',function(){
        if($(document).scrollTop()>75){
            $('.toTopbox').css({display:'block'});
            $('.toTopbox').stop(true).animate({bottom:'0px'},'fast')
        }else{
            $('.toTopbox').stop(true).animate({bottom:'-110px'},'slow',function(){
                $('.toTopbox').css({display:'none'})
            })
        }
    });
    $('.toTopbox div').hover(
        function(){
            $(this).css({background:'#f99d32'})
        },
        function(){
            $(this).css({background:'#999'})
        }
    )
    $('.toTop').on('click',function(){
        $('html, body').animate({scrollTop: 0}, 200);
    })
})