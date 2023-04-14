import React from 'react'
import { BsCodeSlash } from 'react-icons/bs'
import { FaLanguage } from 'react-icons/fa'

function Skill() {
    return (
        <div id="skill" className='container mx-auto bg-red pt-10 pb-10 mt-10 my-10 text-center'>
            <h1 className='font-bold mb-5 font-serif'>Skills</h1>
            <div className='grid grid-cols-2 gap-4'>
                <div className='flex  flex-col  justify-center items-center mx-auto  '>
                    <BsCodeSlash style={{ width: "100px", height: "100px" }} />
                    <div>
                        <h4 className='text-2xl mt-5 font-bold'>Programming</h4>
                        <h6 className='text-xl'>Python, Bash, R, git, LaTeX</h6>
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
                    <FaLanguage style={{ width: "100px", height: "100px" }} />
                    <div>
                        <h4 className='text-2xl font-bold'>Languages</h4>
                        <h6 className='text-xl'>Python, Bash, R, git, LaTeX</h6>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Skill