import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sneak from './components/Sneak'
import Features from './components/Features'
import More from './components/More'
import Prices from './components/Prices'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Sneak />
      <Features />
      <More />
      <Prices />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
