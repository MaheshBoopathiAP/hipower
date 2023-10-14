'use client';
import React, {useState} from "react";
import { createContext, useContext } from "react";


const AppContext = createContext();


const ContextWrapper = ({ children }) => {
  
    const [mobilemenu, setMobilemenu] = useState(false);
    const [option, setOption] = useState('car');
    const [service,setService] = useState('');
    
    const [allusers, setAllusers] = useState([]);
  
    const handleClick = () => {
      setClicked(!clicked)
    }
  
    const handleMenu = () => {
      setMobilemenu(!mobilemenu)
    }

  return (
    <AppContext.Provider value={{ mobilemenu, handleClick, handleMenu, option, setOption, allusers, setAllusers,
       service,setService
    }}>
      {children}
    </AppContext.Provider>
  );
}


const useGlobalContext = () => {
  return useContext(AppContext);
}

export {useGlobalContext, AppContext, ContextWrapper}