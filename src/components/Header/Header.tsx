import styles from './style.module.scss'
import { HeaderMobile } from './HeaderMobile/HeaderMobile'
import { HeaderDesktop } from './HeaderDesktop/HeaderDesktop'

interface IHeaderProps {
	darkMode: boolean
	setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

export const Header = ({ darkMode, setDarkMode }: IHeaderProps) => {
  return (
    <header className={`${styles.header} animate__animated animate__fadeInDown animate__delay-1s`}>
      <div className="container">
        <HeaderDesktop darkMode={darkMode} setDarkMode={setDarkMode} />
        <HeaderMobile darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </header>
  )
}