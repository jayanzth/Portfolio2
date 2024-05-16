import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import logo_v from '../assets/logo_v.png'
import {Link} from 'react-router-dom'
import {

  Bars3Icon,
  
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'





function New_Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-black">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img className="h-25 w-20 " src={logo_v} alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
        <Link to ="/" className="text-md font-Jura font-semibold leading-6 text-white">
            Home
          </Link>

          <Link to ="/features" className="text-md font-Jura font-semibold leading-6 text-white">Feature</Link>

          <Link to ="/projects" className="text-md font-Jura font-semibold leading-6 text-white">Projects</Link>

          <a href="#" className="text-md font-Jura font-semibold leading-6 text-white">
            Resume
          </a>
          <Link to ="/skills" className="text-md font-Jura font-semibold leading-6 text-white">Skills</Link>
        </Popover.Group>
        
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
            <img className="h-25 w-20 " src={logo_v} alt="" />

            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
              <Link to ="/" className="-mx-3 font-Jura block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50">Home</Link>

                <Link to ="/skills" className="-mx-3 font-Jura block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50">Skills</Link>

                <Link to ="/projects" className="-mx-3 font-Jura block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50">Projects</Link>
                <Link to ="/features" className="-mx-3 font-Jura block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50">Features</Link>

                
                <Link to ="/features" className="-mx-3 font-Jura block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50">Features</Link>

              </div>
              
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

export default New_Header
