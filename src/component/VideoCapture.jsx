import React from 'react'
import videospace from '../assets/video space.png'

function VideoCapture() {
  return (
    <>
    <div className='h-full w-full'>
        <div className='md:grid '>
            <div className='text-center md:mx-60  '>
                <h1 className='text-white md:text-[35px] font-Poppins font-[600] md:text-center  '>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
            </div>
            <div className='ml-10 mt-10'>
                <h1 className='text-white text-[30px] font-Poppins font-[600] mb-8'>Lorem Ipsum</h1>
                <p className='text-white w-[525px] font-[300] text-[16] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                <div className='justify-center hidden md:block'>
              <img src={videospace} className ="md:w-full md:block" alt="" />
            </div>
            </div>
            
        </div>

    </div>
    </>
  )
}

export default VideoCapture