/**
 * Created by hxsd on 2017/2/17.
 */
$(function() {
    //   nav-top 导航栏 hover 变色
    $('.nav-top li').hover(
        function () {
            if($(this).find('dl').length<=0){
                $(this).find('a').addClass('navcolored')
            }else{
                $('.nav-top dd a').hover(
                    function(){
                        $(this).addClass('navcolored')
                    },
                    function(){
                        $(this).removeClass('navcolored')
                    }
                )
            }
        },
        function () {
            $(this).find('a').removeClass('navcolored')
        }
    );

    // 快速导航 hover
    $('.pressnavli').hover(
        function(){
            $(this).css({border:'1px solid #d0d6e2', background:'#fff'});
            $('.pressnav').css({display:'block'});
        },
        function(){
            $(this).css({border:'1px solid transparent', background:'transparent'})
            $('.pressnav').css({display:'none'});
        }
    );

    //   nav-bottom 导航栏 hover 变色
    $('.nav-bottom li').hover(
        function () {
            if($(this).find('.nav2-line').length>0){
                $(this).addClass('navselected');
                $(this).children('a').css({color: '#6d5a54'});
                $('.nav2-linebg').css({display:'block'});
                $(this).find('.nav2-line').css({display:'block'})
                $('.nav2-line a').hover(
                    function(){
                        $(this).css({color:'#f89c32'})
                    },
                    function(){
                        $(this).css({color:'#fff'})
                    }
                )
            }
        },
        function () {
            $(this).removeClass('navselected');
            $(this).children('a').css({color: '#000'});
            $('.nav2-linebg').css({display:'none'})
            $(this).find('.nav2-line').css({display:'none'})

        }
    )
});

