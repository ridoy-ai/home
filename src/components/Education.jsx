import React from 'react'
import EducationItem from './EducationItem';

const education = [
    {
        date: '2017- 2021',
        dateColor: '#020617',
        degName: 'M.Sc. in Computer Science & Engineering',
        institution: 'Khulna University',
        description: '⦿ GPA: 3.58 out of 4.\n ⦿ Thesis: Image Forgery Detection Using CNN and Local Binary Pattern Based Patch Descriptor.',
        pubLink: 'https://doi.org/10.1007/978-981-19-0475-2_38',
        pubText: 'Published at Springer ⮕',
        transcriptLink: 'https://drive.google.com/drive/folders/1vwzTPwY9ITAz3_vUBqDOYizCiiRuNbCQ?usp=sharing',
    },
    {
        date: '2009- 2013',
        dateColor: '#020617',
        degName: 'B.Sc. in Computer Science & Engineering',
        institution: 'Khulna University',
        description: '⦿ GPA: 3.30 out of 4.\n ⦿ Thesis: Bangla Handwritten Character Recognition on Android Based Devices.',
        pubLink: 'https://drive.google.com/drive/folders/1rg5NlOHxqDyJjDMvWT6n22jGoeJ7QVpE?usp=sharing',
        pubText: 'Copyright handover⮕',
        transcriptLink: 'https://drive.google.com/drive/folders/1QEPLHFx3FN4eQAeV3aN59NtQBQHTwQXh?usp=sharing',
    }
]

const Education = () => {
    return (
        <div name='education' className='w-full text-[#0F1729]' >
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-justify'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#0f1729]'>Education</p>
                    <div className="container mx-auto mt-4">
                        {education.map((item) => (
                            <EducationItem {...item} />
                        ))}
                    </div>
                    <p className='text-2xl font-bold inline border-b-4 border-[#0f1729]'>Background</p>
                    <p className='text-text-small-slate-dark py-4'>I have a strong academic background in the field of <b>Computer Science and Engineering</b>. I have pursued both of my <b>M.Sc.</b> and <b>B.Sc.</b> degree from <a class="underline italic" href="https://ku.ac.bd/discipline/cse" rel="noreferrer" target="_blank">Computer Science & Engineering Discipline</a> of <a class="underline italic" href="https://ku.ac.bd/" rel="noreferrer" target="_blank">Khulna University, Bangladesh</a>.</p>

                    <p className='text-text-small-slate-dark py-2'>In <b>2009</b>, I embarked on my <b>undergraduate</b> journey, majoring in Computer Science & Engineering. This four-year program provided me with a solid foundation in various aspects of computer science. During my time at Khulna University, I undertook a thesis titled "Bangla Handwritten Character Recognition on Android Based Devices". This work focused on developing an android mobile app that utilizes <b>handwriting recognition techniques</b> specific to the <b>Bangla language</b>. I successfully completed the project and obtained <b>copyright</b> for my app, titled "<a class="underline italic" href="https://play.google.com/store/apps/details?id=com.droidcrackers.banglagonokjontro" rel="noreferrer" target="_blank">Bangla Handwritten Calculator</a>", from the <b>Bangladesh Govt. Copyright Office</b> on September 15, 2015. </p>

                    <p className='text-text-small-slate-dark py-2'>Buoyed by my success at the undergraduate level, I decided to pursue further specialization in the field of computer science. In <b>2017</b> , I enrolled in the <b>M.Sc.</b>  program in Computer Science & Engineering at Khulna University. Over the course of four years (during covid pandemic), I delved deeper into my areas of interest, especially in the field of <b>image processing</b> and <b>deep learning</b>. For my M.Sc. thesis, I focused on the important domain of <b>image forgery detection</b>. My research involved utilizing <b>Convolutional Neural Networks (CNN)</b> and <b>Local Binary Pattern based patch descriptors</b> to detect image forgery. The quality and significance of my work were recognized, and my thesis was honored as one of the <b><a class="underline italic" href="https://drive.google.com/drive/folders/1gVi-nBbFuUmBC5oCod3gyk1RlB0-vGjT?usp=sharing" rel="noreferrer" target="_blank">Best papers</a></b> for the <b>Deep Learning track</b> at <a class="underline italic" href="https://link.springer.com/book/10.1007/978-981-19-0475-2" rel="noreferrer" target="_blank">ICICV-2021</a>. </p>

                    <p className='text-text-small-slate-dark py-2'>My educational journey has provided me with a strong academic foundation, as well as practical experience in developing innovative solutions in the field of computer science. I am passionate about staying at the forefront of technological advancements and contributing to the field through innovative research and development projects.</p>

                </div>

            </div>
        </div>
    )
}

export default Education