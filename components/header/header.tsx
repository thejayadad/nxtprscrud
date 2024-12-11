import React from 'react'
import Box from '../ui/box'
import Logo from '../ui/logo'
import { auth } from '@/auth'
import AuthModal from './auth-modal'
import SignOut from './sign-out'
import NavLinks from './nav-links'
import MobileMenu from './mobile-menu'

const Header = async () => {
    const session = await auth()
    const user = session?.user?.image
    
  return (
    <header className='fixed  w-full bg-white z-10 shadow-sm'>
        <div className=' py-4 border-b-[1px]'>
            <Box>
                <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
                    <Logo />
                    {
                        user ? (
                            <>
                                <div className='flex items-center space-x-2'>
                              
                                 <div className='hidden lg:block'>
                                    <NavLinks />
                                 </div>
                                 <div className='block lg:hidden'>
                                    <MobileMenu />
                                 </div>
                                 <SignOut />
                                </div>
                            </>
                        ) : (
                            <>
                                < div>
                                    <AuthModal />
                                </div>
                            </>
                        )
                    }
                </div>
            </Box>
        </div>
    </header>
  )
}

export default Header