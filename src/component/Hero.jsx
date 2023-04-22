import React from 'react'
import joystick from '../assets/gama tool.png'

function Hero() {
  return (
    <>
      <div className='h-full w-full md:py-20'>
        <div className='grid md:grid-cols-2 max-w-[1340px] m-auto mx-10 '>
            <div className='flex flex-col justify-center md:items-start md:pt-10 '>
                <h1 className='text-orange font-[700] text-[20px] tracking-[31] font-Poppins'>3D game Dev </h1>
                <h1 className=' text-[60px] text-start text-white font-[700] tracking-wide w-[479px] font-Poppins '>Work that we produce for our clients</h1>
                <p className='text-[16px] font-[500] text-white text-start  w-[442px] font-Poppins'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                </p>      
                <button className='text-[13px] tracking-wider  border-white text-white p-4 font-[400] bg-orange rounded-[40px] w-[195px] text-center mt-10 cursor-pointer '>Get more details</button>
            </div>

            <div className=''>
                <img className='w-[806px] h-[761px] hidden md:block' src={joystick} alt="" />
            </div>

        </div>
      </div>
    </>
  )
}

export default Hero