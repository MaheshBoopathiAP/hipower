'use client';
import React from 'react';
import Lottie from 'lottie-react';
import loading2 from '@/data/loading2.json';

export default function Loading() {



    return <div className='flex justify-center items-center'>
       <div className='flex w-[100%] lg:w-[50%] h-full flex-col items-center justify-center'>
            <Lottie animationData={loading2} />
       </div>
    </div>
}