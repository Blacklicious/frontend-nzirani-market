'use client';
import { FileProtectOutlined, ProfileOutlined, UserOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
import StaffBoard from './staffs/page';

const page = () => {
	const [userMenu, setUserMenu] = useState(false)
	const [staffMenu, setStaffMenu] = useState(true)
	const [helperMenu, setHelperMenu] = useState(false)
	
	return (
		< >
			<div className='p-3 bg-red-200 my-2 rounded  mt-[80px]'>
				user [photo + fisrt name + last name + email]
			</div>
			<div className='flex h-[100%] w-[100%]'>
				<div className='w-[60px] h-[100%] bg-black/30 flex flex-col space-y-3 py-3 px-[5px]'>
					<button className='bg-white rounded h-[40px] text-2xl items-center hover:bg-white/70 shadow-sm'
						onClick={ () =>{ setUserMenu(true) ; setStaffMenu(false) ; setHelperMenu(false) }}> <UserOutlined /> </button>
					<button className='bg-white rounded h-[40px] text-2xl items-center hover:bg-white/70 shadow-sm'
						onClick={ () =>{ setUserMenu(false) ; setStaffMenu(false) ; setHelperMenu(true) }}> <FileProtectOutlined /> </button>
					<button className='bg-white rounded h-[40px] text-2xl items-center hover:bg-white/70 shadow-sm'
						onClick={ () =>{ setUserMenu(false) ; setStaffMenu(true) ; setHelperMenu(false) }}> <ProfileOutlined /> </button>
				</div>
				<div className=' bg-gray-300 w-[100%]'>
				{userMenu ? (
					<div id='user' className='ring-2 p-3 '>
						<div className='p-3 bg-red-200 my-2 rounded'>
							user [phone + address + city + state + zip]
						</div>
						<div className='p-3 bg-red-200 my-2 rounded'>
							user [ badge + wallets + status]
						</div>
						<div className='p-3 bg-red-200 my-2 rounded'>
							user [ bussinesses + stores + farms]
						</div>
					</div>
				) : null}
				{helperMenu ? (
					<div id='user' className='ring-2 p-3 '>
						<div className='p-3 bg-red-200 my-2 rounded'>
							helper [phone + address + city + state + zip]
						</div>
						<div className='p-3 bg-red-200 my-2 rounded'>
							helper [ badge + wallets + status]
						</div>
						<div className='p-3 bg-red-200 my-2 rounded'>
							helper [ bussinesses + stores + farms]
						</div>
					</div>
				) : null}
				{staffMenu ? (	
					<div id='staff'>
						<div className='text-center font-extrabold text-2xl'> Zone employé Nzirani </div>
						<div>
							<div className='p-2 bg-gray-200 rounded'>
								< StaffBoard />
							</div>
						</div>
					</div>
				) : null}
				</div>
				
			</div>
			
		</>
	)
}

export default page