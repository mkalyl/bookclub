// script.js
const icons = document.querySelectorAll('.icon-book, .icon-ball, .icon-ouija');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'none';
      entry.target.offsetHeight;
      entry.target.style.animation = '';
    } else {
      entry.target.style.opacity = '0';
      entry.target.style.animation = 'none';
    }
  });
});

icons.forEach(icon => observer.observe(icon));