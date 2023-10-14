'use client';
import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import toast from 'react-hot-toast';

const Page = () => {

    const [pay,setPay] = useState('')
    const [fname,setFname] = useState('');
    const [lname,setLname] = useState('');
    const [add1,setAdd1] = useState('');
    const [add2,setAdd2] = useState('');
    const [city,setCity] = useState('');
    const [state,setState] = useState('');
    const [zip,setZip] = useState('');
    const [email,setEmail] = useState('');
    const [notes,setNotes] = useState('');

    const cartList = useSelector((state)=>state.cart);

    const getTotalPrice = () => {
        return cartList.reduce(
          (accumulator, item) => accumulator + item.quantity * item.price,
          0
        );
      };

    const placeOrder = () => {
        const options = {
            method: 'POST',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer {{access_token}}',
              'content-type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
              allow_repeated_payments: false,
              send_email: false,
              amount: getTotalPrice(),
              purpose: 'buy',
              buyer_name: fname,
              email: email,
              redirect_url:'http://localhost:3000'
            })
          };
          
          fetch('https://api.instamojo.com/v2/payment_requests/', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }
      

  return (
    <>
        <div className='relative flex max-sm:flex-col px-5 sm:px-10 md:px-20 max-sm:gap-10 my-10'>
            <div className='w-[70%] max-sm:w-full  flex flex-col gap-4 text-sm px-4'>
                <div className='flex gap-8'>
                    <InpTextComp required width="50%" title="First Name" onChange={(e)=>setFname(e.target.value)}/>
                    <InpTextComp required width="50%" title="Last Name" onChange={(e)=>setLname(e.target.value)}/>
                </div>
                <span className='w-full'>
                    <h4>Address</h4>
                    <input required type='text' className='p-3 w-full border border-gray-400 mb-2' placeholder='House number and street name' onChange={(e)=>setAdd1(e.target.value)}/>
                    <input required type='text' className='p-3 w-full border border-gray-400' placeholder='Apartment, suite, unit, etc. (optional)' onChange={(e)=>setAdd2(e.target.value)}/>
                </span>
                <InpTextComp required title="Town / City" onChange={(e)=>setCity(e.target.value)}/>
                <InpTextComp required title="State" onChange={(e)=>setState(e.target.value)}/>
                <InpTextComp required title="PostCode / ZIP" onChange={(e)=>setZip(e.target.value)}/>
                <InpTextComp required title="Email address" type="email" onChange={(e)=>setEmail(e.target.value)}/>
                {/* <InpTextComp title="Phone"/>
                <div className='grid grid-cols-2 items-center gap-8'>
                    <InpTextComp title="Username" placeholder="Username"/>
                    <InpTextComp title="Create account password" placeholder="Password" type="password"/>
                </div> */}
                <span className='w-full'>
                    <h4>Order Notes(optional)</h4>
                    <textarea onChange={(e)=>setNotes(e.target.value)} placeholder='Notes about your order, e.g. special notes for delivery' className='p-3 border border-gray-400 h-44 w-full'/>
                </span>
                
            </div>
            <div className='w-[30%] max-sm:w-full sticky top-0 h-fit bg-gray-50 rounded-md sm:mx-4 p-6'>
                <div className=''>
                    <div className='flex justify-between font-semibold border-b border-gray-300 py-3'>
                        <h3>PRODUCT</h3>
                        <h3>SUBTOTAL</h3>
                    </div>
                    <div className='border-b border-gray-300 py-3 text-sm'>
                        {cartList.map((item,ind)=><div className='flex justify-between ' key={ind}>
                            <h3 className='text-gray-00'>{item.label}</h3>
                            <h3 className='text-[#ff0e2c]'>{item.price}</h3>
                        </div>)}
                    </div>
                    <div className='flex justify-between border-b border-gray-300 py-3'>
                        <h3>SUBTOTAL</h3>
                        <h3 className='text-[#ff0e2c]'>{getTotalPrice()}</h3>
                    </div>
                    <div className='border-b border-gray-300 py-3'>
                        <h3>Shipping</h3>
                        <h3 className='text-sm'>Flat Rate: <span className='text-[#ff0e2c]'>₹30</span></h3>
                    </div>
                    <div className='flex justify-between text-xl font-semibold border-b border-gray-300 py-3'>
                        <h3>Total</h3>
                        <h3 className='text-[#ff0e2c]'>{getTotalPrice() + 30}</h3>
                    </div>
                    <div className=' flex justify-between py-5'>
                        <span>
                            <input type="radio" id="cash" name="payment_method" value="Cash" onChange={(e)=>setPay(e.target.value)}/>
                            <label for="cash"> Cash on delivery</label>
                        </span>
                        <span>
                            <input type="radio" id="online" name="payment_method" value="Online" onChange={(e)=>setPay(e.target.value)}/>
                            <label for="online"> Pay Online</label><br/>
                        </span>
                    </div>
                    <button className='w-full p-3 bg-[#ff0e2c] hover:bg-black transition-all duration-500 text-white font-semibold rounded-full' onClick={placeOrder}>Place order</button>
                </div>   
            </div>
        </div>
    </>
  )
}


const InpTextComp = (props)=>{
    return <span className={`w-[${props.width}]`}>
    <h4 className='break-all'>{props.title}</h4>
    <input className='p-3 w-full border border-gray-400' placeholder={props.placeholder} type={props.type}/>
</span>
}
export default Page