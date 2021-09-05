let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");


closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function
});


// following are the code to change sidebar button(optional)
function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    //replacing the iocns class
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else {
    //replacing the iocns class
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
  }
}
