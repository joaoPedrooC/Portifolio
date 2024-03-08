import { useEffect } from 'react'
import styles from './styles.module.scss'
import { Particles } from '../ParticlesConfig';

export const ParticlesBackground = () => {
  useEffect(() => {
    Particles.init({
      selector: '.background',
      maxParticles: 60,
      sizeVariations: 2,
      speed: .2
    });
  }, [])
  return (
    <canvas className={`background ${styles.particles}`}>

    </canvas>
  )
}