import React from 'react'

const onSummitHandeler = (event) => {
    event.preventDeafult();
}

const NewsletterBox = () => {
  return (
      <div className='text-center'>
          <p className='text-2xl font-medium text-gray-400'>Suscribe now & get 20% off</p>
          <p className='text-gray-400-mt-3'>this is good for all of us </p>

          <form onSubmit={onSummitHandeler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 '>
              <input className='w-full sm:flex-1 outline-none ' type="email" placeholder='Enter Your Email' required  />
              <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUSCRIBE</button>
          </form>
      
    </div>
  )
}

export default NewsletterBox;
