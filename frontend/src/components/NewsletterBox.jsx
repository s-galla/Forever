import React from 'react'

const NewsletterBox = () => {
    const submitHandler=(event)=>{
        event.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'> Subscribe now & get 20% off</p>
      <p className='text-gray-400 mt-3'>
Lorum spem Lorum spem Lorum spem Lorum spem Lorum spem Lorum spem Lorum spem Lorum spem 
      </p>
      <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto border pl-3'>
        <input type="email" placeholder="Enter your email" className='w-full p-2 sm:flex-1 outline-none' required></input> 
        <button onSubmit={submitHandler} type="submit" className='bg-black text-white text-xs px-10 py-4'>Subscribe</button>
      </form>
    </div>
  )
}

export default NewsletterBox
