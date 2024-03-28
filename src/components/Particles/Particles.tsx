import Particles from "react-tsparticles"
import { loadFull } from "tsparticles";

import styles from './style.module.scss'

export const ParticlesBackground = () => {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  const options: any = {
    fullScreen: {
      enable: false,
      zIndex: -1,
    },
    particles: {
      number: {
        value: 45,
        density: {
          enable: false,
        },
      },
      color: {
        value: '#000',
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: 0.8,
        animation: {
          enable: false,
          speed: 1,
          sync: false,
        },
      },
      size: {
        value: { min: 1, max: 2.3 },
        animation: {
          enable: false,
          speed: 40,
          sync: false,
        },
      },
      rotate: {
        value: 0,
        random: true,
        direction: 'clockwise',
        animation: {
          enable: true,
          speed: 5,
          sync: false,
        },
      },
      move: {
        enable: true,
        speed: .6,
        direction: 'none',
        random: false,
        straight: false,
        attract: {
          enable: true,
          rotate: {
            x: 600,
            y: 1200
          }
        },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: ['attract']
        }
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
            color: '#000'
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

  }

  return (
    <Particles id="tsparticles" options={options} init={particlesInit} className={styles.particles__container} />
  )
}