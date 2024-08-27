import React from 'react'
import { CheckCircle } from 'lucide-react'

const HeroSection = () => {
  return (
    <div className='relative'>
      <div>
        <div className='flex md:flex-row flex-col justify-between sm:gap-10 md:gap-5 ms-10 me-10 sm'>
        <div>
            <h1 className='md:text-6xl sm:text-xl mb-10'>
            Protect Your Business with Top-Notch Cybersecurity Solutions
            </h1>
            <p className='sm:text-md md:text-3xl mt-3'>
            Comprehensive protection against online threats
            </p>
            <button className='mt-10 bg-white text-black sm:px-7 md:px-10 sm:py-1 md:py-2 rounded-sm'>Learn More</button>
        </div>
        
        <div className='bg-black  md:mt-0 mt-5 rounded bg-opacity-50 md:w-[700px] md:h-[400px] w-[270px]'>
            <div className='bg-white  text-black md:h-[360px] h-[260px] mx-5 my-5 '>
              
              <div className='flex  flex-col items-center justify-center flex-wrap'>
              <p className='text-2xl mb-5'>Areas of Expertise</p>
              </div> 
            <div className=''>
            <ul className='flex flex-col gap-4 ml-5'>
                <li className='flex gap-2'><CheckCircle/>Web Development</li>
                <li className='flex gap-2'><CheckCircle/>Web Development</li>
                <li className='flex gap-2'><CheckCircle/>Web Development</li>
                <li className='flex gap-2'><CheckCircle/>Web Development</li>
                <li className='flex gap-2'><CheckCircle/>Web Development</li>
              </ul>
            </div>
             
               

            </div>
</div>
        </div>
      
        </div>
    </div>
  )
}

export default HeroSection