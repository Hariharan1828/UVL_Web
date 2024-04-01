"use client"
import PopupWidget from "@/components/ContactUs";
import Hero from "@/components/Hero";
import Footer from "@/components/footer";
import Services from "@/components/Services";
import FAq from "@/components/FAq";
import { WhyUsCard } from "@/components/WhyUsCard";


export default function Home() {
  return (
    <main className="">
      <Hero/>
      <Services/>
      <WhyUsCard/>
      <FAq/>
      <PopupWidget/> 
      
    </main>
  );
}
