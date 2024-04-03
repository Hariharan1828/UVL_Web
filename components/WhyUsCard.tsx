"use client";
import { HoverEffect } from "../components/Card_Design";

export function WhyUsCard() {
  return (
    <section className="p-8 md:p-16">
         <div className=" container max-w-screen-xl mx-auto px-4 overflow-hidden">
        
            <h1 className='font-bold font-display text-sky-700 text-3xl md:text-4xl text-center mb-5 '>
            Why Choose Us?
            </h1>

        </div>
        <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
        </div>
    </section>

  );
}
export const projects = [
  {
    title: "Expertise",
    description:
      "Leverage the expertise of seasoned professionals in the industry.",
    link: "",
  },
  {
    title: "Innovation",
    description:
      " Stay ahead with cutting-edge technologies and creative solutions.",
    link: "",
  },
  {
    title: "Customization",
    description:
      "Tailored services designed to meet the unique needs of your business.",
    link: "",
  },

];
