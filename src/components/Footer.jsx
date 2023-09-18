import React from 'react'
import {FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa'
import { SiCodeproject } from "react-icons/si";

const Footer = () => {
  return (
    <div name='footer' className='w-full h-[100px] bg-[#0F1729] text-[#f9fafc] flex justify-center items-center p-4'>
        <div className='flex max-w-[1250px] w-full justify-between items-center'>
            <p className='text-xs'>Design inherited <br /> from <a className='text-red-700 underline' href="https://github.com/aligunesv/Simple-Portfolio-Template/">Ali Güneş</a></p>
            <p>All rights reserved: @ridoy, 2023.</p> 
            <div className='flex gap-4' title='Codeproject'>
                <a target='_blank' rel="noreferrer" href="https://www.codeproject.com/Members/Ridoy" title="Codeproject"><SiCodeproject size={42}/></a>
                <a target='_blank' rel="noreferrer" title="Linkedin" href="https://www.linkedin.com/in/shuvropal/"> <FaLinkedin size={42}/></a> 
            </div>
        </div>
    </div>
  )
}

export default Footer