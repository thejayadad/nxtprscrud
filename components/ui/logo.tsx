import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link
    className='text-xl md:text-2xl font-semibold text-gray-600 leading-5'
    href={'/'}>
        DriveDiary
    </Link>
  )
}

export default Logo