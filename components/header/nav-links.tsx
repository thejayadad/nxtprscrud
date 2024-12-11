'use client'
// NavLinks.tsx
import React from 'react';
import LinkItem from './link-item';

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

const NavLinks: React.FC = () => {
  return (
    <nav className="flex space-x-2">
      {routes.map((route) => (
        <LinkItem key={route.href} href={route.href} label={route.label} />
      ))}
    </nav>
  );
};

export default NavLinks;
