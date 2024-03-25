import myImage from '../assets/myprofile.png'
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
export default function Profile()
{
    return <>
    <section className="flex flex-col lg:flex-row px-5 bg-profile " >
    <img className='w-full lg:w-1/3 align-middle' src={myImage}/>
        <div className="px-10 lg:w-1/3 flex flex-col" >
        <h1 className=' py-20 text-4xl '>I'm Vignesh S
            <br/>
            <p>-A full Stack Developer</p>
        </h1>
        <div className='flex py-3'>
            <a href="#" className='px-2 hover:text-blue-600'><FaLinkedin size={40}/></a>
            <a href="#" className='px-2 hover:text-red-500' ><SiGmail size={40}/></a>
            <a href="#" className='px-2 hover:text-blue-300'><FaGithub size={40}/></a>


        </div>
        </div>
        
        
    </section>
    </>
    
        
    
}