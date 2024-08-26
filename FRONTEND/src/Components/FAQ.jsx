import React from 'react'
import { useState } from 'react';
const FAQ = () => {
  const [isVisible, setIsVisible] = useState(null);

  const SeeMoreClick = (contentId) => {
      if (isVisible === contentId) {
          setIsVisible(null);  // Close the content if it is already visible
      } else {
          setIsVisible(contentId);  // Show the content
      }
  };
  return (
    <div className='relative mt-5'>
        <div className='flex items-center justify-center py-5'>
            <h1 className='text-2xl tracking-wide'>Frequently Asked Questions</h1>
        </div>
        <div className='flex justify-center sm:items-center sm:flex-col  gap-20 ms-5 me-20 '>
            <div>
            <div className='w-[330px] md:w-[500px] me-5 mb-5'>
                        <div className='bg-white  text-black rounded-md'>
                            <div className='flex items-center justify-between px-5 py-3 '>
                                <p>What is BITZT? </p>
                                <button
                                    className='bg-customm rounded-full px-2'
                                    onClick={() => SeeMoreClick(1)}
                                >
                                    {isVisible === 1 ? 'x' : '+'}
                                </button>
                            </div>
                            {isVisible === 1 && (
                                <div className="content px-3 py-1 pb-3 bg-black bg-opacity-30 transition-all duration-300">
                                    <p className="text-neutral-40 mt-5">
                                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nulla, fugiat voluptatem corrupti veritatis, nisi architecto suscipit dignissimos aspernatur quis, consequuntur minima quia temporibus eveniet quidem rem a quisquam vitae.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='w-[330px] md:w-[500px] me-5 mb-5'>
                        <div className='bg-white  text-black rounded-md'>
                            <div className='flex items-center justify-between px-5 py-3 '>
                                <p>What is BITZT? </p>
                                <button
                                    className='bg-customm rounded-full px-2'
                                    onClick={() => SeeMoreClick(2)}
                                >
                                    {isVisible === 2 ? 'x' : '+'}
                                </button>
                            </div>
                            {isVisible === 2 && (
                                <div className="content px-3 py-1 pb-3 bg-black bg-opacity-30 transition-all duration-300">
                                    <p className="text-neutral-40 mt-5">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nulla, fugiat voluptatem corrupti veritatis, nisi architecto suscipit dignissimos aspernatur quis, consequuntur minima quia temporibus eveniet quidem rem a quisquam vitae.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='w-[330px] md:w-[500px] me-5 mb-5'>
                        <div className='bg-white  text-black rounded-md'>
                            <div className='flex items-center justify-between px-5 py-3 '>
                                <p>What is BITZT? </p>
                                <button
                                    className='bg-customm rounded-full px-2'
                                    onClick={() => SeeMoreClick(3)}
                                >
                                    {isVisible === 3 ? 'x' : '+'}
                                </button>
                            </div>
                            {isVisible === 3 && (
                                <div className="content px-3 py-1 pb-3 bg-black bg-opacity-30 transition-all duration-300">
                                    <p className="text-neutral-40 mt-5">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nulla, fugiat voluptatem corrupti veritatis, nisi architecto suscipit dignissimos aspernatur quis, consequuntur minima quia temporibus eveniet quidem rem a quisquam vitae.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div><div className='w-[330px] md:w-[500px] me-5 mb-5'>
                        <div className='bg-white  text-black rounded-md'>
                            <div className='flex items-center justify-between px-5 py-3 '>
                                <p>What is BITZT? </p>
                                <button
                                    className='bg-customm rounded-full px-2'
                                    onClick={() => SeeMoreClick(4)}
                                >
                                    {isVisible === 4 ? 'x' : '+'}
                                </button>
                            </div>
                            {isVisible === 4 && (
                                <div className="content px-3 py-1 pb-3 bg-black bg-opacity-30 transition-all duration-300">
                                    <p className="text-neutral-40 mt-5">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nulla, fugiat voluptatem corrupti veritatis, nisi architecto suscipit dignissimos aspernatur quis, consequuntur minima quia temporibus eveniet quidem rem a quisquam vitae.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div><div className='w-[330px] md:w-[500px] me-5 mb-5'>
                        <div className='bg-white  text-black rounded-md'>
                            <div className='flex items-center justify-between px-5 py-3 '>
                                <p>What is BITZT? </p>
                                <button
                                    className='bg-customm rounded-full px-2'
                                    onClick={() => SeeMoreClick(5)}
                                >
                                    {isVisible === 5 ? 'x' : '+'}
                                </button>
                            </div>
                            {isVisible === 5 && (
                                <div className="content px-3 py-1 pb-3 bg-black bg-opacity-30 transition-all duration-300">
                                    <p className="text-neutral-40 mt-5">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nulla, fugiat voluptatem corrupti veritatis, nisi architecto suscipit dignissimos aspernatur quis, consequuntur minima quia temporibus eveniet quidem rem a quisquam vitae.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

           </div>
          
          
           <div className='md:ml-20 hidden'>

            <div className='flex flex-col gap-4'>
              <div>
                Ask Us Any Question
              </div>
              <div>
                <label htmlFor="">Let Us Know..</label>
              </div>
              <div>
                <textarea name="" id="" className='bg-black outline-none focus:outline-neutral-500 rounded px-2' placeholder='Type message...'></textarea>

                 
              </div>
              <div className=''>
              <button className='bg-black  px-7 py-1  rounded-md'>Send</button>

              </div>

            </div>
            
           </div>
        </div>

        </div>

    
  )
}

export default FAQ