function playClick() {
  document.getElementById("click-sound").play();
}

const bgMusic = document.getElementById("bg-music");
function toggleMusic() {
  if (bgMusic.paused) {
    bgMusic.play();
  } else {
    bgMusic.pause();
  }
}

// Floating hearts generator
setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 6 + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 10000);
}, 500);
