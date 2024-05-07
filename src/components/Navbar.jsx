"use client"
import Link from 'next/link'
import React, { useState } from 'react'

import {FaBars, FaTimes, FaFacebook, FaGithub, FaLinkedin} from 'react-icons/fa'

const Navbar = () => {

  const [navigation, setNavigation] = useState(false);

  return (
    <>
    <div className='z-10 w-full h-20 fixed text-black duration-300 ease-in bg-white'>
     <div className='flex justify-between items-center p-4 max-w-screen-xl mx-auto'>
       <Link className='' href={"/"}>
          <h1 className='text-3xl lg:text-4xl font-bold uppercase underline underline-offset-2 tracking-wider'>bidhan</h1>
       </Link>

        <div>
        <ul className='hidden md:flex'>
          <li className='ml-10 text-base capitalize duration-200 ease-out tracking-wider hover:scale-105'><Link href={"/"}>home</Link></li>
          <li className='ml-10 text-base capitalize duration-200 ease-out tracking-wider hover:scale-105'><Link href={"#projects"}>projects</Link></li>
          <li className='ml-10 text-base capitalize duration-200 ease-out tracking-wider hover:scale-105'><Link href={"#skills"}>skills</Link></li>
          <li className='ml-10 text-base capitalize duration-200 ease-out tracking-wider hover:scale-105'><Link href={"#me"}>me</Link></li>
          <li className='ml-10 text-base capitalize duration-200 ease-out tracking-wider hover:scale-105'><Link href={"#contact"}>contact</Link></li>
        </ul>

        {
          !navigation && (
            <div className='md:hidden cursor-pointer' onClick={() => setNavigation(true)}>
              <FaBars size={30}></FaBars>
            </div>
          )
        }
        </div>   
     </div>
    </div>

    <div className={navigation ? 'z-10 md:hidden fixed left-0 top-0 w-full h-full bg-black/70 backdrop-blur' : ''}>
    <div className={navigation ? 'fixed left-0 top-0 w-4/5 h-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-10 ease-in duration-500' :'fixed top-0 left-[-100%] p-10 h-full ease-in duration-500'}>
        
          <div className='w-full flex justify-between items-center'>
            <Link href={"/"}><h2 className='text-3xl font-bold uppercase underline underline-offset-2 tracking-wider cursor-pointer' onClick={() => setNavigation(false)}>bidhan</h2></Link>
            <div className='p-3 cursor-pointer' onClick={() => setNavigation(false)}>
              <FaTimes size={30}></FaTimes>
            </div>
          </div>
      

        <div className='mt-14'>
          <ul className='capitalize'>
            <li className='py-4 text-2xl tracking-wider' onClick={() => setNavigation(false)}><Link href={"/"}>home</Link></li>
            <li className='py-4 text-2xl tracking-wider' onClick={() => setNavigation(false)}><Link href={"#projects"}>projects</Link></li>
            <li className='py-4 text-2xl tracking-wider' onClick={() => setNavigation(false)}><Link href={"#skills"}>skills</Link></li>
            <li className='py-4 text-2xl tracking-wider' onClick={() => setNavigation(false)}><Link href={"#me"}>me</Link></li>
            <li className='py-4 text-2xl tracking-wider' onClick={() => setNavigation(false)}><Link href={"#contact"}>contact</Link></li>
          </ul>
        </div>
            <div className='mt-8 grid grid-cols-2 w-4/5 mx-auto gap-10'>
              <a href="https://www.facebook.com/264cat/" target='_blank'>
              <div className='flex items-center justify-center rounded-full shadow-md shadow-white p-3'>
                <FaFacebook size={25}></FaFacebook>
              </div>
              </a>
              <a href="https://github.com/bidhanDas" target='_blank'>
              <div className='flex items-center justify-center rounded-full shadow-md shadow-white p-3'>
                <FaGithub size={25}></FaGithub>
              </div>
              </a>
              <a href="https://www.linkedin.com/in/bidhan-das-31b35b2a2/" target='_blank'>
              <div className='flex items-center justify-center rounded-full shadow-md shadow-white p-3'>
                <FaLinkedin size={25}></FaLinkedin>
              </div>
              </a>
            </div>
    </div>
    </div>
    </>
  )
}

export default Navbar