import React from 'react'

const Education = () => {
    return (
        <div name='education' className='h-screen w-full text-[#0F1729]' >
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-justify'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#0f1729]'>Education</p>
                    <p className='text-text-small-slate-dark py-4'>I have a strong academic background in the field of Computer Science and Engineering. I have pursued both of my M.Sc. and B.Sc. degree in Computer Science & Engineering from Khulna University.</p>

                    <p className='text-text-small-slate-dark py-2'>In 2009, I embarked on my undergraduate journey, majoring in Computer Science & Engineering. This four-year program provided me with a solid foundation in various aspects of computer science. During my time at Khulna University, I undertook a thesis titled "Bangla Handwritten Character Recognition on Android Based Devices." This work focused on developing an android mobile app that utilizes handwriting recognition techniques specific to the Bangla language. I successfully completed the project and obtained copyright for my app, titled "Bangla Handwritten Calculator," from the Bangladesh Copyright Office on September 15, 2015. </p>

                    <p className='text-text-small-slate-dark py-2'>Buoyed by my success at the undergraduate level, I decided to pursue further specialization in the field of computer science. In 2017, I enrolled in the M.Sc. program in Computer Science & Engineering at Khulna University. Over the course of four years (during covid pandemic), I delved deeper into my areas of interest, especially in the field of image processing and machine learning. For my M.Sc. thesis, I focused on the important domain of image forgery detection. My research involved utilizing Convolutional Neural Networks (CNN) and Local Binary Pattern based patch descriptors to detect image forgery. The quality and significance of my work were recognized, and my thesis was honored as one of the Best papers for the Deep Learning track. </p>

                    <p className='text-text-small-slate-dark py-2'>My educational journey has provided me with a strong academic foundation, as well as practical experience in developing innovative solutions in the field of computer science. I am passionate about staying at the forefront of technological advancements and contributing to the field through innovative research and development projects.</p>
                </div>

            </div>
        </div>
    )
}

export default Education