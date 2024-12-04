import React, { useContext, useState } from 'react'
import Titel from '../components/Titel'
import CartTotalAmount from '../components/CartTotalAmount'
import { assets } from '../assets/frontend_assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {
  const [method,setMethod]=useState('cod');
  const {navigation}=useContext(ShopContext);
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* --------------Left Side----------------- */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl my-3 sm:text-2xl'>
          <Titel text1={'Delivery'} text2={'Information'}></Titel>
        </div>
        <div className='flex gap-3'>
          <input type="text" placeholder='First name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'></input>
          <input type="text" placeholder='Last name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'></input>
        </div>
        <input type="email" placeholder='Email Address' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'></input>
        <input type="text" placeholder='Street' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'></input>
        <div className='flex gap-3'>
          <input type="text" placeholder='City' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'></input>
          <input type="text" placeholder='State' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'></input>
        </div>
        <div className='flex gap-3'>
          <input type="number" placeholder='Zipcode' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'></input>
          <input type="text" placeholder='Country' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'></input>
        </div>
        <input type="number" placeholder='Phone Number' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'></input>
      </div>
      {/* ---------------- Right Side --------------- */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotalAmount></CartTotalAmount>
        </div>
        <div className='mt-12'>
          <Titel text1={'Payment'} text2={'Method'}></Titel>
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 border px-2 py-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='stripe'?'bg-green-400':''}`}></p>
              <img src={assets.stripe_logo} alt="" className='h-5 mx-4' />
            </div>
            <div onClick={()=>setMethod('razorpay')} className='flex items-center gap-3 border px-2 py-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='razorpay'?'bg-green-400':''}`}></p>
              <img src={assets.razorpay_logo} alt="" className='h-5 mx-4' />
            </div>
            <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border px-2 py-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='cod'?'bg-green-400':''}`}></p>
              <p className='text-gray-300 text-sm font-medium mx-4'>Cash on Delivery</p>
            </div>
          </div>
          <div className='w-full text-end mt-8'>
            <button onClick={()=>navigation('/orders')} className='bg-black text-white px-16 py-3 text-sm'>
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
