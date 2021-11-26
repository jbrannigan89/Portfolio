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
let htmlButton = document.querySelector(".html-button");

let i = 0;
let text = `<div class='html-container'>
<img src="pngegg.png" class='skillimgs html-image' alt="HTML Logo" />
<article class="text-container-html"></article>`;

htmlButton.addEventListener("click", function typeWriterHTML() {
  htmlButton.classList.add("invisible");
  if (i < text.length) {
    htmlContainer.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriterHTML, 75);
  }
});

//CSS Hovering Functionality
let cssArea = document.querySelector(".css-container");
let cssTextContainer = document.querySelector(".text-container-css");
let CssButton = document.querySelector(".css-button");

let z = 0;
let text2 = `.links-container {display: flex;
  justify-content: space-between;
  transition: all linear 0.5s;
  transform: translateX(85vw)}
`;

CssButton.addEventListener("click", function typeWriterCSS() {
  if (z < text2.length) {
    CssButton.classList.add("invisible");
    cssTextContainer.innerHTML += text2.charAt(z);
    z++;
    setTimeout(typeWriterCSS, 75);
  }
});

//JS Hovering Functionality

let JSShowButton = document.querySelector(".JS-button");
let jsTextContainer = document.querySelector(".text-container-js");

let y = 0;
let text3 = `JSShowButton.addEventListener("click", function typeWriterJS() {
  JSShowButton.classList.add("invisible");
  if (y < text3.length) {
    jsTextContainer.innerHTML += text3.charAt(y);
    y++;
    var TimingLoop = setTimeout(typeWriterJS, 75);
  }
})
`;

JSShowButton.addEventListener("click", function typeWriterJS() {
  JSShowButton.classList.add("invisible");
  if (y < text3.length) {
    jsTextContainer.innerHTML += text3.charAt(y);
    y++;
    var TimingLoop = setTimeout(typeWriterJS, 75);
  }
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

//Fixed Navbar After Scrolling
let AboutSection = document.querySelector("#about");
let topSection = document.querySelector("#top");
const NavOptions = { threshold: 0.7, root: null };
let homeLink = document.querySelector("#home-link");

let FixedNav = new IntersectionObserver(function (entries, FixedNav) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) {
      navContainer.style.position = "fixed";
      navContainer.style.background = "rgb(134, 42, 35)";
      navContainer.classList.add("margin");
      homeLink.style.display = "inline";
    } else {
      navContainer.style.position = "absolute";
      navContainer.style.background = "";
      homeLink.style.display = "none";
    }
  });
}, NavOptions);
console.log(FixedNav);

FixedNav.observe(topSection);
