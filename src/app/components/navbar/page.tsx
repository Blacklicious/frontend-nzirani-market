'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import ScreenLarge from './ScreenLarge';
import ScreenSmall from './ScreenSmall';
import AuthenticationPage from '../authentication/page';
import Link from 'next/link';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem('authTokens'); // Adjust according to your token storage key
    setIsAuthenticated(token ? true : false);
  }, []);

  return (
    <nav className='bg-white w-[100%] h-min text-white flex flex-col items-center p-1 rounded-b-xl'
      style={{ position: 'fixed', top: 0, width: '100%', backgroundColor: 'white', textAlign: 'center', zIndex: 1, }}
    >  
      <div className='flex flex-warp w-full h-[50px] items-center'>
        <div className='h-[100%] w-[30%] md:w-[25%] flex items-center pl-1 md:pl-8'>
          <Link href="/">
            <h1 className='text-black text-[40px] font-extrabold'>Nzirani</h1>
            {/* <Image className=' p-2' src="/nzirani_logo.png" alt="Nzi Market Logo" width={90} height={90} /> */}  
          </Link>
        </div>
        <div className=' h-[90%] w-[70%] md:w-[75%] '>
          <div className='flex items-center justify-end h-[100%]'>

            {/*     Large screen menu      */}
            <div className='  h-[100%] hidden lg:flex flex-wrap w-[75%] md:w-[100%] text-2xl text-black items-center justify-center text-center'> 
              <div className="flex flex-row space-y-4 text-xl w-[100%] h-[100%]">
                <div className='flex flex-row w-[100%] h-[100%] space-x-1'>
                  <Link href="/stores" className='bg-blue-400 rounded-sm hover:bg-yellow-500 w-[100%] h-[100%] flex items-center justify-center'> Boutiques </Link>
                  <Link href="/facturation" className='bg-blue-400 rounded-sm hover:bg-yellow-500 w-[100%] h-[100%] flex items-center justify-center'> Qui sommes nous? </Link>
                  <button className='bg-blue-400 rounded-sm hover:bg-yellow-500 w-[100%] h-[100%] flex items-center justify-center'> F.A.Q </button>
                  <button className='bg-blue-400 rounded-sm hover:bg-yellow-500 w-[100%] h-[100%] flex items-center justify-center'>Cart</button>
                  <button className='bg-blue-400 rounded-sm hover:bg-yellow-500 w-[100%] h-[100%] flex items-center justify-center' onClick={() => setIsAuthOpen(!isAuthOpen)}> Authentication </button>
                </div>
                <div className='hidden flex-row w-[100%] space-x-4 '>
                  <button className='bg-blue-400 rounded-sm w-[175px] h-[100%] flex items-center justify-center'> dashboard </button>
                  <button className='bg-blue-400 rounded-sm w-[175px] h-[100%] flex items-center justify-center'> Info </button>
                  <button className='bg-blue-400 rounded-sm w-[175px] h-[100%] flex items-center justify-center'> Paramètres </button>
                  <button className='bg-blue-400 rounded-sm w-[175px] h-[100%] flex items-center justify-center'> Déconnexion </button>
                </div>
              </div>
            </div>

            {/*     Small screen menu      */}
            <div className='h-[60px] w-[48%] md:w-[0%] md:collapse flex items-center justify-around  px-1 my-1'>
              {isAuthenticated ? (
                <div className='h-[50px] w-[50px] md:hidden flex items-center justify-center bg-green-600/80 shadow-lg rounded-full'>
                  <div>
                    <Image className=' p-[2px] items-center rounded-full ' src="/nzirani_logo.png" alt="Nzi Market Logo" width={100} height={100} onClick={() => setIsAuthOpen(!isAuthOpen)} /> 
                  </div>
                </div>
              ) : (
                <div className='h-[50px] w-[50px] md:hidden flex items-center justify-center bg-black/80 shadow-lg rounded-full'>
                  <div>
                    <Image className=' p-[2px] items-center rounded-full ' src="/img/user.svg" alt="Nzi Market Logo" width={100} height={100} onClick={() => setIsAuthOpen(!isAuthOpen)} /> 
                  </div>
                </div>
              )}
              <button className=' flex items-center justify-center   bg-black/80 h-[46px] w-[40px] rounded shadow-lg' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg
                  className='w-[30px] h-[70%] ' fill='none' stroke='currentColor'  viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' >
                  {isMenuOpen ? (
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12'/>
                  ) : (
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16'/>
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='h-min w-[100%]  text-white flex items-center justify-center '>
        {isAuthOpen ? ( < AuthenticationPage /> ) : (<div></div>)}
      </div>
      <div id='auth-box' className='h-[auto] w-[100%]  text-black '>
      {isMenuOpen ? ( < ScreenSmall /> ) : (<div></div>)}
      </div>
    </nav>
  )
}

export default Navbar;
