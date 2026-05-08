import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSummary from './components/AboutSummary'
import ServicesGrid from './components/ServicesGrid'
import Statistics from './components/Statistics'
import WorkProcess from './components/WorkProcess'
import Testimonials from './components/Testimonials'
import NewsBlogs from './components/NewsBlogs'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen font-sans antialiased overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutSummary />
      <ServicesGrid />
      <Statistics />
      <WorkProcess />
      <Testimonials />
      <NewsBlogs />
      <Footer />
    </div>
  )
}

export default App
