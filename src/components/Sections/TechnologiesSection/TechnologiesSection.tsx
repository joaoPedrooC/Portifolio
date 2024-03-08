import { DesktopList } from './DesktopList/DesktopList'
import { MobileList } from './MobileList/MobileList'
import styles from './style.module.scss'

export const TechnologiesSection = () => {
  return (
    <section className={styles.technologiesSection__container}>
      <div className="container">
        <h2 className="font secondary">Minhas tecnologias</h2>
        <MobileList />
        <DesktopList />
      </div>
    </section>
  )
}