import myImage from '../assets/myprofile.png'
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import logo from '../assets/mernstack.webp'
import { RiSingleQuotesR } from "react-icons/ri";
import mern from '../assets/mern.png';
import online from '../assets/online.jpg';
import tensor from '../assets/tensor.png';
import csharp from '../assets/csharp.png'
import algosimp from '../assets/AlgorithmSimplfied.png'
import {AnimatedOnScroll} from 'react-animated-css-onscroll'
export default function Profile()
{
    return <>
    <section id="#" className="flex flex-col lg:flex-row px-5 bg-profile " >
      
    <img className='w-full lg:w-1/3 align-middle' src={myImage}/>
        <div className="px-10 lg:w-1/3 flex flex-col" >
          <h1 className=' mt-20 text-5xl font-bold' style={{fontFamily:'Jersey 15',display:'inline'}}>Hello there,</h1>
        <h1 className='mt-10 text-3xl '>I'm Vignesh 
            <br/>
            <p className='mt-10 text-1l' >A self-motivated, self-driven aspiring Software developer with the ability to adapt to any situation</p>
        </h1>
        <div className='flex py-3'>

            <a href="https://www.linkedin.com/in/vigneshsubramanian2003/" className='px-2 hover:text-blue-600'>
            <button
    href="/"
    class="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#0077b5] from-gray-800 text-white font-semibold  hover:rounded-[50%] transition-all duration-500 "
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1.1em"
      viewBox="0 0 512 512"
      stroke-width="0"
      fill="currentColor"
      stroke="currentColor"
      class="w-5 h-5"
    >
      <path
        d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"
      ></path>
    </svg>
    

    <span class="absolute -top-14 left-[50%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-3 rounded-lg border 
  border-gray-300 bg-[#0077b5] py-2 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100">LinkedIn</span>
  </button>

</a>
            <a href="mailto:vickytvl2003@gmail.com" className='px-2' >
            <div class="group relative">
  <button>
  <SiGmail size={35}/>  </button>
  <span class="absolute -top-14 left-[50%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-3 rounded-lg border 
  border-gray-300 bg-red-500 py-2 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100">Gmail</span></div>
                
                
                
                </a>
            <a href="https://github.com/coffee-loves-code-2003" className=' '><div class="group relative ml-2">
  <button>
  <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" class="w-8 hover:scale-125 duration-200 hover:stroke-blue-500"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
  </button>
  <span class="absolute -top-14 left-[50%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-3 rounded-lg border 
  border-gray-300 bg-blue-300 py-2 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100">GitHub<span>
</span></span></div>
</a>


        </div>
        </div>
        
        
    </section>
    
    <section id="aboutme" className="flex flex-col sm:px-10 md:px-20 py-20 about_me" >
    <AnimatedOnScroll animatedIn='fadeIn' animationInDuration='2000'>

        <div  className="border_styles">
            <div className="px-5 py-5">
            <h1 className='text-center'>About Me</h1>
        <div className="px-5 py-7 flex flex-col about_me" >
        <p>Born in <span className='text-red-300'>Tirunelveli, Tamil Nadu</span>. Currently, I'm a pre-final year student pursuing a Bachelor's degree in <span className="text-red-300">Information Technology</span> at<span className="text-red-300"> Mepco Schlenk Engineering College</span>.I have experience in working on projects in Machine Learning, Web Development. I consider myself a self-motivated individual, always eager to learn new things and tackle challenges with optimism. Continuous learning is a cornerstone of my approach to personal and professional growth. 
        </p>
            </div>
       
        </div>
        </div>
        
        </AnimatedOnScroll>

    </section>

    <section id="#projectoverview" className="flex flex-col sm:px-10 md:px-20 about_me">
    <AnimatedOnScroll animatedIn='fadeIn' animationInDuration='2000'>

        <div className="border_styles">
          <div className="px-5 py-5">
            <h1 className='text-center'>Projects Overview</h1>

            
            <div className="px-5 py-7 flex flex-col about_me">
              <p>
                Throughout my college days, I have done so many projects which include a normal Command Line Interfaced Management System in <span className="text-yellow-400">C language</span> to a website which has a payment gateway for event registration developed in <span className="text-green-900">M</span>
                <span className="text-yellow-600">E</span>
                <span className="text-blue-600">R</span>
                <span className="text-green-500">N </span>
                Stack.
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row">
            <div className='relative flex flex-col items-center'>
                <img src={algosimp} className='h-[200px] px-5 py-5' />
                <div className='absolute left-0 right-0 bottom-0 top-[20px] background_color_primary opacity-0 duration-500 hover:opacity-90 font-header'>
                  <p className='text-center py-5'>
                    Algorithm Simplified
                  </p>
                  <a href="https://github.com/coffee-loves-code-2003/AlgorithmSimplified" className='text-center m-[40%]' style={{fontFamily:'sans-serif',fontSize:'15px',color:'red'}}>Explore</a>
                </div>
              </div>
              <div className='relative flex flex-col items-center'>
                <img src={mern} className='h-[200px]' />
                <div className='absolute left-0 right-0 bottom-0 top-[20px] background_color_primary opacity-0 duration-500 hover:opacity-90 font-header'>
                  <p className='text-center py-5'>
                    An Event Management Website build with MERN Stack
                  </p>
                  <a href="https://github.com/coffee-loves-code-2003/Gyanmitra24UPDATED" target="_blank" className='text-center m-[40%]' style={{fontFamily:'sans-serif',fontSize:'15px',color:'red'}}>Explore</a>
                </div>
              </div>
              <div className='relative flex flex-col items-center'>
                <img src={online} className='h-[200px] px-5 py-5' />
                <div className='absolute left-0 right-0 bottom-0 top-[20px] background_color_primary opacity-0 duration-500 hover:opacity-90 font-header'>
                  <p className='text-center py-5'>
                    An Online Meeting System using WebSocket API,node.js, express
                  </p>
                  <a href="https://github.com/coffee-loves-code-2003/Online-Meeting-System" target="_blank" className='text-center m-[40%]' style={{fontFamily:'sans-serif',fontSize:'15px',color:'red'}}>Explore</a>
                </div>
              </div>
              <div className='relative flex flex-col items-center'>
                <img src={tensor} className='h-[200px] px-5 py-5' />
                <div className='absolute left-0 right-0 bottom-0 top-[20px] background_color_primary opacity-0 duration-500 hover:opacity-90 font-header'>
                  <p className='text-center py-5'>
                    Machine Learning Model for detecting sarcastic reviews by interactive sentimental analysis
                  </p>
                  <a href="#" className='text-center m-[40%]' style={{fontFamily:'sans-serif',fontSize:'15px',color:'red'}}>Explore</a>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        </AnimatedOnScroll>

      </section>
    </>
    
        
    
}