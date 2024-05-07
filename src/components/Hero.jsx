import Link from 'next/link'
import React from 'react'
import {FaFacebook, FaGithub, FaLinkedin} from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='h-screen w-full text-center'> {/* as position fixed like absolute */}
        <div className='max-w-screen-xl mx-auto w-full h-full pt-24 p-4 flex flex-col items-center justify-center gap-y-3'>
           <div className='w-64 h-64 mx-auto overflow-hidden rounded-xl'>
             <img src="/2.jpg" alt="" className='h-full mx-auto rounded-xl' />
           </div>
           <h1 className='capitalize font-bold text-gray-700 text-7xl'>software engineer</h1>
           <p className='text-gray-600 text-xl max-w-sm mx-auto'> {/* max-w-sm box tar width */}
             I love to work on web application using technologies like
              React, Tailwind CSS, Next.js and Prisma.
           </p>
           <Link href="/resume.pdf" target='_blank'> {/* idm na thakle thik vabei kaj kore, download={true} ar target='_blank' attribute dile download hobe, sudhu download={true} dile same tab a open hobe*/} 
              <div className='w-36 flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold capitalize rounded-md tracking-wider'>
                resume
              </div>
            </Link>

            <div className='flex gap-x-10'>
              <a href="https://www.facebook.com/264cat/" target='_blank'>
              <div className='flex items-center justify-center rounded-full shadow-md shadow-rose-400 p-3'>
                <FaFacebook size={25}></FaFacebook>
              </div>
              </a>
              <a href="https://github.com/bidhanDas" target='_blank'>
              <div className='flex items-center justify-center rounded-full shadow-md shadow-rose-400 p-3'>
                <FaGithub size={25}></FaGithub>
              </div>
              </a>
              <a href="https://www.linkedin.com/in/bidhan-das-31b35b2a2/" target='_blank'>
              <div className='flex items-center justify-center rounded-full shadow-md shadow-rose-400 p-3'>
                <FaLinkedin size={25}></FaLinkedin>
              </div>
              </a>
              
            </div>

        </div>  
    </div>
  )
}

export default Hero