import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GrMail } from 'react-icons/gr'
import { BsLinkedin } from 'react-icons/bs'
import ahmedimage from '../public/images/DSC_007900.jpg'


function about() {
    return (
        <div id="about" className='grid grid-cols-1 sm:grid-cols-3 sm:grid-flow-col gap-3 container mx-auto mt-10 mb-10 pb-10 dark:text-white '>
            <div className='text-center ' >
                <div className=' overflow-hidden mx-auto  border-2 border-rose-600 rounded-full w-64 bg-red h-64'>
                    <Image
                        src={ahmedimage}
                        alt="Picture of the author"
                        width={300}
                        height={300}


                    // blurDataURL="data:..." 
                    // placeholder="blur" // Optional blur-up while loading
                    />
                </div>

                <div>
                    <h1 className='font-bold font-serif '>Thomas Gültzow</h1>
                    <p className='mt-3 text-base'>Assistant Professor Social Psychology</p>
                    <h3 className='text-lg'><Link href="/">Maastricht University</Link></h3>
                </div>
                <div className='flex justify-center mt-4 gap-3'>
                    <Link href="/"><GrMail style={{ width: "30px", height: "40px" }} /></Link>
                    <Link href="/"><BsLinkedin style={{ width: "30px", height: "40px" }} /></Link>
                </div>
            </div>
            <div className='sm:col-span-4 mt-5 px-5'>
                <h1 className='font-bold font-serif'>About me</h1>
                <h5 className='mt-3'>I am a social scientist focusing on applying informed decision making to health behaviors (e.g., sexual and mental health) and behaviors related to societal issues (e.g., climate change). My research mainly focuses on understanding how informed decision making relates to behavior (change) and optimizing digital decision aids. In addition, I also research how online and offline communication can influence (informed) decision-making processes and behavior and I have expertise in developing digital decision aids. With my research I try to help people when it comes to issues related to their health, but also other societal issues.</h5>
            </div>
        </div>
    )
}

export default about