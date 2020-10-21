let controller = new ScrollMagic.Controller();
let slideScene;

function animateSlide(){
    controler = new ScrollMagic.Controller();
    const slider = document.querySelectorAll(".slide");
    const nav = document.querySelector(".nav-header");

    slider.forEach(slide => {
        const revealImg =   slide.querySelector(".reveal-img");
        const img = slide.querySelector("img");
        const revealText = slide.querySelector(".reveal-text");
        ///gsap
        const slideTl = gsap.timeline({ 
            defaults: {
            duration:1,
            ease:"power2.inOut" }
        });
        slideTl.fromTo(revealImg, { x:"0%" } , {x: "100%"});
        slideTl.fromTo(img, { scale:"2" } , {scale: "1"}, '-=0.8');
        slideTl.fromTo(revealText, {x:"0%"},{x: "100%"}, "-=0.8");
        slideTl.fromTo(nav, {y:"-80%"}, {y:"0%"}, "-=1");
        //scroll reveal
        slideScene = new ScrollMagic.Scene({
            triggerElement : slide,
            triggerHook: 0.25,
            reverse: false
        }).setTween(slideTl).addTo(controller);
        // page animation
        const pageTl = gsap.timeline();
    });
}


animateSlide();

let mouse = document.querySelector(".cursor");
const burger = document.querySelector(".burger");
/*const navBar = document.querySelector(".nav-bar")
burger.addEventListener("click",()=>{
    navBar.classList.toggle("expanded");
    
});*/



function cursor(e){
    
    mouse.style.top = e.pageY + "px";
    mouse.style.left = e.pageX + "px";
}


const mouseText = document.querySelector('.cursor-text');
function activeCursor(e){
    if(e.target.classList.contains('burger') || (e.target.id === 'logo')){
        mouse.classList.add('nav-active');
        
    }else if(e.target.classList.contains('explore')){
        mouse.classList.add('explore-active');
        gsap.to('.title-swipe',1,{y:'0%'}); 
        mouseText.textContent = 'Tap';
    }
    else{
        gsap.to('.title-swipe',1,{y:'100%'}); 
        mouseText.textContent = '';
        mouse.classList.remove('explore-active');
        mouse.classList.remove('nav-active');
    }
}

function activeBurger(e){
    if (!e.target.classList.contains('active')){
        gsap.to('.line1',0.5,{rotate : '45deg', y : '5', background :'black'});
        gsap.to('.line2',0.5,{rotate : '-45deg', y : '-5', background : 'black'});
        gsap.to('.nav-bar',0.7,{clipPath : 'circle(1900px at 100% -10%)'});
        gsap.to('#logo',1,{color : 'black'});
        e.target.classList.add('active');
      //  document.html.classList.add('hide');
    }else{
        gsap.to('.line1',0.5,{rotate : '0', y : '0', background :'white'});
        gsap.to('.line2',0.5,{rotate : '0', y : '0', background : 'white'});
        gsap.to('.nav-bar',0.3,{clipPath : 'circle(50px at 100% -10%)'});
        gsap.to('#logo',1,{color : 'white'});
        e.target.classList.remove('active');
      //  document.html.classList.remove('hide');
    }
}
   

burger.addEventListener('click',activeBurger);
window.addEventListener('mousemove',cursor);
window.addEventListener('mouseover',activeCursor);