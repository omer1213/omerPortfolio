// "use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation';

function TypeWitingEffect() {
  return (
    <TypeAnimation
      sequence={[
        'Omer Yahya',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Software Engineer',
        1000,
        'NextJs Developer',
        1000
        ,
        'Front End Developer',
        1000

      ]}
      wrapper="span"
      speed={20}
      style={{ display: 'inline-block' }}
      repeat={Infinity}
      className='text-3xl pb-6 md:pb-8 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent font-semibold'
    />
  )
}

export default TypeWitingEffect