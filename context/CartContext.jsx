'use client';
import { getCartfromStorage } from "@/Redux/CartSlice";
import reducer from "../reducer/Reducer";
import React,{createContext, useContext, useEffect, useReducer,useState} from "react";
import {useSelector,useDispatch} from 'react-redux';

const CartContext = createContext();



const CartContextWrapper = ({children}) => {

    const cartList = useSelector((state)=>state.cart);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCartfromStorage())
    },[])

    const getUser = async (id) => {

        const res = await fetch('http://localhost:3000/api/user/info',{
          method:'POST',
              headers:{
                'Content-Type':'application/json'
              },
              body:JSON.stringify(id) 
        })
      
        const data = await res.json()
        console.log(data);
        return data;
    }


    return(
        <CartContext.Provider value={{getUser}}>
            {children}
        </CartContext.Provider>
    )
}

const useCartContext = () => {
    return useContext(CartContext);
}

export {CartContext, CartContextWrapper, useCartContext};
