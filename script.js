var navmenuAnchortags = document.querySelectorAll(".nav-menu a");
console.log(navmenuAnchortags);
for (var i = 0; i < navmenuAnchortags.length; i++) {
  navmenuAnchortags[i].addEventListener("click", function (event) {
    console.log(event);
    console.log(this.textContent.trim().toLowerCase());
    event.preventDefault();
    var sectionAnchorTagClicked = this.textContent.trim().toLowerCase();
    var periodicEventId = setInterval(function () {
      var targetSection = document.getElementById(sectionAnchorTagClicked);
      var coordinates = targetSection.getBoundingClientRect();
      console.log(coordinates.y);
      window.scrollBy(0, 100);
      if (coordinates.top <= 0) {
        clearInterval(periodicEventId);
      }
    }, 50);
  });
}

var progressBars = document.querySelectorAll(".skill-progress >div");
var skillsContainer = document.getElementById("skills-container");
window.addEventListener("scroll", checkScroll);
var animationTriggerDone = false;

function initialiseBars() {
  for (let bar of progressBars) {
    bar.style.width = 0 + "%";
  }
}
initialiseBars();
function fillBars() {}

function checkScroll() {
  var coordinates = skillsContainer.getBoundingClientRect();
  console.log(
    coordinates.top + "vs " + window.innerHeight + "vs " + coordinates.bottom
  );
  if (!animationTriggerDone && coordinates.top < window.innerHeight) {
    // window.innnerHeight is view port height
    fillBars();
    animationTriggerDone = true;
  } else if (coordinates.top > window.innerHeight) {
    animationTriggerDone = false;
  }
}
function fillBars() {
  for (let bar of progressBars) {
    let targetWidth = bar.getAttribute("data-bar-width");
    let currentWidth = 0;
    let intervalId = setInterval(function () {
      if (currentWidth > targetWidth) {
        clearInterval(intervalId);
      }
      currentWidth += 1;
      bar.style.width = currentWidth + "%";
    }, 30);
  }
}
