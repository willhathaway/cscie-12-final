// NAVIGATION FUNCTION:

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
  }
});

// PRISM DEMO FUNCTION:

document.addEventListener("DOMContentLoaded", () => {
  const lightButton = document.querySelector("#light-button");
  const refractedLight = document.querySelector(".refracted-light");

  if (lightButton && refractedLight) {
    lightButton.addEventListener("click", () => {
      lightButton.classList.toggle("active");

      if (lightButton.classList.contains("active")) {
        lightButton.style.boxShadow = "0 0 20px 10px rgba(255, 255, 255, 0.8)";
        refractedLight.style.opacity = 1;
      } else {
        lightButton.style.boxShadow = "none";
        refractedLight.style.opacity = 0;
      }
    });
  }
});

// PAINTING AND MOOD DEMO FUNCTION:

document.addEventListener("DOMContentLoaded", () => {
  const paintingDisplay = document.getElementById("painting-display");
  const overlay = document.getElementById("overlay");
  const timeButtons = document.querySelectorAll(".time-button");
  const colorButtons = document.querySelectorAll(".color-button");

  const paintings = {
    morning: "../images/paintings/morning.jpg",
    noon: "../images/paintings/noon.jpg",
    evening: "../images/paintings/sunset.jpg",
    night: "../images/paintings/night.jpg",
  };

  if (paintingDisplay && overlay) {
    function changePainting(time) {
      paintingDisplay.src = paintings[time];

      timeButtons.forEach((btn) => btn.classList.remove("active"));
      const activeButton = document.querySelector(
        `.time-button[data-time="${time}"]`
      );
      if (activeButton) activeButton.classList.add("active");
    }

    function changeOverlay(color) {
      overlay.style.backgroundColor = color;

      colorButtons.forEach((btn) => btn.classList.remove("active"));
      const activeColorButton = document.querySelector(
        `.color-button[data-color="${color}"]`
      );
      if (activeColorButton) activeColorButton.classList.add("active");
    }

    timeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const time = button.dataset.time;
        changePainting(time);
      });
    });

    colorButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const color = button.dataset.color;
        changeOverlay(color);
      });
    });

    window.onload = () => {
      changePainting("morning");
      overlay.style.backgroundColor = "transparent";
    };
  }
});

// NOTEBOOK MODE FUNCTON:

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("notebook-toggle");
  const body = document.body;
  const header = document.querySelector("header");

  if (toggleButton && header) {
    toggleButton.addEventListener("click", () => {
      body.classList.toggle("notebook-mode");
      header.classList.toggle("notebook-mode");
    });
  }
});
