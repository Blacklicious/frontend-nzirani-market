import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
    <div className=''>
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          width: '100%',
          backgroundColor: 'white',
          textAlign: 'center',
          zIndex: 1, 
        }}
      >
        <div className='h-[100] flex justify-around shadow-md'>
          <button className='w-[19%] h-[45px] bg-white hover:bg-blue-400 rounded my-1 flex justify-center items-center'>
            <img src='/img/icons/marketingactivities.svg' alt='Market'  style={{ width: '40px', height: '40px' }} />
          </button>
          < Link className='w-[19%] h-[45px] bg-white hover:bg-blue-400 rounded my-1 flex justify-center items-center' href='/dashboards/products/farms/'>
            <img src='/img/icons/tractor.svg' alt='Products'  style={{ width: '40px', height: '40px' }} />
          </Link>
          <button className='w-[19%] h-[45px] bg-white hover:bg-blue-400 rounded my-1 flex justify-center items-center'>
            <img src='/img/icons/store.svg' alt='Stores' style={{ width: '40px', height: '40px' }} />
          </button>
          <Link href='/dashboards/accounts' className='w-[19%] h-[45px] bg-white hover:bg-blue-400 rounded my-1 flex justify-center items-center'>
            <img src='/img/icons/user-profile.svg' alt='Accounts'  style={{ width: '40px', height: '40px' }}/>
          </Link>
          <button className='w-[19%] h-[45px] bg-white hover:bg-blue-400 rounded my-1 flex justify-center items-center'>
            <img src='/img/icons/cogs.svg' alt='Settings' style={{ width: '40px', height: '40px' }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
