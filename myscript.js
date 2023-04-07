/* Set the width of the side navigation to 250px and add a black overlay with opacity to the page */
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  document.getElementById("mySidenav").style.height = "10%";
  var overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  overlay.style.zIndex = "999";
  overlay.setAttribute("id", "overlay");
  document.body.appendChild(overlay);
}

/* Set the width of the side navigation to 0 and remove the overlay from the page */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  var overlay = document.getElementById("overlay");
  if (overlay) {
    overlay.parentNode.removeChild(overlay);
  }
  document.body.style.backgroundColor = "white";
}


// Action with arrows

const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const firstPar= document.getElementById('active-p');
const secondPar = document.getElementById('paragraph2');
const thirdPar = document.getElementById('paragraph3');
const activeImage = document.getElementById('image');

leftArrow.addEventListener("click", () => {
  if(firstPar.style.display !== "none"){
    thirdPar.style.display = "inline-block"
    firstPar.style.display = "none" ;
    activeImage.setAttribute("src", "desktop-image-hero-3.jpg");
  }
  else if(thirdPar.style.display !== "none"){
    secondPar.style.display = "inline-block"
    thirdPar.style.display = "none" ;
    activeImage.setAttribute("src", "desktop-image-hero-2.jpg");
  }
  else if(secondPar.style.display !== "none"){
    firstPar.style.display = "inline-block"
    secondPar.style.display = "none" ;
    activeImage.setAttribute("src", "desktop-image-hero-1.jpg");
  }
  }
)

rightArrow.addEventListener("click", () => {
  if(firstPar.style.display !== "none"){
    secondPar.style.display = "inline-block"
    firstPar.style.display = "none" ;
    activeImage.setAttribute("src", "desktop-image-hero-2.jpg");
  }
  else if(secondPar.style.display !== "none"){
    thirdPar.style.display = "inline-block"
    secondPar.style.display = "none" ;
    activeImage.setAttribute("src", "desktop-image-hero-3.jpg");
  }
  else if(thirdPar.style.display !== "none"){
    firstPar.style.display = "inline-block"
    thirdPar.style.display = "none" ;
    activeImage.setAttribute("src", "desktop-image-hero-1.jpg");
  }
  }
)