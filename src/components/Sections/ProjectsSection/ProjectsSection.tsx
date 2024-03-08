import { ProjectsList } from "./ProjectsList/ProjectsList"

import styles from './style.module.scss'

export const ProjectsSection = () => {
  return (
    <section className={styles.projectsSection__container} id="projects">
      <div className="container">
        <h2 className="font secondary">Meus projetos</h2>
        <ProjectsList />
      </div>
    </section>
  )
}