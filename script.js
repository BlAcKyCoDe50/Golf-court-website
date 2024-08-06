
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
    backgroundColor : "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -30vh",
        end:"top -80vh",
        scrub : 2
    }
})


gsap.from("#about-us img,#about-us-in",{ //for about us animation
    y:90,
    opacity : 0,
    duration : 1.5,
    // stagger : 0.4,
    scrollTrigger:{
        trigger :"#about-us",
        scroller:"body",
        // markers: true,
        start : "top 60%",
        end : "top 58%",
        scrub:1
    }
})

gsap.from(".card",{  //for cards animation
    scale:0.8,
    opacity : 0,
    duration : 0.5,
    // stagger : 0.4,
    scrollTrigger:{
        trigger :".card",
        scroller:"body",
        // markers: true,
        start : "top 60%",
        end : "top 58%",
        scrub:2
    }
})

gsap.from("#col1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#col1",
        scroller:"body",
        // markers:true,
        start:"top 45%",
        end:"top 45%",
        scrub:4,
    }
})

gsap.from("#col2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#col1",
        scroller:"body",
        // markers:true,
        start:"top 45%",
        end:"top 45%",
        scrub:4,
    }
})

// gsap.from("#page4 h1",{
//     y:50,
//     scrollTrigger:{
//         trigger:"#page4 h1",
//         scroller:"body",
//         // markers:true,
//         start:"top 45%",
//         end:"top 45%",
//         scrub:4,
//     }

// })

