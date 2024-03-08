import { ContactsList } from "./ContactsList/ContactsList"

import styles from './style.module.scss'

export const ContactsSection = () => {
  return (
    <section className={styles.contactsSection__container}>
      <div className="container">
        <h2 className="font secondary">Entre em contato comigo</h2>
        <p className="font tertiary">Você consegue me encontrar nessas redes sociais</p>
        <ContactsList />
      </div>
    </section>
  )
}