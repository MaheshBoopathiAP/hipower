import React from 'react';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import { useGlobalContext } from '../context/Context';
import ServiceCard from "./ServiceCard";
import {MdOutlineMiscellaneousServices, MdOutlinePrecisionManufacturing} from "react-icons/md"
import {SiWhitesource} from "react-icons/si"
import {TbReplace} from "react-icons/tb"
import {GrHostMaintenance} from "react-icons/gr"

const Services = () => {

  const ServiceCardData = [
    {
      title: "Manufacturing",
      description:
        "When it comes to manufacturing batteries that meet the highest standards of quality, reliability, and sustainability, Hi-Power is your go-to choice. Explore our range of battery solutions or get in touch with our team today to discuss how we can meet your unique energy needs.",
        icon:MdOutlinePrecisionManufacturing
    },
    {
      title: "White Labelling",
      description:
      "At Hi-Power, we understand the importance of building a strong and recognizable brand. That's why we offer white labeling services that empower businesses to showcase their products and services under their own brand identity, without the hassle of manufacturing or production.",
      icon:SiWhitesource
    },
    {
        title: "Battery Replacement",
      description:
        "Is your device running out of power faster than usual? Are you experiencing performance issues due to a tired battery? Don't worry; we've got you covered. At Hi-Power, we specialize in battery replacement services to breathe new life into your electronics.",
        icon:TbReplace
    },
    {
        title: "Battery Maintenance",
        description:
        "With years of experience in battery maintenance, Hi-Power is your trusted partner for keeping your batteries in optimal condition. We combine expertise, technology, and a commitment to quality to ensure your batteries perform reliably when you need them most.",
        icon:MdOutlineMiscellaneousServices
    },
  ];

  return (
    <div className='ecomm-services w-full py-16 px-[10px] sm:px-[6%] md:px-[9%] lg:px-[5rem] '>
        <div className='w-full'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold font-Poppins text-red-500 tracking-wide mb-3'>Our Services</h1>
                <p className='text-sm font-Poppins text-gray-600'>We believe in customer satisfaction</p>
            </div>
            <div className=" rounded-2xl grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-10 relative py-16">
                {ServiceCardData.map((card) => {
                    return (
                    <ServiceCard title={card.title} description={card.description} icon={card.icon}/>
                    );
                })}
            </div>
            
        </div>
    </div>
  )
}

export default Services