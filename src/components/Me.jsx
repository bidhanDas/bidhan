import Link from 'next/link'
import React from 'react'

import { MdExpandMore } from "react-icons/md";

const Me = () => {
  return (
      <div id="me" className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider capitalize text-blue-500 font-bold">me</h2>

        <div className="shadow-xl shadow-blue-300 my-8 mx-8">
          <p className="py-4 max-w-2xl mx-auto">
          I am a Software Engineering graduate from American International University - Bangladesh (AIUB).
          </p>
          <p className="py-4 max-w-2xl mx-auto">
          Technology excites me and I am always in awe of the change it drives in the world. Certain skills that I have worked with include HTML, CSS, JavaScript, React, Next.js, Prisma, Tailwind CSS, Bootstrap, Git, GitHub, Figma, Postman. And what I might lack in skills I make up for with my determination to learn.
          </p>
          <p className="py-4 max-w-2xl mx-auto">
          Outside of tech, I am a tea lover and love to play cricket.
          </p>
        </div>
        
      </div>
  )
}

export default Me