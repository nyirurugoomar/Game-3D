import React from 'react'
import game1 from '../assets/game1.png'
import game2 from '../assets/game2.png'
import game3 from '../assets/game3.png'
import game4 from '../assets/game4.png'
import fireemaj from '../assets/fireemoji.svg'
function CurrentGame() {
  return (
    <>
    <div className='h-full sm:w-[70rem]  mt-20 mb-20 sm:mx-20 '>
       <div className='md:grid  m-auto ml-10 sm:ml-4'>
            <div className='flex justify-between gap-10'>
               <h1 className='text-white font-bold md:text-[31px] tracking-wider'>Currently Trending Games</h1>
               <button className='bg-black-white w-[139px] text-white font-Poppins rounded-[10px] cursor-pointer md:block h-10 items-center'>SEE ALL</button>
            </div>
            <div className='md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 md:mx-10'>
                <div>      
                    <img src={game1} className="hover:scale-110 ease-in duration-300 w-full"  alt="" />  
                    <div className='flex justify-center mt-4 mb-4 gap-2 '>
                        <img src={fireemaj} alt="" />
                        <p className='text-white  text-[22px]'>40 Followers</p>
                    </div>        
                </div>
                <div>      
                    <img src={game2} className="hover:scale-110 ease-in duration-300 w-full"  alt="" />  
                    <div className='flex justify-center mt-4 mb-4 gap-2 '>
                        <img src={fireemaj} alt="" />
                        <p className='text-white text-[22px]'>40 Followers</p>
                    </div>        
                </div>
                <div>      
                    <img src={game3} className="hover:scale-110 ease-in duration-300 w-full"  alt="" />  
                    <div className='flex justify-center mt-4 mb-4 gap-2 '>
                        <img src={fireemaj} alt="" />
                        <p className='text-white text-[22px]'>40 Followers</p>
                    </div>        
                </div>
                <div>      
                    <img src={game4} className="hover:scale-110 ease-in duration-300 w-full" alt="" />  
                    <div className='flex justify-center mt-4 mb-4 gap-2 '>
                        <img src={fireemaj} alt="" />
                        <p className='text-white text-[22px]'>40 Followers</p>
                    </div>        
                </div>
        </div>
       </div>
    </div>
    </>
  )
}

export default CurrentGame