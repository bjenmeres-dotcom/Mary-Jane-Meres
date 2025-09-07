const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
});


document.getElementById('discoverBtn').addEventListener('click', () => {
  alert('Discover more about the Fendi Fall/Winter 2025-26 Collection!');
});


function nextSlide(sliderId) {
  const slider = document.getElementById(slider1).querySelector('.slides');
  const slideWidth = slider.querySelector('img').clientWidth;
  slider.style.transform = `translateX(-${slideWidth}px)`;
}

function prevSlide(sliderId) {
  const slider = document.getElementById(slider2).querySelector('.slides');
  slider.style.transform = `translateX(0)`;
}
