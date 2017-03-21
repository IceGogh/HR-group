$(function(){
    $('.main-left li a').hover(
        function(){
            $(this).addClass('selectLi');
            $(this).find('span').css({background:'#fff'})
        },
        function(){
            $(this).removeClass('selectLi')
            $(this).find('span').css({background:'#6d5a54'})
        }
    )
})