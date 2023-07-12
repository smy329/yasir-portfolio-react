/**================== Star ==========================*/
// const particlesConfig = {
//   name: 'Star',
//   particles: {
//     number: {
//       value: 10,
//       density: {
//         enable: false,
//       },
//     },
//     color: {
//       value: '#fff',
//     },
//     shape: {
//       type: 'star',
//       options: {
//         star: {
//           sides: 5,
//         },
//       },
//     },
//     opacity: {
//       value: 0.8,
//     },
//     size: {
//       value: 4,
//     },
//     rotate: {
//       value: {
//         min: 0,
//         max: 360,
//       },
//       direction: 'clockwise',
//       animation: {
//         enable: true,
//         speed: 5,
//         sync: false,
//       },
//     },
//     links: {
//       enable: false,
//       distance: 600,
//       color: '#ffffff',
//       opacity: 0.4,
//       width: 2,
//     },
//     move: {
//       enable: true,
//       speed: 2,
//     },
//   },
//   interactivity: {
//     events: {
//       onHover: {
//         enable: true,
//         mode: 'grab',
//       },
//       onClick: {
//         enable: true,
//         mode: 'bubble',
//       },
//     },
//     modes: {
//       grab: {
//         distance: 400,
//         links: {
//           opacity: 1,
//           color: '#f00',
//         },
//       },
//       bubble: {
//         distance: 400,
//         size: 40,
//         duration: 2,
//         opacity: 8,
//         color: '#ffff00',
//       },
//       repulse: {
//         distance: 200,
//       },
//       push: {
//         quantity: 4,
//       },
//       remove: {
//         quantity: 2,
//       },
//     },
//   },
//   background: {
//     color: '#111',
//   },
// };

/**================== Star ==========================*/

const particlesConfig = {
  name: 'React Snow',
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'remove',
      },
    },
    modes: {
      bubble: {
        distance: 200,
        duration: 0.4,
        opacity: 1,
        size: 80,
      },
      connect: {
        distance: 50,
        links: {
          opacity: 0.5,
        },
        radius: 60,
      },
      grab: {
        distance: 180,
        links: {
          opacity: 0.35,
        },
      },
      push: {
        quantity: 4,
      },
      remove: {
        quantity: 10,
      },
      repulse: {
        distance: 100,
        duration: 5,
      },
      slow: {
        factor: 1,
        radius: 0,
      },
    },
  },
  particles: {
    color: {
      value: '#28E98C',
    },
    links: {
      blink: false,
      color: {
        value: '#fff',
      },
      consent: false,
      distance: 150,
      enable: false,
      opacity: 0.6,
      shadow: {
        blur: 5,
        color: {
          value: 'lime',
        },
        enable: false,
      },
      width: 1,
    },
    move: {
      direction: 'bottom',
      enable: true,
      speed: 1,
    },
    collisions: {
      enable: true,
    },
    number: {
      limit: -1,
      value: 160,
    },
    opacity: {
      animation: {
        enable: true,
        speed: 1,
        sync: false,
      },
      value: {
        min: 0.1,
        max: 0.5,
      },
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: {
        min: 1,
        max: 5,
      },
    },
  },
  pauseOnBlur: true,
};

export default particlesConfig;
