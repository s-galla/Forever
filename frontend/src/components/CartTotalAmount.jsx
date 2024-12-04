import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Titel from './Titel';

const CartTotalAmount = () => {
    const {currency,delevery_fee,getCartTotalAmount}=useContext(ShopContext);
  return (
    <div className='w-full'>
        <div className='text-2xl'>
            <Titel text1={'Cart'} text2={'Totals'}></Titel>
        </div>
        <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between'>
                <p>SubTotal</p>
                <p>{currency}{getCartTotalAmount()}.00</p>
            </div>
            <hr></hr>
            <div className='flex justify-between'>
                <p>Shipping Fee</p>
                <p>{currency}{delevery_fee}</p>
            </div>
            <hr></hr>
            <div className='flex justify-between'>
                <b>Total</b>
                <p>{currency}{getCartTotalAmount()===0?0:getCartTotalAmount()+ delevery_fee}</p>
            </div>
        </div>
      
    </div>
  )
}

export default CartTotalAmount
