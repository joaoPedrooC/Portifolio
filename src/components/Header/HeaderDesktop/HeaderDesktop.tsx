import { FiSun } from 'react-icons/fi'
import { IoMoonOutline } from 'react-icons/io5'
import styles from './style.module.scss'
import { LanguageSelect } from '../../LanguageSelect/LanguageSelect'
import { useTranslation } from 'react-i18next'
import { ISelectedLanguageParam } from '../Header'

interface IHeaderDesktopProps {
	darkMode: boolean
	setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
	changeLanguage: (selectedLanguage: ISelectedLanguageParam) => void
	language: string
}

export const HeaderDesktop = ({ darkMode, setDarkMode, changeLanguage, language }: IHeaderDesktopProps) => {
	const { t } = useTranslation()

	return (
		<nav className={styles.headerDesktop__container}>
			<ul>
				<li className={styles.headerDesktop__listItem}>
					<a href='#top' className='font quaternary'>
						{t('headerHome')}
					</a>
				</li>
				<li className={styles.headerDesktop__listItem}>
					<a href='#technologies' className='font quaternary'>
					{t('headerTechnologies')}
					</a>
				</li>
				<li className={styles.headerDesktop__listItem}>
					<a href='#projects' className='font quaternary'>
					{t('headerProjects')}
					</a>
				</li>
				<li className={styles.headerDesktop__listItem}>
					<a href='#contact' className='font quaternary'>
					{t('headerContacts')}
					</a>
				</li>
			</ul>
			<div>
				<LanguageSelect changeLanguage={changeLanguage} language={language} />
				<button className={styles.header__themeButton} onClick={() => setDarkMode(!darkMode)}>
					<div className={`${styles.themeButton__title}`}>
						<span className='font quaternary'>{ darkMode ? t('headerDarkThemeMessage') : t('headerWhiteThemeMessage') }</span>
					</div>
					{!darkMode ? <IoMoonOutline /> : <FiSun />}
				</button>
			</div>
		</nav>
	)
}
