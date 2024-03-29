import { GiBrazilFlag } from 'react-icons/gi';
import { LiaFlagUsaSolid } from 'react-icons/lia';

import Select, { OptionsOrGroups, Theme } from 'react-select'
import { ISelectedLanguageParam } from '../Header/Header'

import styles from './style.module.scss'

interface ILanguageSelectProps {
  changeLanguage: (selectedLanguage: ISelectedLanguageParam) => void
  language: string
}

export const LanguageSelect = ({ changeLanguage, language }: ILanguageSelectProps) => {
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
		<Select onChange={changeLanguage} className={styles.language__select} options={options} isSearchable={false} defaultValue={options.find(option => option.value === language)} theme={(theme): Theme => ({
      ...theme,
      colors: {
        ...theme.colors,
        primary25: '#1864ab',
        neutral0: 'var(--background-color)'
      }
    })}/>
	);
};
