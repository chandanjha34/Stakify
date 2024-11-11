import React from 'react'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Feature'
import Guides from './components/Guide.jsx'
import Reward from './components/Reward'

function App() {
  return (
    <>
      <Hero/>
      <About/>
      <Features/>
      <Guides/>
      <Reward/>
    </>
  )
}

export default App
