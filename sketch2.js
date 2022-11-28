$(function () {
    $(document).mousemove(function(e){
        mouseX = e.pageX;
        mouseY = e.pageY;
        // console.log(mouseX,mouseY)
        $('.hand').css("left", mouseX).css("top", mouseY)
    })
})