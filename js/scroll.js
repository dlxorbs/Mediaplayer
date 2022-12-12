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
    // setInterval(function(){
    //     elv += 20;
    //     console.log(elv)
    //     if(elv > 440){
    //         elv = 440;
    //     }
        
    //     scrollyy += (elv - scrollyy)/4
    //     if((elv - scrollyy)/2 < 1){
    //         scrollyy = 440;
    //     }
    //     console.log(elv,scrollyy)
    //     window.scrollTo({top: scrollyy, behavior: "smooth" });
    // },30);
    // setInterval(function(){
    //     elv += 1;
    //     if(elv > 1000){
    //         elv = 1000
    //     }
    //     console.log(elv)
    // },3);

    // 사람 이미지를 아래에 고정하기 전체 화면의 높이 값 만큼 아래로 내리고 얼굴의 크기 만큼만 다시 올려줌
    $('.container').css('bottom',`-60%`)
    $( window ).resize( function() {
        $('.container').css('bottom',`-60%`)
    })


    $('.man').click(function(){
        let myRepeat = setInterval(function(){
            if(scrollYY < scrollYYto/2){
                scrollYY = scrollYY + (scrollYY)* acc


            }else{
                scrollYY = scrollYY + (scrollYYto - scrollYY)* acc


            }

            if(scrollYY > scrollYYto-5){
                clearTimeout(myRepeat);
                tutorial()
                //박건도 추가---------------------------------------------------------------
                // 튜토리얼이 끝날때 나타나는 타이밍으로 바꿈----------------------------------
                // $('.player').css('bottom', '40px')
            }
            window.scrollTo({top: scrollYY});
            


            $('.container').css('bottom',`${-60+50*(scrollYY/(scrollYYto))}%`)

            // 나무 패러셀
            $('.tree').css('transform',`translateY(${(240*scrollYY/(scrollYYto))}px)`)
            // 타이틀 패러셀
            $('.headtitle').css('transform',`translateY(${(-240*scrollYY/(scrollYYto))}px)`).css('opacity',`0`)
        },10)
    })


    
    // 스크롤 비율만큼 다시 얼굴이 조금 올라와야 함
    
})
