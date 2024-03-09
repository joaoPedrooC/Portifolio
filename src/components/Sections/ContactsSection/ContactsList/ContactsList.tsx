import { FaLinkedin } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

import styles from './style.module.scss'

export const ContactsList = () => {
	return (
		<ul className={styles.contactsList__container}>
			<li>
				<a href='https://www.linkedin.com/in/joaopedrocorreia-/' target='_blank' >
					<FaLinkedin />
				</a>
			</li>
			<li>
				<a href='https://www.instagram.com/joaopedro9429/' target='_blank' >
					<FaInstagram />
				</a>
			</li>
			<li>
				<a href='https://wa.me/5534991860491' target='_blank' >
					<FaWhatsapp />
				</a>
			</li>
		</ul>
	);
};
