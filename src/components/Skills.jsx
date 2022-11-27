import React from 'react';
import Github from "../assests/github.png";
import Node from "../assests/node.jpg"
import Python from "../assests/Python.png"
import Flask from "../assests/flask.png"
import DEEP from "../assests/deeplearning.png"
import Java from "../assests/Javascript.png"
import NLP from "../assests/nlp.png"
const Skills = () => {

   
   const techs =[
    {
        id: 1,
        src: Python,
        title: 'Python',
        style: "shadow-green-500"
    },
    {
        id: 2,
        src: Flask,
        title: 'Flask',
        style: "shadow-pink-500"
    },
    {
        id: 4,
        src: Node,
        title: 'My SQL',
        style: "shadow-red-500"
    },
    {
        id: 5,
        src: Github,
        title: 'Machine Learning',
        style: "shadow-orange-500"
    },
    {
        id: 6,
        src: DEEP,
        title: 'Deep Learning',
        style: "shadow-yellow-500"
    },
    {
        id: 7,
        src: NLP,
        title: 'NLP',
        style: "shadow-blue-500"
    },
   
   {
    id: 8,
    src: Java
    
    ,
    title: 'Java Script',
    style: "shadow-violet-800"
},
];
   
   return(
    <div className="bg-gradient-to-b from-gray-800 to-black w-full
        h-screen">
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col
        justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Skills</p>
                <p className='py-6'> These are the Skills and Technologies I know</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
            
            {
                techs.map(({id, src, title, style}) => (
                    <div  key={id} 
                    className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt=""  className='w-20 mx-auto'/>
                    <p className='mt-4'>{title}</p>
                </div>
                ))
            }

               
            </div>
        </div>
    </div>
);
};

export default Skills;
