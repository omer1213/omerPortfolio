import React from 'react'
import Link from 'next/link'
import NavLinks from './navLinks'
function MobileBar({links}) {
   
    return (
        <div>        
            <ul className='flex flex-col text-center p-2 space-y-8 text-gray-300 hover:text-gray-600  rounded   cursor-pointer md:hidden'>
            {
                links.map((link, index) => (
                    <li className='' key={index}> <NavLinks href={link.href} title={link.title} /></li>
                ))
            }
        </ul>
        </div>


    )
}

export default MobileBar