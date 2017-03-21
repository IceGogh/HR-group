$(function(){

    function loadData(callbk){
        $.ajax({
            url:"../js/fake-story.json",
            success:function(data){
                callbk(data);
            }
        })
    }
    loadData(function(data){
        var item='';
        for(var i=0; i<data.length; i++){
            item+='<div class="history clearfix">'+
                '<div class="pic">'+
                '<img src="'+data[i].img+'"/>'+
                '<div class="location">'+data[i].location+
                '<div></div>'+
                '</div>'+
                '<div class="line"></div>'+
                '</div>'+
                '<div class="storybox">'+
                '<div class="time">'+data[i].time+
                '<div></div>'+
                '</div>'+
                '<p class="story">'+data[i].story+'</p>'+
                '</div>'+
                '</div>'
        }

        $('.historymain').append(item);

        for(var i=0; i<data.length; i++) {
            if(data[i].location==''){
                $('.history').eq(i).find('.location').remove();
            }
            if(data[i].time==''){
                $('.history').eq(i).find('.time').remove();
            }
            $('.location').eq(i).css({top:$('.location').eq(i).prev().prop('height')/2+'px'})
        }
    })

})
