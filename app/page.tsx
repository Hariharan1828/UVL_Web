import Banner from "@/components/Banner";
import PopupWidget from "@/components/ContactUs";
import Hero from "@/components/Hero";
import Footer from "@/components/footer";
import Image from "next/image";
import SerILLUS from "../public/Hr Consultancy.svg"
import Services from "@/components/Services";
import Faq from "@/components/faq";


export default function Home() {
  return (
    <main className="">
      <Hero/>
      <Services/>
      {/* <Faq/> */}
      <Footer/>
      <PopupWidget/> 
      
    </main>
  );
}
