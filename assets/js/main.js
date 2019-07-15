/**
 * ParticleJS implementation
 * https://github.com/VincentGarreau/particles.js/
 */
document.addEventListener("DOMContentLoaded", function () {
    new SweetScroll({});
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 125,
                density: {
                    enable: true,
                    value_area: 500
                }
            },
            color: {
                value: "#ffffff"
            },
            shape: {
                type: "polygon",
                stroke: {
                    width: 1,
                    color: "#000000"
                },
                polygon: {
                    nb_sides: 7
                },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 1,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 4,
                    size_min: .3,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: .4,
                width: 1
            },
            move: {
                enable: true,
                speed: 1.25,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "bounce",
                bounce: true,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 600
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "bubble"
                }, onclick: {
                    enable: false,
                    mode: "repulse"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 250,
                    size: 0,
                    duration: 2,
                    opacity: 0,
                    speed: 3
                },
                repulse: {
                    distance: 400,
                    duration: .4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    })
}, false);