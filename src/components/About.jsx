import React from 'react'

const About = () => {
  return (
  <div 
  name="about" className='w-full h-screen bg-gradient-to-b
  from-gray-800 to-black text-white'>

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full'>
            <div className="pb-8">
                <p className='text-4xl font-bold inline border-b-4
                border-gray-500'>
                    About
                </p>
            </div>
            <p className='text-xl mt-20 '>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt itaque accusamus quaerat praesentium voluptates eos optio totam sequi dolore quod porro excepturi similique, corrupti atque vitae maiores adipisci, veniam quidem.
            </p>
            <br/>

            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, quisquam animi? Repudiandae placeat nulla totam pariatur obcaecati quos! Incidunt nihil aspernatur harum hic vitae itaque quas ratione deleniti sit id!
            </p>
        </div>
    </div>

  )
}

export default About
