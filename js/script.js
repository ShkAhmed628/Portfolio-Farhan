

// light theme js 


const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  body.classList.add("light-theme");
  toggleBtn.innerHTML = '<i class="bi bi-moon"></i>';
  toggleBtn.style.color = "brown";
} else {
  body.classList.remove("light-theme");
  toggleBtn.innerHTML = '<i class="bi bi-sun"></i>';
  toggleBtn.style.color = "yellow";
}


toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-theme");

  if (body.classList.contains("light-theme")) {
    toggleBtn.innerHTML = '<i class="bi bi-moon"></i>';
    toggleBtn.style.color = "brown";
    localStorage.setItem("theme", "light");
  } else {
    toggleBtn.innerHTML = '<i class="bi bi-sun"></i>';
    toggleBtn.style.color = "yellow";
    localStorage.setItem("theme", "dark");
  }
});




// HOME PAGE JAVASCRIPT 



// light-theme.js




//   <!-- JavaScript for Offcanvas Behavior -->
   
          document.addEventListener('DOMContentLoaded', function () {
               const fullOffcanvas = document.getElementById('fullOffcanvas');
               const navOffcanvas = new bootstrap.Offcanvas(document.getElementById('navOffcanvas'));

               fullOffcanvas.addEventListener('shown.bs.offcanvas', function () {
                    setTimeout(() => {
                         navOffcanvas.show();
                    }, 300);
               });

               document.getElementById('navOffcanvas').addEventListener('hidden.bs.offcanvas', function () {
                    const fullOffcanvasInstance = bootstrap.Offcanvas.getInstance(fullOffcanvas);
                    if (fullOffcanvasInstance) {
                         fullOffcanvasInstance.hide();
                    }
               });
          });
  


// Gsap JS of Boxes Animation  main page



document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    ".boxes",
    {
      scale: 0.8,
      opacity: 0,
      transformOrigin: "center center"
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: "power4.out",
      stagger: {
        each: 0.25,
        from: "start"
      },
      scrollTrigger: {
        trigger: ".boxes",
        start: "top 80%",  
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        once: false,      
        markers: false      
      }
    }
  );
});






// ABOUT PAGE JAVASCRIPT  





// TESTMONIAL JS
        

document.addEventListener("DOMContentLoaded", () => {
  const sliderTrack = document.getElementById("sliderTrack");
  const testimonialCards = document.querySelectorAll(".testimonial-card");

  const cardWidth = testimonialCards[0].offsetWidth + 13; // 13 = margin or gap
  const isMobile = window.innerWidth <= 768;
  const visibleCards = isMobile ? 1 : 2;

  let index = 0;
  let totalCards = testimonialCards.length;

  // Clone all cards to make the loop seamless
  testimonialCards.forEach(card => {
    const clone = card.cloneNode(true);
    sliderTrack.appendChild(clone);
  });

  function moveSlider() {
    index++;
    sliderTrack.style.transition = "transform 0.6s ease-in-out";
    sliderTrack.style.transform = `translateX(-${index * cardWidth}px)`;

    // Reset back to the start seamlessly
    if (index >= totalCards) {
      setTimeout(() => {
        sliderTrack.style.transition = "none";
        sliderTrack.style.transform = `translateX(0px)`;
        index = 0;
      }, 600); // wait until the transition is over
    }
  }

  setInterval(moveSlider, 3000);
});




// collab card animation



  gsap.from(".collab-card", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".collab-card",
      start: "top 80%",
      toggleActions: "play none none reverse",
    }
  });



    // Animate the about content and stat cards and testmonial slider


  gsap.from(".stat-card" , {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".stat-card",
      start: "top 100%",
      toggleActions: "play none none reverse",
    }
  });


    gsap.from(".about-content" , {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".stat-card",
      start: "top 120%",
      toggleActions: "play none none reverse",
    }
  });

      gsap.from(".slider-container" , {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".stat-card",
      start: "top 70%",
      toggleActions: "play none none reverse",
    }
  });









//   RESUME_SECTION JS



             

    //  <!-- JavaScript for Offcanvas Behavior -->
  
          document.addEventListener('DOMContentLoaded', function () {
               const fullOffcanvas = document.getElementById('fullOffcanvas');
               const navOffcanvas = new bootstrap.Offcanvas(document.getElementById('navOffcanvas'));

               fullOffcanvas.addEventListener('shown.bs.offcanvas', function () {
                    setTimeout(() => {
                         navOffcanvas.show();
                    }, 300);
               });

               document.getElementById('navOffcanvas').addEventListener('hidden.bs.offcanvas', function () {
                    const fullOffcanvasInstance = bootstrap.Offcanvas.getInstance(fullOffcanvas);
                    if (fullOffcanvasInstance) {
                         fullOffcanvasInstance.hide();
                    }
               });
          });




    
// Gsap JS of Boxes Animation  main page


// Animate skill bars
  gsap.utils.toArray(".skill-bar").forEach(bar => {
    let progress = bar.dataset.progress;
    gsap.fromTo(bar,
      { width: "0%" },
      {
        width: progress + "%",
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: bar,
          start: "top 100%",
          
        }
      }
    );
  });



  // ANIMATE THE EDUCATION AND EXPERIENCE CARDS


  
  gsap.from(".detail_box" , {
    x: 200,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "detail_box",
      start: "top 100%",
      toggleActions: "play none none reverse",
    }
  });








//   SERVICE PAGE JAVASCRIPT



// Register the ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Animate each .cards item when it enters the viewport
  gsap.utils.toArray(".cards").forEach((card) => {
    gsap.fromTo(card,
      {
        scale: 0.8,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse", // Animate on enter, reset on leave
        }
      }
    );
  });







      // toggle button js 






        
  



  






