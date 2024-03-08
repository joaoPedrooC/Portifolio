import { Header } from "./components/Header/Header"
import { AboutSection } from "./components/Sections/AboutSection/AboutSection"
import { ContactsSection } from "./components/Sections/ContactsSection/ContactsSection"
import { ProjectsSection } from "./components/Sections/ProjectsSection/ProjectsSection"
import { TechnologiesSection } from "./components/Sections/TechnologiesSection/TechnologiesSection"
import './styles/index.scss'

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <AboutSection />
        <TechnologiesSection />
        <ProjectsSection />
        <ContactsSection />
      </main>
    </>
  )
}

export default App
