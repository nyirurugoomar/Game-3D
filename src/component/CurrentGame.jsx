import React from 'react'
import game1 from '../assets/game1.png'
import game2 from '../assets/game2.png'
import game3 from '../assets/game3.png'
import game4 from '../assets/game4.png'
import fireemaj from '../assets/fireemoji.svg'
function CurrentGame() {
  return (
    <>
    <div className='h-full w-full mt-20 mb-20 mx-10 '>
       <div className='md:grid  m-auto md:mx-10 md:w-[70rem]'>
            <div className='flex md:justify-between mr-10  '>
               <h1 className='text-white font-bold md:text-[31px] tracking-wider'>Currently Trending Games</h1>
               <button className='bg-black-white w-[139px] text-white font-Poppins rounded-[10px] cursor-pointer md:block'>SEE ALL</button>
            </div>
            <div className='md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 md:mx-20'>
                <div>      
                    <img src={game1} className="hover:scale-110 ease-in duration-300 w-full"  alt="" />  
                    <div className='flex justify-center mt-4 gap-2 '>
                        <img src={fireemaj} alt="" />
                        <p className='text-white  text-[22px]'>40 Followers</p>
                    </div>        
                </div>
                <div>      
                    <img src={game2} className="hover:scale-110 ease-in duration-300 w-full"  alt="" />  
                    <div className='flex justify-center mt-4 gap-2 '>
                        <img src={fireemaj} alt="" />
                        <p className='text-white text-[22px]'>40 Followers</p>
                    </div>        
                </div>
                <div>      
                    <img src={game3} className="hover:scale-110 ease-in duration-300 w-full"  alt="" />  
                    <div className='flex justify-center mt-4 gap-2 '>
                        <img src={fireemaj} alt="" />
                        <p className='text-white text-[22px]'>40 Followers</p>
                    </div>        
                </div>
                <div>      
                    <img src={game4} className="hover:scale-110 ease-in duration-300 w-full" alt="" />  
                    <div className='flex justify-center mt-4 gap-2 '>
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