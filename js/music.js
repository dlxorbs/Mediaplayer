let audios = [
    {
        audio: './musics/00.mp3',
        image: './musics/00.png',
        title: 'First Song',
        author: 'First Author'
    },
    {
        audio: './musics/01.mp3',
        image: './musics/01.png',
        title: 'Second Song',
        author: 'Second Author'
    },
    {
        audio: './musics/02.mp3',
        image: './musics/02.png',
        title: 'Third Song',
        author: 'Third Author'
    },
    {
        audio: './musics/03.mp3',
        image: './musics/03.png',
        title: 'Fourth Song',
        author: 'Fourth Author'

    }
]

// 마우스를 눌렀나?
let mousecliked = false;

// 마우스를 눌렀나 - 아래?
let mousecliked2 = false;




// 윗 박스에서 마우스를 누르고 아래박스에서 마우스를 떼면 음악재생
function hitbox(){
    // 위 좌표에서 아래좌표로 가면 true로 변경
    for (let i = 0; i < 5; ++i){
        $('.hitbox1').eq(i).on('mousedown',function(e){
            mousecliked = true;
        })
    }
}

// 아래 박스에서 마우스를 누르고 윗박스에서 마우스를 떼면 음악정지
function hitbox2(){
    // 아래 좌표에서 위좌표로 가면 true로 변경
    for (let i = 0; i < 5; ++i){
        $('.hitbox2').eq(i).on('mousedown',function(e){
            mousecliked2 = true;
        })
    }
}


function moving(){
    if(currentAudio.paused == false){
        $('.rotate-base').addClass('movinghand')
        $('.rotate-base img').attr('src', './img/armchange.svg')
    }else{
        $('.rotate-base').removeClass('movinghand')
        $('.rotate-base img').attr('src', './img/armchange.svg')

    }
}


  // 현재 재생중인 오디오
  let currentAudio = new Audio()

$(function(){
  
    // 리스트에 추가
    for(let i in audios){
        let dom = $('<div class = "playlist"></div>')
        dom.append('<p>' + audios[i].author + ' - ' + audios[i].title + '</p>')
        // dom.append('<img src="' + audios[i].image + '" width="100px">')
        dom.append(new Audio(audios[i].audio))

        $('.playlists').append(dom)

        // DOM 클릭 이벤트
        dom.click(function(){
            currentAudio.pause();
            currentAudio = $(this).find('audio')[0]
            currentAudio.currentTime = 0
            currentAudio.play()
            $('#current_image').attr('src', audios[i].image);
            $('#current_title').text(audios[i].author + ' - ' + audios[i].title)

            //왼손움직임시 앨범 캐러셀 변경
            let index = $(currentAudio).parent().index()
            console.log((index) % audios.length)

            $('.album').css('transform',`translateX(${-((index) % audios.length)*(300+12)}px)`)

            let u = 100*i;
            let t = handTop + (handLeft - u)*5/9;

            //손회전
            $('.hand').css("left", u).css("top", t)
            goal = 330-(i*100)
            $('.arm_bottom').css("left", u).css("top", t+50)
            //윗팔 회전
            $('.rotate').css("transform", `rotate(-${u/6}deg)`)
        })

    }

    // 현재 재생 기본 값 (0번 곡 자동으로 지정)

    currentAudio = $('.player audio')[0]
    $('#current_image').attr('src', audios[0].image);
    $('#current_title').text(audios[0].author + ' - ' + audios[0].title);

  
     //인디케이터 누르기
    $('#current_progress').on( 'input', function(){
        currentAudio.currentTime = ($(this).val()/100)*currentAudio.duration


     })

     
    // 현재 시간 얻기
    setInterval(function(){
        let location = currentAudio.currentTime/currentAudio.duration*100
        $('#current_progress').val(location)

        let time = Math.floor(currentAudio.currentTime);
        let minutes = parseInt(time/60)
        if(minutes < 10){
            minutes = '0' + parseInt(time/60)
        }       
        let fulltime = currentAudio.duration   
        let fullminutes = parseInt((fulltime)/60);
        if(fullminutes < 10){
            fullminutes = '0' + parseInt(fulltime/60)
        }    
        $('.start').text( minutes +':'+ parseInt((time%60)/10) +  (time%60)%10);
        $('.end').text(fullminutes+ ':' + parseInt((fulltime%60)/10) + parseInt((fulltime%60)%10) );
        if(location == 100){
            let index = $(currentAudio).parent().index()
            $('.playlist').eq( (index + 1) % audios.length ).click()
            let range = $('#volume').val()
            currentAudio.volume = range/100;            
        }

         $('#current_progress').css({
            'background' : ' linear-gradient(to right, #0b8a31 0%, #0b8a31 '+ location +'%, #ececec '+ location + '%, #ececec 100%)',
     
        })

        }, 100)
        // console.log(location)

    



        
    // 버튼 이벤트, 기타줄을 놓으면 index에 따라서 곡 재생
    // 박건도 추가@@@@@@@@@@@@@@@@@@@@@@@@@
    hitbox()
    $('.hitbox2').on('mouseup',function(){
        if(mousecliked){
                currentAudio.currentTime = 0
                currentAudio.play()
                moving();
        }


        //다시 false로 바꿈
        mousecliked = false;
        console.log(mousecliked)
    })

    hitbox2()
    $('.hitbox1').on('mouseup',function(){
         if(mousecliked2){
                currentAudio.currentTime = 0
                currentAudio.pause()          
        }

        //다시 false로 바꿈
        mousecliked2 = false;
        console.log(mousecliked2)
    })

    $('.hitbox2').on('mousedown',function(){
        if(mousecliked2){
            $('.rotate-base').removeClass('movinghand')
            $('.rotate-base img').attr('src', './img/arm1.svg')
        }
    })

    // 버튼 이벤트
    $('#btn_play').click(function(){ // 재생/일시정지
        if(currentAudio.paused == true){
            currentAudio.play();
            console.log(currentAudio.currentTime)
        } else{
            currentAudio.pause();
            console.log(currentAudio.paused)
        }
    })


    

    $('#btn_stop').click(function(){ // 완전 정지
        currentAudio.pause()
        currentAudio.currentTime = 0

        $('.rotate-base').removeClass('movinghand')
        $('.rotate-base img').attr('src', './img/arm1.svg')
        
        let range = $('#volume').val()
        currentAudio.volume = range/100;
    })

    $('#btn_prev').click(function(){ // 이전곡
        let index = $(currentAudio).parent().index()
        $('.playlist').eq( (index - 1) % audios.length ).click()
        let range = $('#volume').val()
        currentAudio.volume = range/100;
        console.log(index)

        
        // $('.album').css('transform',`translate(${-((index - 1) % audios.length)*(300+12)}px)`)
    })

    $('#btn_next').click(function(){ // 다음곡
        let index = $(currentAudio).parent().index()
        $('.playlist').eq( (index + 1) % audios.length).click()
        let range = $('#volume').val()
        currentAudio.volume = range/100;
        console.log(index)
        console.log(currentAudio.paused)
        // $('.album').css('transform',`translate(${-((index + 1) % audios.length)*(300+12)}px)`)
    })

    $('#volume').on('input', function(){

        let range = $(this).val()
        currentAudio.volume = range/100;


        console.log(range)
         $(this).css({
            'background' : ' linear-gradient(to right, #FFE283 0%, #FFE283 '+ range +'%, #ececec '+ range+'%, #ececec 100%)'
        })

    });
    
    $('button').click(function(){ // 재생/일시정지
        moving();
    })

})


