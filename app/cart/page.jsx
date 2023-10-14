'use client';
import React,{useEffect} from 'react';
import {useCartContext} from '../../context/CartContext';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../../Redux/CartSlice';
import {FaTrashAlt} from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { AiOutlinePlus,AiOutlineMinus } from 'react-icons/ai';
import Link from 'next/link';

const Page = () => {

    const cartList = useSelector((state)=>state.cart);

    const dispatch = useDispatch();

    const router = useRouter()

    

    // const columns = [
    //   {
    //     title:'Image',
    //     dataIndex:'image',
    //     key:'image'
    //   },
    //   {
    //     title:'Name',
    //     dataIndex:'label',
    //     key:'label'
    //   },
    //   {
    //     title:'Price',
    //     dataIndex:'price',
    //     key:'price'
    //   },
    //   {
    //     title:'Quantity',
    //     dataIndex:'quantity',
    //     key:'quantity'
    //   }
    // ]

    const getTotalPrice = () => {
        return cartList.reduce(
          (accumulator, item) => accumulator + item.item.quantity * item.finalprice,
          0
        );
      };

    const increment = ({item}) => {
      // console.log(cartList);
      dispatch(incrementQuantity(item))
    }
    
    const decrement = ({item}) => {
      // console.log(item);
      dispatch(decrementQuantity(item))
    }  
  
    const remove = ({item}) => {
      // console.log(item);
      dispatch(removeFromCart(item))
    }  

  return (
    
    <div className='px-[6%] md:px-[7%] lg:px-[8%]'>
    {cartList.length ?
        <div className='w-full flex flex-col md:flex-row justify-around py-[50px]'>
            <div className='flex flex-col gap-10'>
              <div className='h-[10px] grid grid-cols-6 gap-5'>
                <p className='hidden md:flex justify-center font-semibold'>Image</p>
                <p className='hidden md:flex justify-center font-semibold'>Name</p>
                <p className='hidden md:flex justify-center font-semibold'>Price</p>
                <p className='hidden md:flex justify-center font-semibold'>Quantity</p>
                <p className='hidden md:flex justify-center font-semibold'>TotalPrice</p>
                <p className='hidden md:flex justify-center font-semibold'>Actions</p>
                <p className='md:hidden flex justify-center font-semibold'>Items</p>
                {/* <th>Actions</th> */}
              </div>
              {cartList.map((item, index)=>{
                return(<div key={index}>
                  <div className='grid grid-cols-6 gap-5 font-Poppins tracking-wider'>
                    <div className='hidden md:flex justify-center items-center'><img src={item.item.img} alt={item.item.label} width='100' height='100' className='mx-auto'/></div>
                    <div className='hidden md:flex justify-center items-center'>{item.item.type}</div>
                    <div className='hidden md:flex justify-center items-center'>${item.finalprice}</div>
                    <div className='hidden md:flex justify-center items-center'>{item.item.quantity}</div>
                    <div className='hidden md:flex justify-center items-center'>${item.finalprice * item.item.quantity}</div>
                    <div className='hidden md:flex justify-center items-center gap-3'>
                      <button className='w-[30px] h-[30px] rounded-full flex items-center justify-center bg-[#ff0e2c] text-white shadow-md' onClick={()=>increment({item})}><AiOutlinePlus/></button>
                      <button className='w-[30px] h-[30px] rounded-full flex items-center justify-center bg-[#ff0e2c] text-white shadow-md' onClick={()=>decrement({item})}><AiOutlineMinus/></button>
                      <button className='w-[30px] h-[30px] rounded-full flex items-center justify-center bg-[#ff0e2c] text-white shadow-md' onClick={()=>remove({item})}><FaTrashAlt/></button>
                    </div>
                  </div>

                  <div className='w-full h-[180px] flex md:hidden border shadow-md'>
                    <div className='w-[30%] h-full flex items-center justify-center'>
                      <img src={item.item.img} alt={item.item.label} width='100' height='100' className='mx-auto'/>
                    </div>
                    <div className='w-[70%] h-full flex-flex col bg-gray-50 px-[3%]'>
                      <div className='w-full h-[75%] flex flex-col justify-center'>
                        <h1 className='font-Poppins font-semibold text-[22px]'>{item.item.label}</h1>
                        <p className='font-poppins font-medium text-[12px] text-gray-500'>SKU: 858578494757</p>
                        <p className='font-Poppins font-medium text-[14px]'>Quantity: {item.item.quantity}</p>
                        <p className='font-Poppins font-medium text-[14px] mb-3'>Price each: ${item.finalprice}</p>
                      </div>
                      <div className='w-full h-[25%] flex items-center justify-end gap-5 py-1'>
                        <button className='w-[25px] h-[25px] rounded-full flex items-center justify-center bg-[#ff0e2c] text-white shadow-md' onClick={()=>increment({item})}><AiOutlinePlus size={16}/></button>
                        <button className='w-[25px] h-[25px] rounded-full flex items-center justify-center bg-[#ff0e2c] text-white shadow-md' onClick={()=>decrement({item})}><AiOutlineMinus size={16}/></button>
                        <button className='w-[25px] h-[25px] rounded-full flex items-center justify-center bg-[#ff0e2c] text-white shadow-md' onClick={()=>remove({item})}><FaTrashAlt size={16}/></button>
                      </div>
                      
                    </div>
                  </div>

                  </div>
                  
                )
              })}
              
            </div>
            <div className='flex items-center justify-center mt-[50px]'>
            <div className='w-[400px] h-[500px] border border-gray-500 px-[2%] py-3'>
              <div className='flex flex-col mb-[30px]'>
                <h1 className='text-2xl font-Poppins font-medium tracking-wider'>Basket Totals</h1>
              </div>
              <div className='grid grid-cols-3 mb-[20px]'>
                <p className='font-bold'>Name</p>
                <p className='font-bold text-center'>Quantity</p>
                <p className='font-bold text-right'>Total Price</p>
              </div>
              <div className='w-full flex flex-col gap-3 h-[240px] mb-[20px] font-Poppins tracking-wider'>
                {cartList.map((item, index)=>{
                  return(
                    <div className='grid grid-cols-3'>
                      <p className='font-medium'>{item.type}</p>
                      <p className='font-medium text-center'>{item.quantity}</p>
                      <p className='text-[#ff0e2c] font-medium text-right'>${item.quantity*item.price}</p>
                    </div>
                  )
                })}
              </div>
              <div className='w-full flex justify-between items-center mb-4 py-2 border-b'>
                <p className='font-semibold font-Poppins tracking-wider'>Total</p>
                <p>${getTotalPrice()}</p>
              </div>
              <div className='w-full flex justify-center'>
                  <button className='bg-[#ff0e2c] py-2 text-center w-[70%] text-white font-Poppins tracking-wider rounded-s-full rounded-e-full'><Link href='/checkout'>Proceed to checkout</Link></button>
              </div>
            </div>
            </div> 
        </div>:
                <div className='h-sreen w-full flex items-center justify-center'>
                  <h1>Cart empty</h1>
                </div>
        }
    </div>


  )
}

export default Page