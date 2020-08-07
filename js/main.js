var instance = new vidbg(".video", {
  mp4: "video/world.mp4",
  webm: "video/world.webm",
  poster: "img/poster.jpg", // URL or relative path to fallback image
  overlay: false // Boolean to display the overlay or not
});

var rellax = new Rellax(".rocket");

if (document.body.clientWidth < 576) {
  rellax.destroy();
}

AOS.init();
