import Navbar from './Components/Navbar'
import './App.css'
import Hero from './Components/Hero'
import Project from './Components/Project'
import Skills from './Components/Skills'
import ContactForm from './Components/ContactForm'
import Footer from './Components/Footer'
import { useState } from 'react'
import Loader from './Components/Loader'

function App() {

   const [loading, setLoading] = useState(true);
  return (
    <>
        {   loading && ( <Loader onComplete={() => { setLoading(false);}} /> )   }    {/*Loading Component is displayed when loading is true */}
     <Navbar />
     <Hero />
     <Project />
     <Skills />
     <ContactForm />
    <Footer />

    </>
  )
}

export default App
