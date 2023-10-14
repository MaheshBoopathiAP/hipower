'use client';
import React,{useState,useEffect} from 'react';
import { UploadOutlined, UserOutlined, ShoppingCartOutlined} from '@ant-design/icons';
import { Layout, Menu, theme, Form, Checkbox, Input } from 'antd';
const {Content, Footer, Sider } = Layout;
import {useUserGlobalContext} from '../../../context/UserContext'
import {usePathname} from 'next/navigation';
import { getServerSession } from 'next-auth'; 
import { authOptions } from '@/pages/api/auth/[...nextauth]';

// const getUser = async () => {
//   const id = usePathname().split('/')[2];
//   const res = await fetch('http://localhost:3000/api/user/info',{
//           cache: 'no-store',
//           method:'POST',
//               headers:{
//                 'Content-Type':'application/json'
//               },
//           body:JSON.stringify(id) 
//   })
//   return res.json()
// }



const Page = (props) => {

  // const session = await getServerSession(authOptions);
  const {session} = useUserGlobalContext();

  return (
    <>
      <h1>Hi</h1>
    </>
  );
};

export default Page;