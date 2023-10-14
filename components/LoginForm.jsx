import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import DialpadIcon from '@mui/icons-material/Dialpad';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import PhoneInput from 'react-phone-input-2';
import OtpInput from 'otp-input-react';
import 'react-phone-input-2/lib/style.css'
import { useUserGlobalContext } from '../context/UserContext';

const LoginForm = (props) => {

  const {number,setNumber,showotp,onOTPverify2,otp,setOtp,onLogin} = useUserGlobalContext();

  return (props.trigger && props.show) ? (
        <div className='ecomm-popup fixed top-0 z-20 w-full h-screen bg-black/70 flex justify-center items-center'>
            
            
            {!showotp? <div className='w-[400px] h-[400px] bg-white duration-300 ease-in relative flex flex-col p-5'>
                
                <CloseIcon className='absolute top-5 right-5 cursor-pointer' onClick={()=>props.setTrigger(false)}/>
                <div className=' w-full h-[50px] text-center border-b-2'>
                    <h1 className='text-2xl font-bold'>Login</h1>
                </div>
                <div className='w-full text-center text-gray-500 my-5 text-sm tracking-tight'>
                    <p>Enter your mobile no. and an OTP will be sent to your number</p>
                </div>
                <form onSubmit={(e)=>onLogin(e)} className='flex flex-col mt-5 gap-5' >
                    <div className='w-full flex items-center justify-center'>
                        {/* <DialpadIcon/> */}
                        {/* <input type="tel" name='mobile' pattern='[0-9]{5}-[0-9]{5}' placeholder='99999-99999' required className='focus:outline-[#ff0e2c] text-sm bg-gray-100 w-[70%] font-Urbanist px-3 p-2'/> 
                        */}
                        <div className='mx-auto'>
                            <PhoneInput country={'in'} value={number} onChange={setNumber}/> 
                        </div>
                        
                    </div>
                    {/* <div className='w-full flex items-center gap-5 justify-center'>
                        <LockIcon/>
                        <input type="password" name='password' placeholder='Password' required className='focus:outline-[#ff0e2c] text-sm bg-gray-100 w-[70%] font-Urbanist px-3 p-2'/>
                    </div> */}
                    <div className='px-9'>
                        <button type='submit' className='text-center w-full p-2 bg-[#04b879] text-white font-Poppins'>Login</button>
                    </div>
                </form>
                {/* <span className='text-gray-600 my-3 mx-auto w-[20px]'>or</span>
                <div className='px-9'>
                <button className='text-center w-full p-2 bg-black text-white font-Poppins' onClick={()=>signIn()}>Sign In with Google</button>
                </div> */}
                <p className='text-sm absolute bottom-24 w-[70%] mx-auto'>Don't have an account ? <span className='text-[#ff0e2c] cursor-pointer' onClick={()=>{props.setShow(false)}}>Sign Up</span></p>
                <div id='recaptcha-container' className='absolute bottom-2 left-[44px]'>

                </div>
            </div>
            
            :
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
                    <button onClick={onOTPverify2} className='text-white py-2 px-3 text-sm flex gap-2 justify-center items-center bg-emerald-500'>
                        {/* {load && <CgSpinner size={20}/>} */}
                        Verify the OTP
                    </button>
                </div>
            </div>}
        </div>
    ):"";
}

export default LoginForm