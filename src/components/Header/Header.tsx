import styles from './style.module.scss'
import { HeaderMobile } from './HeaderMobile/HeaderMobile'
import { HeaderDesktop } from './HeaderDesktop/HeaderDesktop'

export const Header = () => {
  return (
    <header className={`${styles.header} animate__animated animate__fadeInDown animate__delay-1s`}>
      <div className="container">
        <HeaderDesktop />
        <HeaderMobile />
      </div>
    </header>
  )
}