import { GiBrazilFlag } from 'react-icons/gi';
import { LiaFlagUsaSolid } from 'react-icons/lia';

import Select, { OptionsOrGroups, Theme } from 'react-select'

import styles from './style.module.scss'

export const LanguageSelect = () => {
  const options: OptionsOrGroups<any, any> = [
    {
      value: 'pt',
      label: (
        <div title='Português'>
          <GiBrazilFlag />
        </div>
      ),
    },
    {
      value: 'en',
      label: (
        <div title='English'>
          <LiaFlagUsaSolid />
        </div>
      )
    }
  ]

	return (
		<Select className={styles.language__select} options={options} isSearchable={false} defaultValue={options[0]} theme={(theme): Theme => ({
      ...theme,
      colors: {
        ...theme.colors,
        primary25: '#1864ab',
        neutral0: 'var(--background-color)'
      }
    })}/>
	);
};
