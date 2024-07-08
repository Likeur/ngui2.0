gsap.registerPlugin(ScrollTrigger) 


function getLenis(){
    const lenis = new Lenis()
  
    lenis.on('scroll', (e) => {
      console.log(e)
    })
  
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
  
    requestAnimationFrame(raf)
}
  
  function initSwiper(){
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 60,
      effect: "fade",
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
      },
  
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
    });
  }
  const btnToggle = document.querySelector('.toggleMenuBtn')
  const nav = document.querySelector('.nav')
  const barUn = document.querySelector('.barUn')
  const barDeux = document.querySelector('.barDeux')
  
  btnToggle.addEventListener('click', ()=>{
    nav.classList.toggle('scale-0')
    barUn.classList.toggle('rotate-45')
    barDeux.classList.toggle('-rotate-45')
    barUn.classList.toggle('absolute')
    barUn.classList.toggle('top-4')
    barDeux.classList.toggle('mb-2')
  })
    
  
  
  // appel des fonctions
  getLenis()
  initSwiper()


  function carSwiper(){
    var swiper = new Swiper(".mySwiper2", {
      effect: "creative",
      creativeEffect: {
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      },
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
      }
    });
  }

  carSwiper()
  function carSwiper3(){
    var swiper = new Swiper(".mySwiper3", {
      effect: "creative",
      creativeEffect: {
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      },
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
      }
    });
  }

  carSwiper3()

  
  const vehiculeBtn1 = document.querySelector('.vehiculebtn')
  const vehiculeBtn2 = document.querySelector('.vehiculebtn2')
  const dropdown = document.querySelector('.dropdown')
  

  vehiculeBtn1.addEventListener('click', () => {

    dropdown.classList.toggle('lg:scale-0')
    
  })
  vehiculeBtn2.addEventListener('click', () => {

    dropdown.classList.toggle('h-0')
    dropdown.classList.toggle('p-4')
  })

  function gsapintro(){
    gsap.from('.head, .text1, .text2, .text3, .para, .btngroup, .carou', {
      y:30,
      opacity:0,
      duration:1,
      stagger:{amount:.2}
    })

    gsap.from('.marque', {
      scrollTrigger: {
        trigger:'.marque',
        scrub:true
      
      }, // start animation when ".box" enters the viewport
      scale:0.8
    });
    gsap.from('.service', {
      scrollTrigger: {
        trigger:'.service',
      
      }, // start animation when ".box" enters the viewport
      y:50,
      opacity:0,
    });
    gsap.to('.imagehome1', {
      scrollTrigger: {
        trigger:'.imagebox',
        scrub: true
      
      }, // start animation when ".box" enters the viewport
      scale:1.5

    });

    gsap.from('.imagedetail1, .textdetail1', {
      scrollTrigger: {
        trigger:'.detail1',
      
      }, // start animation when ".box" enters the viewport
      y:40,
      opacity:0,
      stagger:{amount:.2}

    });

    gsap.to('.detail1', {
      scrollTrigger: {
        trigger:'.detail1',
        scrub:true
      
      }, // start animation when ".box" enters the viewport
      y:-70,
      scale:0.9

    });
    gsap.to('.detail2', {
      scrollTrigger: {
        trigger:'.detail2',
        scrub:true
      
      }, // start animation when ".box" enters the viewport
      y:-70,
      scale:0.9

    });
    gsap.to('.detail3', {
      scrollTrigger: {
        trigger:'.detail3',
        scrub:true
      
      }, // start animation when ".box" enters the viewport
      y:-70,
      scale:0.9

    });


    gsap.from('.imagedetail2, .textdetail2', {
      scrollTrigger: {
        trigger:'.detail2',
      
      }, // start animation when ".box" enters the viewport
      y:40,
      opacity:0,
      stagger:{amount:.2}

    });
    gsap.from('.imagedetail3, .textdetail3', {
      scrollTrigger: {
        trigger:'.detail3',
      
      }, // start animation when ".box" enters the viewport
      y:40,
      opacity:0,
      stagger:{amount:.2}

    });

    gsap.to('.imagehome2', {
      scrollTrigger: {
        trigger:'.imagebox2',
        scrub: true
      
      }, // start animation when ".box" enters the viewport
      scale:1.5

    });
    gsap.from('.client', {
      scrollTrigger: {
        trigger:'.client',
        scrub: true
      
      }, // start animation when ".box" enters the viewport
      scale:0.9

    });
  }

  gsapintro()