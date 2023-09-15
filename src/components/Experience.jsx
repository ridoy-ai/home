import React from 'react'
import ServiceWebWork from '../assets/servicewebtemplate.png';
import ExperienceItem from './ExperienceItem';

const experience = [
  {
    date: 'Oct 2019 - Present',
    dateColor: '#f9fafc',
    name: 'Team Lead, Artificial intelligence',
    company: 'Zantrik',
    description: '⦿ Responsible to lead research and development team focused on Computer Vision and NLP.\n ⦿ Responsible for planning and preparing data collection, preprocessing, model training, deployment and process optimization pipelines.',
    link: 'http://example.com',
    projects: [
      {
        name: 'Digital Driver',
        description: 'An Artificial Intelligence-based app which may accident-proof fleet drivers with better visibility. Has real time facial landmark detection, head pose estimation, eye blink detection, real-time accident detection and yawning detection features.',
        techStack: ['Android', 'Java', 'Kotlin', 'Python', 'TensorFlow', 'REST', 'Google Map API', 'Google MediaPipe', 'Pose Estimation algo.', 'Night Vision algo.', 'Geofencing', 'Location based real-time notification algo.'],
        link: 'https://play.google.com/store/apps/details?id=com.zantrik.digitaldriver'
      },
      // More projects...
      {
        name: 'Zantrik AutoBot',
        description: 'A smart chatbot acting as a vehicle maintenance assistant fueled by latest OpenAI API. Pinecone and LangChain based pipelines were used to suggest latest services, offers and prices to the users.',
        techStack: ['React', 'Tailwind', 'OpenAI API', 'Pinecone API', 'LangChain API', 'ASP.NET'],
        link: 'https://autobot.zantrik.com/'
      },
      {
        name: 'CareerKey',
        description: 'A GPT based career guideline application which suggests suitable careed based on user profile, interest and merit.',
        techStack: ['React', 'Tailwind', 'OpenAI API', 'ASP.NET'],
        link: 'https://career-key.azurewebsites.net/'
      },
      {
        name: 'Digital Garage',
        description: 'A digital solution for garage owners that can detect and recognize different type of vehicles, record vehicles entires, as well as their license plates.',
        techStack: ['Kivy', 'Python', 'Tensorflow', 'Real-time Object detection & Recognition', 'YOLO v4/v5'],
        link: 'https://drive.google.com/drive/folders/11aLf4lHtKwPjJPh68cuKCaz_kmqImUpc?usp=sharing'
      },
      {
        name: 'Car Parts Damage Detection and Segmentation ',
        description: 'A digital solution for garage owners that can detect and recognize different type of vehicles, record vehicles entires, as well as their license plates.',
        techStack: ['Kivy', 'Python', 'Tensorflow', 'Real-time Object detection & Recognition', 'YOLO v4/v5', 'YOLACT'],
        link: 'https://drive.google.com/drive/folders/1owVcpPunI4R7gTma-C_szJQoIqI8y3Kk?usp=sharing'
      },
    ]
  },
  // More experience items...
  {
    date:'Sep 2017 - Dec 2019',
    dateColor:'#6b7280',
    name:'Founder',
    company:"FoodEye",
    description:"⦿ Founded the first food delivery company of my local city, Khulna.\n⦿ Was responsible for carrying out ideas, app development, business growth, resource allocation and investment management.",
    link:"http://example.com/link1",
    projects: [
      {
        name: 'FoodEye, Find and Order Food in Khulna',
        description: 'A food delivery app built with react native platform where users can browse, search and order foods from local restaurants.',
        techStack: ['React', 'CSS', 'PWA', 'Python Django'],
        link: 'https://play.google.com/store/apps/details?id=org.foodeye.mobile&hl=en&gl=US'
      },
      // More projects...
    ]
  },
  {
    date:'Oct 2015 - Oct 2017',
    dateColor:'#6b7280',
    name:'Sr. Software Engineer, Android',
    company:"XOR Software Solution",
    description:"⦿ Responsible for designing, developing and planning of in-house native android mobile applications.",
    link:"http://example.com/link1",
    projects: [
      {
        name: 'Obelisk Tours London & Britain',
        description: 'An app to explore famous tourist spots of London and Britain.',
        techStack: ['Android', 'Java', 'PHP'],
        link: 'https://apkpure.com/obelisk-tours-london-britain/com.appinstitute.obelisktours'
      },
      // More projects...
      {
        name: 'uLibrary',
        description: 'An eAudio solution for libraries of UK.',
        techStack: ['Android', 'Java', 'PHP'],
        link: 'https://play.google.com/store/apps/details?id=ulibrary.ulverscroftulibrary.co.uk.ulibrary'
      },
    ]
  },
  {
    date:'Feb 2015 - Jun 2015',
    dateColor:'#6b7280',
    name:'Regional Project Manager & Lead Trainer',
    company:"EATL & Ministry of ICT, Bangladesh",
    description:"⦿ Implemented a 4 months Govt. operated android training program to three universities (KUET, KU, NWU) and acted as lead trainer for Khulna Zone."
  },
  {
    date:'Oct 2014 - Feb 2015',
    dateColor:'#6b7280',
    name:'Chief Technology Officer',
    company:"Dream71 Bangladesh Limited",
    description:"⦿ Acted as idea, research and development lead.\n ⦿ Was responsible for building the first ever live cricket scoring app in Bangla language named “Cricket Bangladesh”.",
    link:"http://example.com/link1",
    projects: [
      {
        name: 'Cricket Bangladesh',
        description: 'A live scoring cricket app that features all updates about Bangladesh cricket along with a social fan-zone.',
        techStack: ['Android', 'Java', 'PHP', 'Facebook SDK'],
        link: 'https://play.google.com/store/apps/details?id=com.dream71.cricketbangladesh'
      },
      // More projects...
      {
        name: 'DMP Official',
        description: 'A mobile application which features the official functions of Dhaka Metropolitan Police.',
        techStack: ['Android', 'Java', 'PHP']
      },
    ]
  },
  {
    date:'Jul 2014 - Oct 2014',
    dateColor:'#6b7280',
    name:'Software Engineer, Android',
    company:"L.A. Technologies",
    description:"⦿ Implemented two cross-platform (Appcelerator Titanium) android applications.",
    link:"http://example.com/link1",
    projects: [
      {
        name: 'FBirthday Manager',
        description: 'An app for wishing happy birthday message to multiple facebook friends at a time.',
        techStack: ['Titanium', 'JavaScript', 'Facebook SDK']
      },
      // More projects...
    ]
  },
  {
    date:'Dec 2013 - Mar 2014',
    dateColor:'#6b7280',
    name:'Junior Software Engineer',
    company:"The Code and Fix Software Limited",
    description:"⦿ Contributed into existing projects written for ASP.NET and Android platform.",
    link:"http://example.com/link1",
    projects: [
      {
        name: 'Ball HD Live Wallpaper',
        description: 'A Wallpaper app that performs different object animations smoothly. Objects change their shape on user tap as well. Includes device vibration and animation speed control settings.',
        techStack: ['Android', 'Java'],
        link: 'https://apkpure.com/ball-hd-live-wallpaper/com.codeandfix.ballhdlivewallpaper'
      },
      // More projects...
      {
        name: 'University Syllabus Management',
        description: 'A syllabus management system with custom filtering and searching of course title, course id along with an admin panel. Initially developed for CSE discipline, Khulna University.',
        techStack: ['C#', 'ASP.NET 4.0'],
        link: 'https://ku.ac.bd/discipline/cse'
      },
    ]
  },
  {
    date:'2013 - Present',
    dateColor:'#f9fafc',
    name:'Software Developer',
    description:"⦿ App/Service/Solutions that I developed in my spare times.",
    link:"http://example.com/link1",
    projects: [
      {
        name: 'Bangla Handwritten Calculator',
        description: 'An app that performs mathematical calculation by recognizing bangla handwritten digit patterns.',
        techStack: ['Android', 'Java', 'Gesture Recognition Algorithm'],
        link: 'https://play.google.com/store/apps/details?id=com.droidcrackers.banglagonokjontro&hl=en'
      },
      // More projects...
      {
        name: 'Math Insane',
        description: 'A mathematical quiz game with world leader board.',
        techStack: ['Android', 'Java', 'PHP'],
        link: 'https://play.google.com/store/apps/details?id=com.wizardapps.mathinsane'
      },
      {
        name: 'Photo Color Explorer',
        description: 'An ultimate color picker tool for smartphone.',
        techStack: ['Android', 'Java'],
        link: 'https://play.google.com/store/apps/details?id=com.wizardapps.photocolorexplorer'
      },
    ]
  },
];

