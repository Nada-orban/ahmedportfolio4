import React, { Fragment, useState, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
// import { styled, useTheme, alpha } from '@mui/material/styles';
// import { ColorModeContext } from '../public/theme'
import { HiSearch } from 'react-icons/hi'
import { useTheme } from 'next-themes'
import { BsSunFill, BsMoonFill } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import Link from 'next/link'

function Nav2() {
    const { theme, setTheme } = useTheme('light');
    const [mounted, setMounted] = useState(false);
    const [open, setOpen] = useState(false);


    useEffect(() => {
        setMounted(true)
    }, [])
    if (!mounted) {
        return null
    }
    return (
        <div className='sticky top-0  w-full  p-1 bg-white  dark:bg-gray-800  dark:shadow-lg  dark:shadow-slate-500/40  text-black dark:text-light drop-shadow-lg'>
            <div className="mx-auto  px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <button onClick={() => setOpen(!open)} className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            {open ? (
                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <h1 className="block h-8 w-auto lg:hidden font-bold text-lg">Ahmed  Adel Attia</h1>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <a
                                    key='about'
                                    href='#'
                                    className="text-black dark:text-white hover:text-cyan-600  active:bg-red-700 "
                                >
                                    About me
                                </a>
                                <a
                                    key='skill'
                                    href='#skill'
                                    className="text-black dark:text-white hover:text-cyan-600  active:bg-violet-700 "
                                >
                                    Skills
                                </a>
                                <a
                                    key='project'
                                    href='#project'
                                    className="text-black dark:text-white hover:text-cyan-600 focus:text-cyan-600  active:bg-violet-700 "
                                >
                                    Projects
                                </a>
                                <a
                                    key='cv'
                                    href='#cv'
                                    className="text-black dark:text-white hover:text-cyan-600 focus:text-cyan-600  active:bg-violet-700 "
                                >
                                    Cv
                                </a>

                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {theme === 'dark' ?
                            (<button
                                type="search">
                                <HiSearch className="h-6 w-6 mx-3 " aria-hidden="true" style={{ color: "white" }} />
                            </button>) : (
                                <button
                                    type="search">
                                    <HiSearch className="h-6 w-6 mx-3 " aria-hidden="true" style={{ color: "black" }} />
                                </button>
                            )
                        }

                        {theme === 'dark' ? (
                            <button onClick={() => setTheme('light')} >

                                <BsSunFill style={{ color: "white", width: "20px" }} />

                            </button>) :
                            (<button onClick={() => setTheme('dark')} >

                                <BsMoonFill style={{ color: "black" }} />
                            </button>)}
                    </div>



                </div>
            </div>
            {open && (
                <div className=' sm:hidden top-[60px] p-5 bg-white w-full h-50'>
                    <div className="flex flex-col ">
                        <a
                            key='about'
                            href='#'
                            className="text-black dark:text-white hover:text-cyan-600  active:bg-red-700 "
                        >
                            About me
                        </a>
                        <a
                            key='skill'
                            href='#skill'
                            className="text-black dark:text-white hover:text-cyan-600  active:bg-violet-700 "
                        >
                            Skills
                        </a>
                        <a
                            key='project'
                            href='#project'
                            className="text-black dark:text-white hover:text-cyan-600 focus:text-cyan-600  active:bg-violet-700 "
                        >
                            Projects
                        </a>
                        <a
                            key='cv'
                            href='#cv'
                            className="text-black dark:text-white hover:text-cyan-600 focus:text-cyan-600  active:bg-violet-700 "
                        >
                            Cv
                        </a>

                    </div>

                </div>)}
        </div>
    )

}

export default Nav2