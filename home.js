let chosenProjectId = "market-app";
let choseProjectTitleId = "market-app-title";

setTimeout(function () {
  document.getElementById("hello").classList.remove("first-typewriter");
  document.getElementById("hello").classList.add("hide-border");
}, 3450);

setTimeout(function () {
  document.getElementById("fullstack").classList.remove("hidden");
}, 5000);

const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller-inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

function setProjectClasses(targetId, titleId) {
  document.getElementById(choseProjectTitleId).classList.remove("selected");
  document.getElementById(chosenProjectId).classList.add("hidden-project");
  chosenProjectId = targetId;
  choseProjectTitleId = titleId;
  document.getElementById(titleId).classList.add("selected");
  document.getElementById(targetId).classList.remove("hidden-project");
}
