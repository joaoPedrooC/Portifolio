import styles from './style.module.scss'
import { HeaderMobile } from './HeaderMobile/HeaderMobile'
import { HeaderDesktop } from './HeaderDesktop/HeaderDesktop'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

interface IHeaderProps {
	darkMode: boolean
	setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

export interface ISelectedLanguageParam {
  value: 'pt' | 'en',
  label: any
}

export const Header = ({ darkMode, setDarkMode }: IHeaderProps) => {
  const [language, setLanguage] = useState(localStorage.getItem('@portifolio/language') || 'pt')
  const { i18n } = useTranslation()

  
  
  const updateLanguage = async () => {
    localStorage.setItem('@portifolio/language', language)
    await i18n.changeLanguage(language)
  }

  useEffect(() => {
    updateLanguage()
  }, [language])

  const changeLanguage = (selectedLanguage: ISelectedLanguageParam) => {
    setLanguage(selectedLanguage.value)
  }

  return (
    <header className={`${styles.header} animate__animated animate__fadeInDown animate__delay-1s`}>
      <div className="container">
        <HeaderDesktop darkMode={darkMode} setDarkMode={setDarkMode} changeLanguage={changeLanguage} language={language} />
        <HeaderMobile darkMode={darkMode} setDarkMode={setDarkMode} changeLanguage={changeLanguage} language={language} />
      </div>
    </header>
  )
}