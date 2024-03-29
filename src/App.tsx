import { useEffect, useState } from "react"
import { Header } from "./components/Header/Header"
import { AboutSection } from "./components/Sections/AboutSection/AboutSection"
import { ContactsSection } from "./components/Sections/ContactsSection/ContactsSection"
import { ProjectsSection } from "./components/Sections/ProjectsSection/ProjectsSection"
import { TechnologiesSection } from "./components/Sections/TechnologiesSection/TechnologiesSection"
import './styles/index.scss'
import 'animate.css'

export const App = () => {
  const [darkMode, setDarkMode] = useState<boolean>(
		JSON.parse(localStorage.getItem('@portifolio/dark-mode')!) || false
	);

	useEffect(() => {
		document.querySelector('html')!.className = darkMode ? 'darkmode' : ''
		localStorage.setItem('@portifolio/dark-mode', darkMode.toString())
	}, [darkMode])

  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <AboutSection darkMode={darkMode} />
        <TechnologiesSection />
        <ProjectsSection />
        <ContactsSection />
      </main>
    </>
  )
}

export default App
