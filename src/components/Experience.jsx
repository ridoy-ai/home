import React from 'react'
import ServiceWebWork from '../assets/servicewebtemplate.png';
import ExperienceItem from './ExperienceItem';

const Experience = () => {
  return (
    <div name='experience' className='w-full bg-[#0F1729] text-[#f9fafc]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#f9fafc] text-[#f9fafc]'>Working Experience</p>
        </div>

        <div className="container mx-auto">
          <ExperienceItem
            date="Oct 2019 - Present"
            dateColor="#f9fafc"
            name="Team Lead, Artificial intelligence"
            company="Zantrik"
            description="⦿ Responsible to lead research and development works related with Computer Vision. 
⦿ Responsible for planning and preparing data collection, preprocessing, model training and deployment pipelines."
          />

          <ExperienceItem
            date="Sep 2017 - Dec 2019"
            dateColor="#6b7280"
            name="Founder"
            company="FoodEye"
            description="⦿ Responsible for carrying out ideas, app development, business growth, resource allocation and investment management."
            link="http://example.com/link1"
          />

          <ExperienceItem
            date="Oct 2015 - Oct 2017"
            dateColor="#6b7280"
            name="Sr. Software Engineer, Android"
            company="XOR Software Solution"
            description="⦿ Responsible for designing, developing and planning of in-house native android mobile applications."
            link="http://example.com/link1"
          />

          {/* Repeat this for other resume items */}
        </div>
        {/* <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div style={{backgroundImage: `url(${ServiceWebWork})`}} className='shadow-lg group shadow-[#000] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-150 duration-200'></div>
                <div style={{backgroundImage: `url(${ServiceWebWork})`}} className='shadow-lg group shadow-[#000] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-150 duration-200'></div>
                <div style={{backgroundImage: `url(${ServiceWebWork})`}} className='shadow-lg group shadow-[#000] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-150 duration-200'></div>
                <div style={{backgroundImage: `url(${ServiceWebWork})`}} className='shadow-lg group shadow-[#000] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-150 duration-200'></div>
                <div style={{backgroundImage: `url(${ServiceWebWork})`}} className='shadow-lg group shadow-[#000] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-150 duration-200'></div>
                <div style={{backgroundImage: `url(${ServiceWebWork})`}} className='shadow-lg group shadow-[#000] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-150 duration-200'></div>           
           
            </div> */}
      </div>
    </div>
  )
}

export default Experience