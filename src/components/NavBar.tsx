// components/Navbar.js
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  IconChevronDown,
  IconMenu2,
  IconX,
} from '@tabler/icons-react'

export default function Navbar() {
  const [isTransparent, setIsTransparent] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsTransparent(window.scrollY <= 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', name: 'Home' },
    { id: 'pages', name: 'Pages' },
    { id: 'services', name: 'Services', subItems: ['Service 1', 'Service 2', 'Service 3', 'Service 4', 'Service 5', 'Service 6', 'Service 7', 'Service 8'] },
    { id: 'blog', name: 'Blog' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isTransparent ? 'bg-transparent bg-[url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAJElEQVQYV2NkwAJERkQMrN4oG4g8gQAMzAwMAAgAEDAAIABQJ6B4N5gAAAABJRU5ErkJggg==")] bg-repeat' : 'bg-white shadow-lg'}`}>
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28 py-2 sm:py-3 md:py-3 lg:py-4 flex justify-between items-center">
        <div className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-gray-800">TransMax</div>
        
        <div className="hidden md:flex items-center space-x-4 sm:space-x-6 md:space-x-8">
          {navItems.map((item) => (
            <div key={item.id} className="relative group">
              {item.id === 'services' ? (
                <button className="flex items-center text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 hover:text-gray-900">
                  <span className="mr-1"></span> {item.name} <IconChevronDown className="ml-1 h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              ) : (
                <Link href={`#${item.id}`} className="flex items-center text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 hover:text-gray-900">
                  <span className="mr-1"></span> {item.name}
                </Link>
              )}
              {item.subItems && (
                <div className="absolute hidden group-hover:block bg-white shadow-xl mt-0 py-1 sm:py-2 rounded-lg w-32 sm:w-40 md:w-48">
                  <div className="grid grid-cols-2 gap-1 p-1 sm:p-2">
                    {item.subItems.map((subItem, index) => (
                      <Link key={index} href={`#${item.id}-${index}`} className="block px-2 py-1 text-xs sm:text-sm text-gray-600 hover:bg-gray-100 rounded">
                        {subItem}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden md:flex space-x-2 sm:space-x-3 md:space-x-4">
          <button className="bg-yellow-500 text-white px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-md text-sm sm:text-base md:text-lg hover:bg-yellow-600 transition">
            Get a Quote
          </button>
          <button className="border border-gray-300 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-md text-sm sm:text-base md:text-lg text-gray-700 hover:bg-gray-100 transition">
            Sign In
          </button>
        </div>

        <div className="md:hidden flex items-center space-x-2 sm:space-x-3">
          <button className="border border-gray-300 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md text-sm sm:text-base text-gray-700 hover:bg-gray-100 transition">
            Sign In
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-xl sm:text-2xl text-gray-700 hover:text-gray-900 transition"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <IconX className="h-5 w-5 sm:h-6 sm:w-6" /> : <IconMenu2 className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white bg-opacity-95 transform slide-in">
          <div className="flex flex-col h-full p-4 sm:p-6">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <div className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-gray-800">Logo</div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl sm:text-3xl text-gray-700 hover:text-gray-900 transition"
                aria-label="Close menu"
              >
                <IconX className="h-6 w-6 sm:h-7 sm:w-7" />
              </button>
            </div>
            <nav className="flex flex-col space-y-3 sm:space-y-4">
              {navItems.map((item) => (
                <div key={item.id} className="border-b border-gray-200">
                  <button
                    onClick={() => {
                      setOpenDropdown(openDropdown === item.id ? null : item.id)
                      setIsMobileMenuOpen(true)
                    }}
                    className="w-full text-left py-2 sm:py-3 flex items-center text-sm sm:text-base text-gray-700 hover:text-gray-900"
                  >
                    <span className="mr-2 sm:mr-3"></span> {item.name}
                    {item.subItems && <IconChevronDown className="ml-auto h-4 w-4 sm:h-5 sm:w-5" />}
                  </button>
                  {item.subItems && openDropdown === item.id && (
                    <div className="pl-4 sm:pl-6 space-y-1 sm:space-y-2 mt-1 sm:mt-2">
                      {item.subItems.map((subItem, index) => (
                        <Link key={index} href={`#${item.id}-${index}`} className="block py-1 sm:py-2 text-xs sm:text-sm text-gray-600 hover:bg-gray-100 pl-4 rounded">
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="mt-2 sm:mt-4 pt-4 sm:pt-6">
              <button className="bg-yellow-500 text-white w-full px-3 sm:px-4 py-1 sm:py-2 rounded-md text-sm sm:text-base hover:bg-yellow-600 transition">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}