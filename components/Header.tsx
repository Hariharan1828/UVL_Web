"use client";
import React, { Fragment, useState } from 'react'
import { Bars3Icon, ChevronDownIcon, PaperAirplaneIcon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from './Logo';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { cn } from '@/lib/utils';

const prodcts =[
    {
        name:"HR Recruitment",
        description:"Consequat pariatur Lorem elit ad minim eu.",
        href:"#services ",
        icon:PaperAirplaneIcon
    },
    {
        name:"Training and Development",
        description:"Anim aliquip mollit enim ullamco.",
        href:"#services",
        icon:PaperAirplaneIcon
    },
    {
        name:"Business Intelligence",
        description:"Pariatur non consequat elit aliquip laboris.",
        href:"#services",
        icon:PaperAirplaneIcon
    },
    {
        name:"IT services",
        description:"Pariatur non consequat elit aliquip laboris.",
        href:"#services",
        icon:PaperAirplaneIcon
    },
    {
        name:"Digitalization",
        description:"Pariatur non consequat elit aliquip laboris.",
        href:"#services",
        icon:PaperAirplaneIcon
    },
    {
        name:"Artificial Intelligence",
        description:"Pariatur non consequat elit aliquip laboris.",
        href:"#services",
        icon:PaperAirplaneIcon
    },
    {
        name:"Robotic process automation",
        description:"Pariatur non consequat elit aliquip laboris.",
        href:"#services",
        icon:PaperAirplaneIcon
    }
];

const callsToAction= [
    {
        name:"Contact",
        href:"/ContactUs",
        icon:PaperAirplaneIcon
    }
];


const Header = () => {
    const [MobileOpnMenu, setMobileOpnMenu] =useState(false);
  return (
    <header className=' top-0 z-50 lg:sticky border-b-2 border-slate-200 bg-white'>
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
            <Popover.Group
            className="hidden lg:flex lg:gap-x-12"
            >
                <Popover className="relative">
                    <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-sky-700">
                        Services
                        <ChevronDownIcon
                        className='h-5 w-5 flex-none text-sky-700'
                        aria-hidden="true"
                        ></ChevronDownIcon>
                    </Popover.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom='opacity-0 translate-y-1'
                        enterTo='opacity-100 translate-y-0'
                        leave="transition ease-in duration-150"
                        leaveFrom='opacity-100 translate-y-0'
                        leaveTo='opacity-0 translate-y-1'

                
                    >
                        <Popover.Panel className="absolute bg-white -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5">
                            <div className='p-4 '>
                                {prodcts.map((item) =>{
                                    return(
                                        <div key={item.name} className='group relative flex max-h-[10vh]  items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50'>
                                            <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-gray-50'>
                                                <item.icon className='h-6 w-6 text-[#013B94] group-hover:text-blue-600' aria-hidden="true"/>
                                            </div>

                                            <div className='flex-auto'>
                                                <a href={item.href} className='block font-semibold text-[#013B94]'>
                                                    {item.name}
                                                    <span className='absolute inset-0'/>
                                                </a>
                                                <p className='mt-1 text-[#013B94]'>
                                                    {item.description}
                                                </p>
                                            </div>


                                        </div>
                                    )
                                })}
                            </div>
                            <div className='grid  bg-gray-50'>
                                {callsToAction.map((item)=>{
                                    return (
                                         <a key={item.name} href={item.href} className='flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-[#013B94] hover:bg-gray-100' >
                                            <item.icon className='h-5 w-5 text-[#013B94]' aria-hidden="true"/>
                                            {item.name}
                                        </a>

                                    )
                                })}
                            </div>
                        </Popover.Panel>

                    </Transition>
                </Popover>
                <a href="/AboutUs" className='text-sm font-semibold leading-6 text-sky-700'> About Us</a>
                <a href="/ContactUs" className='text-sm font-semibold leading-6 text-sky-700'>Contact Us</a>

            </Popover.Group>

        </nav>
        <Dialog
        as="div"
        className="lg:hidden"
        open={MobileOpnMenu}
        onClose={setMobileOpnMenu}
        >
            <div className="fixed inset-0 z-10"/>
            <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full 
            overflow-y-auto bg-sky-700 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                    <a href="#" className='-m-1.5 p-1.5'>
                        <span className='sr-only'>UniversaLink Solutions</span>
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
                                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-4 pl-3 pr-3.5 text-base font-semibold 
                                    leading-7 text-white hover:bg-sky-800">
                                        Services
                                        <ChevronDownIcon className={cn(open? "rotate-180":"",
                                        
                                        "h-5 w-5 flex-none"

                                        )}
                                        aria-hidden="true"/>
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="mt-2 space-y-2">
                                        {[...prodcts, ...callsToAction].map((item)=>{
                                            return (
                                                <Disclosure.Button 
                                                key={item.name}
                                                as ="a"
                                                href={item.href}
                                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-sky-800">
                                                    {item.name}

                                                </Disclosure.Button>
                                            )
                                        })}

                                    

                                    </Disclosure.Panel>
                                    <div className="flex  flex-col">
                                        <a href="/AboutUs" className='items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold 
                                    leading-7 text-white hover:bg-sky-800'> About Us</a>
                                       
                                        <a href="/ContactUs" className='items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold 
                                    leading-7 text-white hover:bg-sky-800'> Contact Us</a>
                                

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