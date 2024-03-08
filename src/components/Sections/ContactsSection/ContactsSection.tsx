import { ContactsList } from "./ContactsList/ContactsList"

import styles from './style.module.scss'

export const ContactsSection = () => {
  return (
    <section className={styles.contactsSection__container} id="contact">
      <div className="container contact">
        <h2 className="font secondary">Entre em contato comigo</h2>
        <p className="font tertiary">Você consegue me encontrar nessas redes sociais</p>
        <ContactsList />
      </div>
    </section>
  )
}