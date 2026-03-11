function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed("#typed-name", {
    strings: [
      "<span class='purple-text'>Hardeep Kaur Gill</span>.",
      "a Web Developer.",
      "a Software Engineer.",
    ], // Customize these
    typeSpeed: 100, // Speed of typing
    backSpeed: 50, // Speed of backspacing
    backDelay: 2000, // Delay before starting to backspace
    loop: true, // Keep looping
    showCursor: true,
    cursorChar: "|",
    contentType: "html", // Allows HTML tags inside strings
  });
});

function resizeParticles() {
  window.pJSDom = []; // Clear existing particles
  document.querySelector("#particles-js").innerHTML = ""; // Remove previous canvas
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 150,
        density: {
          enable: true,
          value_area: 900,
        },
      },
      color: {
        value: "#aa00ff",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.7,
        random: true,
      },
      size: {
        value: 3,
        random: true,
      },
      move: {
        speed: 2,
        direction: "none",
        out_mode: "out",
      },
      line_linked: {
        enable: true,
        distance: 130,
        color: "#8800cc",
        opacity: 0.6,
        width: 1,
      },
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "bubble",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        bubble: {
          distance: 150,
          size: 5,
          duration: 0.3,
          opacity: 1,
        },
        push: {
          particles_nb: 6,
        },
      },
    },
  });
}

// Initialize Particles.js on load
resizeParticles();

// Reinitialize particles on window resize
window.addEventListener("resize", resizeParticles);
