//Check If Thre's Local Storage Color Option

let mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {
  // console.log('Local Storage is Not Empty you Can Set it On Root Now');
  // console.log(localStorage.getItem("color_option"));

  document.documentElement.style.setProperty("--main-color", mainColors);

  // Remove Active Class Form All Color List Item
  document.querySelectorAll(".colors-list li").forEach((element) => {
    element.classList.remove("active");

    //Add Active Class on Element With Data Color == Local Storage Item
    if (element.dataset.color === mainColors) {
      //Add Active Class
      element.classList.add("active");
    }
  });
}

// Random background Option
let backgroundOption = true;

// Variable To Control The background Interval
let backgroundInterval;

// Check If There's Local Storage Random Background Item
let backgroundLocalItem = localStorage.getItem("background_option");

//  Check If There's Background Local Storage Is Not Empty
if (backgroundLocalItem !== null) {
  if (backgroundLocalItem === "true") {
    backgroundOption = true;
  } else {
    backgroundOption = false;
  }

  //Remove Active Class Form All Spans
  document.querySelectorAll(".random-backgrounds span").forEach((element) => {
    element.classList.remove("active");
  });

  if (backgroundLocalItem === "true") {
    document.querySelector(".random-backgrounds .yes").classList.add("active");
  } else {
    document.querySelector(".random-backgrounds .no").classList.add("active");
  }
}
// Click on Toggle Spin On Icon
document.getElementById("icon").onclick = function () {
  // Toggle Class Fa-spin For Rotation on Self
  this.classList.toggle("fa-spin");

  // Toggle Class Open ON Main Settings Box
  document.querySelector(".settings-box").classList.toggle("open");
};

//Switch Colors

const colorsLi = document.querySelectorAll(".colors-list li");

//Loop On All List Items

colorsLi.forEach((li) => {
  // Click On Every List Items

  li.addEventListener("click", (e) => {
    //set Colors on Root

    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );

    //Set Color ON Local Storage

    localStorage.setItem("color_option", e.target.dataset.color);

    // Remove Active Class Form All children's
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });

    // Add Active Class On Self
    e.target.classList.add("active");
  });
});

// Switch Random Background Option

const randomBackEI = document.querySelectorAll(".random-backgrounds span");

//Loop On All Spans

randomBackEI.forEach((span) => {
  // Click On Every Span

  span.addEventListener("click", (e) => {
    // Remove Active Class Form All children's
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });

    // Add Active Class On Self
    e.target.classList.add("active");

    if (e.target.dataset.background === "yes") {
      backgroundOption = true;

      randomizeImgs();

      localStorage.setItem("background_option", true);
    } else {
      backgroundOption = false;

      clearInterval(backgroundInterval);

      localStorage.setItem("background_option", false);
    }
  });
});

// Select Landing Page Element
let LandingPage = document.querySelector(".landing-page");

// Get Array Of Imgs
let ImgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg"];

// Function To Randomize Imgs
function randomizeImgs() {
  if (backgroundOption === true) {
    backgroundInterval = setInterval(() => {
      // Get Random Number
      let RandomNumber = Math.floor(Math.random() * ImgsArray.length);

      // Change Background Image Url
      LandingPage.style.backgroundImage =
        'url("imgs/' + ImgsArray[RandomNumber] + '")';
    }, 1000);
  }
}

randomizeImgs();

// Select Skills Selector

let ourSkills = document.getElementById("skills");
// let ourSkills =document.getElementById(".skills"); // don't use "." with --  getElementById --

let skills = document.querySelectorAll(".progress");

let skillsHeight = ourSkills.clientHeight; 

window.addEventListener("scroll", () => {
  // using addEventListener is better


  if (window.scrollY + skillsHeight >= ourSkills.offsetTop) {

    skills.forEach((skill) => {

      let progress = skill.getAttribute("data-progress");

      skill.style.width = `${progress}`;

    });
  }
});
// window.onscroll = function () {

// //Skills Offset Top

// // let skillsOffset = ourSkills.offsetTop;

// console.log(skillsOffsetTop);

// };
