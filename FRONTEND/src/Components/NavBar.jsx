import React from 'react'

const NavBar = () => {
  return (
    <div className='relative '>
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
  )
}

export default NavBar