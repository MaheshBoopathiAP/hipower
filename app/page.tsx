'use client';
import dynamic from 'next/dynamic';
const Header = dynamic(()=>import( '../components/Header'));
const PageIcons = dynamic(()=>import( '../components/PageIcons'));
import Hero from '@/components/Hero';
const Services = dynamic(()=>import( '../components/Services'));
const HomeAbout = dynamic(()=>import( '../components/HomeAbout'));
const FeaturedProducts = dynamic(()=>import( '../components/FeaturedProducts'));
const Offers = dynamic(()=>import( '../components/Offers'));
const Trial = dynamic(()=>import("@/components/Trial"));
const WhiteLabel = dynamic(()=>import("@/components/WhiteLabel"));

export default function Home() {
  
  
  return (
    <main className="">
      <PageIcons/>
      <Hero/>
      <HomeAbout/>
      <Services/>
      <FeaturedProducts/>
      <WhiteLabel  homepage={"true"}/>
      <Trial heading={"Battery Maintenance"} tagline={"Seamless Booking, Effortless Experiences"}/>
      <Offers/>
      {/* <Client/>
      <Testimonial/> */}
    </main>
  )
}
