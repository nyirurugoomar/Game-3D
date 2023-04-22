import React from 'react'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'
import icon5 from '../assets/icon5.png'
import icon6 from '../assets/icon6.png'
import arrow from '../assets/arrow1.svg'
function Tools() {
  return (
    <>
    <div className='w-full h-screen mt-20 bg-tool-background bg-cover'>
        <div className='frid md:grid max-w[1340px] m-auto mx-10'>
         <div className='text-center mx-20 mt-10'>
             <h1 className='text-white  text-[30px] font-bold '>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
             <p className='text-white mx-20  mt-4 text-[16]  font-thin'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
         </div>
         <div className='grid grid-cols-4 lg:grid-cols-4 gap-8 mt-12'>
         <div className='text-center hover:scale-110 duration-300 '>      
            <img src={icon1} className="m-auto my-4" width='65px' height='65px'  alt="" />  
               <h3 className='text-white text-[16] font-[500]'>Mobile Game Development</h3> 
               <div className='my-8'>
                 <img src={arrow} className ="m-auto hover:animate-bounce" alt="" /> 
                </div>    
          </div>
          <div className='text-center hover:scale-110 duration-300'>      
            <img src={icon2} className="m-auto my-4" width='65px' height='65px'  alt="" />  
               <h3 className='text-white text-[16] font-[500]'>PC Game Development</h3>  
               <div className='my-8'>
                 <img src={arrow} className ="m-auto" alt="" /> 
                </div>     
          </div>
          <div className='text-center hover:scale-110 duration-300'>      
            <img src={icon3} className="m-auto my-4" width='65px' height='65px'  alt="" />  
               <h3 className='text-white text-[16] font-[500]'>PS4 Game Development</h3> 
               <div className='my-8'>
                 <img src={arrow} className ="m-auto" alt="" /> 
                </div>      
          </div>
          <div className='text-center hover:scale-110 duration-300'>      
            <img src={icon4} className="m-auto my-4" width='65px' height='65px'  alt="" />  
               <h3 className='text-white text-[16] font-[500]'>AR/VR Solutions</h3>   
               <div className='my-8'>
                 <img src={arrow} className ="m-auto" alt="" /> 
                </div>    
          </div>
          <div>
            
          </div>
          <div className='text-center hover:scale-110 duration-300 '>      
            <img src={icon5} className="m-auto my-4" width='65px' height='65px'  alt="" />  
               <h3 className='text-white text-[16] font-[500]'>AR/ VR design</h3> 
               <div className='my-8'>
                 <img src={arrow} className ="m-auto" alt="" /> 
                </div>      
          </div>
          <div className='text-center m-auto  hover:scale-110 duration-300'>      
            <img src={icon6} className="m-auto my-4 " width='65px' height='65px'  alt="" />  
               <h3 className='text-white text-[16] font-[500]'>3D Modelings</h3>   
               <div className='my-8'>
                 <img src={arrow} className ="m-auto" alt="" /> 
                </div>    
          </div>
          
         </div>
        </div>

    </div>
    </>
  )
}

export default Tools