const phoneImages = document.querySelectorAll(".i-phone-print img");

const delay = 3000;
let idCorrentImage = 0; 

phoneImages[idCorrentImage].style.opacity = 1;

setInterval(nextImage, delay);

function nextImage() {
  phoneImages[idCorrentImage].style.opacity = 0;

  idCorrentImage = (idCorrentImage + 1) % phoneImages.length;
  phoneImages[idCorrentImage].style.opacity = 1;
}
