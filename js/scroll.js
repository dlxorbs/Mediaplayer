let acc = 0.06;
let scrollYY = 4;
let scrollYYto = 470;

$(function () {
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
    $(document).keydown(function(){
        scrollYY = 4;
        window.scrollTo({top:scrollYY});
        $('.player').css('bottom', '-800px')
    })
    $(document).click(function(){
    
        let myRepeat = setInterval(function(){
            if(scrollYY < scrollYYto/2){
                scrollYY = scrollYY + (scrollYY)* acc
            }else{
                scrollYY = scrollYY + (scrollYYto - scrollYY)* acc
            }
                console.log(scrollYY) 
            if(scrollYY > 465){
                clearTimeout(myRepeat);
                $('.player').css('bottom', '40px')
            }
            window.scrollTo({top: scrollYY});
        },10)
    })
})
