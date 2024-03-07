// Obtener el ancho de la ventana
let windowWidth = window.innerWidth;

// Definir el valor inicial
let particlesValue = 70;

// Verificar si el ancho de la ventana es menor o igual a 600
if (windowWidth <= 600) {
  particlesValue = 25;
}

particlesJS({
  particles: {
    number: {
      value: particlesValue,
      density: {
        enable: false,
        value_area: 1262.148176195885,
      },
    },
    color: {
      value: "#0e3679",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 3,
        color: "#0e3679",
      },
      polygon: {
        nb_sides: 4,
      },
      image: {
        src: "img/github.svg",
        width: 90,
        height: 90,
      },
    },
    opacity: {
      value: 0.7809541840212039,
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
      enable: true,
      distance: 150,
      color: "#000",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "bounce",
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
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: false,
        mode: "remove",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
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
