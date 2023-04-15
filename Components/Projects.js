import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { BsFillFileEarmarkPdfFill } from 'react-icons/bs'
import Link from 'next/link'

function Projects() {
    return (
        <div id="project" className='container mx-auto pt-10 pb-10 mt-10 mb-10 text-start px-5'>
            <div className='grid  grid-cols-1  sm:grid-cols-3  sm:grid-flow-col gap-4'>
                <div>
                    <h1 className='font-bold  font-serif'>Projects</h1>
                </div>

                <div className='flex flex-col col-span-3'>
                    <div className='text-start'>
                        <h2 className='font-bold text-2xl font-bold  hover:text-cyan-600 cursor-pointer' >AFIDs-macaca</h2>
                        <h5 className='text-xl'>A standardized framework for evaluating anatomical correspondence between primate brains</h5>
                        <div className='flex flex-row gap-2 mt-5'>
                            <Link href="#">
                                <button className='rounded-lg border border-cyan-600 p-1 px-2  flex flex-row gap-1 hover:bg-cyan-600 hover:text-white'>
                                    <BsFillFileEarmarkPdfFill style={{ color: "#0891b2" }} />
                                    <h6 className='text-cyan-600'>PDF</h6>
                                </button>
                            </Link>
                            <Link href="#">
                                <button className='rounded-lg border border-cyan-600 p-1 px-2 flex flex-row gap-1 hover:bg-cyan-600 hover:text-white'>
                                    <BsGithub style={{ color: "#0891b2" }} />
                                    <h6 className='text-cyan-600'>Code</h6>
                                </button>
                            </Link>
                            <Link href="#">
                                <button className='rounded-lg border border-cyan-600 p-1  px-2 flex flex-row gap-1 hover:bg-cyan-600 hover:text-white'>
                                    {/* <BsGithub style={{ color: "#0891b2" }} /> */}
                                    <h6 className='text-cyan-600'>Poster</h6>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='text-start mt-10'>
                        <h2 className='font-bold text-2xl font-bold  hover:text-cyan-600 cursor-pointer' >AFIDs-macaca</h2>
                        <h5 className='text-xl'>A standardized framework for evaluating anatomical correspondence between primate brains</h5>
                        <div className='flex flex-row gap-2 mt-5'>
                            <Link href="#">
                                <button className='rounded-lg border border-cyan-600 p-1 px-2  flex flex-row gap-1 hover:bg-cyan-600 hover:text-white'>
                                    <BsFillFileEarmarkPdfFill style={{ color: "#0891b2" }} />
                                    <h6 className='text-cyan-600'>PDF</h6>
                                </button>
                            </Link>
                            <Link href="#">
                                <button className='rounded-lg border border-cyan-600 p-1 px-2 flex flex-row gap-1 hover:bg-cyan-600 hover:text-white'>
                                    <BsGithub style={{ color: "#0891b2" }} />
                                    <h6 className='text-cyan-600'>Code</h6>
                                </button>
                            </Link>
                            <Link href="#">
                                <button className='rounded-lg border border-cyan-600 p-1  px-2 flex flex-row gap-1 hover:bg-cyan-600 hover:text-white'>
                                    {/* <BsGithub style={{ color: "#0891b2" }} /> */}
                                    <h6 className='text-cyan-600'>Poster</h6>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='text-start mt-10'>
                        <h2 className='font-bold text-2xl font-bold  hover:text-cyan-600 cursor-pointer' >AFIDs-macaca</h2>
                        <h5 className='text-xl'>A standardized framework for evaluating anatomical correspondence between primate brains</h5>
                        <div className='flex flex-row gap-2 mt-5'>
                            <Link href="#">
                                <button className='rounded-lg border border-cyan-600 p-1 px-2  flex flex-row gap-1 hover:bg-cyan-600 hover:text-white'>
                                    <BsFillFileEarmarkPdfFill style={{ color: "#0891b2" }} />
                                    <h6 className='text-cyan-600'>PDF</h6>
                                </button>
                            </Link>
                            <Link href="#">
                                <button className='rounded-lg border border-cyan-600 p-1 px-2 flex flex-row gap-1 hover:bg-cyan-600 hover:text-white'>
                                    <BsGithub style={{ color: "#0891b2" }} />
                                    <h6 className='text-cyan-600'>Code</h6>
                                </button>
                            </Link>
                            <Link href="#">
                                <button className='rounded-lg border border-cyan-600 p-1  px-2 flex flex-row gap-1 hover:bg-cyan-600 hover:text-white'>
                                    {/* <BsGithub style={{ color: "#0891b2" }} /> */}
                                    <h6 className='text-cyan-600'>Poster</h6>
                                </button>
                            </Link>
                        </div>
                    </div>



                </div>
            </div>

        </div>
    )
}

export default Projects