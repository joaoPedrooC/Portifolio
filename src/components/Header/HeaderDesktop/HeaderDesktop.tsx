import styles from './style.module.scss';

export const HeaderDesktop = () => {
	return (
		<nav className={styles.headerDesktop__container}>
			<ul>
				<li className={styles.headerDesktop__listItem}>
					<a href='' className='font quaternary'>Início</a>
				</li>
				<li className={styles.headerDesktop__listItem}>
					<a href='' className='font quaternary'>Tecnologias</a>
				</li>
				<li className={styles.headerDesktop__listItem}>
					<a href='' className='font quaternary'>Projetos</a>
				</li>
				<li className={styles.headerDesktop__listItem}>
					<a href='' className='font quaternary'>Contato</a>
				</li>
			</ul>
		</nav>
	);
};
