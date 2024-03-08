import { Header } from "./components/Header/Header"
import { AboutSection } from "./components/Sections/AboutSection/AboutSection"
import { TechnologiesSection } from "./components/Sections/TechnologiesSection/TechnologiesSection"
import './styles/index.scss'

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <AboutSection />
        <TechnologiesSection />
      </main>
    </>
  )
}

export default App
