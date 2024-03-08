import { useState } from 'react';
import styles from './style.module.scss';

export const HeaderMobile = () => {
	const [isActive, setIsActive] = useState<boolean>(false);

	return (
		<>
			<div className={`${styles.menu__container} ${isActive ? styles.active : ''} `} onClick={() => setIsActive(!isActive)}>
				<div></div>
			</div>
			
			{isActive ?
				<div className={styles.headerMobile__container}>
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
