import { ParticlesBackground } from '../../Particles/ParticlesBackground/ParticlesBackground';
import { FaGithub } from "react-icons/fa";

import styles from './style.module.scss';

export const AboutSection = () => {
	return (
		<section className={styles.about__section} id='about'>
			<div className='container'>
				<h1 className='font primary'>&lt;Desenvolvedor web Full Stack&gt;</h1>
				<p className='font tertiary'>
					Sou um desenvolvedor web ávido por conhecimento, apreciador de
					desafios lógicos e um entusiasta do desenvolvimento web. Estou sempre
					buscando aprimorar meus conhecimentos e aberto a oportunidades
				</p>
        <a href="https://github.com/joaoPedrooC" target='_blank'>
          <FaGithub />
        </a>
			</div>
			<ParticlesBackground />
		</section>
	);
};
