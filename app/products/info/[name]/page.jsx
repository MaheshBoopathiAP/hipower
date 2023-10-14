'use client';
import React,{useState,useEffect} from 'react';
import Footer from '../../../../components/Footer';
import { ProductList } from '../../../../data/ProductList';
import { usePathname } from 'next/navigation';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Rating from '@mui/material/Rating';
import { Image } from 'antd';
import { useSelector,useDispatch } from 'react-redux';
import {addToCart} from '../../../../Redux/CartSlice';

const Page = () => {

  const path = usePathname();
  const pdt = path.split('/');
  const [pricetype, setPricetype] = useState('wet');
  const [numitem, setNumitem] = useState(1);
  const [value,setValue] = useState(5);
  // const [finalprice,setFinalprice] = useState(0)
  

  const cartList = useSelector((state)=>state.cart);

  // const [product,setProduct] = useState({
  //   item:{},
  //   type:pricetype
  // })

  // useEffect(()=>{
  //   localStorage.setItem('cart', JSON.stringify(cartList));
  // },[cartList])

  const dispatch = useDispatch();

  // const handleplus = () => {
  //   setNumitem(numitem+1);
  //   console.log(numitem);
    
  // }

  // const handleminus = () => {
  //   if(numitem==1){
  //     return
  //   }
  //   setNumitem(numitem-1);
  // }

  const addtocart = ({product}) => {
    // console.log(item);
    dispatch(addToCart(product))
  }

  return (
    <div className='w-full h-full'>
        {ProductList.map((item)=>{
          if(item.label==pdt[3]){
            return(
              <div key={item.id}>
              
              <div className=' bg-gray-100 w-full md:h-[600px] h-[1200px] py-[2%] px-[2%] xl:px-[18%]'>
                <div className='w-full py-3'>
                  <p className='text-gray-400 font-Poppins capitalize text-sm tracking-widest'>{`/ products / info / ${pdt[3]}`}</p>
                </div>
                <div className='w-full h-full flex gap-16 flex-col md:flex-row items-center md:justify-between py-[3%]'>
                  <div className='w-[90%] md:w-[40%] h-[50%] md:h-[90%]'>
                    <div className='w-full h-full bg-white flex items-center justify-center'>
                      <img className='w-[60%] h-[60%]' src={`/${item.img}`}/>
                    </div>
                  </div>
                  <div className=' w-[90%] md:w-[50%] md:h-[90%]'>
                    <div className='w-full h-full flex flex-col gap-5'>
                      <h1 className='text-3xl text-gray-800 font-Poppins'>{item.type}</h1>
                      <h1 className='text-[25px] text-gray-400'>${item.dry_price} - ${item.price}</h1>
                      <FormControl required sx={{ minWidth: 100, maxWidth:200, backgroundColor:'white',marginY:'10px'}}>
                        <InputLabel id="demo-simple-select-autowidth-label">Buy Dry or Wet</InputLabel>
                        <Select
                          labelId="demo-simple-select-autowidth-label"
                          id="demo-simple-select-autowidth"
                          autowidth="true"
                          value={pricetype}
                          onChange={(e)=>setPricetype(e.target.value)}
                          label='Dry or Wet'
                        >
                          <MenuItem value='wet'>Wet</MenuItem>
                          <MenuItem value='dry'>Dry</MenuItem>
                        </Select>
                      </FormControl>
                      {pricetype=='wet'? <h1 className='text-[25px] text-gray-400'>Price: ${item.price}</h1>:<h1 className='text-[25px] text-gray-400'>Price: ${item.dry_price}</h1>}
                      <div className='flex gap-3'>
                        {/* <div className='relative'>
                          <input type="text" value={numitem} onChange={(e)=>{
                            console.log(e.target.value)
                          }} className='relative text-center py-3 w-[165px] rounded-s-full rounded-e-full border-2 focus:outline-none'/>
                          <RemoveIcon sx={{color:'lightgray'}} onClick={handleminus} className='absolute left-2 top-[25%] cursor-pointer'/>
                          <AddIcon sx={{color:'lightgray'}} onClick={handleplus} className='absolute right-2 top-[25%] cursor-pointer'/>
                        </div> */}
                        {pricetype=='wet'?<button className='uppercase tracking-tight text-[15px] font-bold text-white bg-[#ff0e2c] rounded-s-full rounded-e-full py-3 text-center px-4 hover:scale-105 duration-300'
                        onClick={()=>addtocart({item:item,type:pricetype,finalprice:item.price})}
                        >add to basket
                        </button>:
                        <button className='uppercase tracking-tight text-[15px] font-bold text-white bg-[#ff0e2c] rounded-s-full rounded-e-full py-3 text-center px-4 hover:scale-105 duration-300'
                        onClick={()=>addtocart({item:item,type:pricetype,finalprice:item.dry_price})}
                        >add to basket
                        </button>}
                      </div>
                      <p className='text-sm text-gray-400 mt-5'>SKU: 874585746475858</p>
                      <p className='text-sm'><span className='text-gray-400'>Warranty: </span>{item.warranty}</p>
                      <p className='text-sm'><span className='text-gray-400'>Dimensions: </span>{item.specs.map((obj)=>{
                        if(obj.key=='Max Overall Dimension'){
                          return obj.value
                        }
                      })}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-white w-full h-[450px] px-[4%] xl:px-[12%]'>
                  <div className='w-[700px] py-[5%]'>
                  <h1 className='font-bold font-Poppins tracking-wider text-lg mb-2'>Rate this product</h1>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                  <h1 className='mt-3 font-bold font-Poppins tracking-wider text-lg mb-5'>Write a Review</h1>
                  <div className='w-[400px] h-[150px] relative'>
                    <textarea className='w-full h-full focus:outline-none border-2 text-sm text-gray-500 p-3'/> 
                    <button className='bg-[#ff0e2c] uppercase font-bold text-sm text-white py-2 px-3 absolute bottom-[-35%] right-0'>Submit</button>
                  </div>
                  </div>
              </div>
              <Footer/>
              </div>
            )
          }
        })}
    </div>
  )
}

export default Page