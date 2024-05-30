import { useEffect, useState } from "react"
import { ContactsList } from "./ContactsList/ContactsList"
import styles from './style.module.scss'
import { useTranslation } from "react-i18next"

export const ContactsSection = () => {
  const { t } = useTranslation()

  const [isVisible, setIsVisible] = useState<boolean>(false)
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setIsVisible(true)
    }
  }))

  useEffect(() => {
    observer.observe(document.querySelector('#contact')!)
  }, [])

  return (
    <section className={styles.contactsSection__container} id="contact">
      <div className={`container ${isVisible ? 'animate__animated animate__zoomIn' : ''}`}>
        <h2 className="font secondary">{t('contactsSectionTitle')}</h2>
        <p className="font tertiary">{t('contactsSectionMessage')}</p>
        <ContactsList />
      </div>
    </section>
  )
}