import React from 'react'
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.png'
import p5 from '../assets/p5.png'
import p6 from '../assets/p6.png'
import '../App.css';

function Projects() {
  return (
    <>
    <div className='w-full h-screen mt-20 mb-10  '>
        
        <div>
            <div className='text-center'>
                <h1 className='text-white text-center text-[30px]'>Our Recent Projects</h1>
                <p className='text-white text-[14] font-[100]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>
            <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 md:mx-20 my-20'>
                <div className='my-8 mx-4'>      
                    <img src={p1} className="hover:scale-110 ease-in duration-300 w-full h-[223px]"  alt="" />  
                           
                </div>
                <div className='my-8 mx-4'>      
                    <img src={p2} className="hover:scale-110 ease-in duration-300 w-full h-[223px]"  alt="" />  
                           
                </div>
                <div className='my-8 mx-4'>      
                    <img src={p3} className="hover:scale-110 ease-in duration-300 w-full h-[223px]"  alt="" />  
                            
                </div>
                <div className='my-8 mx-4'>      
                    <img src={p4} className="hover:scale-110 ease-in duration-300 w-full h-[223px]" alt="" />  
                          
                </div>
                <div className='my-8 mx-4'>      
                    <img src={p5} className="hover:scale-110 ease-in duration-300 w-full h-[223px]" alt="" />  
                           
                </div>
                <div className='my-8 mx-4'>      
                    <img src={p6} className="hover:scale-110 ease-in duration-300 w-full h-[223px]" alt="" />  
                            
                </div>
        </div>
          
        </div>
    </div>
         <div className='text-center'>
              <button className='bg-black-white h-10 w-[139px] text-white font-Poppins rounded-[10px] cursor-pointer '>SEE ALL</button>
          </div>
    
    </>
  )
}

export default Projects