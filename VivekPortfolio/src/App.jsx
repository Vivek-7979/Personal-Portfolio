import Navbar from './Components/Navbar'
import './App.css'
import Hero from './Components/Hero'
import Project from './Components/Project'
import Skills from './Components/Skills'
import ContactForm from './Components/ContactForm'
import Footer from './Components/Footer'
import { useState } from 'react'
import Loader from './Components/Loader'
import About from './Components/About'
import Education from './Components/Education'

function App() {
   const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}

      <header>
        <Navbar />
      </header>

      <main id="main-content">
        <Hero />
        <About />
        <Project />
        <Skills />
        <Education />
        <ContactForm />
      </main>

      <Footer />
    </>
  )
}

export default App