const Experience = () => {
  return (
    <div id='experience' name='experience' className='w-full bg-[#0F1729] text-[#f9fafc]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#f9fafc] text-[#f9fafc]'>Working Experience</p>
        </div>

        <div className="container mx-auto">
          {experience.map((item) => (
            <ExperienceItem {...item} />
          ))}
          {/* <ExperienceItem
            date="Oct 2019 - Present"
            dateColor="#f9fafc"
            name="Team Lead, Artificial intelligence"
            company="Zantrik"
            description="⦿ Responsible to lead research and development works related with Computer Vision and NLP. 
⦿ Responsible for planning and preparing data collection, preprocessing, model training and deployment pipelines."
            link="http://example.com/link1"
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

          <ExperienceItem
            date="Feb 2015 - Jun 2015"
            dateColor="#6b7280"
            name="Regional Project Manager & Lead Trainer"
            company="EATL & Ministry of ICT, Bangladesh"
            description="⦿ Implemented a 4 months Govt. operated android training program to three universities (KUET, KU, NWU) and acted as lead trainer for Khulna Zone."
            link="http://example.com/link1"
          />

          <ExperienceItem
            date="Oct 2014 - Feb 2015"
            dateColor="#6b7280"
            name="Chief Technology Officer"
            company="Dream71 Bangladesh Limited"
            description="⦿ Acted as idea, research and development lead, was responsible for building the first ever live cricket scoring app in Bangla language named “Cricket Bangladesh”."
            link="http://example.com/link1"
          />

          <ExperienceItem
            date="Dec 2013 - Mar 2014"
            dateColor="#6b7280"
            name="Junior Software Engineer"
            company="The Code and Fix Software Limited"
            description="⦿ Contributed into existing projects written for ASP.NET and Android platform."
            link="http://example.com/link1"
          /> */}

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