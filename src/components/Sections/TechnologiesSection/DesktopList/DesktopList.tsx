import { useState } from "react"
import { IconType } from "react-icons"
import { technologiesList, technologiesNames } from "../../../../services/technologies"
import { DesktopListItem } from "./DesktopListItem/DesktopListItem"

import { FaArrowLeft } from "react-icons/fa6";

import styles from './style.module.scss'
import { FaArrowRight } from "react-icons/fa";

interface visibleItemsInterface {
  technologies: IconType[],
  currentIndex: number
}

export const DesktopList = () => {
  const initialState = {
    technologies: technologiesList.slice(0, 5),
    currentIndex: 1
  }

  const [visibleItems, setVisibleItems] = useState<visibleItemsInterface>(initialState)

  const nextTechnologiesPage = (index: number) => {
    const updatedList: visibleItemsInterface = {
      technologies: technologiesList.slice(index*5, (index*5)+5),
      currentIndex: index+1
    } 
    
    setVisibleItems(updatedList)
  }

  const previousTechnologiesPage = (index: number) => {
    const newIndex: number = index - 1

    const updatedList: visibleItemsInterface = {
      technologies: technologiesList.slice((index * 5) - 10, index * 5 - 5),
      currentIndex: newIndex
    }

    setVisibleItems(updatedList)
  }

  const nextButtonDisabled = (5 * (visibleItems.currentIndex - 1)) + visibleItems.technologies.length >= technologiesList.length

  return (
    <ul className={styles.desktopList__container}>
      <button onClick={() => previousTechnologiesPage(visibleItems.currentIndex)} disabled={visibleItems.currentIndex === 1}>
        <FaArrowLeft />
      </button>
      { visibleItems.technologies.map((technology, index) => <DesktopListItem key={index} Technology={technology} technologyName={technologiesNames[technologiesList.findIndex(tech => tech === technology)]} />) }
      <button onClick={() => nextTechnologiesPage(visibleItems.currentIndex)} disabled={nextButtonDisabled}>
        <FaArrowRight />
      </button>
    </ul>
  )
}