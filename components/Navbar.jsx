'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { toast } from 'react-hot-toast';
import Link from 'next/link';
const LoginForm = dynamic(()=> import('../components/LoginForm'),{ssr:false});
const SignupForm = dynamic(()=> import('../components/SignupForm'),{ssr:false});
const DragHandleIcon = dynamic(()=> import('@mui/icons-material/DragHandle'));
const CloseIcon = dynamic(()=>import('@mui/icons-material/Close'));
const ElectricBoltIcon = dynamic(()=>import('@mui/icons-material/ElectricBolt'));
const CategoryIcon = dynamic(()=>import('@mui/icons-material/Category'));
const InfoIcon = dynamic(()=>import('@mui/icons-material/Info'));
const ContactPageIcon = dynamic(()=>import('@mui/icons-material/ContactPage'));
const HomeIcon = dynamic(()=>import('@mui/icons-material/Home'));
import {useGlobalContext} from '../context/Context';
import {BsCart2} from 'react-icons/bs';
import {CiUser} from 'react-icons/ci';
import { useRouter } from 'next/navigation';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, message, Space, Menu } from 'antd';

import { useUserGlobalContext } from '../context/UserContext';
import { signIn, signOut } from 'next-auth/react';
import { CiLogout } from 'react-icons/ci';
import { useSelector } from 'react-redux';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

