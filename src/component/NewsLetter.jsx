import React from 'react'

function NewsLetter() {
  return (
    <div className='h-full w-full md:mt-10 md:mb-20'>
       <div className='grid lg:grid-cols-1 md:mx-20'>

        <div className='text-white'>
           <h1 className=' text-[30px] font-[600] font-Poppins'>Lorem Ipsum</h1>
           <p className='text-[16px] font-thin w-[490px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>
        <div className='md:flex justify-between bg-[#1C140F] p-10 items-center mt-10 rounded-[15px]'>
            <div className=' grid text-white pb-10'>
                <h1 className='text-[30px] font-[500] font-Poppins'>Stay in the loop</h1>
                <p className='text-[12px] font-[400] font-Poppins w-[380px] '>Subscribe to receive the latest news and updates about TDA.
                 We promise not to spam you! 
                 </p>
            </div>
            <div className=' flex h-10 bg-white rounded-[8px]'>
                <input 
                className='bg-white text-black w-[420px] p-4 rounded-l-[8px] focus:outline-none' 
                type="email"
                placeholder='Enter email address' />
                <button className='bg-orange text-white p-2 text-[12px] my-1 rounded-md mx-2 px-4 cursor-pointer'>Continue</button>
            </div>

        </div>

       </div>
    </div>
  )
}

export default NewsLetter