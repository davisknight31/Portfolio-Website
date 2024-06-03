let chosenProjectId = "market-app";
let choseProjectTitleId = "market-app-title";
// let resizeCount = 0;

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

function setParticles() {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 2000,
        },
      },
      color: {
        // value: ["#FFFFFF", "#2b71ff"],
        // value: "random",
        value: "#FFFFFF",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.9,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,
          mode: "grab",
        },
        onclick: {
          enable: false,
          mode: "push",
        },
        resize: false,
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  });
}

let canvas = document.getElementsByTagName("canvas");
// window.addEventListener("resize", fitCanvas, false);
fitCanvas();

function fitCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  // resizeCount++;
  // if (resizeCount % 10 === 0) {
  //   setParticles();
  // }

  setParticles();
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

// setParticles();

document
  .getElementById("submit-group")
  .addEventListener("submit", function (event) {
    alert("Form submitted successfully!");
  });