const Navbar = async () => {

  const {mobilemenu, handleMenu} = useGlobalContext();
  const { showform, setShowform, popup,session,setPopup,PageUser} = useUserGlobalContext();

  const router = useRouter();

  const cartList = useSelector((state)=>state.cart);

  // const session = await getServerSession(authOptions)
  
  

  const openForm = () => {
    setPopup(true)
    setShowform(true);
  }

  const onClick = ({ key }) => {
    if(key==1){
        router.push('/services')
    }else{
      router.push('/whiteLabel')
    }
  };
  const items = [
    {
      label: 'Standard services',
      key: '1',
    },
    {
      label: 'White labelling',
      key: '2',
    },
  ];

  return (
    <>

    <LoginForm trigger={popup} setTrigger={setPopup} show={showform} setShow={setShowform}/>
    <SignupForm trigger={popup} setTrigger={setPopup} show={showform} setShow={setShowform}/>
    
    
    <div className='sticky top-[-2px] z-10 bg-white border-b border-gray-300 ecomm-nav max-w-[1640px] w-full h-[60px] px-[6%] md:px-[7%] lg:px-[8%] flex flex-col justify-center py-10 duration-300'>
        <div className='flex justify-between items-center font-Poppins w-full'>
            <div className='sm:hidden duration-300 nav-text'>
                <DragHandleIcon sx={{fontSize:25}} onClick={handleMenu}/>
            </div>
            <div className='ecomm-icon'>
                <h1 className='text-2xl text-black font-bold relative'>
                    <span className='text-[#ff0e2c]'>HI</span>-POWER
                    <div className='absolute top-[-2px] left-[40%]'>
                        <ElectricBoltIcon sx={{fontSize:20, color:'#FEFB14'}}/>
                    </div>
                </h1>
            </div>
            <div className='ecomm-menu hidden sm:flex'>
                <ul className='flex gap-5 sm:gap-7 md:gap-9 font-Poppins'>
                    <li className='nav-text font-medium'><Link prefetch={false} href='/'>Home</Link></li>
                    <li className='nav-text font-medium'><Link prefetch={false} href='/products'>Products</Link></li>
                    <li className='nav-text font-medium'>
                    <Dropdown
    menu={{
      items,
      onClick,
    }}
  >
    
      <Space>
        
        Services
        <DownOutlined className='flex justify-center items-center'/>
      </Space>
    
  </Dropdown>
                    </li>
                    
                    <li className='nav-text font-medium'><Link prefetch={false} href='/about'>About</Link></li>
                    <li className='nav-text font-medium'><Link prefetch={false} href='/contact'>Contact</Link></li>
                </ul>
            </div>
            <div className='ecomm-icons'>
                <ul className='flex gap-1 sm:gap-3 md:gap-5 font-Poppins'>
                    {
                        !session? <li className='hover:text-[#ff0e2c] flex items-center cursor-pointer' onClick={openForm}><CiUser size={22}/><p className='text-sm hidden sm:flex'>Sign In</p></li>:
                        <>
                        <Link href={`/profile/${session.user.sub}`}>
                        <li className='hover:text-[#ff0e2c] flex items-center cursor-pointer'><CiUser size={22}/><p className='text-sm hidden sm:flex'>Profile</p></li></Link>
                        <li className='hover:text-[#ff0e2c] flex items-center cursor-pointer gap-1' onClick={signOut}><CiLogout size={22}/><p className='text-sm hidden sm:flex'>Signout</p></li>
                        </>
                    }
                    
                    <li className='hover:text-[#ff0e2c] flex items-cente cursor-pointer relative'>
                      {cartList.length ? <>
                        <Link prefetch={false} href='/cart'><BsCart2 size={22}/></Link>
                      <div className='bg-[#ff0e2c] absolute w-[15px] h-[15px] rounded-full right-[-5px] top-[-5px] text-center'>
                        <p className='text-white text-xs'>
                          {cartList.length}
                        </p>
                      </div>
                      </>:
                      <>
                      <BsCart2 size={22} onClick={()=>{
                        toast.error('Cart empty')
                      }}/>
                      </>}
                    </li>
                </ul>
            </div>
        </div>
    </div>
        {mobilemenu ? <div className='fixed top-0 left-0 z-10 ecomm-overlay w-full h-screen bg-black/70 duration-200'/>: ''}
        <div className={mobilemenu ? 'fixed w-[80%] top-0 left-0 h-screen z-10 bg-white duration-300': 'fixed top-0 left-[-100%] w-[80%] h-screen bg-white duration-300'}>
            <div className='absolute top-4 right-4 text-black cursor-pointer'>
                <CloseIcon sx={{fontSize:25}} onClick={handleMenu}/>
            </div>
            <div className='ecomm-mobilemenu flex flex-col pt-6'>
                <div className='ecomm-icon pl-[3%] mb-5'>
                    <h1 className='text-2xl font-bold relative inline font-Poppins'>
                        <span className='text-[#ff0e2c]'>HI</span>-POWER
                        <div className='absolute top-[-8%] left-[41%]'>
                            <ElectricBoltIcon sx={{fontSize:20, color:'#FEFB14'}}/>
                        </div>
                    </h1>
                </div>
                <div className='pl-[3%] pr-[10%] pb-[5%] mb-5 w-full text-gray-700 border-b'>
                    
                    <p className='text-sm'>Reliable.Low prices.Offers.<span className='text-[#03b37b]'>Buy now</span></p>
                </div>
                
                <ul className='flex flex-col gap-6'>
                    <li className='pl-[3%] hover:text-[#ff0e2c] cursor-pointer' onClick={handleMenu}><HomeIcon/> <Link prefetch={false} href='/'>Home</Link></li>
                    <li className='pl-[3%] hover:text-[#ff0e2c] cursor-pointer' onClick={handleMenu}><CategoryIcon/> <Link prefetch={false} href='/products'>Products</Link></li>
                    <li className='pl-[3%] hover:text-[#ff0e2c] cursor-pointer' onClick={handleMenu}>
                    <CategoryIcon/> <Link prefetch={false} href='/services'>Services</Link>
                    </li>
                    <li className='pl-[3%] hover:text-[#ff0e2c] cursor-pointer' onClick={handleMenu}>
                    <CategoryIcon/> <Link prefetch={false} href='/whiteLabel'>White Labelling</Link>
                    </li>
                    <li className='pl-[3%] hover:text-[#ff0e2c] cursor-pointer' onClick={handleMenu}><InfoIcon/> <Link prefetch={false} href='/about'>About</Link></li>
                    <li className='pl-[3%] hover:text-[#ff0e2c] cursor-pointer' onClick={handleMenu}><ContactPageIcon/><Link prefetch={false} href='/contact'>Contact</Link></li>
                </ul>
            </div>
        </div>

    </>
  )
}

export default Navbar
