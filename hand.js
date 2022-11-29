$(function () {
    $(document).on("mousemove mousedown mouseup",function(e){
        mouseX = e.pageX;
        mouseY = e.pageY;
        leftpoint = $('.base').offset().left;
        toppoint = $('.base').offset().top;
  
        let rad = Math.atan2(mouseX -leftpoint, mouseY -  toppoint);
        deg = (rad * (180 / Math.PI)*-1 )+50 ; 

        console.log(deg)
        if(mouseX < $(document).innerWidth()/3 
        && mouseY > $(document).innerHeight()/2){
            
        $('.rotate-base').css({
            'transform' : 'rotate('+ deg +'deg)',
     
        })
        }
    })
})