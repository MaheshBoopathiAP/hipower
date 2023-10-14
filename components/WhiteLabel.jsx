"use client"

import Image from "next/image";
import Link from "next/link";
import {AiOutlineCheckSquare, AiOutlineMail, AiOutlinePhone} from "react-icons/ai";

const WhiteLabel = (props) => {
  

  return (
    <>
      {!props.homepage&&<section className="bg-[url(/images/whiteLabel/White-Label-Batteries.jpg)] bg-center bg-cover h-96 relative">
        <div className="h-full bg-black/25 backdrop-blur-sm flex flex-col items-center justify-center text-white gap-3 max-sm:text-center px-5">
            <Image src={"/images/whiteLabel/your_logo.png"} height={75} width={75}/>
            <h1 className="font-semibold text-2xl">WHITE LABEL BATTERIES</h1>
            <p>Fully customisable batteries, manufactured under your brand</p>
        </div>
      </section>}
      <section className=" py-10 px-5 sm:px-20 max-sm:text-center">
            <h1 className='text-3xl font-bold font-Poppins text-red-500 tracking-wide mb-3 x'>WHITE LABEL BATTERIES</h1>
            <p>
                Whatever your project, we can provide white label batteries manufactured under your own brand which can be fully customised to comply with market requirements. For small scale prototype production, we use the latest prototyping technology which makes it possible to manufacture a few fully functional samples of the customised battery. This will allow you to test a new design in real conditions.
                <br/><br/>
                Enix Power Solutions has been manufacturing batteries of all technologies for a vast range of market sectors and clients for more than 30 years. Batteries are an essential component of both portable and isolated stationary equipment, constituting part of the manufacturers’ costs but also a revenue source once they need to be replaced. As a result, numerous manufacturers contact us to develop private label batteries for their products.
            </p>
      </section>
      <section className="flex bg-red-100/30 max-md:flex-col">
        <div className="flex flex-col px-5 md:pl-40 py-10 gap-3 md:w-[60%] ">
            <Image src={"/images/whiteLabel/your_logo.png"} height={130} width={130} className="max-sm:mx-auto"/>
            <h1 className="font-semibold text-2xl font-Poppins text-red-500 tracking-wide mb-3 max-sm:text-center">WHITE LABEL BATTERY ADVANTAGES</h1>
            <ol className="list-disc text-lg px-6 font-light marker:text-red-500 marker:text-2xl">
                <li>Wide range of customisable items</li>
                <li>Superior quality</li>
                <li>Securing the replacement battery market</li>
                <li>Sources of supply kept confidential</li>
                <li>Batteries of all technologies: Alkaline, Lithium and Lead Acid batteries, coin cells and battery packs</li>
            </ol>
            <button className='py-2  flex justify-center items-center bg-red-500 text-white rounded-md sm:mr-40'><Link href={`/about`}>View Details</Link></button>
        </div>
        <div className="md:w-[40%] bg-gray-100 p-10 md:p-20 "><Image src={"/images/whiteLabel/your_logo.png"} height={500} width={500} className=" mx-auto w-32 md:w-full h-full"/></div>
      </section>
      {!props.homepage&&<section className="py-5">
        <div className="flex flex-col gap-10 py-10 max-md:px-8 items-center justify-center bg-red-100/30">
            <h3 className="text-2xl max-md:text-center">Advantages of using Enix Power Solutions for your applications:</h3>
            <div className="md:w-[60%] flex justify-between flex-wrap">
                <div className="flex md:items-center justify-center"><AiOutlineCheckSquare className="mx-2 text-2xl"/> Bespoke solutions built to your specification</div> 
                <div className="flex md:items-center justify-center"><AiOutlineCheckSquare className="mx-2 text-2xl"/> Design & Characterisation</div>
            </div>
        </div>
        <div className="flex flex-col gap-10 py-10 max-md:px-5 items-center justify-center bg-gray-100">
            <h3 className="text-2xl max-md:text-center">Speak to a member of our OEM specialist team about white label batteries</h3>
            <div className="md:w-[50%] flex justify-center flex-wrap">
                <div className="flex items-center justify-center md:border-r-2 border-dotted border-red-200 px-5"><AiOutlinePhone className="mx-2 text-2xl"/> +919425153399</div> 
                <div className="flex items-center justify-center"><AiOutlineMail className="mx-2 text-2xl"/>hipowerbatteries@gmail.com</div>
            </div>
        </div>
      </section>}
    </>
  );
};

export default WhiteLabel;