import React from 'react'
import user from './images/user.png'
import location from './images/location.png'
import server from './images/Server.png'
import check from './images/check.svg'
import serviceimage from './images/service-hero-image.png'
import serviceimage2 from './images/service-image.png'


function Services() {
 

  
  return (
    <div className='h-full w-full '>
        <div className='rid md:grid-cols-2 max-w-[1340px] m-auto  text-center pt-40 '>
          <h1 className='text-white  font-[400] text-[14px] tracking-[31] font-Poppins'>Home{'  > '}<span className='text-orange'>Services</span> </h1>
          <h1 className='text-white   font-[600] text-[33px]'>Lorem Ipsum is simply dummy text of the printing and.</h1>
          <p className='text-white  font-thin'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>

        <div className='md:flex md:grid-col-1 mt-8  text-white md:bg-[#1C140F] md:mx-20 justify-center rounded-xl'>

          <div className='p-40 py-20 my-4 flex gap-4 justify-center items-center'>
            <img src={user} className='w[55px] h-[55px]' alt="" />
            <div className='grid'>
            <h1 className='font-[700] text-[25px]'>90+</h1>
            <p className='tracking-wider'>Clients</p>
            </div>
     
          </div>

          <div className='p-40 py-20 my-4 flex gap-4 justify-center items-center md:border-x-2 border-white'>
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
             <div className='md:flex lg:grid-cols-2 p-20 mt-14 gap-20'>
                <iframe 
                  width="740" 
                  height="360" 
                  src="https://www.youtube.com/embed/HTMDNZOlUq4" 
                  title="Subway Surfers But in Unreal Engine 5" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowfullscreen
                  className='rounded-3xl'
                  >
                
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
{/* left */}
          <div className='grid md:grid-cols-2 max-w-[1340px] m-auto mx-10 '>
            <div className='flex flex-col  md:items-start '>
                <h1 className=' text-[30px] text-start text-white font-[700] tracking-wide w-[512px] font-Poppins '>Lorem Ipsum is simply dummy 
                    text dummy text 
                    </h1>
                <p className='text-[15px] font-thin text-white text-start  w-[552px]  pt-20'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                </p>  
                <p className='text-white font-thin pt-4 w-[508px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>    
                <button className='text-[13px] tracking-wider  border-white text-white p-4 font-[400] bg-orange w-[195px] text-center mt-10 cursor-pointer '>Read more</button>
            </div>

            <div className=''>
                <img className='w-[450px] h-[450px] hidden md:block' src={serviceimage} alt="" />
            </div>

        </div>

        {/* Right */}

        <div className='grid md:grid-cols-2 max-w-[1340px] m-auto mx-10 my-40 '>

        <div className=''>
                <img className='w-[450px] h-[450px] hidden md:block' src={serviceimage2} alt="" />
            </div>
            
            <div className='flex flex-col  md:items-start '>
                <h1 className=' text-[30px] text-start text-white font-[700] tracking-wide w-[512px] font-Poppins '>Lorem Ipsum is simply dummy 
                    text dummy text 
                    </h1>
                <p className='text-[15px] font-thin text-white text-start  w-[552px]  pt-20'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                </p>  
                <p className='text-white font-thin pt-4 w-[508px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>    
                <button className='text-[13px] tracking-wider  border-white text-white p-4 font-[400] bg-orange  w-[195px] text-center mt-10 cursor-pointer '>Read more</button>
            </div>
        </div>

        <div className='grid md:grid-cols-2 max-w-[1340px] m-auto mx-10 my-40 '>
            <div className='flex flex-col  md:items-start '>
                <h1 className=' text-[30px] text-start text-white font-[700] tracking-wide w-[512px] font-Poppins '>Lorem Ipsum is simply dummy 
                    text dummy text 
                    </h1>
                <p className='text-[15px] font-thin text-white text-start  w-[552px]  pt-20'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                </p>  
                <p className='text-white font-thin pt-4 w-[508px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>    
                <button className='text-[13px] tracking-wider  border-white text-white p-4 font-[400] bg-orange w-[195px] text-center mt-10 cursor-pointer '>Read more</button>
            </div>

            <div className=''>
                <img className='w-[450px] h-[450px] hidden md:block' src={serviceimage} alt="" />
            </div>

        </div>



    </div>
        
  )
}

export default Services