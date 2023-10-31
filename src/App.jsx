import React from 'react'
import Header from './component/header/header'
import Nav from './component/Nav/Nav'
import Skills from './component/skills/skills'
import Experience from './component/experience/Experience'
import Projects from './component/Projects/Projects'
import About from './component/about/About'
import Contact from './component/contact/Contact'
import Footer from './component/footer/footer'


const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Skills/>
        <Experience/>
        <Projects/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App