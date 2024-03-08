import { Header } from "./components/Header/Header"
import { AboutSection } from "./components/Sections/AboutSection/AboutSection"
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
      </main>
    </>
  )
}

export default App
