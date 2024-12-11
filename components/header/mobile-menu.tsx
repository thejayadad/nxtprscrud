'use client';
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import LinkItem from './link-item';
import Logo from '../ui/logo';

const routes = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/post',
    label: 'NewPost',
  },
];

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        className="p-2 text-2xl text-gray-800 hover:text-gray-500 focus:outline-none z-50"
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Sliding Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 max-w-sm bg-white text-white shadow-lg transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-40`}
      >
        {/* Logo Section */}
        <div className="p-4 border-b-[1px] flex items-center justify-between">
          <Logo />
          <button onClick={toggleMenu} className="text-xl text-gray-400 hover:text-gray-200">
            <FiX />
          </button>
        </div>

        {/* Navigation Links */}
        <nav
 
>

  {/* Content */}
  <div className="p-4 space-y-6 text-white z-10 flex flex-col justify-between flex-grow">
    {/* Links */}
    {routes.map((route) => (
      <LinkItem key={route.href} href={route.href} label={route.label} />
    ))}
  </div>
</nav>


        {/* Footer Section */}
        <div className="absolute bottom-0 w-full p-4 bg-gray-700 text-center">
          <p className="text-sm text-gray-300">&copy; 2024 MyWebsite. All rights reserved.</p>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
        ></div>
      )}
    </div>
  );
};

export default MobileMenu;
