import { IconType } from "react-icons"

import styles from './style.module.scss'

interface MobileListItemProps {
  Technology: IconType
  technologyName: string
}

export const MobileListItem = ({ Technology, technologyName }: MobileListItemProps) => {
  return (
    <li className={styles.listItem__container}>
      <Technology />
      <div>
        <span className="font tertiary">{technologyName}</span>
      </div>
    </li>
  )
}