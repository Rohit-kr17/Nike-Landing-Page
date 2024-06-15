var tl = gsap.timeline();

gsap.set(".a",{opacity: 0, y:10})
gsap.set("#right img",{opacity: 0, y:10,scale: 1.6})

tl
.from("#left",{
    width: 0,
    ease: Expo.easeInout,
    duration:1.5
})
.from("#right",{
    width: 0,
    ease: Expo.easeInout,
    duration:1.5
})
.to(".a",{
    delay: -2,
    stagger: .2, //ek jaise jitne we element h unpar delay
    opacity:1,
    y:0,
    ease: Expo.easeInout,
    duration:2
})
.to("#right img",{
    delay: -1,
    opacity:1,
    y:0,
    scale:1,
    ease: Expo.easeInout,
    duration:2
})