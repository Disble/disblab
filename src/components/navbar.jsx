/* This example requires Tailwind CSS v2.0+ */
import React from "react";
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const Navbar = ({ className, navigation, ...props }) => {
  return (
    <Disclosure as="nav" className={`bg-white ${className}`}>
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 shadow-sm">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Abrir menú principal</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="flex-shrink-0 flex items-center">
                  <span className="text-gray-700 font-bold text-lg">Disblelab.</span>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="shadow-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.title}
                  as="a"
                  href={item.link}
                  className={classNames(
                    item.current ? 'bg-gray-200 text-black' : 'text-gray-700 hover:bg-gray-300 hover:text-black',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.title}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}