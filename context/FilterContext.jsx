'use client';
import React, {useState, useContext, createContext, useEffect, useReducer} from 'react';
import {ProductList} from '../data/ProductList';
import {LMV,HMV,LCV,Tractor,Genset} from '../data/CarList';
import reducer from '../reducer/Reducer'

const FilterContext = createContext();

const FilterContextWrapper = ({children}) => {

  const [price, setPrice] = useState(5000);
  const [products, setProducts] = useState(ProductList);
  const [filterheading, dispatchFH] = useReducer(reducer, 'All Products');
  const [car,setCar] = useState('LMV');
  const [filter, setFilter] = useState({
    brand:'Maruti',
    model:'800',
    variant:'petrol'
  })
  const [filter2, setFilter2] = useState({
    brand:'Mahindra',
    model:'Marshal',
    variant:'petrol'
  })
  const [filter4, setFilter4] = useState({
    brand:'Mahindra',
    model:'Arjun',
    variant:'diesel'
  })
  const [filter3, setFilter3] = useState({
    brand:'Ashok Leyland',
    model:'lveco',
    variant:'diesel'
  })
  const [filter5, setFilter5] = useState({
    brand:'Kirloskar',
    model:'15-30 KVA',
    variant:'Genset'
  })

  const handlePricechange = (e) => {
    setProducts(
      ProductList.filter((item)=>{
        return item.price <= price
      })
    )
  }

  const handleFilterChange = (e) => {
    setFilter((prev)=>{
      return{
        ...prev,
        [e.target.name]:e.target.value 
      } 
    })
  }

  const handleFilterChange3 = (e) => {
    setFilter3((prev)=>{
      return{
        ...prev,
        [e.target.name]:e.target.value 
      } 
    })
  }

  const handleFilterChange4 = (e) => {
    setFilter4((prev)=>{
      return{
        ...prev,
        [e.target.name]:e.target.value 
      } 
    })
  }

  const handleFilterChange5 = (e) => {
    setFilter5((prev)=>{
      return{
        ...prev,
        [e.target.name]:e.target.value 
      } 
    })
  }

  const handleFilterChange2 = (e) => {
    setFilter2((prev)=>{
      return{
        ...prev,
        [e.target.name]:e.target.value 
      } 
    })
  }

  useEffect(()=>{
    handlePricechange()
  },[price])
  

  


    return(
        <FilterContext.Provider value={{products, filterheading, LMV, HMV,LCV,Tractor,Genset, handleFilterChange, filter,
         car,setCar, handleFilterChange2, filter2, price, setPrice, handlePricechange, filter3, filter4, handleFilterChange3, handleFilterChange4,
         handleFilterChange5
        }}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilterGlobalContext = () => {
    return useContext(FilterContext)
}

export {useFilterGlobalContext, FilterContext, FilterContextWrapper};