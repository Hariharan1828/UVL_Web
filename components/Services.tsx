import { ChevronDownIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ILUSS_HR from "../public/Bussiness Intelignece.svg"

const services =[
  {
    id:1,
    title: "HR Recruitment",
    description:"Commodo velit laborum culpa voluptate. Exercitation eu sint deserunt duis Lorem ipsum ad id ad. Commodo reprehenderit elit deserunt mollit cupidatat. Laborum id consectetur ad eu exercitation. Magna anim id officia proident ex id deserunt sint minim deserunt ea cillum officia culpa. Aute velit enim nulla ipsum sit incididunt pariatur reprehenderit consequat adipisicing esse labore laboris pariatur. Eu irure cillum eu sunt culpa.",
    image:ILUSS_HR,
    href:"/services",
  },
  {
    id:2,
    title:"Training and Development",
    description: "Fugiat adipisicing sint nisi occaecat. Ullamco velit enim Lorem tempor dolor minim occaecat id cillum consectetur excepteur cupidatat ex culpa. Dolore esse proident aliquip incididunt anim nisi elit enim voluptate eiusmod labore. Lorem magna officia ad sint duis occaecat deserunt labore. Laborum quis labore pariatur anim ullamco tempor fugiat aliqua id aliquip elit. Dolore aute non dolor irure voluptate voluptate.",
    image:ILUSS_HR,
    href:"/services",
  },
  {
    id:3,
    title:"Business Intelligence",
    description: "Fugiat adipisicing sint nisi occaecat. Ullamco velit enim Lorem tempor dolor minim occaecat id cillum consectetur excepteur cupidatat ex culpa. Dolore esse proident aliquip incididunt anim nisi elit enim voluptate eiusmod labore. Lorem magna officia ad sint duis occaecat deserunt labore. Laborum quis labore pariatur anim ullamco tempor fugiat aliqua id aliquip elit. Dolore aute non dolor irure voluptate voluptate.",
    image:ILUSS_HR,
    href:"/services",
  },
]

const Services = () => {
  return (
    <section className='p-8 md:p-16'>
        <div className=" container max-w-screen-xl mx-auto px-4 overflow-hidden">
        
          <h1 className='font-semibold text-sky-700 text-3xl md:text-4xl text-center mb-5 '>
            What we do?
          </h1>
          <p className="font-normal text-gray-500 text-md md:text-lg text-center mb-20 md:mb-10 ">
              Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit 
          </p>
      {services.map((service)=>(
        <>
        {((service.id+1)%2==0)?(
        <div key={service.id} className="hidden lg:flex flex-col xl:flex-row items-center justify-between mb-20 md:mb-10 ">
          <div key={service.id+service.image} className="mx-auto xl:mx-0 mb-20 xl:mb-0 lg:w-[200rem]">
            <Image src={service.image} alt=''/>
          </div>
          <div key={service.id} className="mx-auto xl:mx-0 text-center xl:text-left">
            <h1 key={service.id+service.title}className="font-bold text-sky-700 text-3xl md:text-4xl mb-10">
              {service.title}
            </h1>
            <p key={service.id+service.description} className="font-normal text-gray-400 text-sm md:text-lg mb-5">  
              {service.description}
            </p>
            <Link key={service.id+service.href} href={service.href} className="flex items-center justify-center xl:justify-start font-semibold text-sky-500 text-lg gap-3 hover:text-sky-700 transition ease-in-out duration-300">
              Read more
              <ChevronDownIcon className='w-5'/>
            </Link>
          </div>

        </div>):(
          <div key={service.id} className="hidden lg:flex flex-col xl:flex-row items-center justify-between mb-20 md:mb-10 ">
          
          <div key={service.id} className="mx-auto xl:mx-0 text-center xl:text-left">
            <h1 key={service.id+service.title}className="font-bold text-sky-700 text-3xl md:text-4xl mb-10">
              {service.title}
            </h1>
            <p key={service.id+service.description} className="font-normal text-gray-400 text-sm md:text-lg mb-5">  
              {service.description}
            </p>
            <Link key={service.id+service.href} href={service.href} className="flex items-center justify-center xl:justify-start font-semibold text-sky-500 text-lg gap-3 hover:text-sky-700 transition ease-in-out duration-300">
              Read more
              <ChevronDownIcon className='w-5'/>
            </Link>
          </div>
          <div key={service.id+service.image} className="mx-auto xl:mx-0 mb-20 xl:mb-0 lg:w-[200rem]">
            <Image src={service.image} alt=''/>
          </div>

        </div>

        )}
        <div key={service.id+1} className="lg:hidden flex flex-col xl:flex-row items-center justify-between mb-20 md:mb-10 ">
          
          <div key={service.id} className="mx-auto xl:mx-0 text-center xl:text-left">
            <h1 key={service.id+service.title}className="font-bold text-sky-700 text-3xl md:text-4xl mb-10">
              {service.title}
            </h1>
            <p key={service.id+service.description} className="font-normal text-gray-400 text-sm md:text-lg mb-5">  
              {service.description}
            </p>
            <Link key={service.id+service.href} href={service.href} className="flex items-center justify-center xl:justify-start font-semibold text-sky-500 text-lg gap-3 hover:text-sky-700 transition ease-in-out duration-300">
              Read more
              <ChevronDownIcon className='w-5'/>
            </Link>
          </div>
          <div key={service.id+service.image} className="mx-auto xl:mx-0 mb-20 xl:mb-0 lg:w-[200rem]">
            <Image src={service.image} alt=''/>
          </div>

        </div>


        
        </>
      
      ))}
      </div>
        
    </section>
  )
}

export default Services