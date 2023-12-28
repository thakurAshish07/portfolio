var tl = gsap.timeline()
tl.from(".container1", {
    y:200,
    duration:1.5,
    delay:.3,
    opacity:0
})
tl.from(".container2", {
    x:-100,
    duration:1,
    opacity:0
})
tl.from(".container3", {
    x:100,
    duration:1,
    opacity:0
})
