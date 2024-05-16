import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import logo from '../assets/vlogo.png'
import { BiLogoVenmo } from "react-icons/bi";
export default function Header()
{
    const [show_nav,set_show_nav]=useState(false);
    const [show_nav_button,set_show_nav_button]=useState(true);
    return <header className="flex justify-between px-5 py-3 background_color_primary">
        
        <a className="font-bold text-white" href="#"><BiLogoVenmo size={40}/></a> 
        <nav className="hidden md:block">
        <ul className="flex text-white font-header">
        <li><a href="#" className="hover:text-red-400">
                    Home</a></li>
                <li><a href="#" className="hover:text-red-400">
                    Feature</a></li>
                <li><a href="#" className="hover:text-red-400">
                    Projects</a></li>
                <li><a href="#" className="hover:text-red-400">
                    Resume</a></li>
    </ul>
        </nav>
        {show_nav && !show_nav_button && <><nav className="block md:hidden ">
            <ul className="flex flex-col text-white mobile_responseive_navbar font-header">
            <li><a href="#" className="hover:text-red-400">
                    Home</a></li>
                <li><a href="#" className="hover:text-red-400">
                    Feature</a></li>
                <li><a href="#" className="hover:text-red-400">
                    Projects</a></li>
                <li><a href="#" className="hover:text-red-400">
                    Resume</a></li>
            </ul>
        </nav>
        <button onClick={() =>{set_show_nav_button(!show_nav_button);
        set_show_nav(false)}}
            className='block md:hidden'>
                <XMarkIcon className='text-white h-5' />
            </button></>
        
}
{show_nav_button && 


        <button onClick={()=>{set_show_nav(!show_nav);
        set_show_nav_button(!show_nav_button)}}
        className='block md:hidden'>
        <Bars3Icon className='text-white h-5'/>
        </button>
}
</header>

}