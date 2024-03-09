import { useEffect, useState } from "react"
import { ContactsList } from "./ContactsList/ContactsList"
import styles from './style.module.scss'

export const ContactsSection = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }))

  useEffect(() => {
    observer.observe(document.querySelector('#contact')!)
  }, [])

  return (
    <section className={styles.contactsSection__container} id="contact">
      <div className={`container ${isVisible ? 'animate__animated animate__zoomIn' : ''}`}>
        <h2 className="font secondary">Entre em contato comigo</h2>
        <p className="font tertiary">Você consegue me encontrar nessas redes sociais</p>
        <ContactsList />
      </div>
    </section>
  )
}