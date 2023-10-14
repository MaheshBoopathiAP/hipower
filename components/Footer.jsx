import React from 'react';
import dynamic from 'next/dynamic';
import AnimatedWave from './AnimatedWave';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillMail,
  AiFillCaretRight
} from "react-icons/ai";
import {BiCurrentLocation} from 'react-icons/bi';
import { BsFillTelephoneFill } from "react-icons/bs";
import Link from 'next/link';
const ElectricBoltIcon = dynamic(()=>import('@mui/icons-material/ElectricBolt'));

const Footer = () => {
  return (
    <div className='relative'>

    <div
      style={{ minHeight: "30vh", display: "flex", flexDirection: "column"}}
    />
      <div style={{ position: "relative" }}>
        <AnimatedWave
          color={"#ff0e2c"}
          animationDuration="4s"
          opacity={"1"}
        />
        <AnimatedWave
          color={"#ff0e2c"}
          animationDuration="12s"
          opacity={"0.7"}
        />
        <AnimatedWave
          color={"#ff0e2c"}
          animationDirection="reverse"
          animationDuration="10s"
          opacity={"0.5"}
        />
      </div>
      <footer className="bg-[#ff0e2c] flex flex-wrap gap-3 justify-around py-5 px-[4%]">
        <div className="w-[90%]  md:w-[25%] flex flex-col items-center md:text-start md:items-start gap-5 text-white ">
          <h1 className='text-2xl font-bold relative inline'>
            <span className='text-black'>HI</span>-POWER
            <div className='absolute top-[-8%] left-[41%]'>
                <ElectricBoltIcon sx={{fontSize:20, color:'#FEFB14'}}/>
            </div>
          </h1>
          <p className="text-justify">
          Hipowerbatteries is the leading manufacturer of Automotive and Inverter Batteries. After starting its operation since 1988, the firm has achieved many accomplishments and has established wide spread dealer network. The firm is supplying high quality batteries to Government Departments like: Defence, Railways, MPSEB, State Transports
          </p>
          
          <div className="flex gap-5">
            <button>
              <AiFillFacebook
                size={40}
                className="text-[#ff0e2c] bg-white hover:bg-[#ff0e2c] hover:text-white rounded-full px-2 "
              />
            </button>
            <button>
              <AiFillInstagram
                size={40}
                className="text-[#ff0e2c] bg-white hover:bg-[#ff0e2c] hover:text-white rounded-full px-2"
              />
            </button>
            <button>
              <AiOutlineTwitter
                size={40}
                className="text-[#ff0e2c] bg-white hover:bg-[#ff0e2c] hover:text-white rounded-full px-2"
              />
            </button>
          </div>
        </div>
        <div className="w-full sm:w-[90%] md:w-[25%] lg:w-[20%] flex md:flex-col md:px-5 gap-5 max-md:justify-around flex-wrap max-sm:justify-start">
          <div className='flex flex-col gap-3 '>
            <h3 className="text-white text-xl font-semibold ">Useful Links</h3>
            <LinkComp name={"Home"} href={"/"}/>
            <LinkComp name={"About"} href={"/about"}/>
            <LinkComp name={"Products"} href={"/products"}/>
            <LinkComp name={"Contact"} href={"/contact"}/>
          </div>
          <div className='flex flex-col gap-3'>
            <h3 className="text-white text-xl font-semibold">Services</h3>
            <LinkComp name={"Manufacturing"} href={"/"}/>
            <LinkComp name={"White Labeling"} href={"/"}/>
            <LinkComp name={"Maintenance"} href={"/"}/>
          </div>
        </div>
        {/* <div className="w-full sm:w-[50%] md:w-[15%] flex flex-col max-md:text-center gap-5">
          
        </div> */}
        <div className="w-full sm:w-[90%] md:w-[45%] flex max-sm:flex-col max-sm:text-start max-md:text-center justify-around">
          <div className="w-full sm:w-[50%] md:w-[45%] flex flex-col gap-5 items-start  ">
            <h3 className="text-white text-xl font-semibold">Find Your Battery</h3>
            <LinkComp name={"Car / SUV / MUV Batteries"} href={"/"}/>
            <LinkComp name={"Three Wheeler - Batteries"} href={"/"}/>
            <LinkComp name={"LCV / HCV Batteries"} href={"/"}/>
            <LinkComp name={"Tractor Batteries"} href={"/"}/>
            <LinkComp name={"Inverter Batteries"} href={"/"}/>
            <LinkComp name={"Inverter / HUPS - Genset Batteries"} href={"/"}/>
          </div>
          <div className="w-full sm:w-[50%] md:w-[55%] flex flex-col gap-5 text-white">
            <h3 className="text-white text-xl font-semibold">Contact Us</h3>
            <h4 className="flex gap-2 ">
              <BiCurrentLocation className="w-10 mt-1" size={20}/> Hi Power Metal Industries, 
              <br/>Adhartal Industrial Estate, 
              <br/>Kanchanpur, Adhartal, Jabalpur (M.P.) 
              <br/>PIN: 482004
            </h4>
            <h4 className="flex items-center gap-2 break-all">
              <AiFillMail className="w-10" size={20}/> hipowerbatteries@gmail.com
            </h4>
            <h4 className="flex items-center gap-2">
              <BsFillTelephoneFill className="w-10" size={20}/>
              +91 9425153399
            </h4>
          </div>
        </div>
      </footer>
    
    </div>
  )
}

const LinkComp = ({name,href})=>{
  return <Link
            href={href}
            className={`text-white hover:underline flex w-full`}
          >
            <AiFillCaretRight className="mt-1 w-10" size={15}/>
            {name}
          </Link>
}

export default Footer