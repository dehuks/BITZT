import React from 'react'
import { UserCircle } from 'lucide-react'

const Testimonials = () => {
  return (
    <div className='relative'>
        <div>
            <hr className='ms-2 me-2 opacity-40' />
        </div>
        <div className='flex items-center justify-center py-5'>
            <h1 className='md:text-2xl text-lg tracking-thin'>What people are saying about us...</h1>
        </div>
        <div className='grid md:grid-cols-3 grid-cols-1 ms-5 me-5 me-5 gap-10'>
            <div>
                <div className='flex flex-col gap-3 flex-wrap'>
                                      
                    <div>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit repudiandae aliquam, nemo sed aut inventore. Dolore recusandae, maiores consectetur quo repudiandae, ab voluptate libero cumque minus vitae commodi fugiat cum.
                    </div>
                    <div className='flex gap-3'>
                   
                        <UserCircle/>
                        <div>
                            <p className='italic  text-neutral-500'>~Joh DOe</p>
                        </div>
                    </div>
                    



                </div>
                
            </div>
            
            <div>
                <div className='flex flex-col gap-3'>
                                      
                    <div>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit repudiandae aliquam, nemo sed aut inventore. Dolore recusandae, maiores consectetur quo repudiandae, ab voluptate libero cumque minus vitae commodi fugiat cum.
                    </div>
                    <div className='flex gap-3'>
                   
                        <UserCircle/>
                        <div>
                            <p className='italic  text-neutral-500'>~Joh DOe</p>
                        </div>
                    </div>
                    



                </div>
                
            </div>
            <div>
                <div className='flex flex-col gap-3'>
                                      
                    <div>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit repudiandae aliquam, nemo sed aut inventore. Dolore recusandae, maiores consectetur quo repudiandae, ab voluptate libero cumque minus vitae commodi fugiat cum.
                    </div>
                    <div className='flex gap-3'>
                   
                        <UserCircle/>
                        <div>
                            <p className='italic  text-neutral-500'>~Joh DOe</p>
                        </div>
                    </div>
                    



                </div>
                
            </div>

        </div>

    </div>
  )
}

export default Testimonials