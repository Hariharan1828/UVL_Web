"use client"; 
import React from 'react'
import Container from './container'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/24/solid'

const faqdataa =[
    {
        id:1,
        question: "Dolor in quis qui aliqua?",
        answer: "In irure ex nisi commodo cillum et tempor in minim velit amet.",
      },
      {
        id:2,
        question: "Cupidatat nulla ipsum eiusmod laboris ut?",
        answer: "Est ullamco sint enim elit ea nisi non duis.",
      },
      {
        id:3,
        question: "Reprehenderit sunt magna ex esse eu sit qui eiusmod ? ",
        answer:
          "Deserunt consequat eu in quis anim ipsum dolor cupidatat eu sint occaecat labore ad.",
      },
      {
        id:4,
        question: "Velit velit cillum laborum qui ullamco et sunt?",
        answer:
          "Cillum ut ipsum consectetur ad eu consectetur ut proident occaecat velit quis in esse.",
      },
]
const FAq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
      <h1 className='font-semibold text-sky-700 text-3xl md:text-4xl text-center mb-5 '>
            Frequently asked questions
          </h1>
          <p className="font-normal text-gray-500 text-md md:text-lg text-center mb-20 md:mb-10 ">
              Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit 
          </p>
        {faqdataa.map((item) => (
          <div key={item.id} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default FAq;
