const modules = Array.from(document.querySelectorAll(".modules"));
const sideBar = document.querySelector(".sidebar");
const closeBtn = document.querySelector("#btn");
const courseView = document.querySelector(".course-view");
const moduleTitles = ["RSI", "Moving average", "3", "4"];
const moduleDescriptions = ["desc1", "desc2", "desc3", "desc4"];
const imageSources = [
  "/static/images/RSI.png",
  "/static/images/trading.png",
  "/static/images/trading2.png",
  "/static/images/trading3.png",
  "/static/images/logo.png"
];

const elementId = "module-intro-image";
const elementAlt = elementId;

const createImage = (id, alt, src) => {
  const image = document.createElement("img");
  for (i = 0; i < imageSources.length; i++) {
    Object.assign(image, {
      id: id,
      alt: alt,
      src: src,
    });
  }
  return image;
};

const moduleImage = [
  createImage(elementId, elementAlt, imageSources[0]),
  createImage(elementId, elementAlt, imageSources[1]),
  createImage(elementId, elementAlt, imageSources[2]),
  createImage(elementId, elementAlt, imageSources[3]),
  createImage(elementId, elementAlt, imageSources[4]),
  createImage(elementId, elementAlt, imageSources[5]),
  createImage(elementId, elementAlt, imageSources[6]),
  createImage(elementId, elementAlt, imageSources[7]),
  createImage(elementId, elementAlt, imageSources[8]),
  createImage(elementId, elementAlt, imageSources[9]),
  createImage(elementId, elementAlt, imageSources[10]),
  createImage(elementId, elementAlt, imageSources[11]),
  createImage(elementId, elementAlt, imageSources[12]),
  createImage(elementId, elementAlt, imageSources[13]),
  createImage(elementId, elementAlt, imageSources[14])

];

modules.forEach((m, i) => {
  modules[i].addEventListener("click", () => {
    removeImage(document.getElementById("module-intro-image"));
    drawModuleIntro(
      courseView.insertAdjacentElement("afterbegin", moduleImage[i]),
      moduleTitles[i],
      moduleDescriptions[i]
    );
  });
});

const removeImage = (image) => {
  image.remove();
};

const drawModuleIntro = (image, title, description) => {
  const moduleTitle = document.querySelector(".intro-title");
  const moduleDescription = document.querySelector(".intro-description");
  moduleTitle.innerHTML = title;
  moduleDescription.innerHTML = description;
  title = `<span class="intro-title">${title}</span>`;
  description = `<p class="intro-description">${description}</p>`;
  return `<div class="box">
              ${image}
              ${title}
              ${description}
          </div>`;
};
const boxes = Array.from(document.querySelectorAll(".box"));
boxes.forEach((box, index) => {
  // Hover on
  box.addEventListener("mouseenter", () => {
    boxes[index].style.background = "white";
  });
  // Hover off
  box.addEventListener("mouseleave", () => {
    icons[index].style.color = "white";
    boxes[index].style.background = "";
  });
});

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
    mobileNav.classList.remove("hidden");
    sideBar.classList.add("hidden");
  } else {
    mobileNav.classList.add("hidden");
    sideBar.classList.remove("hidden");
  }
};

$(document).ready(function () {
  let newWindow = window.matchMedia("(max-width: 768px)");
  $(".sidenav").sidenav();
  toggleWindow(newWindow); // Call listener function at run time
  newWindow.addListener(toggleWindow); // Attach listener function on state changes
});
