import React from 'react'
import NewsLetter from '../NewsLetter'
import serviceimage from './images/service-hero-image.png'
import whoweare from './images/service-image.png'
import t1 from './images/T1.png'
import t2 from './images/T2.png'
import t3 from './images/T3.png'
import t4 from './images/T4.png'

function About() {
  return (
    
    
       <div className='h-full w-full sm:py-24 '>
         <div className='grid md:grid-cols-2  m-auto mx-10  '>
            <div className='flex flex-col justify-center md:items-start'>
                <h1 className='text-white font-[400] text-[14px] tracking-[31] font-Poppins mb-10'>Home  {'>'}<span className='text-orange'>About us</span> </h1>
                <h1 className=' text-[30px] text-start text-white font-[700] tracking-wide w-[459px] font-Poppins '>Lorem Ipsum is simply dummy text of the printing and.</h1>
                <p className='text-[12px]  text-white text-start  w-[442px] font-Poppins'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>      
                <button className='flex gap-10 jus text-[13px] tracking-wider  border-white text-white p-4 font-[400] bg-orange rounded-[40px] w-[195px] text-center mt-10 cursor-pointer'>Get in touch</button>
            </div>

            <div className=''>
                <img className='w-[739px] h-[656px] hidden md:block' src={serviceimage} alt="" />
            </div>
         </div>
         {/* CARD */}

         <div className='mt-20 mx-10'>
               <h1 className='text-white font-[600] font-Poppins text-[30px]'>Why work with us</h1>
               <div className='grid grid-col-1 lg:grid-cols-3 gap-10 mt-8'>
                   <div className='bg-[#1C140F] rounded-xl shadow-2xl p-10'>
                    <h3 className='text-white bg-[#1d0a22] p-4 w-[160px] rounded-xl'>Lorem ipsum</h3>
                    <h1 className='text-white text-[20px] font-[700] p-2 font-Poppins'>Lorem Ipsum</h1>
                    <p className='text-white w-[304px] p-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                   </div>

                   <div className='bg-[#1C140F] rounded-xl shadow-2xl p-10'>
                    <h3 className='text-white bg-[#1d0a22] p-4 w-[160px] rounded-xl'>Lorem ipsum</h3>
                    <h1 className='text-white text-[20px] font-[700] p-2 font-Poppins'>Lorem Ipsum</h1>
                    <p className='text-white w-[304px] p-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                   </div>

                   <div className='bg-[#1C140F] rounded-xl shadow-2xl p-10'>
                    <h3 className='text-white bg-[#1d0a22] p-4 w-[160px] rounded-xl'>Lorem ipsum</h3>
                    <h1 className='text-white text-[20px] font-[700] p-2 font-Poppins'>Lorem Ipsum</h1>
                    <p className='text-white w-[304px] p-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                   </div>
               </div>
            </div>

             {/* WHO WE ARE */}
            <div className=''>
             <div className='flex lg:grid-cols-2 p-20  bg-[#1C140F] mt-14'>
                <div className=''>
                <img src={whoweare} className='w-[460px] h-[340px]' alt="" />
                </div>
                <div className='  p-8 w-full'>
                   <h3 className='text-white text-[10px] py-4'>Lorem ipsum</h3>
                   <h1 className='text-white text-[28px] py-4 w-[441px] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h1>
                   <p className='text-white text-[12px] py-4 w-[620px] font-Poppins'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                </div>
             </div>
             </div>

             {/* Team */}

             <div className='mt-20 mx-10'>
               <h1 className='text-white font-[600] font-Poppins text-[30px]'>Our Team</h1>
               <div className='grid md:grid-col-1 lg:grid-cols-4 gap-10 mt-8'>
                 <div className='bg-[#1C140F] rounded-xl  p-20'>
                        <div>
                            <img src={t1} alt="" />
                        </div>
                        <div className='text-white text-center'>
                          <h1 className='font-[600]'>John peter</h1>
                          <h4 className='font-[200]'>coo</h4>
                        </div> 
                   </div>

                   <div className='bg-[#1C140F] rounded-xl  p-20'>
                        <div>
                            <img src={t2} alt="" />
                        </div>
                        <div className='text-white text-center'>
                          <h1 className='font-[600]'>John peter</h1>
                          <h4 className='font-[200]'>coo</h4>
                        </div> 
                   </div>

                   <div className='bg-[#1C140F] rounded-xl p-20'>
                        <div>
                            <img src={t3} alt="" />
                        </div>
                        <div className='text-white text-center'>
                          <h1 className='font-[600]'>John peter</h1>
                          <h4 className='font-[200]'>coo</h4>
                        </div> 
                   </div>

                   <div className='bg-[#1C140F] rounded-xl  p-20'>
                        <div>
                            <img src={t4} alt="" />
                        </div>
                        <div className='text-white text-center'>
                          <h1 className='font-[600]'>John peter</h1>
                          <h4 className='font-[200]'>coo</h4>
                        </div> 
                   </div>

               </div>
            </div>
             

             <NewsLetter/>

             
        </div>

  )
}

export default About