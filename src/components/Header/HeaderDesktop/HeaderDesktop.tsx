import { FiSun } from 'react-icons/fi';
import { IoMoonOutline } from 'react-icons/io5';
import styles from './style.module.scss';

interface IHeaderDesktopProps {
	darkMode: boolean
	setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

export const HeaderDesktop = ({ darkMode, setDarkMode }: IHeaderDesktopProps) => {
	return (
		<nav className={styles.headerDesktop__container}>
			<ul>
				<li className={styles.headerDesktop__listItem}>
					<a href='#top' className='font quaternary'>
						Início
					</a>
				</li>
				<li className={styles.headerDesktop__listItem}>
					<a href='#technologies' className='font quaternary'>
						Tecnologias
					</a>
				</li>
				<li className={styles.headerDesktop__listItem}>
					<a href='#projects' className='font quaternary'>
						Projetos
					</a>
				</li>
				<li className={styles.headerDesktop__listItem}>
					<a href='#contact' className='font quaternary'>
						Contato
					</a>
				</li>
			</ul>
			<button className={styles.header__themeButton} onClick={() => setDarkMode(!darkMode)}>
				{!darkMode ? <IoMoonOutline /> : <FiSun />}
			</button>
		</nav>
	);
};
