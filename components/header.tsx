'use client';
import Link from "next/link"
import { Phone, Mail, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-green-600 text-white sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-green-700 py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-end items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+254 723 839 568</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>james@jimafrica.com</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/jim-africa-logo.png" alt="Jim Africa" className="h-10" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link href="/" className="hover:text-green-200 transition-colors">
              HOME
            </Link>
            <div className="relative group">
              <Link href="/about" className="hover:text-green-200 transition-colors flex items-center gap-1">
                ABOUT US
              </Link>
            </div>
            {/* <div className="relative group">
              <button className="hover:text-green-200 transition-colors flex items-center gap-1">
                SERVICES
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div> */}
           
            <Link href="/testimonials" className="hover:text-green-200 transition-colors">
              TESTIMONIALS
            </Link>
            <Link href="/blogs" className="hover:text-green-200 transition-colors">
              BLOGS
            </Link>

            <Link href="/contact" className="hover:text-green-200 transition-colors">
               CONTACT US
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-green-700 rounded-lg p-4">
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="py-2 px-4 hover:bg-green-600 rounded transition-colors">
                HOME
              </Link>
              <div className="py-2 px-4 hover:bg-green-600 rounded transition-colors">
                <button className="w-full text-left flex justify-between items-center">
                  ABOUT US
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <div className="py-2 px-4 hover:bg-green-600 rounded transition-colors">
                <button className="w-full text-left flex justify-between items-center">
                  SERVICES
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <Link href="/tanzania-events" className="py-2 px-4 hover:bg-green-600 rounded transition-colors">
                TANZANIA EVENTS
              </Link>
              <Link href="/rwanda-events" className="py-2 px-4 hover:bg-green-600 rounded transition-colors">
                RWANDA EVENTS
              </Link>
              <Link href="/testimonials" className="py-2 px-4 hover:bg-green-600 rounded transition-colors">
                TESTIMONIALS
              </Link>
              <Link href="/blogs" className="py-2 px-4 hover:bg-green-600 rounded transition-colors">
                BLOGS
              </Link>
              <div className="py-2 px-4 hover:bg-green-600 rounded transition-colors">
                <button className="w-full text-left flex justify-between items-center">
                  CONTACT US
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}