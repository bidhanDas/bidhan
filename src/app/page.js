import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Me from '@/components/Me'
import Projects from '@/components/Projects'
import React from 'react'
import Skills from '@/components/Skills'

const page = () => {
  return (
    <div>
      <Hero></Hero>
      <Projects></Projects>
      <Skills></Skills>
      <Me></Me>
      <Contact></Contact>
    </div>
  )
}

export default page