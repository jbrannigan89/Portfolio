let navButton = document.querySelector(".nav-button");
let links = document.querySelector(".links-container");
let navContainer = document.querySelector(".nav-container");

function navBar() {
  links.classList.toggle("show");
}
function movingNav() {
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

window.addEventListener("load", slowLoad());

window.addEventListener("resize", slowLoad);

//Fixed Navbar After Scrolling
let AboutSection = document.querySelector("#about");
let topSection = document.querySelector("#top");
const NavOptions = { threshold: 0.8, root: null };
let homeLink = document.querySelector("#home-link");
let navbarBackground = document.querySelector(".nav-button-container");

let FixedNav = new IntersectionObserver(function (entries, FixedNav) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) {
      navContainer.style.position = "fixed";
      navbarBackground.style.background = "rgb(243, 226, 226)";
      homeLink.style.display = "inline";
      navbarBackground.style.boxShadow = "0px 3px 10px gray";
    } else {
      navContainer.style.position = "absolute";
      navbarBackground.style.background = "";navbarBackground.style.boxShadow = "";
      homeLink.style.display = "none";
      links.classList.remove("show");
    }
  });
}, NavOptions);
console.log(FixedNav);

FixedNav.observe(topSection);

//Clicking Nav Option closes Vertical NavBar

let theNavLinks = document.querySelectorAll(".nav-links");

theNavLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    links.classList.remove("show");
    movingNav();
  });
});

//If Nav Links are Open and you scroll to the top manually the Nav BAr Still Rotates

function rotateNavButton() {
  navButton.classList.remove("rotate");
}
window.addEventListener("scroll", function () {
  if (window.pageYOffset == 0) {
    rotateNavButton();
  }
});

