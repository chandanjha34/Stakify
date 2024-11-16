import React from 'react'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Feature'
import Guides from './components/Guide.jsx'
import Reward from './components/Reward'
import FAQ from './components/FAQ.jsx'
import Contact from './components/Contact.jsx'

function App() {
  return (
    <div>
      <Hero/>
      <About/>
      <Features/>
      <Guides/>
      <Reward/>
      <FAQ/>
      <Contact/>
    </div>
  )
}

export default App
