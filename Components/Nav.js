import React, { Fragment, useState, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
// import { styled, useTheme, alpha } from '@mui/material/styles';
// import { ColorModeContext } from '../public/theme'
import { HiSearch } from 'react-icons/hi'
import { useTheme } from 'next-themes'
import { BsSunFill, BsMoonFill } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
// import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
// import LightModeIcon from '@mui/icons-material/LightMode';




// import { FiMenu } from 'react-icons/fi'
// import { GrClose } from 'react-icons/gr'
// import { BsBell } from 'react-icons/bs'


const navigation = [
    { name: 'About me', href: '#about', current: true },
    { name: 'Skill', href: '#skill', current: true },
    { name: 'Projects', href: '#project', current: false },
    { name: 'Cv', href: '#cv', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


function Nav() {
    const { theme, setTheme } = useTheme('light');
    const [active, setActive] = useState("false");
    const [mounted, setMounted] = useState(false);
    const activefunc = () => {
        setActive(!active)
    }

    useEffect(() => {
        setMounted(true)
    }, [])
    if (!mounted) {
        return null
    }

    return (
        <Disclosure as="nav" className="sticky top-0   bg-white  dark:bg-gray-800  dark:shadow-lg  dark:shadow-slate-500/40  text-black dark:text-light drop-shadow-lg ">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
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

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-5 pb-3 pt-2 flex flex-col gap-2 ">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    // className={classNames(
                                    //     item.current ? 'bg-gray-900 text-black dark:text-white ' : 'text-black dark:text-white hover:bg-gray-700 hover:text-white',
                                    //     'block rounded-md px-3 py-2 text-white font-medium'
                                    // )}
                                    className='text-black dark:text-white'
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )
            }
        </Disclosure >
    )
}

export default Nav

