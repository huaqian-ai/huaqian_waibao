import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Capabilities from './components/Capabilities'
import Features from './components/Features'
import Scenes from './components/Scenes'
import SaaSPricing from './components/SaaSPricing'
import CustomPricing from './components/CustomPricing'
import DeliveryStandards from './components/DeliveryStandards'
import WhyChooseUs from './components/WhyChooseUs'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Capabilities />
          <Features />
          <Scenes />
          <SaaSPricing />
          <CustomPricing />
          <DeliveryStandards />
          <WhyChooseUs />
          <CTA />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App