import React from 'react';
import logo from '../assets/logo-text.png'; 
const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm px-6 md:px-16 py-4 flex items-center justify-between">
      <div className="flex items-center">
        <img src={logo} alt="Logo"  className="h-10 w-auto object-contain"/>
        </div>

        <ul className="flex items-center justify-center flex-1 space-x-6 lg:space-x-8 text-gray-700 font-medium">
            <li>
                <a href="#home" className="text-pink-600  hover:text-pink-600 transition-colors">Home</a>
            </li>
            <li>
                <a href="#technologies" className="hover:text-pink-600 transition-colors">Technologies</a>
            </li>
            <li>
                <a href="#projects" className="hover:text-pink-600 transition-colors">Projects</a>
            </li>
            <li>
                <a href="#about" className="hover:text-pink-600 transition-colors">About</a>
            </li>
            <li>
                <a href="#contact" className="hover:text-pink-600 transition-colors">Contact</a>
            </li>
        </ul>

        <div className="flex items-center space-x-6">
        <a href="#signin" className="text-gray-700 font-medium hover:text-pink-600 transition-colors">
          Sign In
        </a>
        <a
          href="#signup"
          className="bg-pink-600 text-white font-medium px-6 py-2 rounded-full shadow-md hover:bg-pink-700 transition-all"
        >
          Sign Up
        </a>
      </div>
      
    </nav>
  );
};

export default Navbar;