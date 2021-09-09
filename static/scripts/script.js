let closeBtn = document.querySelector("#btn");
let sideBar = document.querySelector(".sidebar");
let newWindow = window.matchMedia("(max-width: 768px)");
let getStartedBtn = document.getElementById('getStartedBtn')
let getStartedText = document.getElementById('getStartedText')



getStartedBtn.addEventListener('mouseenter', () => {
  getStartedBtn.style.background = 'white'
  getStartedText.style.color = 'orange'
});
getStartedBtn.addEventListener('mouseleave', () => {
  getStartedBtn.style.background = '#11101D'
  getStartedText.style.color = 'white'
});

// if (getStartedBtn.addEventListener("mouseenter", () => {
//   getStartedBtn.style.background = 'red'})) {
 
// }
// if (getStartedBtn.addEventListener("mouseleave", () => {
//   getStartedBtn.style.background = 'blue'})) {
 
// }

//   getStartedText.addEventListener("mouseenter", () => {
//     getStartedBtn.style.color = 'red'
//   });


// Function to toggle the logos display property on the side navigation bar
let toggleLogo = () => {
  let logo = document.querySelector("#nav-logo");
  if (logo.classList.contains("hidden")) {
    // Remove hidden class to element
    logo.classList.remove("hidden");
  } else {
    // Add hidden class to element
    logo.classList.add("hidden");
  }

  // Function to toggle the width of the side navigation bar
  let menuBtnChange = () => {
    if (sideBar.classList.contains("open")) {
      //replacing the icon class
      closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
      //replacing the icon class
      closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
  };

  // Function to check wim
  let myFunction = (x) => {
    let mobileNav = document.querySelector("#mobile-nav");
    if (x.matches) {
      // If media query matches
      mobileNav.classList.remove("hidden");
      sideBar.classList.add("hidden");
    } else {
      mobileNav.classList.add("hidden");
      sideBar.classList.remove("hidden");
    }
  };

  // Function to toggle the navigation sidebar
  closeBtn.addEventListener("click", () => {
    sideBar.classList.toggle("open");
    menuBtnChange();
    toggleLogo();
    getStartedState();
  });

  $(document).ready(function () {
    $(".sidenav").sidenav();
    myFunction(newWindow); // Call listener function at run time
    newWindow.addListener(myFunction); // Attach listener function on state changes
  });
};
