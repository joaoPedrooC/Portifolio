import styles from './style.module.scss';

export const HeaderDesktop = () => {
	return (
		<nav className={styles.headerDesktop__container}>
			<ul>
				<li className={styles.headerDesktop__listItem}>
					<a href='#top' className='font quaternary'>Início</a>
				</li>
				<li className={styles.headerDesktop__listItem}>
					<a href='#technologies' className='font quaternary'>Tecnologias</a>
				</li>
				<li className={styles.headerDesktop__listItem}>
					<a href='#projects' className='font quaternary'>Projetos</a>
				</li>
				<li className={styles.headerDesktop__listItem}>
					<a href='#contact' className='font quaternary'>Contato</a>
				</li>
			</ul>
		</nav>
	);
};
