"use client"

import { useState } from "react";
import { useWatch } from "react-hook-form";
import classNames from 'classnames';


import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'

interface FormData {
  apikey: string;
  subject: string;
  first_name: string;
  last_name: string;
  Company:string;
  botcheck: boolean;
  name: string;
  email: string;
  phone_number:string;
  message: string;
}


export function ContactPage() {

    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors, isSubmitSuccessful, isSubmitting }
      } = useForm<FormData>({
        mode: "onTouched"
      });

    const [isSuccess, setIsSuccess] = useState(false);
  const [Message, setMessage] = useState("");

  const userName = useWatch({ control, name: "first_name", defaultValue: "Someone" });
  const [agreed, setAgreed] = useState(false)

    const onSubmit: SubmitHandler<FormData> = async (data, e) => {
        console.log(data);
        try {
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: JSON.stringify(data, null, 2)
          });
          const json = await response.json();
          if (json.success) {
            setIsSuccess(true);
            setMessage(json.message);
            e?.target?.reset();
            reset();
          } else {
            setIsSuccess(false);
            setMessage(json.message);
          }
        } catch (error) {
          setIsSuccess(false);
          setMessage("Client Error. Please check the console.log for more info");
          console.log(error);
        }
      };
    
  return (
    <>
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="hidden md:hidden lg:block absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className=" relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ping Us Here !</h2>
        {/* <p className="mt-2 text-lg leading-8 text-gray-600">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p> */}
      </div>
      {!isSubmitSuccessful && (
      <form onSubmit={handleSubmit(onSubmit)} method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20" noValidate>
                    <input
                        type="hidden"
                        value="c2c5a2a0-6d86-4fee-a8dd-479dd5ff1f8e"
                        {...register("apikey")}
                      />
                      <input
                        type="hidden"
                        value={`${userName} sent a message from UniversaLink Solutions`}
                        {...register("subject")}
                      />
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
              First name
            </label>
            <div className="mt-2.5">
            
              <input
                type="text"
                id="first-name"
                autoComplete="given-name"
                // value="UniVersaLink Solutions"
                
                {...register("first_name",  {
                    required: "First name is required",
                    maxLength: 80
                  })}
            className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                  ${
                      errors.first_name
                        ? "border-red-600 focus:border-red-600 ring-red-100"
                        : "border-gray-300 focus:border-indigo-600 ring-indigo-100"
                    }
                  `}
              />
              {errors.first_name && (
                          <div className="mt-1 text-sm text-red-400 invalid-feedback">
                            {errors.first_name.message}
                          </div>
                        )}
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                // name="last_name"
                id="last_name"
                autoComplete="family-name"
                {...register("last_name",  {
                  required: "First name is required",
                  maxLength: 80
                })}
                className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6${
                  errors.last_name
                    ? "border-red-600 focus:border-red-600 ring-red-100"
                    : "border-gray-300 focus:border-indigo-600 ring-indigo-100"
                }
              `}
              />
              {errors.last_name && (
                          <div className="mt-1 text-sm text-red-400 invalid-feedback">
                            {errors.last_name.message}
                          </div>
                        )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
              Company
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                // name="company"
                id="company"
                autoComplete="organization"
                {...register("Company",{
                  required: "Your Organization name is required",
                  maxLength: 80
                })}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                // name="email"
                id="email"
                autoComplete="email"
                {...register("email", {
                    required: "Enter your email",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Please enter a valid email"
                    }
                })}
                placeholder="you@company.com"
                className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6${
                    errors.email
                      ? "border-red-600 focus:border-red-600 ring-red-100"
                      : "border-gray-300 focus:border-indigo-600 ring-indigo-100"
                  }`}
              />
              {errors.email && (
                          <div className="mt-1 text-sm text-red-200 invalid-feedback">
                            {errors.email.message}
                          </div>
            )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
              Phone number
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-2 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                  <option>IN</option>
                </select>
                {/* <ChevronDownIcon
                  className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                  aria-hidden="true"
                /> */}
              </div>
              <input
                type="tel"
                // name="phone-number"
                id="phone-number"
                autoComplete="tel"
                {...register("phone_number",{
                  required: "Phone number is required",
                  pattern: {
                    value: /^\d{10}$/,
                    message: "Please enter a valid 10-digit phone number"
                  }
                })}
                className={`block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                ${
                  errors.email
                    ? "border-red-600 focus:border-red-600 ring-red-100"
                    : "border-gray-300 focus:border-indigo-600 ring-indigo-100"
                }`}

              />
              {errors.phone_number && (
                          <div className="mt-1 text-sm text-red-200 invalid-feedback">
                            {errors.phone_number.message}
                          </div>
            )}

            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                // name="message"
                id="message"
                rows={4}
                {...register('message', {
                  required: "Enter your Message"
                })}
                className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6${
                  errors.message
                    ? "border-red-600 focus:border-red-600 ring-red-100"
                    : "border-gray-300 focus:border-indigo-600 ring-indigo-100"
                }`}
                required
                defaultValue={''}
              />
              {errors.message && (
                          <div className="mt-1 text-sm text-red-400 invalid-feedback">
                            {errors.message.message}
                          </div>
              )}
            </div>
          </div>
          <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? 'bg-indigo-600' : 'bg-gray-200',
                  'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? 'translate-x-3.5' : 'translate-x-0',
                    'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
              By selecting this, you agree to our{' '}
              <a href="#" className="font-semibold text-indigo-600">
                privacy&nbsp;policy
              </a>
              .
            </Switch.Label>
          </Switch.Group>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
           {isSubmitting ? (
                            <svg
                              className="w-5 h-5 mx-auto text-white animate-spin"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24">
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                          ) : (
                            "Send Message"
                          )}
          </button>
        </div>
      </form>
      )}
      {isSubmitSuccessful && isSuccess && (
                    <>
                      <div className="flex flex-col items-center justify-center h-full text-center text-white rounded-md">
                        <svg
                          width="60"
                          height="60"
                          className="text-green-300"
                          viewBox="0 0 100 100"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M26.6666 50L46.6666 66.6667L73.3333 33.3333M50 96.6667C43.8716 96.6667 37.8033 95.4596 32.1414 93.1144C26.4796 90.7692 21.3351 87.3317 17.0017 82.9983C12.6683 78.6649 9.23082 73.5204 6.8856 67.8586C4.54038 62.1967 3.33331 56.1283 3.33331 50C3.33331 43.8716 4.54038 37.8033 6.8856 32.1414C9.23082 26.4796 12.6683 21.3351 17.0017 17.0017C21.3351 12.6683 26.4796 9.23084 32.1414 6.88562C37.8033 4.5404 43.8716 3.33333 50 3.33333C62.3767 3.33333 74.2466 8.24998 82.9983 17.0017C91.75 25.7534 96.6666 37.6232 96.6666 50C96.6666 62.3768 91.75 74.2466 82.9983 82.9983C74.2466 91.75 62.3767 96.6667 50 96.6667Z"
                            stroke="currentColor"
                            strokeWidth="3"
                          />
                        </svg>
                        <h3 className="py-5 text-xl text-green-500">
                          Message sent successfully
                        </h3>
                        <p className="text-gray-700 md:px-3">{Message}</p>
                        <button
                          className="mt-6 text-indigo-600 focus:outline-none"
                          onClick={() => reset()}>
                          Go back
                        </button>
                      </div>
                    </>
                  )}
                  {isSubmitSuccessful && !isSuccess && (
                    <div className="flex flex-col items-center justify-center h-full text-center text-white rounded-md">
                      <svg
                        width="60"
                        height="60"
                        viewBox="0 0 97 97"
                        className="text-red-400"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M27.9995 69C43.6205 53.379 52.3786 44.621 67.9995 29M26.8077 29L67.9995 69M48.2189 95C42.0906 95 36.0222 93.7929 30.3604 91.4477C24.6985 89.1025 19.554 85.6651 15.2206 81.3316C10.8872 76.9982 7.44975 71.8538 5.10454 66.1919C2.75932 60.53 1.55225 54.4617 1.55225 48.3333C1.55225 42.205 2.75932 36.1366 5.10454 30.4748C7.44975 24.8129 10.8872 19.6684 15.2206 15.335C19.554 11.0016 24.6985 7.56418 30.3604 5.21896C36.0222 2.87374 42.0906 1.66667 48.2189 1.66667C60.5957 1.66667 72.4655 6.58333 81.2172 15.335C89.9689 24.0867 94.8856 35.9566 94.8856 48.3333C94.8856 60.7101 89.9689 72.58 81.2172 81.3316C72.4655 90.0833 60.5957 95 48.2189 95Z"
                          stroke="CurrentColor"
                          strokeWidth="3"
                        />
                      </svg>

                      <h3 className="text-xl text-red-400 py-7">
                        Oops, Something went wrong!
                      </h3>
                      <p className="text-gray-700 md:px-3">{Message}</p>
                      <button
                        className="mt-6 text-indigo-600 focus:outline-none"
                        onClick={() => reset()}>
                        Go back
                      </button>
                    </div>
                  )}


    </div>
    </>
  );
}