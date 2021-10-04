/*jshint esversion: 6 */ 

const sideBar = document.querySelector(".sidebar");
const closeBtn = document.querySelector("#btn");


// Toggle logo display property for side navigation
const toggleLogo = () => {
  let logo = document.querySelector("#nav-logo");
  if (logo.classList.contains("hidden")) {
    logo.classList.remove("hidden");
  } else {
    logo.classList.add("hidden");
  }
};

// Toggle width for side navigation
const menuBtnChange = () => {
  if (sideBar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
  }
};

// Toggle navigation sidebar
closeBtn.addEventListener("click", () => {
  sideBar.classList.toggle("open");
  menuBtnChange();
  toggleLogo();
});

// Toggle window state
const toggleWindow = (x) => {
  let mobileNav = document.querySelector("#mobile-nav");
  if (x.matches) {
    // If media query matches
    for (let i = 0; i < modules.length; i++){
      modules[i].innerHTML = i + 1;
    }
    mobileNav.classList.remove("hidden");
    sideBar.classList.add("hidden");
  } else {
    mobileNav.classList.add("hidden");
    sideBar.classList.remove("hidden");
  }
};

const whenClick = (node) => {
  const element = document.querySelector(".highlighted");
  element && element.classList.remove("highlighted");
  node.classList.add("highlighted");
};

const addClicks = () => {
  document
    .querySelectorAll(".modules")
    .forEach((n) => n.addEventListener("click", () => whenClick(n)));
};

$(document).ready(function () {
  let newWindow = window.matchMedia("(max-width: 768px)");
  $(".sidenav").sidenav();
  addClicks();
  toggleWindow(newWindow); // Call listener function at run time
  newWindow.addListener(toggleWindow); // Attach listener function on state changes
});
