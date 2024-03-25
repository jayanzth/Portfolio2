import mern from '../assets/mern.png';
import online from '../assets/online.jpg';
import tensor from '../assets/tensor.png';
import csharp from '../assets/csharp.png'
export default function Projects() {
  return (
    <>
      <section className="flex flex-col sm:px-10 md:px-20 about_me">
        <div className="border_styles">
          <div className="px-5 py-5">
            <h1 className='text-center'>Projects</h1>
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
                <img src={mern} className='h-[200px]' />
                <div className='absolute left-0 right-0 bottom-0 top-[20px] background_color_primary opacity-0 duration-500 hover:opacity-50 font-header'>
                  <p className='text-center py-5'>
                    An Event Management Website build with MERN Stack
                  </p>
                  <a href="#" className='text-center m-[40%]' style={{fontFamily:'sans-serif',fontSize:'15px',color:'red'}}>Explore</a>
                </div>
              </div>
              <div className='relative flex flex-col items-center'>
                <img src={online} className='h-[200px] px-5 py-5' />
                <div className='absolute left-0 right-0 bottom-0 top-[20px] background_color_primary opacity-0 duration-500 hover:opacity-50 font-header'>
                  <p className='text-center py-5'>
                    An Online Meeting System using WebSocket API,node.js, express
                  </p>
                  <a href="#" className='text-center m-[40%]' style={{fontFamily:'sans-serif',fontSize:'15px',color:'red'}}>Explore</a>
                </div>
              </div>
              <div className='relative flex flex-col items-center'>
                <img src={tensor} className='h-[200px] px-5 py-5' />
                <div className='absolute left-0 right-0 bottom-0 top-[20px] background_color_primary opacity-0 duration-500 hover:opacity-50 font-header'>
                  <p className='text-center py-5'>
                    Machine Learning Model for detecting sarcastic reviews by interactive sentimental analysis
                  </p>
                  <a href="#" className='text-center m-[40%]' style={{fontFamily:'sans-serif',fontSize:'15px',color:'red'}}>Explore</a>
                </div>
              </div>
              <div className='relative flex flex-col items-center'>
                <img src={csharp} className='h-[200px] px-5 py-5' />
                <div className='absolute left-0 right-0 bottom-0 top-[20px] background_color_primary opacity-0 duration-500 hover:opacity-50 font-header'>
                  <p className='text-center py-5'>
                    System resource monitor by C#
                  </p>
                  <a href="#" className='text-center m-[40%]' style={{fontFamily:'sans-serif',fontSize:'15px',color:'red'}}>Explore</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}
