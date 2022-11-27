import React from 'react'

import navbar from "../assests/portfolio/navbar.png";
import reactSmooth from "../assests/portfolio/reactSmooth.PNG";
import reactWeather from "../assests/portfolio/reactWeather.PNG";

import usestate from "../assests/portfolio/useState.PNG";


const Portfolio = () => {
    

    const portfolios =[
        {
            id: 1,
            src: navbar
        },
        {
            id: 2,
            src: reactSmooth
        },
        {
            id: 3,
            src: reactWeather
        },
        {
            id: 4,
            src: usestate
        },
        

    ]

  return (
    <div 
    name="portfolio"
    className='bg-gradient-to-b from-black to-blue-700 w-full
    text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4
                border-gray-1000'>Portfolio
                </p>
                <p className='py-6'>Check Out Some Of My Work Right Here</p>
            </div>


            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

               {portfolios.map(({id, src}) => (

                <div key={id} 
                     className='shadow-md shadow-gray-1000 rounded-lg'>
                        <img
                         src={src}
                          alt="" 
                          className='rounded-md duration-200 hover:scale-105'/>

                        <div className='flex items-center justify-center'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                        </div>
                    </div>
               ))};
               </div>
               </div>
               </div>
    




  );
               };
export default Portfolio;
