import { Header } from "./components/Header/Header"
import { AboutSection } from "./components/Sections/AboutSection/AboutSection"
import './styles/index.scss'

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <AboutSection />
      </main>
    </>
  )
}

export default App
