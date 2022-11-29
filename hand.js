$(function () {
    $(document).on("mousemove mousedown mouseup",function(e){
        mouseX = e.pageX;
        mouseY = e.pageY;
        leftpoint = $('.base').offset().left;
        toppoint = $('.base').offset().top;
        isDragging = true;

        let rad = Math.atan2(mouseX -leftpoint, mouseY -  toppoint);
        deg = (rad * (180 / Math.PI)*-1 )+50 ; 

        console.log(deg)
        if(mouseX < $(document).innerWidth()*4/9 
        && mouseY > $(document).innerHeight()/2){
            
        $('.rotate-base').css({
            'transform' : 'rotate('+ deg +'deg)',
     
        })

        }
    })

    $(document).mouseup(function(){
        isDragging = false;
        handChange()
    })
    $(document).mousedown(function(){
        isDragging = true;
        handChange()
    })
    // $(document).mousemove(function(){
    //     isDragging = true;
    //     handChange()
    // })




})

function handChange(){
    //손 모양 바꾸기
    if(isDragging){
        $('.rotate-base img').attr('src', './img/armchange.svg')
  
    }else{
        $('.rotate-base img').attr('src', './img/arm1.svg')
    }
}  