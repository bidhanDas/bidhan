import React from 'react'

const Skills = () => {
  return (
        <div id="skills" className='max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left'>
            <h2 className='text-5xl md:text-7xl tracking-wider capitalize text-blue-500 font-bold'>skills</h2>
            <div className='grid lg:grid-cols-4 gap-8 my-8 px-8'>
                <div className='flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 odd:shadow-rose-400 even:shadow-blue-400'>
                    <img src="/html.png" width="64px" height="64px" alt="" />
                    <h3 className='font-light'>HTML</h3>
                </div>

                <div className='flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 odd:shadow-rose-400 even:shadow-blue-400'>
                    <img src="/css.png" width="64px" height="64px" alt="" />
                    <h3 className='font-light'>CSS</h3>
                </div>

                <div className='flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 odd:shadow-rose-400 even:shadow-blue-400'>
                    <img src="/javascript.png" width="64px" height="64px" alt="" />
                    <h3 className='font-light'>JavaScript</h3>
                </div>

                <div className='flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 odd:shadow-rose-400 even:shadow-blue-400'>
                    <img src="/react.png" width="64px" height="64px" alt="" />
                    <h3 className='font-light'>React</h3>
                </div>

                <div className='flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 odd:shadow-rose-400 even:shadow-blue-400'>
                    <img src="/nextjs.png" width="64px" height="64px" alt="" />
                    <h3 className='font-light'>Next.js</h3>
                </div>

                <div className='flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 odd:shadow-rose-400 even:shadow-blue-400'>
                    <img src="/tailwind.png" width="64px" height="64px" alt="" />
                    <h3 className='font-light'>Tailwind CSS</h3>
                </div>

                <div className='flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 odd:shadow-rose-400 even:shadow-blue-400'>
                    <img src="/bootstrap.png" width="64px" height="64px" alt="" />
                    <h3 className='font-light'>Bootstrap</h3>
                </div>

                <div className='flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 odd:shadow-rose-400 even:shadow-blue-400'>
                    <img src="/github.png" width="64px" height="64px" alt="" />
                    <h3 className='font-light'>GitHub</h3>
                </div>
            </div>
        </div>
  )
}

export default Skills