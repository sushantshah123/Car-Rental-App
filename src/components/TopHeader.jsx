import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import { FaPhone } from 'react-icons/fa'

const TopHeader = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  return (
    <>
    <div className="h-[30px] flex justify-between items-center bg-orange-500 text-white px-20 xs:px-4 text-[13px]">
        <div className="flex gap-4">
            <h4>Need Help?</h4>
            <h4 className='flex justify-center items-center gap-1'><span><FaPhone /></span>Call :9812923455</h4>
        </div>
        <div className='flex gap-4'>
          {
            isAuthenticated ? 
            <>
            <div className='cursor-pointer'>Welcome {user.name}</div>
            <div className='cursor-pointer'onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</div>
            </>
            :
            <div className='cursor-pointer' onClick={() => loginWithRedirect()}>Login</div>
          }
        </div>
    </div>
    </>
  )
}

export default TopHeader