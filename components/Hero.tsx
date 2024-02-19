import Image from "next/image";
import Container from "./container";
import ILUSS from "../public/20125871_6222535.svg";
import { GlobeAmericasIcon } from "@heroicons/react/24/solid";
import { TypewriterEffect } from "../components/ui/typewritter";
import { TextGenerateEffect } from "../components/ui/text-generator";

const Hero: React.FC = () => {

  const words = [
    {
      text: "Ink",
      className: "text-sky-700 dark:text-sky-700 text-xl",
    },
    {
      text: "Think",
      className: "text-sky-700 dark:text-sky-700 text-xl",
    },
    {
      text: "Thrive",
      className: "text-sky-700 dark:text-sky-700 text-xl",

    },
    
  ];
  const para = `At UniversaLink, we are dedicated to transforming your business through innovative solutions that drive growth and elevate your success. With a commitment to excellence, we specialize in Human Resource Consulting, Business Intellgence, Artificial Intelligence Solutions, Digitalization and IT services`

  return (
    <>
      <Container className="flex flex-wrap max-w-7xl mx-auto">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8 lg:mt-10">
            <h1 className="text-4xl font-bold lg:font-medium font-display leading-snug tracking-tight text-sky-700 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              UniVersaLink Solutions
            </h1>
            <TypewriterEffect className="pt-5 lg:p-2 " words={words} />
            {/* <p className="py-5 text-lg leading-normal text-gray-500 lg:text-lg xl:text-xl dark:text-gray-300">
            At UniversaLink, we are dedicated to transforming your business through innovative solutions that drive growth and elevate your success. With a commitment to excellence, we specialize in Human Resource Consulting, Business Intellgence, Artificial Intelligence Solutions, Digitalization and IT services            </p> */}
            <TextGenerateEffect words={para} /> 
            <div className="flex flex-col items-start space-y-3 lg:mt-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="/"
                target="_blank"
                // rel="noopener"
                className="px-8 py-4 text-sm font-medium text-center text-white bg-indigo-500 rounded-md ">
                Explore
              </a>
             
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={ILUSS}
              width={616}
              height={617}
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              
            />
          </div>
        </div>
      </Container>
        <p className="mx-auto text-xl text-center text-gray-400 dark:text-white mb-20">
          Trusted by Clients worldwide
        </p>

      
    </>
  );
};

export default Hero;
