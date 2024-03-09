import { IconType } from "react-icons"

import styles from './style.module.scss'

interface IDesktopListItemProps {
  Technology: IconType
  technologyName: string
}

export const DesktopListItem = ({ Technology, technologyName }: IDesktopListItemProps) => {
  return (
    <li className={styles.listItem__container}>
      <div>
        <span className="font tertiary">{technologyName}</span>
      </div>
      <Technology />
    </li>
  )
}