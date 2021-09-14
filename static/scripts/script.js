let closeBtn = document.querySelector("#btn");
let sideBar = document.querySelector(".sidebar");
let newWindow = window.matchMedia("(max-width: 768px)");

// Function to toggle the logos display property on the side navigation bar

function toggleLogo() {
  let logo = document.querySelector("#nav-logo");
  if (logo.classList.contains("hidden")) {
    // Remove hidden class to element
    logo.classList.remove("hidden");
  } else {
    // Add hidden class to element
    logo.classList.add("hidden")
  }
}

// Function to toggle the width of the side navigation bar
function menuBtnChange() {
  if (sideBar.classList.contains("open")) {
    //replacing the icon class
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else {
    //replacing the icon class
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
  }
}

// Function to toggle the navigation sidebar
closeBtn.addEventListener("click", () => {
  sideBar.classList.toggle("open");
  menuBtnChange(); 
  toggleLogo();
});

// Function to check wim
function myFunction(x) {
  let mobileNav = document.querySelector("#mobile-nav");
  if (x.matches) { // If media query matches
    mobileNav.classList.remove("hidden")
    sideBar.classList.add("hidden")
  } else {
    mobileNav.classList.add("hidden")
    sideBar.classList.remove("hidden")
  }
}


$(document).ready(function(){
  $('.sidenav').sidenav();
  myFunction(newWindow) // Call listener function at run time
  newWindow.addListener(myFunction) // Attach listener function on state changes
});





