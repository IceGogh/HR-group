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
    );

    $('.newsSelect').hover(
        function(){
            $(this).css({background:'#f99d32', color:'#fff'})
        },
        function(){
            $(this).css({background:'#eae6e2', color:'#7b7a7a'})
        }
    )
    for(var i=0; i<85; i++){
        $('<option>').html(i+1).appendTo($('.selectpage select'))

    }
})