import { useEffect, useState } from "react"
import { ProjectsList } from "./ProjectsList/ProjectsList"

import styles from './style.module.scss'

export const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }))

  useEffect(() => {
    observer.observe(document.querySelector('#projects')!)
  }, [])

  return (
    <section className={styles.projectsSection__container}>
      <div className={`container ${isVisible ? 'animate__animated animate__fadeInDown' : ''}`} id="projects">
        <h2 className="font secondary">Meus projetos</h2>
        <ProjectsList />
      </div>
    </section>
  )
}