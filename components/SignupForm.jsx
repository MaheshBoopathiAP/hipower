'use client';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import BadgeIcon from '@mui/icons-material/Badge';
import PhoneInput from 'react-phone-input-2';
import OtpInput from 'otp-input-react';
import 'react-phone-input-2/lib/style.css';
import { useUserGlobalContext } from '../context/UserContext';

const SignupForm = (props) => {
 
  const {handleChange2,num,setNum,checkUser,onOTPverify,otp,setOtp,showotp} = useUserGlobalContext();
  
  return (props.trigger && !props.show) ? (
        
        <div className='ecomm-popup fixed top-0 z-20 w-full h-screen bg-black/70 flex justify-center items-center'>
            
            
            <div id='recaptcha-container'></div>
            {!showotp ? <div className='w-[400px] h-[400px] bg-white duration-300 ease-in relative flex flex-col p-5'>
                
                <CloseIcon className='absolute top-5 right-5 cursor-pointer' onClick={()=>props.setTrigger(false)}/>
                <div className=' w-full h-[50px] text-center border-b-2'>
                    <h1 className='text-2xl font-bold'>Sign Up</h1>
                </div>
                <form className='flex flex-col mt-5 gap-5' onSubmit={checkUser}>
                    <div className='w-full flex items-center gap-5 justify-center'>
                        <BadgeIcon/>
                        <input type="text" onChange={handleChange2} placeholder='First Name' name='fname' required className='focus:outline-[#ff0e2c] text-sm bg-gray-100 w-[70%] font-Urbanist px-3 p-2'/>
                    </div>
                    <div className='w-full flex items-center gap-5 justify-center'>
                        <BadgeIcon/>
                        <input type="text" onChange={handleChange2} placeholder='Last Name' name='lname' required className='focus:outline-[#ff0e2c] text-sm bg-gray-100 w-[70%] font-Urbanist px-3 p-2'/>
                    </div>
                    <div className='w-full flex items-center gap-5 justify-center'>
                        <div className='mx-auto'>
                            <PhoneInput country={'in'} value={num} onChange={setNum}/> 
                        </div>
                    </div>
                    <div className='px-9'>
                        <button type='submit' className='text-center w-full p-2 bg-[#04b879] text-white font-Poppins'>Create Account</button>
                    </div>
                    
                </form>
                <div id='recaptcha-container' className='absolute bottom-2 left-[44px]'>

                </div>

            </div>:
            <div className='w-[400px] h-[350px] bg-gradient-to-tr from-pink-500 via-red-500 to-[#ff0e2c] duration-300 ease-in relative flex flex-col items-center justify-center gap-5 p-5'>
                <div>
                    <p className='font-semibold text-white'>Enter your OTP</p>
                </div>
                <div className='flex justify-between'>
                    <OtpInput
                        value={otp}
                        onChange={setOtp}
                        className=''
                        OTPLength={6}
                        otpType='number'
                        disabled={false}
                        autoFocus

                    />
                </div>
                <div className='w-full flex items-center justify-center'>
                    <button onClick={onOTPverify} className='text-white py-2 px-3 text-sm flex gap-2 justify-center items-center bg-emerald-500'>
                        {/* {load && <CgSpinner size={20}/>} */}
                        Verify the OTP
                    </button>
                </div>
            </div>
            }
        </div>
    ):"";
}

export default SignupForm