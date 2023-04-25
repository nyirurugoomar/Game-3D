import React from 'react'
import facebook from '../assets/facebook.svg'
import instgram from '../assets/instgram.svg'
import FaLinkedinIn from '../assets/linkedIn.svg'
import twitter from '../assets/twtter.svg'
import SubFooter from './SubFooter'

function Footer() {
  return (
    <>
    <div className='h-full w-full'>
        <div className='md:grid md:grid-cols-2 lg:grid-cols-4 text-white sm:mx-10 justify-between'>
            <div className='md:mx-4'>
                <h1 className='text-white font-Poppins font-[800] text-[24px] mb-4'>LOGO</h1>
                <p className='text-white font-Poppins font-[400] text-[12px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <p className='text-white text-[15px] font-[800] mt-4'>@Logo</p>
            </div>
            <div className='md:px-4 grid gap-2'>
                <h1 className='text-white font-[800]'>About us</h1>
                <p className='cursor-pointer'>Zeux</p>
                <p className='cursor-pointer'>Portfolio</p>
                <p className='cursor-pointer'>Careers</p>
                <p className='cursor-pointer'>Contact us</p>
            </div>
            <div className='md:px-4 grid gap-2'>
                <h1 className='text-white font-[800]'>Contact Us</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <p>+908 89097 890</p>
            </div>
            <div className='md:px-4 flex md:mt-40'>
                <img src={facebook} alt="" />
                <img src={instgram} alt="" />
                <img src={twitter} alt="" />
                <img src={FaLinkedinIn} alt="" />
                
            </div>
        </div>

    </div>
    <SubFooter/>
    </>
  )
}

export default Footer