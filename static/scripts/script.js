let closeBtn = document.querySelector("#btn");
let sideBar = document.querySelector(".sidebar");
let newWindow = window.matchMedia("(max-width: 768px)");

// function tempAlert(msg,duration)
// {
//  var el = document.createElement("div");
//  el.setAttribute("style","position:absolute;top:40%;left:20%;background-color:white;");
//  el.innerHTML = msg;
//  setTimeout(function(){
//   el.parentNode.removeChild(el);
//  },duration);
//  document.body.appendChild(el);
// }
// tempAlert("close",1000);

// function setCookie(name,value,days) {
//     var expires = "";
//     if (days) {
//         var date = new Date();
//         date.setTime(date.getTime() + (days*24*60*60*1000));
//         expires = "; expires=" + date.toUTCString();
//     }
//     document.cookie = name + "=" + (value || "")  + expires + "; path=/";
// }
// function getCookie(name) {
//     var nameEQ = name + "=";
//     var ca = document.cookie.split(';');
//     for(var i=0;i < ca.length;i++) {
//         var c = ca[i];
//         while (c.charAt(0)==' ') c = c.substring(1,c.length);
//         if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
//     }
//     return null;
// }
// function eraseCookie(name) {   
//     document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
// }
// setCookie('SLAP','testcookie',7);
// var firstCookie = getCookie('SLAP');



// Materialize initilize mobile collapsable
$(document).ready(function(){
  $('.sidenav').sidenav();
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange(); 
  toggleLogo();
});

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
  if (sidebar.classList.contains("open")) {
    //replacing the icon class
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else {
    //replacing the icon class
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
  }
}

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

myFunction(newWindow) // Call listener function at run time
newWindow.addListener(myFunction) // Attach listener function on state changes


