import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { BsFillFileEarmarkPdfFill } from 'react-icons/bs'
import Link from 'next/link'

function Projects({ posts }) {
    return (
        <div id="project" className='container mx-auto  text-start sm:h-screen'>
            <div className='grid  grid-cols-1  sm:grid-cols-3 px-2 py-16  mt-10 sm:grid-flow-col gap-4'>
                <div>
                    <h1 className='font-bold  font-serif'>Projects</h1>
                </div>




                {posts.map(post => (
                    <Link href={`/${post.id}`} key={post.id}>
                        <div className='flex flex-col col-span-3 pt-5'>
                            <div className='text-start'>
                                <h2 className='font-bold text-2xl font-bold  hover:text-cyan-600 cursor-pointer'>{post.title}</h2>
                                <h5 className='text-xl'>{post.body}</h5>
                                <div className='flex flex-row gap-2 mt-5'>
                                    <Link href={post.pdf}>
                                        <button className='rounded-lg border border-cyan-600 p-1 px-2  flex flex-row gap-1 hover:bg-cyan-600 hover:text-white'>
                                            <BsFillFileEarmarkPdfFill style={{ color: "#0891b2" }} />
                                            <h6 className='text-cyan-600'>PDF</h6>
                                        </button>
                                    </Link>
                                    <Link href={post.code}>
                                        <button className='rounded-lg border border-cyan-600 p-1 px-2 flex flex-row gap-1 hover:bg-cyan-600 hover:text-white'>
                                            <BsGithub style={{ color: "#0891b2" }} />
                                            <h6 className='text-cyan-600'>Code</h6>
                                        </button>
                                    </Link>
                                    <Link href={post.poster}>
                                        <button className='rounded-lg border border-cyan-600 p-1  px-2 flex flex-row gap-1 hover:bg-cyan-600 hover:text-white'>

                                            <h6 className='text-cyan-600'>Poster</h6>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))};
            </div>
        </div >


    )
}

export default Projects

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
    const data = await res.json();

    return {
        props: {
            posts: data
        }
    }
}
