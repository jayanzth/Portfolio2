import googleai from '../assets/genai.png';
import aws from '../assets/aws.png'
import udemy from '../assets/UC-664b2096-00a2-4d73-938f-e4b5f18901b0.jpg'
export default function Features()
{
    return (
        <>
            <h1 className='text-center text-4xl text-white bg-black'>Features & Certifications</h1>

        <section className="flex flex-col lg:flex-row sm:px-10 md:px-20 background_color_primary py-40" >

        <div className="w-full lg:w-1/2" >
                
                <div className="relative flex flex-col px-5 py-10">
                <iframe src="https://leetcard.jacoblin.cool/vickyfromtvl?theme=forest&font=Kufam"className=' sm-w-full lg:h-[400px] lg:w-[700px]'></iframe>
                <div className='absolute left-0 right-0 flex flex-col bottom-0 top-0 background_color_primary opacity-0 duration-500 hover:opacity-80 font-header borders'>
                    <p className='text-center text-white text-2xl'>
                        LeetCode Profile Stats
                  </p>
                  <br/>
                  <br/>

                  
                  <br/>
                  <br/>
<p className='text-center text-red-400 text-1xl'><a href="https://www.leetcode.com/vickyfromtvl" target='_blank'>Verify</a></p>
                    </div>
                </div>
                <div className='relative flex flex-col px-5 py-10'>
                <img src={aws} className='sm:h-full sm:w-full lg:h-[400px] lg:w-[700px] '/> 

                <div className='absolute left-0 right-0 flex flex-col bottom-0 top-0 background_color_primary opacity-0 duration-500 hover:opacity-80 font-header borders'>
                    <p className='text-center text-white text-2xl'>
                    AWS Certified Cloud Practitioner
                  </p>
                  <br/>
                  <br/>

                  <p className='text-center text-white text-1xl'>
                    Credential ID:e43c21270e7a4092bed48747c830e19b
                  </p>
                  <br/>
                  <br/>
<p className='text-center text-red-400 text-1xl'><a href="https://www.credly.com/badges/3350f567-1487-45b7-a97c-e3d67398a407" target='_blank'>Verify</a></p>
                    </div>
                </div> 
                
            </div>
            <div class="w-full lg:w-1/2">
            <div className='relative flex flex-col px-5 py-5 '>
                <img src={googleai} className='md:h-[400px] md:w-[700px] '/>
                <div className='absolute left-0 right-0 flex flex-col bottom-0 top-0 background_color_primary opacity-0 duration-500 hover:opacity-80 font-header borders'>
                    <p className='text-center text-white text-2xl'>
                        Introduction to Generative AI - Google Cloud
                  </p>
                  <br/>
                  <br/>

                  <p className='text-center text-white text-1xl'>
                    Credential ID:9G4MN277Z3MY
                  </p>
                  <br/>
                  <br/>
<p className='text-center text-red-400 text-1xl'><a href="https://www.coursera.org/account/accomplishments/verify/9G4MN277Z3MY" target='_blank'>Verify</a></p>
                    </div>
                  
                </div>



                <div className='relative flex flex-col px-5 py-5 my-10'>
                <img src={udemy} className='md:h-[400px] md:w-[700px] '/>
                <div className='absolute left-0 right-0 flex flex-col bottom-0 top-0 background_color_primary opacity-0 duration-500 hover:opacity-80 font-header borders'>
                    <p className='text-center text-white text-2xl'>
                    HTML CSS JavaScript for Beginners Modern Web Design Course

                  </p>
                  <br/>
                  <br/>

                  <p className='text-center text-white text-1xl'>
                    Credential ID:UC-664b2096-00a2-4d73-938f-e4b5f18901b0
                  </p>
                  <br/>
                  <br/>
<p className='text-center text-red-400 text-1xl'><a href="https://www.udemy.com/certificate/UC-664b2096-00a2-4d73-938f-e4b5f18901b0/" target='_blank'>Verify</a></p>
                    </div>
                  
                </div>
            </div>
            
                    
            
        
    </section>
    </>
    )
    
    
}