//Changing my pic location as screen gets bigger
window.addEventListener("load", function desktopVersion() {
  let subContainerSection = document.querySelector(".sub-container");
  let description = document.querySelector(".description");
  console.log(window.innerWidth);
  if (window.innerWidth >= 600) {
    description.innerHTML = `<img class='pic' src='portfoliopic-1.jpg' /> <h1 class="name"> Joe Brannigan</h1>
                <h3 class="profession">Web Developer</h3>
                <div class='social-links'>
                    <div class='linknum'><a href='https://twitter.com/JosephBrannig15' target="_blank"
                            class='link-button'><i class="fa fa-twitter-square" aria-hidden="true"></i>
                        </a>
                        <p class=link-text>Twitter</p>
                    </div>
                    <div class='linknum'>
                        <a href="https://github.com/jbrannigan89" target="_blank" class='link-button'><i
                                class="fa fa-github-alt" aria-hidden="true"></i>
                        </a>
                        <p class=link-text>Github</p>
                    </div>

                    <div class='linknum'>
                        <a href='https://www.facebook.com' target='_blank' class='link-button'><i
                                class="fa fa-facebook-official" aria-hidden="true"></i>
                        </a>
                        <p class=link-text>Facebook</p>
                    </div>

                    <div class='linknum'>
                        <button type='button' class='link-button'><i class="fa fa-address-card-o"
                                aria-hidden="true"></i>
                        </button>
                        <p class=link-text>Resume</p>
                    </div>
                </div>`;
    subContainerSection.innerHTML = `
                <p class='abt-description'>Hello! My name's Joe and I'm a web developer. <br><br>
                    I started tinkering with web design a few years ago. I was taking an IT networking
                    course on coursera and was exposed to programming. I quickly found out that I enjoy programming more
                    than the networking side of technology. I then dove in to learning from freeCodeCamp courses,
                    youtube
                    tutorials, and
                    the expansive breadth of knowledge available on the internet.
                    <br><br>
                    I'm currently based in Greenville, South Carolina. In my freetime I like to travel, spend time with
                    family, hike, and code.
                </p>
                <figure><img src='mojo.jpg' class='mojopic' />
                    <figcaption>Lazy dog Mojo</figcaption>
                </figure>`;
    sociallinks.classList.add("view");
  }
});
window.addEventListener("resize", function desktopVersion() {
  let subContainerSection = document.querySelector(".sub-container");
  let description = document.querySelector(".description");
  console.log(subContainerSection.clientWidth);
  if (window.innerWidth >= 600) {
    description.innerHTML = `<img class='pic' src='portfoliopic-1.jpg' /> <h1 class="name"> Joe Brannigan</h1>
                <h3 class="profession">Web Developer</h3>
                <div class='social-links'>
                    <div class='linknum'><a href='https://twitter.com/JosephBrannig15' target="_blank"
                            class='link-button'><i class="fa fa-twitter-square" aria-hidden="true"></i>
                        </a>
                        <p class=link-text>Twitter</p>
                    </div>
                    <div class='linknum'>
                        <a href="https://github.com/jbrannigan89" target="_blank" class='link-button'><i
                                class="fa fa-github-alt" aria-hidden="true"></i>
                        </a>
                        <p class=link-text>Github</p>
                    </div>

                    <div class='linknum'>
                        <a href='https://www.facebook.com' target='_blank' class='link-button'><i
                                class="fa fa-facebook-official" aria-hidden="true"></i>
                        </a>
                        <p class=link-text>Facebook</p>
                    </div>

                    <div class='linknum'>
                        <button type='button' class='link-button'><i class="fa fa-address-card-o"
                                aria-hidden="true"></i>
                        </button>
                        <p class=link-text>Resume</p>
                    </div>
                </div>`;
    subContainerSection.innerHTML = `
                <p class='abt-description'>Hello! My name's Joe and I'm a web developer. <br><br>
                    I started tinkering with web design a few years ago. I was taking an IT networking
                    course on coursera and was exposed to programming. I quickly found out that I enjoy programming more
                    than the networking side of technology. I then dove in to learning from freeCodeCamp courses,
                    youtube
                    tutorials, and
                    the expansive breadth of knowledge available on the internet.
                    <br><br>
                    I'm currently based in Greenville, South Carolina. In my freetime I like to travel, spend time with
                    family, hike, and code.
                </p>
                <figure><img src='mojo.jpg' class='mojopic' />
                    <figcaption>Lazy dog Mojo</figcaption>
                </figure>`;
  } else {
    description.innerHTML = `<h1 class="name"> Joe Brannigan</h1>
                <h3 class="profession">Web Developer</h3>
                <div class='social-links'  style='opacity: 1'>
                    <div class='linknum'><a href='https://twitter.com/JosephBrannig15' target="_blank"
                            class='link-button'><i class="fa fa-twitter-square" aria-hidden="true"></i>
                        </a>
                        <p class=link-text>Twitter</p>
                    </div>
                    <div class='linknum'>
                        <a href="https://github.com/jbrannigan89" target="_blank" class='link-button'><i
                                class="fa fa-github-alt" aria-hidden="true"></i>
                        </a>
                        <p class=link-text>Github</p>
                    </div>

                    <div class='linknum'>
                        <a href='https://www.facebook.com' target='_blank' class='link-button'><i
                                class="fa fa-facebook-official" aria-hidden="true"></i>
                        </a>
                        <p class=link-text>Facebook</p>
                    </div>

                    <div class='linknum'>
                        <button type='button' class='link-button'><i class="fa fa-address-card-o"
                                aria-hidden="true"></i>
                        </button>
                        <p class=link-text>Resume</p>
                    </div>
                </div>`;
    subContainerSection.innerHTML = `<img class='pic' src='portfoliopic-1.jpg' />
                <p class='abt-description'>Hello! My name's Joe and I'm a web developer. <br><br>
                    I started tinkering with web design a few years ago. I was taking an IT networking
                    course on coursera and was exposed to programming. I quickly found out that I enjoy programming more
                    than the networking side of technology. I then dove in to learning from freeCodeCamp courses,
                    youtube
                    tutorials, and
                    the expansive breadth of knowledge available on the internet.
                    <br><br>
                    I'm currently based in Greenville, South Carolina. In my freetime I like to travel, spend time with
                    family, hike, and code.
                </p>
                <figure><img src='mojo.jpg' class='mojopic' />
                    <figcaption>Lazy dog Mojo</figcaption>
                </figure>`;
  }
});
