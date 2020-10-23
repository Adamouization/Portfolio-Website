// Add current year to footer.
document.getElementById("year").innerHTML = new Date().getFullYear();

/**
 * ParticleJS implementation
 * https://github.com/VincentGarreau/particles.js/
 */
document.addEventListener("DOMContentLoaded", function () {
    new SweetScroll({});
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 110,
                density: {
                    enable: true,
                    value_area: 700
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
                    nb_sides: 6
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
                    opacity_min: 0.1,
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
                opacity: 0.5,
                width: 1
            },
            move: {
                enable: true,
                speed: 4,
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
                    mode: "grab"
                }, onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 150,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 250,
                    size: 3.25,
                    duration: 2,
                    opacity: 0,
                    speed: 3
                },
                repulse: {
                    distance: 400,
                    duration: .4
                },
                push: {
                    particles_nb: 1
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    })
}, false);