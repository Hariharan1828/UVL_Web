import { ChevronDownIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ILUSS_HR from "../public/Bussiness Intelignece.svg"

const services =[
  {
    id:1,
    title: "HR Recruitment",
    description:"Transform your workforce with our HR services - offering full-time talent solutions and flexible contract employees for seamless business growth. Elevate your business with our services, delivering strategic solutions for talent acquisition, employee development, and organizational success.",
    image:ILUSS_HR,
    href:"/services",
  },
  {
    id:2,
    title:"Training and Development",
    description:"Unlock potential and foster growth with our comprehensive training and development solutions. Tailored programs to empower your workforce for sustained success.",
    image:ILUSS_HR,
    href:"/services",
  },
  {
    id:3,
    title:"Business Intelligence",
    description:"Transform data into actionable insights with our Business Intelligence solutions, empowering your decision-making for a competitive edge in the dynamic market landscape.",
    image:ILUSS_HR,
    href:"/services",
  },
  {
    id:4,
    title:"IT services",
    description: "From concept to completion, our end-to-end project management ensures seamless delivery, driving efficiency and success throughout every phase of your project.",
    image:ILUSS_HR,
    href:"/services",
  },
  {
    id:5,
    title:"Digitalization",
    description:"Elevate your digital presence with our expert team. We specialize in seamless web and mobile app development, delivering innovative solutions tailored to your business needs.",
    image:ILUSS_HR,
    href:"/services",
  },
  {
    id:6,
    title:"Artificial Intelligence",
    description:" Empower your AI initiatives with our expert model building and training services. Unlock the full potential of your data with cutting-edge machine learning solutions.",
    image:ILUSS_HR,
    href:"/services",
  },
  {
    id:7,
    title:"Robotic process automation",
    description:"Officia incididunt ad eu ad mollit culpa proident nisi amet in eiusmod nostrud id. Pariatur est eu quis laboris magna sit elit. Fugiat do consectetur minim reprehenderit mollit amet culpa voluptate duis reprehenderit ad qui.",
    image:ILUSS_HR,
    href:"/services",
  },
]

const Services = () => {
  return (
    <section id="services" className='p-8 md:p-16'>
        <div className=" container max-w-screen-xl mx-auto px-4 overflow-hidden">
        
          <h1 id='ServiceTitle' className='font-bold font-display text-sky-700 text-3xl md:text-4xl text-center mb-5 '>
            What we do?
          </h1>
          {/* <p className="font-normal text-gray-500 text-md md:text-lg text-center mb-20 md:mb-10 ">
              Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit 
          </p> */}
      {services.map((service)=>(
        <>
        {((service.id+1)%2==0)?(
        <div id={service.title} key={service.id} className="hidden lg:flex flex-col xl:flex-row items-center justify-between mb-20 md:mb-10 ">
          <div key={service.id+service.image} className="mx-auto xl:mx-0 mb-20 xl:mb-0 lg:w-[100rem]">
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
          <div key={service.id+service.image} className="mx-auto xl:mx-0 mb-20 xl:mb-0 lg:w-[100rem]">
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