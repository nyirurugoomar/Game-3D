import React from 'react'
import game1 from '../assets/game1.png'
import game2 from '../assets/game2.png'
import game3 from '../assets/game3.png'
import game4 from '../assets/game4.png'
import fireemaj from '../assets/fireemoji.svg'
function CurrentGame() {
  return (
    <>
    <div className='h-full w-full mt-20'>
       <div className='grid md-grid max-w[1340px] m-auto mx-10'>
            <div className='flex justify-between mr-10 '>
               <h1 className='text-white font-bold text-[31px] tracking-wider'>Currently Trending Games</h1>
               <button className='bg-black-white w-[139px] text-white font-Poppins rounded-[10px] cursor-pointer'>SEE ALL</button>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-2 mt-12'>
                <div>      
                    <img src={game1} className="hover:scale-110 ease-in duration-300" width='251px' height='277px' alt="" />  
                    <div className='flex justify-center mt-4 gap-2 '>
                        <img src={fireemaj} alt="" />
                        <p className='text-white text-[22px]'>40 Followers</p>
                    </div>        
                </div>
                <div>      
                    <img src={game2} className="hover:scale-110 ease-in duration-300" width='251px' height='277px' alt="" />  
                    <div className='flex justify-center mt-4 gap-2 '>
                        <img src={fireemaj} alt="" />
                        <p className='text-white text-[22px]'>40 Followers</p>
                    </div>        
                </div>
                <div>      
                    <img src={game3} className="hover:scale-110 ease-in duration-300" width='251px' height='277px' alt="" />  
                    <div className='flex justify-center mt-4 gap-2 '>
                        <img src={fireemaj} alt="" />
                        <p className='text-white text-[22px]'>40 Followers</p>
                    </div>        
                </div>
                <div>      
                    <img src={game4} className="hover:scale-110 ease-in duration-300" width='251px' height='277px' alt="" />  
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