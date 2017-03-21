$(function(){
    // banner图片 selectNav  hover
    $('.selectNav li').hover(
        function(){
            clearInterval(timer);
            $('.selectNav li').css({backgroundPositionY:'-60px'});
            $(this).css({backgroundPositionY:'0'});
            $('.bannermain li').eq($(this).index()).siblings().fadeOut();
            $('.bannermain li').eq($(this).index()).fadeIn()
            timerN=$(this).index();
        },
        function(){
            bannerAuto();
        }
    );

    //定时器 banner
    var timer;
    var timerN=0;
    bannerAuto();
    function bannerAuto(){
        timer=setInterval(function(){
            timerN++;
            if(timerN==$('.selectNav li').length){
                timerN=0;
            }
            $('.selectNav li').css({backgroundPositionY:'-60px'});
            $('.selectNav li').eq(timerN).css({backgroundPositionY:'0'});
            $('.bannermain li').fadeOut();
            $('.bannermain li').eq(timerN).fadeIn();
        },3000)
    }
    // 宣传片播放
    $("#radio-play").click(function(){
        $(this).hide();
        $("#radio-index").fadeIn('fast').attr("src","http://media.crc.com.hk/mas/play.html?path=public/2014/12/30/20141230_14a993966a3_r28_200k.f4m");
    });
    //  iconarea 轮播
    $('.iconbutton').eq(0).on('click',function(){
        //先确认前面位移动作全部完成
        $('.iconnav').finish();
        // 判断
        if(parseInt($('.iconnav').eq(0).css('left'))>=0){
            $('.iconnav').eq(0).css({'left':'-1144px'})
            $('.iconnav').eq(1).css({'left':'0'})
        }
        // 重置位置
        $('.iconnav').animate({'left':'+=104'})
    });
    // 定义 iconRoll() 右边按钮函数
    function iconRoll(){
        //先确认前面位移动作全部完成
        $('.iconnav').finish();
        // 判断
        if(parseInt($('.iconnav').eq(0).css('left'))<=-1352){
            $('.iconnav').eq(0).css({'left':'0'})
            $('.iconnav').eq(1).css({'left':'1144px'})
        }
        // 重置位置
        $('.iconnav').animate({'left':'-=104'})
    }

    $('.iconbutton').eq(1).on('click',function(){
        iconRoll();
    });
    // 定时器 默认运行 点击右边按钮函数
    var timerIcon;
    function TimerIcon(){
        timerIcon=setInterval(function(){
            iconRoll();
        },2000)
    }
    TimerIcon();
    // icon LI hover函数
    $('.iconnav li').hover(
        function(){
            clearInterval(timerIcon)
        },
        function(){
            TimerIcon();
        }
    )

})
