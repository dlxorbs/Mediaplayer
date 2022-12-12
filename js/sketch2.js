//손위치

//손에 잡히는 부분에 따라 기타줄의 흔들리는 부분이 달라짐
let goal = 330;

//손 위치에 따라서 현재 플레이되는 곡
let nowMusic = 0;


//박건도 손 위치 변경@@@@@@@@@@@@@@@@
let isDragging = false;
let handLeft = 0;
let handTop = 260;

let x = 0;
let y = 0;

$(function () {
    $('.hand').css("left", handLeft).css("top", handTop)
    $('.hand').mousedown(function(e){
        isDragging = true;
        x = e.offsetX;
        y = e.offsetY;
        handChange()
    })
    let left = $('.hand-position').offset().left
    let top = $('.hand-position').offset().top
    let width = $('.hand-position').width()
    let handX = 0;
    let handY = 0;
    $('.hand').mousemove(function(e){
        if(isDragging){
            let a = e.clientX - $('.hand-position').offset().left
            handX = a - x;
            handY = handTop + (handLeft - handX)*5/9;

            if(a > width){
                handX = width - x;
                handY = handTop + (handLeft - handX)*5/9;
            }else if(a < 0){
                handX = 0 - x;
                handY = handTop + (handLeft - handX)*5/9;
            }
            $('.hand').css("left", handX).css("top", handY)
            $('.arm_bottom').css("left", handX+0).css("top", handY+50)
            $('.rotate').css("transform", `rotate(-${handX/6}deg)`)
        }
        handChange()
        
    })
    $('.hand').mouseup(function(e){
        isDragging = false;
        if(!isDragging){
            let left = $('.hand').offset().left - $('.hand-position').offset().left
            // console.log(left)
            for (let i in audios) {
                if(left>-50+2*50*i && left<50+2*50*i){
                    let u = 100*i;
                    let t = handTop + (handLeft - u)*5/9;
                    // console.log(left,-100+100*i)
                    $('.hand').css("left", u).css("top", t)

                    if(currentAudio.paused == false){
             
                        $('.playlist').eq(i).click()
                
                    }else{
                        $('.playlist').eq(i).click()
                        currentAudio.pause()
                    }


  
                    goal = 330-(i*100)
                    $('.arm_bottom').css("left", u).css("top", t+50)

                    //윗팔 회전
                    $('.rotate').css("transform", `rotate(-${u/6}deg)`)
                }
            }
        }
        handChange()
    })
})

function handChange(){
    //손 모양 바꾸기
    if(isDragging){
        $('.hand img').attr('src','img/hand.svg')
    }else{
        $('.hand img').attr('src','img/hand2.svg')
    }
}