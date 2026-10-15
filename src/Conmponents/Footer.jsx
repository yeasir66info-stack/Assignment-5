import React from 'react'
import logoImage from '../assets/logo-text.png'

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100 pt-12 pb-6 px-6 md:px-16 text-gray-600 text-sm">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-12">

          <div className="md:col-span-2 space-y-4 pr-0 md:pr-6">

            <div className="flex items-center">
                <img src={logoImage} alt="Logo" className="h-8 w-auto" />
            </div>

            <p className="text-gray-500 max-w-sm leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            <div className="flex items-center space-x-4 pt-2 font-medium text-gray-700">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-pink-600 transition-colors cursor-pointer">
                GitHub
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-pink-600 transition-colors cursor-pointer">
                Twitter
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-pink-600 transition-colors cursor-pointer">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-gray-900 tracking-wider text-xs uppercase">
              PRODUCT
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-pink-600 transition-colors cursor-pointer">
                  Home
                </a>
              </li>
              <li>
                <a href="#technologies" className="hover:text-pink-600 transition-colors cursor-pointer">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-pink-600 transition-colors cursor-pointer">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-gray-900 tracking-wider text-xs uppercase">
              COMPANY
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-pink-600 transition-colors cursor-pointer">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-pink-600 transition-colors cursor-pointer">
                  Contact
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-pink-600 transition-colors cursor-pointer">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-gray-900 tracking-wider text-xs uppercase">
              LEGAL
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#privacy" className="hover:text-pink-600 transition-colors cursor-pointer">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-pink-600 transition-colors cursor-pointer">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 space-y-2 sm:space-y-0">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#privacy" className="hover:text-gray-600 transition-colors cursor-pointer">
              Privacy
            </a>
            <a href="#terms" className="hover:text-gray-600 transition-colors cursor-pointer">
              Terms
            </a>
          </div>
        </div>

      </div>
    </footer>

    );
    }

    export default Footer