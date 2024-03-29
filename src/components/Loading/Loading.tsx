import styles from './style.module.scss'

export const Loading = () => {
  return (
    <div className={styles.loading__container}>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}