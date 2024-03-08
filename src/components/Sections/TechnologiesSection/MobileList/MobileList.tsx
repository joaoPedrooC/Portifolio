import {
	technologiesList,
	technologiesNames,
} from '../../../../services/technologies';
import { MobileListItem } from './MobileListItem/MobileListItem';

import styles from './style.module.scss'

export const MobileList = () => {
	return (
		<ul className={styles.mobileList__container}>
			{technologiesList.map((technology, index) => (
				<MobileListItem
					Technology={technology}
					technologyName={technologiesNames[index]}
				/>
			))}
		</ul>
	);
};
