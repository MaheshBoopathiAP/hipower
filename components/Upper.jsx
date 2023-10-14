'use client'
import React from "react";
import upperimg from '../data/images/ss.png';
import Image from "next/image";
import {LiaCarSideSolid} from 'react-icons/lia'
import {CarOutlined,ArrowRightOutlined} from '@ant-design/icons'

// import { AiFillCar } from 'react-icons/Ai'

const Upper = () => {
  return (
    <div className='mt-[40px] sm:px-[6%] md:px-[9%] lg:px-[10%] h-[560px]'>
      <div className="w-full h-[460px] mx-auto mb-[30px] flex">
        <Image src={upperimg} alt="img" className="w-full" />
        {/* <div className='w-[300px] h-full flex flex-col'>
          <div className='w-full h-1/3 flex flex-col justify-center items-center relatve border'>
            <div>
              <CarOutlined style={{fontSize:'25px',color:'#ff0e2c'}}/>
            </div>
            <p className='font-light text-sm text-[#ff0e2c]'>
              For any car battery
            </p>
            <div>
              <ArrowRightOutlined style={{fontSize:'15px',color:'#ff0e2c'}}/>
            </div>
          </div>
          <div className='w-full h-1/3 flex flex-col justify-center items-center relatve border'>
            <div>
              <CarOutlined style={{fontSize:'25px',color:'#ff0e2c'}}/>
            </div>
            <p className='font-normal text-sm text-[#ff0e2c]'>
              For any car battery
            </p>
            <div>
              <ArrowRightOutlined style={{fontSize:'15px',color:'#ff0e2c'}}/>
            </div>
          </div>
          <div className='w-full h-1/3 flex flex-col justify-center items-center relatve border'>
            <div>
              <CarOutlined style={{fontSize:'25px',color:'#ff0e2c'}}/>
            </div>
            <p className='font-light text-sm text-[#ff0e2c]'>
              For any car battery
            </p>
            <div>
              <ArrowRightOutlined style={{fontSize:'15px',color:'#ff0e2c'}}/>
            </div>
          </div>
        </div> */}
        
      </div>
      <div  className='flex justify-center items-center mb-[10px]'>
        <h1 className='font-Poppins text-gray-500 tracking-widest text-sm'>Queries? Click below</h1>
      </div>
    </div>
  );
};

export default Upper;