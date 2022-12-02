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
<<<<<<<<< Temporary merge branch 1
    }
=========
    },
>>>>>>>>> Temporary merge branch 2
    {
        audio: './musics/03.mp3',
        image: './musics/03.png',
        title: 'Fourth Song',
        author: 'Fourth Author'
<<<<<<<<< Temporary merge branch 1
    }
=========
    },
>>>>>>>>> Temporary merge branch 2
    {
        audio: './musics/04.mp3',
        image: './musics/04.png',
        title: 'Fifth Song',
        author: 'Fifth Author'
    }
]

// 현재 재생중인 오디오
let currentAudio = new Audio()

<<<<<<<<< Temporary merge branch 1


=========
>>>>>>>>> Temporary merge branch 2
$(function(){
    
    // 리스트에 추가
    for(let i in audios){
        let dom = $('<div></div>')
        dom.append('<p>' + audios[i].author + ' - ' + audios[i].title + '</p>')
<<<<<<<<< Temporary merge branch 1
        dom.append('<img src="' + audios[i].image + '" width="100px">')
        dom.append(new Audio(audios[i].audio))

        $('#list').append(dom)

        // DOM 클릭 이벤트
        dom.click(function(){
            currentAudio.pause()
=========
        // dom.append('<img src="' + audios[i].image + '" width="100px">')
        dom.append(new Audio(audios[i].audio))

        $('.player').append(dom)

        // DOM 클릭 이벤트
        dom.click(function(){
            currentAudio.pause();
>>>>>>>>> Temporary merge branch 2
            currentAudio = $(this).find('audio')[0]
            currentAudio.currentTime = 0
            currentAudio.play()

<<<<<<<<< Temporary merge branch 1
            $('#list > div').removeClass('playing')
            $(this).addClass('playing')

=========
>>>>>>>>> Temporary merge branch 2
            $('#current_image').attr('src', audios[i].image);
            $('#current_title').text(audios[i].author + ' - ' + audios[i].title)
        })

    }

    // 현재 재생 기본 값 (0번 곡 자동으로 지정)
<<<<<<<<< Temporary merge branch 1
    currentAudio = $('#list audio')[0]
    $('#current_image').attr('src', audios[0].image);
    $('#current_title').text(audios[0].author + ' - ' + audios[0].title)
    $('#list > div').eq(0).addClass('playing')
=========
    currentAudio = $('.player audio')[0]
    $('#current_image').attr('src', audios[0].image);
    $('#current_title').text(audios[0].author + ' - ' + audios[0].title);
>>>>>>>>> Temporary merge branch 2


    // 현재 시간 얻기
    setInterval(function(){
<<<<<<<<< Temporary merge branch 1
        $('#current_progress').text(currentAudio.currentTime + '/' + currentAudio.duration)
    }, 50)
=========
        $('#current_progress').css({
           'width' :  (currentAudio.currentTime/currentAudio.duration)*100 +'% '
         })
    }, 1)

   //인디케이터 누르기
   $('#progressbar').on( 'click mousedown mouseup', function(){

   })

>>>>>>>>> Temporary merge branch 2

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
    })

    $('#btn_prev').click(function(){ // 이전곡
        let index = $(currentAudio).parent().index()
<<<<<<<<< Temporary merge branch 1
        $('#list > div').eq( (index - 1) % audios.length ).click()
=========
        $('.player > div').eq( (index - 1) % audios.length ).click()
>>>>>>>>> Temporary merge branch 2
    })

    $('#btn_next').click(function(){ // 다음곡
        let index = $(currentAudio).parent().index()
<<<<<<<<< Temporary merge branch 1
        $('#list > div').eq( (index + 1) % audios.length ).click()
=========
        $('.player > div').eq( (index + 1) % audios.length ).click()
>>>>>>>>> Temporary merge branch 2
    })

})
