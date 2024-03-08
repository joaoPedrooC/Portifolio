import { IProject } from '../../../../../services/projects';

import styles from './style.module.scss'

interface IProjectsCardProps {
	project: IProject;
}

export const ProjectsCard = ({ project }: IProjectsCardProps) => {
	return (
		<li className={styles.projectCard__container}>
			<div>
				<h3 className='font tertiary'>{project.name}</h3>
				<span className='font quaternary'>{project.type}</span>
			</div>
			<p className='font quaternary'>{project.description}</p>
			<div>
				<a className='font button' href={project.githubUrl} target='_blank'>Código fonte</a>
				{ project.deployUrl ? <a className='font button' href={project.deployUrl} target='_blank'>Deploy</a> : null }
			</div>
		</li>
	);
};
