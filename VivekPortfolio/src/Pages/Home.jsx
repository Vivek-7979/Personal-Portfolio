import { useState } from 'react'
import Navbar from '../Components/Layout/Navbar'
import Footer from '../Components/Layout/Footer'
import Loader from '../Components/Common/Loader'
import Hero from '../Components/Sections/Hero'
import About from '../Components/Sections/About'
import Project from '../Components/Sections/Project'
import Skills from '../Components/Sections/Skills'
import Education from '../Components/Sections/Education'
import ContactForm from '../Components/Sections/ContactForm'

function Home() {
  const [loading, setLoading] = useState(true)

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

export default Home
