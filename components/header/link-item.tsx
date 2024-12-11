'use client'
// LinkItem.tsx
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LinkItemProps {
  href: string;
  label: string;
}

const LinkItem: React.FC<LinkItemProps> = ({ href, label }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href}
      
        className={`${
          isActive ? 'text-blue-500 font-bold z-50' : 'text-gray-900 z-50'
        }`}
      >
        {label}
    
    </Link>
  );
};

export default LinkItem;
