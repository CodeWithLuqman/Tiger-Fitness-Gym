// Navbar Scroll Effect
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Mobile Menu Toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        // Smooth Scrolling for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Scroll Animation
        function animateOnScroll() {
            const elements = document.querySelectorAll('.service-card, .class-card, .gallery-item, .testimonial-card');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;
                
                if (elementPosition < screenPosition) {
                    element.classList.add('animate');
                }
            });
        }

        // Initial check on load
        window.addEventListener('load', animateOnScroll);
        
        // Check on scroll
        window.addEventListener('scroll', animateOnScroll);

        console.log("Plans section loaded");
  
        // Animate counters from 0 to target value
const counters = document.querySelectorAll('.counter');

const startCounting = () => {
  counters.forEach(counter => {
    counter.innerText = '0';
    const updateCounter = () => {
      const target = +counter.getAttribute('data-target');
      const current = +counter.innerText;
      const increment = target / 100;

      if (current < target) {
        counter.innerText = `${Math.ceil(current + increment)}`;
        setTimeout(updateCounter, 30);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });
};

// Trigger on scroll into view
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startCounting();
      observer.disconnect();
    }
  });
}, { threshold: 0.5 });

observer.observe(document.querySelector('.about-stats'));

// text animation 

  new Typed("#typed-words", {
    strings: ["Running", "Lifting", "Fat Loss","Weight Gain","Physical Fitness"], // ← apne lafz yahan
    typeSpeed: 80,     // typing speed (ms per letter)
    backSpeed: 80,     // delete speed (ms per letter)
    backDelay: 270,       // ***no pause*** after word ends
    startDelay: 300,    // optional: start 0.3 s after page load
    loop: true,
    smartBackspace: false,
    showCursor: false   // ham cursor khud CSS border se dikha rahe hain
  });

/*Animation and transitions*/

 document.addEventListener("DOMContentLoaded", function () {
    const faders = document.querySelectorAll('.fade-in');
    const counters = document.querySelectorAll(".counter");
    let counted = false;

    const appearOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('visible');
        appearOnScroll.unobserve(entry.target);

        // ✅ Start counting when stats come into view
        if (entry.target.classList.contains('about-stats') && !counted) {
          counters.forEach(counter => {
            const updateCount = () => {
              const target = +counter.getAttribute('data-target');
              const count = +counter.innerText;
              const increment = Math.ceil(target / 100);

              if (count < target) {
                counter.innerText = count + increment;
                setTimeout(updateCount, 20);
              } else {
                counter.innerText = target;
              }
            };
            updateCount();
          });
          counted = true;
        }
      });
    }, appearOptions);

    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  });
/*Icon*/
const scrollBtn = document.getElementById("scrollTopBtn");
    window.onscroll = function () {
      scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
    };
    scrollBtn.onclick = function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

function scrollToSection(event, id) {
  event.preventDefault();
  document.getElementById(id).scrollIntoView({
    behavior: 'smooth'
  });
}
// opening section


  document.addEventListener("DOMContentLoaded", function () {
    // ✅ Highlight today's day
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    const rows = document.querySelectorAll('.day-row');
    rows.forEach(row => {
      if (row.dataset.day === today) {
        row.classList.add('today');
      }
    });

    // ✅ Intersection Observer for scroll animation
    const hoursSection = document.querySelector('.hours-section');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          hoursSection.classList.add('visible');
        }
      });
    }, { threshold: 0.4 });

    observer.observe(hoursSection);
  });

