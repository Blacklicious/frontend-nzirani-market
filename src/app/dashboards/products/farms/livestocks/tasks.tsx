import React from 'react'



const tasks = () => {
	return (
		<div className='px-2'>
			<div className='my-2 bg-white rounded-md'>
				<ul className='text-xs font-bold p-2'>
					<li className='w-[100%] h-[100%] border-[2px] border-gray-500 my-3 rounded flex items-center'>
						<input type="checkbox" className='w-[32px] h-[32px] mr-2  font-bold' />
						<div className='w-[80%]'>
							Feed the chickens twice a day
						</div>
					</li>
					<li className='w-[100%] h-[100%] border-[2px] border-gray-500 my-3 rounded flex items-center'>
						<input type="checkbox" className='w-[32px] h-[32px] mr-2  font-bold' />
						<div className='w-[80%]'>
							Clean the chicken coop daily
						</div>
					</li>
					<li className='w-[100%] h-[100%] border-[2px] border-gray-500 my-3 rounded flex items-center'>
						<input type="checkbox" className='w-[32px] h-[32px] mr-2  font-bold' />
						<div className='w-[80%]'>
							Monitor the temperature and adjust as needed
						</div>
					</li>
					<li className='w-[100%] h-[100%] border-[2px] border-gray-500 my-3 rounded flex items-center'>
						<input type="checkbox" className='w-[32px] h-[32px] mr-2  font-bold' />
						<div className='w-[80%]'>
							Provide fresh water for the chickens
						</div>
					</li>
					<li className='w-[100%] h-[100%] border-[2px] border-gray-500 my-3 rounded flex items-center'>
						<input type="checkbox" className='w-[32px] h-[32px] mr-2  font-bold' />
						<div className='w-[80%]'>
							Administer any necessary medications or supplements
						</div>
					</li>
				</ul>
			</div>   
		</div>
	)
}

export default tasks;
