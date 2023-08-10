import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-theme-dark-slate text-[#f9fafc]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid-cols-2 gap-8'>
                <div className='sm:text-center pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#f9fafc]'>About</p>
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold '>
                    <p>Hi. I'm Shuvro, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                    <p>Shuvro is a computer science graduate, a passionate coder, researcher and community contributor. He has extensive experience creating cutting-edge machine learning solutions. He is currently in charge of Zantrik's AI Team. He has a general interest in machine learning and how it relates to vision. Apart from that, he is a regular contributor of many local and international tech communities.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About