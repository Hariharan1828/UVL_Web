"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from './Logo';
import { Dialog, Disclosure, Popover } from '@headlessui/react';

const Header = () => {
    const [MobileOpnMenu, setMobileOpnMenu] =useState(false);
  return (
    <header className='top-0 z-50 lg:sticky border-b-2 border-slate-200 bg-white'>
        <nav className='max-w-7xl mx-auto flex items-center justify-between p-6 lg:px-8 lg:p-2' aria-label='Global'>
            <Logo/>
            <div className='flex lg:hidden'>
                <button
                type='button'
                className='-m-2.5 inline-flex items-center justify-center 
                rounded-md p-2.5 text-sky-700'
                onClick={()=>setMobileOpnMenu(true)}
                >
                    <span className='sr-only'>Open Main menu</span>
                    <Bars3Icon className='h-6 w-6' aria-hidden="true"/>

                </button>
            </div>
            <div
            className="hidden lg:flex lg:gap-x-8"
            >
                <a href="/" className='text-xs font-semibold leading-6 text-sky-700'>About Us</a>
                <a href="/" className='text-xs font-semibold leading-6 text-sky-700'>Services</a>
                <a href="/" className='text-xs font-semibold leading-6 text-sky-700'>Contact Us</a>

            </div>

        </nav>
        <Dialog
        as="div"
        className="lg:hidden"
        open={MobileOpnMenu}
        onClose={setMobileOpnMenu}
        >
            <div className="fixed inset-0 z-10"/>
            <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full 
            overflow-y-auto bg-[#013B94] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                    <a href="#" className='-m-1.5 p-1.5'>
                        <span className='sr-only'>TakeFlight.com</span>
                        <Logo/>
                        {/* <img className="h-8 w-auto"src="https://www.cdnlogo.com/logos/f/32/flight.svg" alt="" /> */}
                    </a>
                    <button 
                    type='button'
                    className='-m-2.5 rounded-md p-2.5 text-white'
                    onClick={() => setMobileOpnMenu(false)}
                    >
                        <span className='sr-only'>Close Menu</span>
                        <XMarkIcon className='h-6 w-6' aria-hidden="true"/>
                    </button>
                </div>

                <div className="mt-06 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="space-y-2 py-6">
                            <Disclosure 
                            as="div"
                            className="-mx-3"
                            >
                                {({open})=>(
                                    <>
                                    <div className="flex  flex-col mt-10">
                                        <a href="#" className='items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold 
                                    leading-7 text-white hover:bg-blue-800'> About Us</a>
                                        <a href="#" className='items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold 
                                    leading-7 text-white hover:bg-blue-800'>Services</a>
                                        <a href="#" className='items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold 
                                    leading-7 text-white hover:bg-blue-800'> Contact Us</a>
                                

                                    </div>

  
                                    </>
                                )}
                            </Disclosure>
                        </div>
                    </div>
                </div>

            </Dialog.Panel>

        </Dialog>

    </header>
  )
}

export default Header