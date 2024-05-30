import { useEffect, useState } from "react"
import { ProjectsList } from "./ProjectsList/ProjectsList"

import styles from './style.module.scss'
import { useTranslation } from "react-i18next"

export const ProjectsSection = () => {
  const { t } = useTranslation()

  const [isVisible, setIsVisible] = useState<boolean>(false)
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setIsVisible(true)
    }
  }))

  useEffect(() => {
    observer.observe(document.querySelector('#projectsTitle')!)
  }, [])

  return (
    <section className={styles.projectsSection__container}>
      <div className='container' id="projects">
        <h2 className={`font secondary ${isVisible ? 'animate__animated animate__fadeInDown' : ''}`} id="projectsTitle">{t('projectsSectionTitle')}</h2>
        <ProjectsList />
      </div>
    </section>
  )
}