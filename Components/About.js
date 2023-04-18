import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GrMail } from 'react-icons/gr'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { FaGraduationCap } from 'react-icons/fa'
import ahmedimage from '../public/images/DSC_007900.jpg'


function about() {
    return (
        <div id="about" className=' dark:text-white container mx-auto mt-10 mb-10 pb-10  grid grid-cols-1   sm:grid-cols-3 sm:grid-flow-col gap-3 '>
            <div className='text-center mt-10' >
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
                    <h1 className='font-bold font-serif mt-2 '>Ahmed Adel Attia</h1>
                    <p className='mt-3 text-base'>PhD Deep Learning and Speech Researcher</p>
                    <h3 className='text-lg'><Link href="/">University Of Maryland College Park</Link></h3>
                </div>
                <div className='flex justify-center mt-10 gap-3 '>
                    <a href="/" className='ease-in duration-300 hover:scale-125'><GrMail style={{ width: "30px", height: "40px", color: "#0891b2", }} /></a>
                    <a href="/" className='ease-in duration-300 hover:scale-125'><BsGithub style={{ width: "30px", height: "40px", color: "#0891b2" }} /></a>
                    <a href="/" className='ease-in duration-300 hover:scale-125'><i className="ai ai-google-scholar big-icon ai-3x" style={{ color: "#0891b2" }}></i></a>
                    <a href="/" className='ease-in duration-300 hover:scale-125'><BsLinkedin style={{ width: "30px", height: "40px", color: "#0891b2" }} /></a>

                </div>
            </div>
            <div className='sm:col-span-4 mt-5 px-5 flex flex-col'>
                <div><h1 className='font-bold font-serif'>About me</h1>
                    <p className='mt-6'>Welcome to my website!I am a Deep Learning engineer and PhD researcher with expertise in Natural Language Processing, Signal Processing, Statistics, and Unsupervised Learning.My primary focus is on developing advanced Deep Learning models for speech and audio processing, with a passion for exploring the limitless possibilities of this cutting-edge technology. </p>
                    <p className='mt-3'>My technical expertise in programming languages like Python, C, C++, C#, and Matlab, combined with my extensive knowledge in Deep Learning, have been integral to my work in contributing to multiple Deep Learning projects as a Deep Learning Consultant and Research Intern. Additionally, I have a keen interest in VR and XR, and I am always exploring ways to apply Deep Learning to these fields as well.</p>
                    <p className='mt-3'>Driven by my unwavering love for innovation and technology, I am constantly pushing the boundaries of Deep Learning in my field of specialization. With a track record of developing lightweight real-time speech enhancement models and achieving optimal performance with large datasets, I am committed to staying at the forefront of this exciting field. Thank you for visiting my website, and I look forward to sharing my latest research and insights with you.
                    </p>
                </div>
                <div className='grid  grid-cols-1 gap-6 sm:grid-cols-2 mt-10'>
                    <div>
                        <h3>Interests</h3>
                        <ul className='list-disc list-inside mt-3 '>
                            <li>Deep Learning</li>
                            <li>Speech Production</li>
                            <li>Speech Synthesis</li>
                            <li>VR/XR</li>
                            <li>Computer Vision</li>
                        </ul>
                    </div>
                    <div>

                        <h3>Education</h3>
                        <ul className=' list-inside mt-3 '>
                            <li className='flex flex-row'>
                                <FaGraduationCap style={{ width: "30px", height: "30px" }} />
                                <div className='mx-3'>
                                    <h6 className=' font-bold'>PhD in Computer Engineering,<br /> 2020 - Present</h6>
                                    <p className='text-sm text-gray-300/75'>University Of Maryland College Park</p>
                                </div>
                            </li>
                            <li className='flex flex-row mt-2' >
                                <FaGraduationCap style={{ width: "30px", height: "30px" }} />
                                <div className='mx-3'>
                                    <h6 className=' font-bold'>B.Sc. in Electrical Engineering,<br /> 2015 - 2020</h6>
                                    <p className='text-sm text-gray-300/75'>Alexandria University, Egypt</p>
                                </div>
                            </li>

                        </ul>

                    </div>
                </div>

            </div>


        </div >

    )
}

export default about