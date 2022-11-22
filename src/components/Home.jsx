import React from 'react'


import bgImg from '../asserts/gbHero.jpg'

const Home = () => {
  return (
    <div  className=' container pt-[5%]  justify-between'>
        <div className='flex flex-col md:flex-row flex-wrap m-auto'>
            
            <div className='text-center md:text-left'>
                <p className='text-xl mt-5'>Get profit on your used products</p>
                <h1 className='py-3 text-5xl md:text-7xl font-bold'>BidBazaar </h1>
                <p className='text-2xl'>Sell your products on highest ressonable price. <br/>So what are you wating for</p>
                <button className='py-3  px-6 sm:w-[60%] my-[20%]'>Sign up</button>
            </div>
           
            <div className='relative flex w-full md:w-[45%]  md:ml-[5%]
              rounded-xl text-center shadow-xl'>
                
                <div className=' flex justify-between  '>
               
                <img className='border rounded-xl' src={bgImg} alt="/" />
          
                  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home