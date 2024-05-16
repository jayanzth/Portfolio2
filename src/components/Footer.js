import React from 'react'
import logo_v from '../assets/logo_v.png'
function Footer() {
  return (
    <div>
      

<section class="flex flex-col lg:flex-row bg-profile dark:bg-black">
    <div class="w-full max-w-screen-xl p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="#" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={logo_v} class="h-20 w-20" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Vignesh</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-white">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">About</a>
                </li>
                
                
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-white lg:my-8" />
        <span class="block text-sm text-white sm:text-center dark:text-white">© 2024 <a href="https://flowbite.com/" class="hover:underline">Vignesh S</a></span>
    </div>
</section>


    </div>
  )
}

export default Footer
