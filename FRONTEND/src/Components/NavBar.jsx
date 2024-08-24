import React from 'react'
import HeroSection from './HeroSection'
const NavBar = () => {
  return (
    <div className="relative h-screen">
    <div className="absolute inset-0 bg-custom-image bg-cover bg-center opacity-30"></div>
    <div className="relative z-10 flex justify-center h-full">
      <div className="top-0 z-50 rounded-md h-10 w-full">
    <div className='sticky b relative '>
        <div className=' flex justify-between mt-2 pb-10'>
            <div>
                <p className='text-2xl '>BITZT</p>
            </div>
            <div className='me-4 '>
                <ul className='flex gap-4'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Solutions</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#" className='bg-white text-black rounded px-2 py-1'>Explore</a></li>

                </ul>
            </div> 

        </div>
        </div>
        <HeroSection/>
        </div>
        </div>
     

    </div>
  )
}

export default NavBar