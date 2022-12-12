//튜토리얼 및 타이틀 관련 js
// scroll.js에서 스크롤이 끝나면 아래 함수룰 실행

let step = 0;
function tutorial(){

    if(step == 0){
        $('.black').addClass('active opacity10')
        $('.tooltip1').addClass('active active2 opacity10')
        $('.tutorial1').addClass('active opacity04')
        $('.tutorial_dot1').addClass('active3')
    }

    $('.black').find('.next').click(function(){
        step += 1;
        modal()
        console.log(step)

    })
    $('.black').find('.prev').click(function(){
        if(step >= 0){
            step -= 1;
            modal()
            console.log(step)
        }else if(step < 0){
            step = 0;
        }
    })
}




function modal(){
    if(step == 0){
        $('.black').addClass('active opacity10')
        $('.tooltip1').addClass('active active2 opacity10')
        $('.tutorial1').addClass('active opacity04')
        $('.tutorial_dot1').addClass('active3')
        
        $('.tooltip2').removeClass('active active2 opacity10')
        $('.tutorial2').removeClass('active opacity04')
        $('.tutorial_dot2').removeClass('active opacity10')

    $('.prev').css('display','none')
    }
    if(step == 1){
    // 기본이벤트 삭제
    $('.tooltip1').removeClass('active active2 opacity10')
    $('.tutorial1').removeClass('active opacity04')
    $('.tutorial_dot1').removeClass('active3')
    $('.tooltip3').removeClass('active active2 opacity10')

    $('.tooltip2').addClass('active active2 opacity10')
    $('.tutorial2').addClass('active opacity04')
    $('.tutorial_dot2').addClass('active opacity10')

    $('.player').css('bottom', '-800px')

    $('.prev').css('display','block')



    $('.black').find('.next').css('background-color','#FFFFFF')
    $('.black').find('.next').css('color','#000000')
    $('.black').find('.next').removeClass('lightActive')
    $('.black').find('.next').html('다음 <i class="fa-solid fa-chevron-right"></i>')


    }

    else if(step == 2){
        // 기본이벤트 삭제
        $('.tooltip2').removeClass('active active2 opacity10')
        $('.tutorial2').removeClass('active opacity04')
        $('.tutorial_dot2').removeClass('active opacity10')

        $('.player').css('bottom', '40px')
        setTimeout(function() {
            $('.tooltip3').addClass('active active2 opacity10')
        }, 500);

      
        $('.black').find('.next').css('background-color','#696D27')
        $('.black').find('.next').css('color','#FFFFFF')
        $('.black').find('.next').addClass('lightActive')
        $('.black').find('.next').html('시작하기!')
    }

    else if(step == 3){
        $('.black').removeClass('active opacity10')
        $('.tooltip3').removeClass('active active2 opacity10')
    }
}