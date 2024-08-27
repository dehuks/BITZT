import React from 'react'

const CTA = () => {
  return (
    <div className='relative mt-10 mb-5 '>
        <div className='flex items-center  justify-center '>
        <div className='rounded bg-black py-5 w-full md:w-full md:ms-20 md:me-20'>
            <div className='flex sm:flex-col md:flex-row items-center justify-between'>
                <div className='p-5 '>
                <h1 className='text-xl md:text-4xl '>Lets get you systems secured today!</h1>
            <p className='md:text-lg tracking-wide'>Trust our team to deliver quality results.</p>

                </div>
                <div className='mr-20'>
                <button className='bg-white text-black md:text-xl sm:px-4 sm:py-1 md:px-7 md:py-2 rounded'>Get Started</button>
                </div>

            </div>
            

        </div>
        </div>
    </div>
  )
}

export default CTA