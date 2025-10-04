import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Interest from './components/Interest'
import Contact from './components/Contact'

export default function page() {
  return (
    <main className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <section id="home" className="flex flex-col items-center justify-center h-screen text-center px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
        <h1 className="text-6xl font-extrabold dark:text-white">Hi, I&apos;m <span className="text-blue-600">Shaima</span></h1>
        <h3 className="mt-4 text-lg dark:text-white">Backend Developer And AI/ML Enthusiast</h3>
      </section>
      <About />
      <Projects />
      <Interest />
      <Contact />
    </main>
  )
}