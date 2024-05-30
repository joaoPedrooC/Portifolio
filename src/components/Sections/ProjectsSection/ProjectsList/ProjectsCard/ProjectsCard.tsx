import { useEffect, useRef, useState } from 'react';
import { IProject } from '../../../../../services/projects';

import styles from './style.module.scss'
import { useTranslation } from 'react-i18next';

interface IProjectsCardProps {
	project: IProject
}

export const ProjectsCard = ({ project }: IProjectsCardProps) => {
	const [isVisible, setIsVisible] = useState<boolean>(false)
	const liRef = useRef<HTMLLIElement>(null)

	const { t } = useTranslation()

  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setIsVisible(true)
    }
  }))

  useEffect(() => {
    observer.observe(liRef.current!)
  }, [])

	return (
		<li className={`${styles.projectCard__container} animate__animated ${isVisible ? 'animate__fadeInLeft' : ''}`} ref={liRef}>
			<div>
				<h3 className='font tertiary'>{project.name}</h3>
				<span className='font quaternary'>{project.type}</span>
			</div>
			<p className='font quaternary'>{t(project.description)}</p>
			<div>
				<a className='font button' href={project.githubUrl} target='_blank'>{t('projectsSectionSourceCodeLink')}</a>
				{ project.deployUrl ? <a className='font button' href={project.deployUrl} target='_blank'>Deploy</a> : null }
			</div>
		</li>
	);
};
