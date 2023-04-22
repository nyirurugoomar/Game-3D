import React from 'react'
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.png'
import p5 from '../assets/p5.png'
import p6 from '../assets/p6.png'

function Projects() {
  return (
    <>
    <div className='w-full h-screen mt-20 mb-20 '>
        
        <div>
            <div className='text-center'>
                <h1 className='text-white text-center text-[30px]'>Our Recent Projects</h1>
                <p className='text-white text-[14] font-[100]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>
            <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 md:mx-20'>
                <div>      
                    <img src={p1} className="hover:scale-110 ease-in duration-300 w-full h-[223px]"  alt="" />  
                           
                </div>
                <div>      
                    <img src={p2} className="hover:scale-110 ease-in duration-300 w-full h-[223px]"  alt="" />  
                           
                </div>
                <div>      
                    <img src={p3} className="hover:scale-110 ease-in duration-300 w-full h-[223px]"  alt="" />  
                            
                </div>
                <div>      
                    <img src={p4} className="hover:scale-110 ease-in duration-300 w-full h-[223px]" alt="" />  
                          
                </div>
                <div>      
                    <img src={p5} className="hover:scale-110 ease-in duration-300 w-full h-[223px]" alt="" />  
                           
                </div>
                <div>      
                    <img src={p6} className="hover:scale-110 ease-in duration-300 w-full h-[223px]" alt="" />  
                            
                </div>
        </div>
          
        </div>
           <div className=' mt-20 absolute justify-center'>
            <button className='bg-black-white w-[139px] text-white font-Poppins rounded-[10px] cursor-pointer md:block '>SEE ALL</button>
            </div>

    </div>
    </>
  )
}

export default Projects