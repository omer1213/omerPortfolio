"use client"
import React from 'react'
import TypeWitingEffect from './typeWitingEffect'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaLinkedin } from "react-icons/fa";

function HeroMain() {
    return (
        <section className=' mt-28    text-white  mx-14 md:mx-25 grid grid-cols-1 lg:grid-cols-12'>
            {/* left Side */}
            <div className=' md:mt-10 col-span-7 place-self-center text-center md:text-start'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <b>   <h1 className='text-6xl pb-6 md:pb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600'>Hello,I&rsquo;m </h1></b>
                    <TypeWitingEffect />

                    <p className='pb-6 md:pb-10'>Software engineering student and NextJs developer, passionate about transforming innovative ideas into powerful web solutions</p>
                    <div className='flex flex-row sm:justify-start justify-center align-middle  sm:space-y-0 space-x-6'>
                        <a href="/cv.pdf" download>
                            <button className="button-86 " role="button">
                                Download CV
                            </button>
                        </a>
                        <a href='https://www.linkedin.com/in/omer-yahya/'>
                            <button className="button-86" role="button">
                                <span className='pr-2'> <FaLinkedin /></span>  Linkedin
                            </button>
                        </a>
                    </div>
                    {/* <div className='button flex md:flex-row flex-col'>
                        <button className='border-2 border-white rounded-3xl py-3 px-2 w-full lg:w-40 lg:mr-3 md:mb-0 mb-5 bg-gradient-to-r from-purple-300 to-purple-900 '>Hire Me</button>
                        <button className='border-2 border-white rounded-3xl py-3 px-2 w-full lg:w-40'>Download CV</button>
                    </div> */}
                </motion.div>
            </div>

            {/* right side */}
            <div className='col-span-5 place-self-center md:mb-3 mt-10 lg:mt-0'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className='rounded-full bg-[#181818] w-[330px] h-[330px] relative' data-aos="zoom-in-left" data-aos-duration="3000" >

                        <Image
                            src={'/main.png'}
                            width={300}
                            height={320}
                            className='absolute  transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full'
                            alt='main pic'
                        />
                    </div>
                </motion.div>
            </div>

        </section>
    )
}

export default HeroMain