import { useState } from 'react';
import styles from './style.module.scss';

export const HeaderMobile = () => {
	const [isActive, setIsActive] = useState<boolean>(false);
	const [isClosing, setIsClosing] = useState<boolean>(false)

	const handleActive = () => {
		if(!isActive) {
			return setIsActive(true)
		}

		setIsClosing(true)
		setTimeout(() => {
			setIsActive(false)
			setIsClosing(false)
		}, 600)
	}

	return (
		<>
			<div className={`${styles.menu__container} ${isActive ? styles.active : ''} `} onClick={handleActive}>
				<div></div>
			</div>
			
			{isActive ?
				<div className={`${styles.headerMobile__container} animate__animated ${!isClosing ? 'animate__bounceIn' : 'animate__bounceOut'}`}>
					<nav>
						<ul className={styles.headerMobile__list}>
							<li>
								<a href='#about' className='font quaternary'>Início</a>
							</li>
							<li>
								<a href='#technologies' className='font quaternary'>Tecnologias</a>
							</li>
							<li>
								<a href='#projects' className='font quaternary'>Projetos</a>
							</li>
							<li>
								<a href='#contact' className='font quaternary'>Contato</a>
							</li>
						</ul>
					</nav>
				</div>
			: null}
		</>
	);
};
