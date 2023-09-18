import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaStackOverflow, FaCv } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { SiCodeproject, SiGooglescholar } from "react-icons/si";
import { Link } from 'react-scroll'
import MyPortrait from '../assets/portrait_me.jpg'
import { TbFileCv } from 'react-icons/tb'

const Header = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-header-bg-slate text-[#0F1729]'>
            <div className='flex items-center group relative'>
                <img
                    src={MyPortrait} // source of your image
                    alt="portrait_photo"
                    className="object-container object-center bg-white rounded-full w-16 h-16 border bg-white object-cover"
                />
                <h1 className='text-xl sm:text-2xl font-bold text-[#0F1729] ml-2'>@ridoy</h1>
                <div className="hidden group-hover:block absolute top-0 left-0 z-10">
                    <img
                        src={MyPortrait} // source of your full image
                        alt="full_photo"
                    />
                    <div className="bg-bg-gray-300 text-text-indigo text-xs p-1 top-0 right-0">My beloved mother gave me the nickname 'Ridoy'.</div>
                </div>
            </div>

            {/*menu*/}
            <div className='hidden md:flex'>
                <ul className='hidden md:flex'>
                    <li className='text-l font-bold hover:bg-theme-dark-slate duration-200 hover:text-text-white p-4 resize-none hover:resize'>
                        <Link activeClass="active" to="home" smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li className='text-l font-bold hover:bg-theme-dark-slate duration-200 hover:text-text-white p-4 resize-none hover:resize'>
                        <Link activeClass="active" to="about" smooth={true} duration={500}>
                            About
                        </Link>
                    </li>
                    <li className='text-l font-bold hover:bg-theme-dark-slate duration-200 hover:text-text-white p-4 resize-none hover:resize'>
                        <Link activeClass="active" to="education" smooth={true} duration={500}>
                            Education
                        </Link>
                    </li>
                    <li className='text-l font-bold hover:bg-theme-dark-slate duration-200 hover:text-text-white p-4 resize-none hover:resize'>
                        <Link activeClass="active" to="skills" smooth={true} duration={500}>
                            Skills
                        </Link>
                    </li>
                    <li className='text-l font-bold hover:bg-theme-dark-slate duration-200 hover:text-text-white p-4 resize-none hover:resize'>
                        <Link activeClass="active" to="research" smooth={true} duration={500}>
                            Research
                        </Link>
                    </li>
                    <li className='text-l font-bold hover:bg-theme-dark-slate duration-200 hover:text-text-white p-4 resize-none hover:resize'>
                        <Link activeClass="active" to="experience" smooth={true} duration={500}>
                            Experience
                        </Link>
                    </li>
                    <li className='text-l font-bold hover:bg-theme-dark-slate duration-200 hover:text-text-white p-4 resize-none hover:resize'>
                        <Link activeClass="active" to="awards" smooth={true} duration={500}>
                            Awards
                        </Link>
                    </li>
                    <li className='text-l font-bold hover:bg-theme-dark-slate duration-200 hover:text-text-white p-4 resize-none hover:resize'>
                        <Link activeClass="active" to="contact" smooth={true} duration={500}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Hamburger menu */}
            <div onClick={handleClick} className='md:hidden z-10 text-[#0F1729] hover:text-2xl duration-200'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#fff] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl hover:bg-theme-dark-slate duration-200 hover:text-text-white'>
                    <Link onClick={handleClick} activeClass="active" to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:bg-theme-dark-slate duration-200 hover:text-text-white'>
                    <Link onClick={handleClick} activeClass="active" to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:bg-theme-dark-slate duration-200 hover:text-text-white'>
                    <Link onClick={handleClick} activeClass="active" to="education" smooth={true} duration={500}>
                        Education
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:bg-theme-dark-slate duration-200 hover:text-text-white'>
                    <Link onClick={handleClick} activeClass="active" to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:bg-theme-dark-slate duration-200 hover:text-text-white'>
                    <Link onClick={handleClick} activeClass="active" to="research" smooth={true} duration={500}>
                        Research
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:bg-theme-dark-slate duration-200 hover:text-text-white'>
                    <Link onClick={handleClick} activeClass="active" to="experience" smooth={true} duration={500}>
                        Experience
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:bg-theme-dark-slate duration-200 hover:text-text-white'>
                    <Link onClick={handleClick} activeClass="active" to="awards" smooth={true} duration={500}>
                        Awards
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:bg-theme-dark-slate duration-200 hover:text-text-white'>
                    <Link onClick={handleClick} activeClass="active" to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0 border-solid border-2 border-text-plain-white'>
                <ul>
                    {/* <li className='w-[160px] h-[60px] bg-theme-dark-slate flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200'>
                        <a className='flex justify-between items-center w-full text-[#fff]' href="https://www.linkedin.com/in/shuvropal/" rel="noreferrer" target="_blank">Linkedin <FaLinkedin size={30} /> </a>
                    </li> */}
                    <li className='w-[160px] h-[60px] bg-theme-dark-slate flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200'>
                        <a className='flex justify-between items-center w-full text-[#fff]' href="https://drive.google.com/drive/folders/19HhBSZM5MgzCADcJ3F1wIs6aQPfYE-RV?usp=sharing" rel="noreferrer" target="_blank">Curriculum Vitae<TbFileCv size={30} /> </a>
                    </li>
                    <li className='w-[160px] h-[60px] bg-theme-dark-slate flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200'>
                        <a className='flex justify-between items-center w-full text-[#fff]' href="https://github.com/ridoy-ai" rel="noreferrer" target="_blank">Github <FaGithub size={30} /> </a>
                    </li>
                    <li className='w-[160px] h-[60px] bg-theme-dark-slate flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200'>
                        <a className='flex justify-between items-center w-full text-[#fff]' href="https://scholar.google.com/citations?user=42I3uKgAAAAJ&hl=en" rel="noreferrer" target="_blank">Google Scholar <SiGooglescholar size={30} /> </a>
                    </li>
                    <li className='w-[160px] h-[60px] bg-theme-dark-slate flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200'>
                        <a className='flex justify-between items-center w-full text-[#fff]' href="https://stackoverflow.com/users/1791578/ridoy" rel="noreferrer" target="_blank">Stack Overflow <FaStackOverflow size={30} /> </a>
                    </li>
                    {/* <li className='w-[170px] h-[60px] bg-theme-dark-slate flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-200'>
                        <a className='flex justify-between items-center w-full text-[#fff]' href="https://www.codeproject.com/Members/Ridoy" rel="noreferrer" target="_blank">Code Project <SiCodeproject size={30} /> </a>
                    </li> */}

                </ul>
            </div>
        </div>
    )
}

export default Header