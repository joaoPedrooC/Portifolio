import { useState } from 'react';
import styles from './style.module.scss';
import { IoMoonOutline } from 'react-icons/io5';
import { FiSun } from 'react-icons/fi';
import { LanguageSelect } from '../../LanguageSelect/LanguageSelect';

interface IHeaderMobileProps {
	darkMode: boolean;
	setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HeaderMobile = ({ darkMode, setDarkMode }: IHeaderMobileProps) => {
	const [isActive, setIsActive] = useState<boolean>(false);
	const [isClosing, setIsClosing] = useState<boolean>(false);

	const handleActive = () => {
		if (!isActive) {
			return setIsActive(true);
		}

		setIsClosing(true);
		setTimeout(() => {
			setIsActive(false);
			setIsClosing(false);
		}, 600);
	};

	return (
		<>
			<div
				className={`${styles.menu__container} ${
					isActive ? styles.active : ''
				} `}
				onClick={handleActive}>
				<div></div>
			</div>

			{isActive ? (
				<div
					className={`${styles.headerMobile__container} animate__animated ${
						!isClosing ? 'animate__bounceIn' : 'animate__bounceOut'
					}`}>
					<nav>
						<ul className={styles.headerMobile__list}>
							<li>
								<a href='#about' className='font quaternary'>
									Início
								</a>
							</li>
							<li>
								<a href='#technologies' className='font quaternary'>
									Tecnologias
								</a>
							</li>
							<li>
								<a href='#projects' className='font quaternary'>
									Projetos
								</a>
							</li>
							<li>
								<a href='#contact' className='font quaternary'>
									Contato
								</a>
							</li>
						</ul>
						<div>
							<LanguageSelect />
							<button onClick={() => setDarkMode(!darkMode)}>
								{!darkMode ? <IoMoonOutline /> : <FiSun />}
							</button>
						</div>
					</nav>
				</div>
			) : null}
		</>
	);
};
