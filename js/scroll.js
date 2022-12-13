let acc = 0.06;

// 현재 스크롤 위치
let scrollYY = 4;

// 사람 바디 높이
let bodyH = 1500;

// 스크를 끝
let scrollEnd = false;

// 화면 크기
let windowH = window.innerHeight;
let scrollYYto = windowH*1.6;

$(function () {
    console.log(windowH)
    let scrollYYto = windowH/(1.6);
    $('.container').css('bottom',`-60%`)

    


    $('.startbutton').click(function(){
        let myRepeat = setInterval(function(){
            if(scrollYY < scrollYYto/2){
                scrollYY = scrollYY + (scrollYY)* acc
            }else{
                scrollYY = scrollYY + (scrollYYto - scrollYY)* acc
            }

            if(scrollYY > scrollYYto-5){
                clearTimeout(myRepeat);
                tutorial()
            }
            window.scrollTo({top: scrollYY});

            $('.container').css('bottom',`${-60+50*(scrollYY/(scrollYYto))}%`)

            // 나무 패럴렉스
            $('.tree').css('transform',`translateY(${(200*scrollYY/(scrollYYto))}px)`)
            console.log(240*scrollYY/(scrollYYto))
            // 타이틀 패럴렉스
            $('.headtitle').css('transform',`translateY(${(-240*scrollYY/(scrollYYto))}px)`).css('opacity',`0`)
        },10)
    })


    
    // 스크롤 비율만큼 다시 얼굴이 조금 올라와야 함
    window.onload = function() {
        setTimeout (function () {
            scrollTo(0,0);
        },100);
    }
})
