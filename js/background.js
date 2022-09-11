function randomBg() {
  const bodyEl = document.querySelector("body");
  const url = `/images/${Math.floor(Math.random() * 3)}.jpg`;
  bodyEl.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(${url})`;
}
randomBg();
