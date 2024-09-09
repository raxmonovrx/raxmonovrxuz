const open = document.querySelector(".logInBtn");
const modal = document.querySelector(".login__form");
const close = document.querySelector(".close");
// const videos = [
//   "public/video/theme.mp4",
//   "public/video/theme01.mp4",
// ];

// let lastIndex = -1;

// document
//   .getElementById("changeThemeBtn")
//   .addEventListener("click", function () {
//     const video = document.getElementById("backgroundVideo");

//     let randomIndex;
//     do {
//       randomIndex = Math.floor(Math.random() * videos.length);
//     } while (randomIndex === lastIndex);

//     lastIndex = randomIndex;
//     video.src = videos[randomIndex];
//     video.load();
//     video.play();
//   });

open.addEventListener("click", () => {
  modal.classList.add("active");
});

close.addEventListener("click", () => {
  modal.classList.remove("active");
});

