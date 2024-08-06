
//cursor
var crsr = document.querySelector("#cursor")
var crsrblur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+30+"px"
    crsr.style.top = dets.y+"px"
    crsrblur.style.left = dets.x-100+"px"
    crsrblur.style.top = dets.y-100+"px"
})


gsap.to("#nav",{
    backgroundColor: "#000000",
    // backgroundColor: "#95C11E",
    height:"120px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
});

gsap.to('#main',{
    // backgroundColor : "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -30vh",
        end:"top -80vh",
        scrub : 2
    }
})


