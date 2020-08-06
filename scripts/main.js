// MOBILE NAV
const navBtnOpen = document.querySelector(".nav__icon--open");
const navBtnClose = document.querySelector(".nav__icon--close");
const navLink = document.querySelectorAll(".nav__link, .nav__icon--close");
const navList = document.querySelector(".nav__list");

// Open nav on hamburger click
navBtnOpen.addEventListener("click", openNav);

// Close nav on 'x' or any link click, or if screen sizes goes larger than tablet
for (let i = 0; i < navLink.length; i++)
{
  navLink[i].addEventListener("click", closeNav);
}
// Function declarations
function openNav() {
  navBtnOpen.style.visibility = "hidden";
  navBtnClose.style.visibility = "visible";
  navList.classList.add("nav-active");
}

function closeNav() {
  navBtnClose.style.visibility = "hidden";
  navBtnOpen.style.visibility = "visible";
  navList.classList.remove("nav-active");
}



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