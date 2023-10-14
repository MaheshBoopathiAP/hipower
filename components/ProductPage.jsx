'use client';
import React from 'react';
import Link from 'next/link';
import { useFilterGlobalContext } from '../context/FilterContext';
import {useSearchParams} from 'next/navigation';
import Slider from '@mui/material/Slider';
import { Image } from 'antd';

const Page = (props) => {

  const {products,car,price,setPrice} = useFilterGlobalContext();
  const searchParams = useSearchParams();
  const brand = searchParams.get('brand');
  const model = searchParams.get('model');
  const variant = searchParams.get('variant'); 

  return (
    <div className='w-full h-full'>
        <div className='xl:fixed xl:flex hidden xl:w-[350px] xl:h-[500px] xl:z-10'>
          <div className='filters w-full h-full px-[20%] flex flex-col gap-2'>
            <div className='mt-[100px] py-2 text-lg font-bold border-b'>
              <h1>Filters</h1>
            </div>
            <div className='flex flex-col'>
              <h1 className='text-[#ff0e2c] font-semibold text-base'>Price</h1>
              <div className='flex py-8'>
                <Slider
                  sx={{color:'#ff0e2c'}}
                  valueLabelDisplay='on'
                  min={2000}
                  max={15000}
                  value={price}
                  onChange={(e)=>setPrice(e.target.value)}

                />
              </div>
            </div>
          </div>
        </div>
        {/* products section */}
        
        <div className='my-[100px] max-w-[1100px] xl:ml-[25%] md:pl-3'>
          
          <div className='flex flex-col gap-3  md:flex-row md:items-center justify-between px-3'>
            <h1 className='text-[27px] text-gray-500 font-semibold tracking-wide'>{
              brand==null?`${props.pageOf} Batteries`:
              `${brand} ${model} ${variant}`}</h1>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-8 mt-[50px]'>
            {brand==null?
            products.map((item)=>{
              if(props.useFor=='all' || item.use.includes(props.useFor))
              return(
                <div key={item.id} className='w-[400px] sm:w-[500px] h-[500px] mx-auto md:mx-0 border-2 bg-white border-gray-100 overflow-hidden rounded-lg relative flex justify-center hover:scale-105 duration-300'>
                  <div className='w-[30%] h-[30px] absolute flex items-center justify-center rounded-e-full text-[10px] font-bold border-2 border-gray-400 bg-gray-100 left-0 top-[7%]'>
                    <p>{item.warranty} Months Warranty</p>
                  </div>
                  <div className='flex w-full h-full'>
                    <div className='w-[30%] lg:w-[35%] h-[60%] sm:h-[70%] overflow-hidden rounded-lg flex items-center px-2'>
                      <img className='object-cover' src={`/${item.img}`}/>
                    </div>
                    <div className=' w-[70%] lg:w-[65%] h-[60%] flex flex-col pt-10 px-6'>
                      <h1 className='text-[20px] mb-6 font-semibold'>{item.type}</h1>
                      <p className='text-[10px] text-gray-400'>SKU:88736347484874</p>
                      <div className='flex flex-col gap-3'>
                        <p className='text-sm text-gray-400'></p>
                        <div className='flex flex-col'>
                        <p className='font-semibold text-md flex items-center gap-2'>$ {item.price} <span className='text-[10px] text-blue-500'>(Exchange with old Battery)</span></p>
                        <span className='text-[10px] tracking-normal p-0'>(Inclusive of all taxes)</span>
                        </div>
                        <div className='flex flex-col'>
                        <p className='font-semibold text-md flex items-center gap-2'>$ {item.price} <span className='text-[10px] text-blue-500'>(Buy new Battery)</span></p>
                        <span className='text-[10px] tracking-normal p-0'>(Inclusive of all taxes)</span>
                        </div>
                        <button className='py-1 flex justify-center items-center bg-[#04b879] text-white rounded-md'><Link prefetch={false} href={`/products/info/${item.label}`}>View Details</Link></button>
                      </div>
                    </div>
                    <div className='w-full h-[40%] flex flex-col bottom-0 absolute'>
                      <div className='h-[15%] flex justify-center items-center mx-5 border-b'>
                        <h1 className='text-sm uppercase text-gray-500'>Specs</h1>
                      </div>
                      <div className='mx-5 flex italic py-5 px-2 text-sm justify-between items-center'>
                        <div className='flex flex-col'>
                          {item.specs.map((obj,index)=>{
                            return(
                              <p key={index}>{obj.key}</p>
                            )
                          })}
                        </div>
                        <p className='flex flex-col'>
                          {item.specs.map((obj,index)=>{
                            return(
                              <span key={index}>:</span>
                            )
                          })}
                        </p>
                        <div className='flex flex-col'>
                          {item.specs.map((obj,index)=>{
                            return(
                              <p key={index}>{obj.value}</p>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              )
            })
            :products.map((item)=>{
                if(item.application.includes(`${brand} ${model} ${variant}`)){
                  return(
                    <div key={item.id} className='w-[400px] sm:w-[500px] h-[500px] mx-auto md:mx-0 border-2 bg-white border-gray-100 overflow-hidden rounded-lg relative flex justify-center hover:scale-105 duration-300'>
                  <div className='w-[30%] h-[30px] absolute flex items-center justify-center rounded-e-full text-[10px] font-bold border-2 border-gray-400 bg-gray-100 left-0 top-[7%]'>
                    <p>{item.warranty} Months Warranty</p>
                  </div>
                  <div className='flex w-full h-full'>
                    <div className='w-[30%] lg:w-[35%] h-[40%] sm:h-[50%] overflow-hidden rounded-lg flex items-center px-2'>
                      <img className='object-cover' src={`/${item.img}`}/>
                    </div>
                    <div className=' w-[70%] lg:w-[65%] h-[60%] flex flex-col pt-10 px-6'>
                      <h1 className='text-[20px] mb-6 font-semibold'>{item.type}</h1>
                      <p className='text-[10px] text-gray-400'>SKU:88736347484874</p>
                      <div className='flex flex-col gap-3'>
                        <p className='text-sm text-gray-400'></p>
                        <div className='flex flex-col'>
                        <p className='font-semibold text-md flex items-center gap-2'>$ {item.price} <span className='text-[10px] text-blue-500'>(Exchange with old Battery)</span></p>
                        <span className='text-[10px] tracking-normal p-0'>(Inclusive of all taxes)</span>
                        </div>
                        <div className='flex flex-col'>
                        <p className='font-semibold text-md flex items-center gap-2'>$ {item.price} <span className='text-[10px] text-blue-500'>(Buy new Battery)</span></p>
                        <span className='text-[10px] tracking-normal p-0'>(Inclusive of all taxes)</span>
                        </div>
                        <button className='py-1 flex justify-center items-center bg-[#04b879] text-white rounded-md'><Link prefetch={false} href={`/products/info/${item.label}`}>View Details</Link></button>
                      </div>
                    </div>
                    <div className='w-full h-[40%] flex flex-col bottom-0 absolute'>
                      <div className='h-[15%] flex justify-center items-center mx-5 border-b'>
                        <h1 className='text-sm uppercase text-gray-500'>Specs</h1>
                      </div>
                      <div className='mx-5 flex py-5 px-2 text-sm justify-between items-center'>
                        <div className='flex flex-col'>
                          {item.specs.map((obj,index)=>{
                            return(
                              <p key={index}>{obj.key}</p>
                            )
                          })}
                        </div>
                        <p className='flex flex-col'>
                          {item.specs.map((obj,index)=>{
                            return(
                              <span key={index}>:</span>
                            )
                          })}
                        </p>
                        <div className='flex flex-col'>
                          {item.specs.map((obj,index)=>{
                            return(
                              <p key={index}>{obj.value}</p>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
                  )
                }
            })}
          </div>
        </div>
        
    </div>
  )
}

export default Page