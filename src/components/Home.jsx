import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#fff]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-text-indigo mt-8 sm:mt-0'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-text-large-slate'>Shuvro Pal</h1>
            <h2 className='text-4xl sm:text-5xl font-bold text-text-medium-gray'>I'm a Senior Machine Learning Engineer</h2>
            <p className='text-text-small-gray py-4 max-w-[700px] text-justify'>Equipped with an unquenchable thirst for knowledge and boundless curiosity, I am a lifelong learner who constantly seeks to expand my horizons. As a dedicated researcher and passionate coder, I am proficient in building complex algorithms and designing intelligent systems. My expertise lies in the realm of machine learning, where I engage in cutting-edge research to advance the boundaries of artificial intelligence. Beyond my professional pursuits, I find solace in the harmonious melodies of music and thrive in the challenges of competitive gaming.</p>
            <div>
                <button className='text-[#fff] group bg-theme-dark-slate px-6 py-3 my-2 flex items-center hover:bg-[#fff] duration-200 hover:text-[#0F1729]'>View Work 
                <span>
                <HiArrowNarrowRight className='group-hover:translate-x-2 duration-200 ml-4'/>
                </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home