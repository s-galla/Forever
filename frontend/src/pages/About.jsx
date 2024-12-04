import React from 'react'
import Titel from '../components/Titel'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8  border-t'>
        <Titel text1={'About'} text2={'US'}></Titel>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} alt="" className='w-full md:max-w-[450px]' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem Ipsum is a common type of dummy text used in the printing and typesetting industry. It has been the standard dummy text since the 1500s. Here's an example of Lorem Ipsum. Lorem Ipsum is a common type of dummy text used in the printing and typesetting industry. It has been the standard dummy text since the 1500s. Here's an example of Lorem Ipsum . It has been the standard dummy text since the 1500s. Here's an example of Lorem Ipsum</p>
          <p>Lorem Ipsum is a common type of dummy text used in the printing and typesetting industry. It has been the standard dummy text since the 1500s. Here's an example of Lorem Ipsum. Lorem Ipsum is a common type of dummy text used in the printing and typesetting industry. It has been the standard dummy text since the 1500s. Here's an example of Lorem Ipsum . It has been the standard dummy text since the 1500s. Here's an example of Lorem Ipsum</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem Ipsum is a common type of dummy text used in the printing and typesetting industry. It has been the standard dummy text since the 1500s. Here's an example of Lorem Ipsum. Lorem Ipsum is a common type of dummy text used in the printing and typesetting industry. </p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Titel text1={'WHY'} text2={'Choose Us'}></Titel>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border pz-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p>Lorem Ipsum is a common type of dummy text used in the printing and typesetting industry. It has been the standard dummy text since the 1500s.</p>
        </div>
        <div className='border pz-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p>Lorem Ipsum is a common type of dummy text used in the printing and typesetting industry. It has been the standard dummy text since the 1500s.</p>
        </div>
        <div className='border pz-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p>Lorem Ipsum is a common type of dummy text used in the printing and typesetting industry. It has been the standard dummy text since the 1500s.</p>
        </div>
      </div>
      <NewsletterBox></NewsletterBox>
    </div>
  )
}

export default About
