let navButton = document.querySelector(".nav-button");
let links = document.querySelector(".links-container");
let navContainer = document.querySelector(".nav-container");

function navBar() {
  links.classList.toggle("show");
}
function movingNav() {
  navButton.classList.toggle("moveNav");
  navButton.classList.toggle("rotate");
}

navButton.addEventListener("click", navBar);
navButton.addEventListener("click", movingNav);

//Skills Section
//HTML Hovering Functionality

let htmlSymbol = document.querySelector(".html-container");
let htmlContainer = document.querySelector(".text-container-html");

let i = 0;
let text = `<div class='html-container'>
<img src="pngegg.png" class='skillimgs html-image' alt="HTML Logo" />
<article class="text-container-html"></article>`;

htmlSymbol.onmouseover = function typeWriterHTML() {
  if (i < text.length) {
    htmlContainer.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriterHTML, 75);
  }
};
$(htmlSymbol).mouseleave(function () {
  htmlContainer.innerHTML = "";
  i = 0;
});

//CSS Hovering Functionality
let cssArea = document.querySelector(".css-container");
let cssTextContainer = document.querySelector(".text-container-css");

let z = 0;
let text2 = `.links-container {display: flex;
  justify-content: space-between;
  transition: all linear 0.5s;
  transform: translateX(85vw)}
`;

cssArea.addEventListener("mouseover", function typeWriterCSS() {
  if (z < text2.length) {
    cssTextContainer.innerHTML += text2.charAt(z);
    z++;
    setTimeout(typeWriterCSS, 75);
  }
});
$(cssArea).mouseleave(function () {
  cssTextContainer.innerHTML = "";
  z = 0;
});

//JS Hovering Functionality

let jsArea = document.querySelector(".js-container");
let jsTextContainer = document.querySelector(".text-container-js");

let y = 0;
let text3 = `jsArea.addEventListener("mouseover", function typeWriterJS() {if (y < text3.length) {jsTextContainer.innerHTML += text3.charAt(y);
    y++;
    setTimeout(typeWriterJS, 75)}})`;

jsArea.addEventListener("mouseover", function typeWriterJS() {
  if (y < text3.length) {
    jsTextContainer.innerHTML += text3.charAt(y);
    y++;
    setTimeout(typeWriterJS, 75);
  }
});
$(jsArea).mouseleave(function () {
  jsTextContainer.innerHTML = "";
  y = 0;
});

//Content Fade-In
const options = { root: null, threshold: 0.4 };
let fadeInItems = document.querySelectorAll(".fade-in");

let appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  //console.log(entries);
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("view");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
options);

fadeInItems.forEach((item) => {
  appearOnScroll.observe(item);
});
let sociallinks = document.querySelector(".social-links");

function slowLoad() {
  sociallinks.style.opacity = 1;
}

window.setTimeout(slowLoad, 1000);
