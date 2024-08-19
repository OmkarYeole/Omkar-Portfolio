import React from 'react'
import { Button } from './ui/moving-border'
import { patentPublished } from '@/data'
import Image from 'next/image'
import { Vortex } from './ui/vortex'

const Patent = () => {
    return (
        <div id='experience' className='w-full py-20 flex flex-col justify-center'>
            <div className='text-center text-4xl font-bold lg:text-6xl -mb-20 z-10'> 
                {/* My{" "} */}
                <span className='text-purple-500'>
                    Patent Published
                </span>
            </div>
            <div className="w-full mx-auto rounded-md  h-[30rem] -mb-10">
                <Vortex
                    backgroundColor=""
                    className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
                >
                    <h2 className="text-white text-xl md:text-3xl font-bold text-center">
                    A Machine learning based system for Incorrect Posture Detection
                    </h2>
                    <p className="text-white text-sm md:text-2xl mt-6 text-center">
                    Developed an innovative machine learning system in Python and integrated it with a web application to detect and prevent Upper Cross Postural Syndrome by analyzing and classifying user posture based on key body points, reducing the risk of spinal problems.
                    </p>
                    {/* <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
                        Order now
                    </button>
                    <button className="px-4 py-2  text-white ">Watch trailer</button>
                    </div> */}
                </Vortex>
            </div>
        </div>
      )
}

export default Patent;