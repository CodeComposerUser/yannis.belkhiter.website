const welcome = document.querySelectorAll('header.h3 span')

window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
    .staggerFrom(welcome, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)

    
    

    TL.play();
})