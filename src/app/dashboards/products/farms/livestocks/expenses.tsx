import React from 'react'

const Expenses = () => {
  return (
    <div>
			<div className='px-2'>
				<div className='p-3 rounded flex flex-wrap justify-around ring-2 ring-gray-400 my-4  bg-white'>
						<div className='w-[100%] text-xl font-bold flex  justify-between items-end p-1  rounded'>
								Semence
								<div className='w-[56%] ring-2 h-[35px] rounded flex justify-end bg-gray-100
								items-center px-2 text-2xl text-gray-500 ring-gray-500 font-semibold '> 260.000 fcfa</div>
						</div>
						<div className='w-[100%] text-xl font-bold flex  justify-between items-center p-1'>
								Nourriture
								<div className='w-[56%] ring-2 h-[35px] bg-gray-100 rounded flex justify-end
								items-center px-2 text-2xl text-gray-500 ring-gray-500 font-semibold '> 500.000 fcfa</div>
						</div>
						<div className='w-[100%] text-xl font-bold flex  justify-between items-center p-1'>
								Frais medicaux
								<div className='w-[56%] ring-2 h-[35px] bg-gray-100 rounded flex justify-end
								items-center px-2 text-2xl text-gray-500 ring-gray-500 font-semibold '> 60.000 fcfa</div>
						</div>
						<div className='w-[100%] text-xl font-bold flex  justify-between items-center p-1'>
								Travail
								<div className='w-[56%] ring-2 h-[35px] bg-gray-100 rounded flex justify-end
								items-center px-2 text-2xl text-gray-500 ring-gray-500 font-semibold '> 90.000 fcfa</div>
						</div>
						<div className='w-[100%] text-xl font-bold flex  justify-between items-center p-1'>
								Maintenance
								<div className='w-[56%] ring-2 h-[35px] bg-gray-100 rounded flex justify-end
								items-center px-2 text-2xl text-gray-500 ring-gray-500 font-semibold '> 40.000 fcfa</div>
						</div> 
						<div className='w-[100%] text-xl font-bold flex  justify-between items-center p-1'>
								Revenu
								<div className='w-[56%] ring-2 h-[35px] bg-gray-100 rounded flex justify-end
								items-center px-2 text-2xl text-gray-500 ring-blue-700 font-semibold '> 685.000 fcfa</div>
						</div>
						<div className='w-[100%] text-2xl font-bold flex flex-col justify-center items-center mt-1'>
						--  Total prevision --
								<div className=' w-[100%] ring-2 h-[55px] bg-gray-100 rounded  flex justify-end mt-1
								items-center px-2 text-4xl text-gray-500 ring-gray-500 font-extrabold '> 950.000 fcfa</div>

						</div>
				</div>
			</div>
    </div>
  )
}

export default Expenses;
