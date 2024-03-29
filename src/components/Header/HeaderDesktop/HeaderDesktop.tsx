import { FiSun } from 'react-icons/fi';
import { IoMoonOutline } from 'react-icons/io5';
import styles from './style.module.scss';
import { LanguageSelect } from '../../LanguageSelect/LanguageSelect';

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
			<div>
				<LanguageSelect />
				<button className={styles.header__themeButton} onClick={() => setDarkMode(!darkMode)}>
					<div className={`${styles.themeButton__title}`}>
						<span className='font quaternary'>Alterar para {darkMode ? 'modo claro' : 'modo escuro'}</span>
					</div>
					{!darkMode ? <IoMoonOutline /> : <FiSun />}
				</button>
			</div>
		</nav>
	);
};
