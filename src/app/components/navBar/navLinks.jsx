import React from 'react'
import Link from 'next/link'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: '400',
    subsets: ["latin"],
    display: "swap"
  })

function NavLinks({ href, title }) {
    return (

        <Link href={href} className={`${roboto.className} block  text-gray-300 hover:text-gray-600 md:p-0 `}>{title}</Link>

    )
}

export default NavLinks