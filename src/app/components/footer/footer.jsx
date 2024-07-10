import React from 'react'

function Footer() {
    return (
        <footer>
            <div className='flex flex-row py-3 bg-[#181818] text-gray-300 align-middle justify-center  '>
            &copy; {new Date().getFullYear()} Omer Yahya . All rights
          reserved.
            </div>
        </footer> 
  )
}

export default Footer