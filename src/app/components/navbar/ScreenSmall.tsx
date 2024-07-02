import Link from 'next/link';
import React, { FormEvent, useState } from 'react';

const MenuSmallScreen: React.FC = () => {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [isAuthenticating, setisAuthenticating] = useState(true);
  
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    throw new Error('Function not implemented.');
  }

  function setEmail(value: string): void {
    throw new Error('Function not implemented.');
  }

  function setPassword(value: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div className="small-screen-menu">
      <div className='w-[100%] p-2 bg-gray-100 rounded-lg mt-2'>
        <Link href="/stores"> <button className='bg-white hover:border-black hover:border-[2px] w-[100%] h-[45px] my-1 rounded-lg'> Boutiques </button></Link>
				<button className='bg-white hover:border-black hover:border-[2px] w-full h-[45px] my-1 rounded-lg'>Qui sommes nous ?</button>
				<button className='bg-white hover:border-black hover:border-[2px] w-full h-[45px] my-1 rounded-lg'>F.A.Q</button>
				<button className='bg-white hover:border-black hover:border-[2px] w-full h-[45px] my-1 rounded-lg'>Cart</button>
			</div>
    </div>
  );
};

export default MenuSmallScreen;
