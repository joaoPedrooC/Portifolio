import { ParticlesBackground } from '../../Particles/Particles';
import { FaGithub } from "react-icons/fa";

import styles from './style.module.scss';
import { useEffect, useState } from 'react';

interface IAboutSectionProps {
	darkMode: boolean
}

export const AboutSection = ({ darkMode }: IAboutSectionProps) => {
	const [isVisible, setIsVisible] = useState<boolean>(false)
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setIsVisible(true)
    } else {
			setIsVisible(false)
		}
  }))

  useEffect(() => {
    observer.observe(document.querySelector('#about')!)
  }, [])

	return (
		<section className={styles.about__section} id='about'>
			<div className={`container ${isVisible ? 'animate__animated animate__fadeInDown' : ''}`}>
				<h1 className='font primary'>&lt;Desenvolvedor web Full Stack&gt;</h1>
				<p className='font tertiary'>
					Me chamo João Pedro, um desenvolvedor web ávido por conhecimento, apreciador de
					desafios lógicos e um entusiasta do desenvolvimento web. Estou sempre
					buscando aprimorar meus conhecimentos e aberto a oportunidades
				</p>
        <a href="https://github.com/joaoPedrooC" target='_blank' className='animate__animated animate__swing animate__infinite animate__slower'>
          <FaGithub />
        </a>
			</div>
			<ParticlesBackground darkMode={darkMode} />
		</section>
	);
};
