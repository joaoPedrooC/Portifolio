import { ParticlesBackground } from '../../Particles/Particles';
import { FaGithub } from "react-icons/fa";

import styles from './style.module.scss';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface IAboutSectionProps {
	darkMode: boolean
}

export const AboutSection = ({ darkMode }: IAboutSectionProps) => {
	const { t } = useTranslation()

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
				<h1 className='font primary'>&lt;{t('aboutSectionRole')}&gt;</h1>
				<p className='font tertiary'>
					{t('aboutSectionDescription')}
				</p>
        <a href="https://github.com/joaoPedrooC" target='_blank' className='animate__animated animate__swing animate__infinite animate__slower'>
          <FaGithub />
        </a>
			</div>
			<ParticlesBackground darkMode={darkMode} />
		</section>
	);
};
