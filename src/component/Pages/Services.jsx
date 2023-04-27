import React from 'react'
import user from './images/user.png'
import location from './images/location.png'
import server from './images/Server.png'
import check from './images/check.svg'

function Services() {
 

  
  return (
    <div className='h-full w-full'>
        <div className='text-center pt-40'>
          <h1 className='text-white  font-[400] text-[14px] tracking-[31] font-Poppins'>Home{'  > '}<span className='text-orange'>Services</span> </h1>
          <h1 className='text-white  font-[600] text-[33px]'>Lorem Ipsum is simply dummy text of the printing and.</h1>
          <p className='text-white font-thin'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>

        <div className='flex md:grid-col-1  mt-8  text-white bg-[#1C140F] mx-20 justify-center rounded-xl'>

          <div className='p-40 py-20 my-4 flex gap-4 justify-center items-center'>
            <img src={user} className='w[55px] h-[55px]' alt="" />
            <div className='grid'>
            <h1 className='font-[700] text-[25px]'>90+</h1>
            <p className='tracking-wider'>Clients</p>
            </div>
     
          </div>

          <div className='p-40 py-20 my-4 flex gap-4 justify-center items-center border-x-2 border-white'>
            <img src={location} className='w[55px] h-[55px]' alt="" />
            <div className='grid'>
            <h1 className='font-[700] text-[25px]'>30+</h1>
            <p className='tracking-wider'>Countries</p>
            </div>
     
          </div>

          <div className='p-40 py-20 my-4 flex gap-4 justify-center items-center'>
            <img src={server} className='w[55px] h-[55px]' alt="" />
            <div className='grid'>
            <h1 className='font-[700] text-[25px]'>50+</h1>
            <p className='tracking-wider'>Projects</p>
            </div>
     
          </div>
        </div>

        {/* VIDEO */}

        <div className='pb-20'>
             <div className='flex lg:grid-cols-2 p-20 mt-14 gap-20'>
                <iframe 
                width="740" 
                height="360" 
                src="https://www.youtube.com/embed/HTMDNZOlUq4" 
                title="Subway Surfers But in Unreal Engine 5" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
                </iframe>
                <div className='p-8 w-full'>
                   <h1 className='text-white text-[28px] font-Poppins font-[700] w-[348px]'>Lorem Ipsum is simply dummy text.</h1>
                   <p className='text-white text-[12px] py-4 w-[360px] font-Poppins font-thin'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy .
                   </p>
                   <div className='flex gap-2 mt-4'>
                    <img src={check} alt="" />
                    <h3 className='text-white tracking-wider'>Lorem Ipsum is simply</h3>
                   </div>
                   <div className='flex gap-2 mt-4'>
                    <img src={check} alt="" />
                    <h3 className='text-white tracking-wider'>Lorem Ipsum is simply</h3>
                   </div>
                   <div className='flex gap-2 mt-4'>
                    <img src={check} alt="" />
                    <h3 className='text-white tracking-wider'>Lorem Ipsum is simply</h3>
                   </div>
                   <div className='flex gap-2 mt-4'>
                    <img src={check} alt="" />
                    <h3 className='text-white tracking-wider'>Lorem Ipsum is simply</h3>
                   </div>

                </div>
             </div>
            </div>




    </div>
        
  )
}

export default Services