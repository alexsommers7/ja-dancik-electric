// MOBILE NAV
// selecting parent of button AND all nav links for event delegation
const navParent = document.querySelector(".nav");
const navToggle = document.querySelector("#navi-toggle");

// toggle isOpen on first child, using css ~ selector to style subsequent siblings
navParent.addEventListener("click", () => {
    navToggle.classList.toggle("isOpen");
});


// SMOOTH SCROLL FOR ANCHOR LINKS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



// INTERSECTION OBSERVER API - FADE ON SCROLL
const observerOptions = {
    root: null, // Null = use viewport as root
    rootMargin: "0px", // Margin if desired for root
    threshold: 0.5 // Percentage of visibility needed on target element to run callback function
  };
  
  function observerCallback(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Fade in from top
        if (entry.target.classList.contains('fadeFromTop')) {
          entry.target.classList.replace('fadeFromTop', 'fadeFromTopVisible');
        }
        // Fade in from left
        else if (entry.target.classList.contains('fadeFromLeft')) {
          entry.target.classList.replace('fadeFromLeft', 'fadeFromLeftVisible');
        }
      }
    });
  }
  
const fadeElms = document.querySelectorAll('.fade');
  
const observer = new IntersectionObserver(observerCallback, observerOptions);
fadeElms.forEach(el => observer.observe(el));