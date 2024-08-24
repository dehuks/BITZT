import { Lock, Shield, Key } from 'lucide-react';
import {CheckCircle} from 'lucide-react'

const HeroSection = () => {
  return (
    <div className='relative  mt-2'>
        <div className='md:flex md:flex-row sm:flex sm:flex-col sm:gap-5 pb-3'>
          
            <div className='bg-white rounded ms-7 mt-18 pt-10   text-black md:w-[350px] md:h-[400px] sm:w-[500px] sm'>
                <h1 className='md:text-3xl sm:text-xl  '>CyberSecurity Made Better Using A.I</h1>

                <div className='mt-10 px-10   '>
                    <button className='bg-black text-white rounded px-2 py-1 '>Learn More</button>
                </div>
                <div className='mt-4'>
                <hr class="border-t md:w-[300px] ms-5 me-5 border-gray-300 my-4" />
                </div>
                <div>
                    <ul className='flex flex-col gap-6'>
                        <li className='flex gap-2'><CheckCircle/> <p>Lorem</p></li>
                        <li className='flex gap-2'><CheckCircle/> <p>Lorem</p></li>
                        <li className='flex gap-2'><CheckCircle/> <p>Lorem</p></li>

                    </ul>
                </div>
                
                <div>
                    
                   
     
             </div>
             <div>
            
             </div>

            </div>
            <div>
                
            </div>
            <div className='bg-white   pb-3 rounded md:ms-24 sm:ms-6 me-5 mt-18  text-black md:w-full'>
                <div className='flex justify-center items-center w-full h-full'>
                <div className='bg-custom-image bg-cover  rounded md:ms-5 md:me-5 sm:ms-2 sm:me-2 mt-3 text-black w-full md:h-[450px] sm:h-[300px]'>
           
                    </div>

                </div>
            </div>


        </div>

    </div>
  )
}

export default HeroSection