import React from 'react'
import { BsCodeSlash } from 'react-icons/bs'
import { FaLanguage } from 'react-icons/fa'

function Skill() {
    return (
        <div id="skill" className='mt-15 pt-10 mb-10 container mx-auto   text-center px-5'>
            <h1 className='font-bold  px-2 py-16 font-serif'>Skills</h1>
            <div className='grid   grid-cols-1 sm:grid-cols-2 sm:grid-flow-col gap-4 mb-10 pb-10'>
                <div className='flex  flex-col  justify-center items-center mx-auto  '>
                    <BsCodeSlash style={{ width: "100px", height: "100px", color: "#eab308" }} />
                    <div>
                        <h4 className='text-2xl mt-5 font-bold'>Programming</h4>
                        <p className='text-xl mt-4'>Python (Tensorflow and PyTorch), Matlab, C, C++, C#, Bash, Git</p>
                    </div>

                </div>
                {/* <div className='flex  flex-col  justify-center items-center mx-auto '>
                    <BsCodeSlash style={{ width: "100px", height: "100px" }} />
                    <div>
                        <h4>Programming</h4>
                        <h6>Python, Bash, R, git, LaTeX</h6>
                    </div>

                </div> */}
                <div className='flex  flex-col  justify-center items-center mx-auto '>
                    <FaLanguage style={{ width: "100px", height: "100px", color: "#0891b2" }} />
                    <div>
                        <h4 className='text-2xl font-bold'>Languages</h4>
                        <p className='text-xl mt-4'>English, Arabic</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Skill