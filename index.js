 // Preloader logic
const preloader = document.querySelector('.preloader');

// Hide preloader after window loads
window.addEventListener('load', function () {
  preloader.classList.add('hide-preloader');
});

// Video and play/pause button logic
const video = document.querySelector('.video-player');
const btn = document.querySelector('.switch-btn');
let isPlaying = true;

btn.addEventListener('click', function () {
  // Toggle play/pause and update button state
  if (!btn.classList.contains('slide')) {
    btn.classList.add('slide');
    video.pause();
  } else {
    btn.classList.remove('slide');
    video.play();
  }
});
