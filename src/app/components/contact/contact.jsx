// "use client"
import { motion } from 'framer-motion';
import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';
import GitHub from '@mui/icons-material/GitHub';

function Contact() {
    const cardVariants = {
        hover: {
          scale: 1.1, // Scale up the card to 1.1 times its original size
          zIndex: 1, // Bring the card to the top by changing its z-index
          transition: {
            duration: 0.6, // Duration of the animation
          },
        },
      };
    
    return (
        <div className='flex flex-col md:flex-row  mb-16 mx-4  justify-center space-x-4 items-center mt-8 ' id='contact'>
            {/* col 1 */}
            <motion.div className=' border-white bg-[#8d7e7e] text-white w-52 h-28 rounded-lg mb-7 md:mb-0 text-start p-2 flex flex-col '
             variants={cardVariants}
             whileHover='hover'
            >

                <EmailIcon className='w-6 h-6' />
                <p className='pt-3 text-sm'> Email</p>
                <Link
                    fontSize="sm"
                    href="mailto:omeryahya1213@gmail.com"
                    target="_blank"
                    className='text-sm mt-5 hover:underline'
                >
                    omeryahya1213@gmail.com
                </Link>
            </motion.div>
            {/* col 2 */}
            {/* <motion.div className=' border-white bg-[#8d7e7e] text-white w-52 h-28 rounded-lg mb-7 md:mb-0 text-start p-2 flex flex-col  '
             variants={cardVariants}
             whileHover='hover'>

                <LinkedInIcon className='w-6 h-6' />
                <p className='pt-3 text-sm'> Linkedin</p>
                <Link
                    fontSize="sm"
                    href="https://www.linkedin.com/in/omer-yahya/"
                    target="_blank"
                    className='text-sm mt-5 hover:border-b hover:underline'
                >
                   Linkedin Profile
                </Link>
            </motion.div> */}
            {/* col 3 */}
            <motion.div className=' border-white bg-[#8d7e7e] text-white w-52 h-28 rounded-lg mb-7 md:mb-0 text-start p-2 flex flex-col '
             variants={cardVariants}
             whileHover='hover'>

                <WhatsAppIcon className='w-6 h-6' />
                <p className='pt-3 text-sm'> Whatsapp</p>
                <Link
                    fontSize="sm"
                    href="https://wa.me/+923217934949"
                    target="_blank"
                    className='text-sm mt-5 hover:underline'
                >
                    03217934949
                </Link>
            </motion.div>
            {/* col 4 */}
            <motion.div className=' border-white bg-[#8d7e7e] text-white w-52 h-28 rounded-lg mb-7 md:mb-0 text-start p-2 flex flex-col '
             variants={cardVariants}
             whileHover='hover'>

                <GitHub className='w-6 h-6' />
                <p className='pt-3 text-sm'> Email</p>
                <Link
                    fontSize="sm"
                    href="https://github.com/omer1213"
                    target="_blank"
                    className='text-sm mt-5 hover:underline'
                >
                    GitHub Profile
                </Link>
            </motion.div>
        </div>
    )
}

export default Contact