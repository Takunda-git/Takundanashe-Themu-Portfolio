// Toggle menu on small screens
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
};


window.onscroll = () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");

}

// Typing Text Code

const typed = new Typed(".multiple-text", {
    strings: ['Fullstack Developer', 'Web and Mobile Application Designer', 'Youth Coding Instructor'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
});


//   readmore/less about me 
 
    const readMoreBtn = document.getElementById('read-more-btn');
    const readLessBtn = document.getElementById('read-less-btn');
    const aboutShort = document.getElementById('about-short');
    const aboutFull = document.getElementById('about-full');

    readMoreBtn.addEventListener('click', function (e) {
      e.preventDefault();
      aboutFull.classList.add('show');
      aboutShort.style.display = 'none';
      readMoreBtn.style.display = 'none';
    });

    readLessBtn.addEventListener('click', function (e) {
      e.preventDefault();
      aboutFull.classList.remove('show');
      aboutShort.style.display = 'block';
      readMoreBtn.style.display = 'inline-block';
    });
 


  document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  });
  });








