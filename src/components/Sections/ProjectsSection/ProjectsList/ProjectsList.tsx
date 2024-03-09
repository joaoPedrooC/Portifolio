import { projects } from "../../../../services/projects"
import { ProjectsCard } from "./ProjectsCard/ProjectsCard"

import styles from './style.module.scss'

export const ProjectsList = () => {
  return (
    <ul className={styles.projectsList__container}>
      { projects.map((project, index) => <ProjectsCard key={index} project={project} />) }
    </ul>
  )
}