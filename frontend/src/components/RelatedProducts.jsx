import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Titel from './Titel';
import ProductItem from './ProductItem';

const RelatedProducts = ({category,subCategory}) => {  
    const {products}=useContext(ShopContext);
    const [related,setRelated]=useState([]);

    useEffect(()=>{
        if(products.length>0){
            let productCopy=products.slice();
            productCopy=productCopy.filter(product=>product.category===category&&product.subCategory===subCategory);
            // productCopy=productCopy.filter((item)=>category===item.category)
            // productCopy=productCopy.filter((item)=>subCategory===item.subCategory)
            setRelated(productCopy.slice(0,5));

        }
    },[products])
    return (
    <div className='my-24'>
      <div className='text-center text-3xl py-2'>
      <Titel text1={'Related'} text2={'Products'}></Titel>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {related.map((item,index)=>(
            <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image}></ProductItem>
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts