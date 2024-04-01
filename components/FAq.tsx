"use client"; 
import React from 'react'
import Container from './container'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/24/solid'

const faqdataa =[
    {
        id:1,
        question: " What does UniVersaLink Solutions do?",
        answer: "At UniversaLink, we are dedicated to transforming your business through innovative solutions that drive growth and elevate your success. With a commitment to excellence, we specialize in Human Resource Consulting, Business Intellgence, Artificial Intelligence solutions, Digitalization and IT services.",
      },
      {
        id:2,
        question: "How can I contact UniVersaLink Solutions?",
        answer: "Please contact us at support@universalink.com, Or click the Message Icon the the bottom right corner of the page to chat with us. We are available 24/7 to assist you.",
      },
      {
        id:3,
        question: "Is my personal information safe with UniVersaLink Solutions?",
        answer:
          "Reference to Privacy Policy",
      },
      {
        id:4,
        question: "Do you offer ongoing support or maintenance?",
        answer:
          "we include post-implementation support or ongoing maintenance options. ",
      },
      {
        id:5,
        question: "Are you hiring? How can I join UniVersaLink Solutions?",
        answer:
          "If you are interested in joining us, kindly visit our LinkedIn profile for the most recent job openings.",
      },
      {
        id:6,
        question: "How can I stay updated on UniVersaLink Solutions's latest news or announcements?",
        answer:
          "Please follow our social media accounts for updates.",
      },
]
const FAq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
      <h1 className='font-semibold text-sky-700 text-3xl md:text-4xl text-center mb-5 '>
            Frequently asked questions
          </h1>
          {/* <p className="font-normal text-gray-500 text-md md:text-lg text-center mb-20 md:mb-10 ">
              Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit 
          </p> */}
        {faqdataa.map((item) => (
          <div key={item.id} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-base lg:text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 sm:text-sm text-gray-500 dark:text-gray-300">
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
