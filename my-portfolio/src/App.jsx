import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About' // Naya About section import
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About /> {/* Yahan add kiya About */}
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </div>
  )
}

export default App