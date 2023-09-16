import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  const handleClick = () => {
    var element = document.getElementById("experience");
    element.scrollIntoView({behavior:"smooth", block: "start", inline:"nearest"});
  }
  return (
    <div name='home' className='w-full h-screen bg-[#fff]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-text-indigo mt-8 sm:mt-0'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-text-large-slate'>Shuvro Pal</h1>
            <h2 className='text-4xl sm:text-5xl font-bold text-text-medium-gray'>I'm a Senior Machine Learning Engineer</h2>
            <p className='text-text-small-gray py-4 max-w-[700px] text-justify'>With an insatiable desire for learning and limitless curiosity, I am a lifelong learner who is always looking to broaden my horizons. As a dedicated researcher and passionate coder, I am proficient in building complex algorithms and designing intelligent systems. My area of expertise is in machine learning, and I am actively involved in cutting-edge research that pushes the limits of AI. From more practical perspective, I find it appealing to explore the scopes of semantic recognition and understanding related to vision. This includes the opportunities but not limited to object detection, segmentation, 3D scene understanding, event detection, human pose detection, behavior detection etc. from image or video data.</p>
            <div>
                <button onClick={handleClick} className='text-[#fff] group bg-theme-dark-slate px-6 py-3 my-2 flex items-center hover:bg-[#fff] duration-200 hover:text-[#0F1729]'>View Experience 
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