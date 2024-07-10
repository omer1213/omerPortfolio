// "use client";
// import React from 'react'

// import Link from 'next/link'
// import NavLinks from './navLinks'
// import { useState } from 'react'
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import MobileBar from './mobileBar';
// import Image from 'next/image';
// import { Dancing_Script} from 'next/font/google';

// const dancingFont = Dancing_Script({
//     weight: '400',
//     subsets: ["latin"],
//     display: "swap"
//   })

// function NavBar() {

//     const navlinks = [
//         {
//             title: "Home",
//             href: "#Home"
//         },
//         {
//             title: "About",
//             href: "#about"
//         },
//         {
//             title: "Projects",
//             href: "#project"
//         },
//         {
//             title: "Contact",
//             href: "#contact"
//         }
//     ]
//     const [openNavBar, setOpenNavBar] = useState(false);

//     return (<>
//         <nav className=' fixed top-0 right-0 left-0 bg-[#121212]  z-10 bg-opacity-90  '>
//             <div className='flex  justify-between  mx-5 p-2 font-sans'>
//                 <div className=' text-5xl md:text-6xl ' >
//                     <Link className={`text-gray-300 hover:text-gray-600 rounded   ${dancingFont.className}`} href={'/'}>Omer</Link>
//                 </div>
//                 {
//                    !openNavBar?  <button  onClick={() => setOpenNavBar(!openNavBar)}className='border-2 w-10 h-10 md:hidden mt-3 text-gray-300 hover:text-gray-600'><MenuIcon /></button>:
//                    <button  onClick={() => setOpenNavBar(!openNavBar)} className='border-2  w-10 h-10 md:hidden mt-3 text-gray-300 hover:text-gray-600 '><CloseIcon /></button>
//                 }


//                 <div className='menu hidden  md:w-auto md:block'>
//                     <ul className='flex flex-row p-2 space-x-6 cursor-pointer md:text-lg md:pt-3 '>
//                         {
//                             navlinks.map((link, index) => (
//                                 <li className='list-none pr-2 pl-2 pt-2' key={index}> <NavLinks href={link.href} title={link.title} /></li>
//                             ))
//                         }
//                     </ul>
//                 </div>
//             </div>
//             {
//                 openNavBar?<MobileBar links={navlinks}/>:null
//             }
//         </nav>
//         <hr />
//         </>
//     )
// }

// export default NavBar

"use client"
import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import NavLinks from './navLinks';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import MobileBar from './mobileBar';
import { Dancing_Script } from 'next/font/google';

const dancingFont = Dancing_Script({
    weight: '400',
    subsets: ["latin"],
    display: "swap"
});

function NavBar() {
    const navlinks = useMemo(() => [
        { title: "Home", href: "#home" },
        { title: "About", href: "#about" },
        { title: "Projects", href: "#project" },
        { title: "Contact", href: "#contact" }
    ], []);

    const [openNavBar, setOpenNavBar] = useState(false);
    const [activeLink, setActiveLink] = useState("#home");

    useEffect(() => {
        const sections = navlinks.map(link => document.querySelector(link.href));

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveLink(`#${entry.target.id}`);
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            if (section) {
                observer.observe(section);
            }
        });

        // Set Home as active when scrolled to top
        const handleScroll = () => {
            if (window.scrollY < 100) { // Consider it home if scrolled less than 100px from top
                setActiveLink("#home");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            sections.forEach(section => {
                if (section) {
                    observer.unobserve(section);
                }
            });
            window.removeEventListener("scroll", handleScroll);
        };
    }, [navlinks]);

    return (
        <>
            <nav className='fixed top-0 right-0 left-0 bg-[#121212] z-10 bg-opacity-90'>
                <div className='flex justify-between mx-5 p-2 font-sans'>
                    <div className='text-5xl md:text-6xl'>
                        <Link className={`text-gray-300 hover:text-gray-600 rounded ${dancingFont.className}`} href={'/'}>Omer</Link>
                    </div>
                    {
                        !openNavBar ? (
                            <button onClick={() => setOpenNavBar(!openNavBar)} className='border-2 w-10 h-10 md:hidden mt-3 text-gray-300 hover:text-gray-600'><MenuIcon /></button>
                        ) : (
                            <button onClick={() => setOpenNavBar(!openNavBar)} className='border-2 w-10 h-10 md:hidden mt-3 text-gray-300 hover:text-gray-600'><CloseIcon /></button>
                        )
                    }
                    <div className='menu hidden md:w-auto md:block'>
                        <ul className='flex flex-row p-2 space-x-6 cursor-pointer md:text-lg md:pt-3'>
                            {
                                navlinks.map((link, index) => (
                                    <li className={`list-none pr-2 pl-2 pt-2 ${activeLink === link.href ? 'active-link bg-gray-500 rounded-md p-0' : ''}`} key={index}>
                                        <NavLinks href={link.href} title={link.title} />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                {openNavBar ? <MobileBar links={navlinks} /> : null}
            </nav>
            <hr />
        </>
    );
}

export default NavBar;
