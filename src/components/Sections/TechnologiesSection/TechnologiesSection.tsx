import { useEffect, useState } from 'react'
import { DesktopList } from './DesktopList/DesktopList'
import { MobileList } from './MobileList/MobileList'
import styles from './style.module.scss'

export const TechnologiesSection = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }))

  useEffect(() => {
    observer.observe(document.querySelector('#technologies')!)
  }, [])

  return (
    <section className={styles.technologiesSection__container} id='technologies'>
      <div className={`container ${isVisible ? 'animate__animated animate__fadeIn' : ''}`}>
        <h2 className="font secondary">Minhas tecnologias</h2>
        <MobileList />
        <DesktopList />
      </div>
    </section>
  )
}