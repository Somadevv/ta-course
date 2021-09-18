const boxes = Array.from(document.querySelectorAll(".box"));
const icons = Array.from(document.querySelectorAll(".feature-icon"));

boxes.forEach((box, index) => {
  // Hover on
  box.addEventListener("mouseenter", () => {
    // icons[index].style.color = "#FBB800";
    boxes[index].style.background = "white";
  });
  // Hover off
  box.addEventListener("mouseleave", () => {
    icons[index].style.color = "white";
    boxes[index].style.background = "";
  });
});

// Toggle the logos display property on the side navigation bar
function toggleLogo() {
  let logo = document.querySelector("#nav-logo");
  if (logo.classList.contains("hidden")) {
    logo.classList.remove("hidden");
  } else {
    logo.classList.add("hidden");
  }
}

let closeBtn = document.querySelector("#btn");
let sideBar = document.querySelector(".sidebar");

// Toggle width of side navigation
function menuBtnChange() {
  if (sideBar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
  }
}

// Toggle navigation sidebar
closeBtn.addEventListener("click", () => {
  sideBar.classList.toggle("open");
  menuBtnChange();
  toggleLogo();
});

// Toggle window state
function toggleWindow(x) {
  let mobileNav = document.querySelector("#mobile-nav");
  if (x.matches) {
    // If media query matches
    mobileNav.classList.remove("hidden");
    sideBar.classList.add("hidden");
  } else {
    mobileNav.classList.add("hidden");
    sideBar.classList.remove("hidden");
  }
}

$(document).ready(function () {
  let newWindow = window.matchMedia("(max-width: 768px)");
  featureHover();
  $(".sidenav").sidenav();
  toggleWindow(newWindow); // Call listener function at run time
  newWindow.addListener(toggleWindow); // Attach listener function on state changes
});
