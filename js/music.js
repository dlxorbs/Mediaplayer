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

    },

    {
        audio: './musics/04.mp3',
        image: './musics/04.png',
        title: 'Fifth Song',
        author: 'Fifth Author'
    }
]

// 마우스를 눌렀나?
let mousecliked = false;




// 윗 박스에서 마우스를 누르고 아래박스에서 마우스를 떼면 음악재생
function hitbox(){
    // 위 좌표에서 아래좌표로 가면 true로 변경
    for (let i = 0; i < 5; ++i){
        $('.hitbox1').eq(i).on('mousedown',function(e){
            mousecliked = true;
        })
    }
}


function moving(){
    if(currentAudio.paused == true){
        $('.rotate-base').addClass('movinghand')
        $('.rotate-base img').attr('src', './img/armchange.svg')
    }
    else{
        $('.rotate-base').removeClass('movinghand')
        $('.rotate-base img').attr('src', './img/arm1.svg')
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

        if(location == 100){
            let index = $(currentAudio).parent().index()
            $('.playlist').eq( (index + 1) % audios.length ).click()
            let range = $('#volume').val()
            currentAudio.volume = range/100;
            
        }

        }, 100)
        // console.log(location)

        
    $('#btn_play').click(function(){ // 재생/일시정지
        moving();
    })


        
    // 버튼 이벤트, 기타줄을 놓으면 index에 따라서 곡 재생
    hitbox()
    $('.hitbox2').on('mouseup',function(){
        if(mousecliked){
    
                currentAudio.play()
                moving();
      
        }


        //다시 false로 바꿈
        mousecliked = false;
        console.log(mousecliked)
    })

    // 버튼 이벤트
    $('#btn_play').click(function(){ // 재생/일시정지
        if(currentAudio.paused == true){
            currentAudio.play()
        
        }
        else{
            currentAudio.pause()
        
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
    })

    $('#btn_next').click(function(){ // 다음곡
        let index = $(currentAudio).parent().index()
        $('.playlist').eq( (index + 1) % audios.length ).click()
        let range = $('#volume').val()
        currentAudio.volume = range/100;
        console.log(index)
    })

    $('#volume').on('input', function volume() {

        let range = $('#volume').val()
        currentAudio.volume = range/100;

        console.log(range)

         $('#volume').css({
        'background' : ' linear-gradient(to right, #FFE283 0%, #FFE283 '+ range +'%, #ececec '+ range+', #ececec 100%);'
        })
    });


})


