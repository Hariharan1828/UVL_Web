import Image from "next/image";
import Container from "./container";
import ILUSS from "../public/20125871_6222535.svg";
import { GlobeAmericasIcon } from "@heroicons/react/24/solid";

const Hero: React.FC = () => {
  return (
    <>
      <Container className="flex flex-wrap max-w-7xl mx-auto">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-sky-700 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              UniVersaLink Solutions
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            Lorem ipsum is commonly used as placeholder text in design and publishing. Its origins can be traced back a passage from CicerosDe Finibus Bon et Malorum
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="/"
                target="_blank"
                // rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-500 rounded-md ">
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
