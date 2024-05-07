import Link from 'next/link'
import React from 'react'

const Projects = () => {
  return (
        <div id='projects' className='max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left'>
          <h2 className='text-5xl md:text-7xl tracking-wider capitalize text-blue-500 font-bold'>projects</h2>
          <div className="my-8 px-8">

            <div className='mb-11'>
            <p className='font-bold text-2xl'>1. News Portal Website (Full-Stack Project)</p>
            <p>Technologies : Next.js, Prisma, PostgreSQL, Bootstrap</p>
            <p>Languages : JavaScript</p>
            <p>Description : Header Top is dynamic(facebook, youtube, twitter, linkedin links are coming from database). Navbar is dynamic, nav-items are coming from backend.
            There are Search Option, Login/Logout Option, Sign-up(Registration) Option with Forget Password(Password Recover) feature.
            The footer is dynamic, all content are coming from database. 'Privacy Policy' and 'Terms & Conditions' pages are dynamic too.
            There is Subscribe Option. There are 'Latest News', 'Popular News', 'News By Category', 'News Details' features and User(logged-in) Comment Option.
            There are User profile dashboar, profile update option and user total comments list dashboard and managing those.
            <span className='text-red-500'> The website may work a little bit slow.</span></p>
            <a href="https://7news.vercel.app/" className='inline-block mt-2' target='_blank'>
            <div className='w-24 py-2 flex items-center justify-center font-bold rounded-md tracking-wider text-green-500 hover:text-red-500 border-2 border-green-500'>Live Link</div>
            </a>
            <a href="https://github.com/bidhanDas/7news" className='inline-block mt-2 ml-5' target='_blank'>
            <div className='w-32 py-2 flex items-center justify-center font-bold rounded-md tracking-wider text-green-500 hover:text-red-500 border-2 border-green-500'>Source Code</div>
            </a>
            </div>

            <div className='mb-11'>
            <p className='font-bold text-2xl'>2. Agency Website (Frontend Project)</p>
            <p>Technologies : Next.js, Tailwind CSS, 3rd party Rest API</p>
            <p>Languages : JavaScript</p>
            <p>Description : I have implemented some SEO features (Dynamic) and fetched the images, text and some data from a 
            3rd party rest API and posted some user provided information (Contact section) to the backend/API.
            The title is dynamic too.</p>
            <a href="https://atis-agency.vercel.app/" className='inline-block mt-2' target='_blank'>
            <div className='w-24 py-2 flex items-center justify-center font-bold rounded-md tracking-wider text-green-500 hover:text-red-500 border-2 border-green-500'>Live Link</div>
            </a>
            <a href="https://github.com/bidhanDas/atis-agency" className='inline-block mt-2 ml-5' target='_blank'>
            <div className='w-32 py-2 flex items-center justify-center font-bold rounded-md tracking-wider text-green-500 hover:text-red-500 border-2 border-green-500'>Source Code</div>
            </a>
            </div>

            <div className='mb-11'>
            <p className='font-bold text-2xl'>3. E-commerce Website (Frontend Design/Layout)</p>
            <p>Technologies : React, Tailwind CSS</p>
            <p>Languages : JavaScript</p>
            <p>Description : I have designed the Home page, Shop page, About page, Contacts and Journal. 
              Please have a click on 'Shop by Category' icon, 'cart' icon, 'my account' icon 
              in header section.
            </p>
            <a href="https://orebi-eco.netlify.app/" className='inline-block mt-2' target='_blank'>
            <div className='w-24 py-2 flex items-center justify-center font-bold rounded-md tracking-wider text-green-500 hover:text-red-500 border-2 border-green-500'>Live Link</div>
            </a>
            <a href="https://github.com/bidhanDas/orebi-ecommerce" className='inline-block mt-2 ml-5' target='_blank'>
            <div className='w-32 py-2 flex items-center justify-center font-bold rounded-md tracking-wider text-green-500 hover:text-red-500 border-2 border-green-500'>Source Code</div>
            </a>
            </div>

          </div>
        </div>
  )
}

export default Projects